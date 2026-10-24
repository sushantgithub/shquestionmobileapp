import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CardProgress, CardState, QuizSession, SessionResult, Question } from '../types';
import { QUESTIONS } from '../data/questions';

const PROGRESS_KEY = '@adaptive_quiz_progress';
const SESSIONS_KEY = '@adaptive_quiz_sessions';
const MISSED_KEY = '@adaptive_quiz_missed_questions';

export type QuizFilter = 'adaptive' | 'new' | 'missed';

interface StoreState {
  progress: Record<string, CardProgress>;
  sessions: QuizSession[];
  currentSession: QuizSession | null;
  missedQuestionIds: string[];

  // Actions
  loadProgress: () => Promise<void>;
  updateProgress: (questionId: string, isCorrect: boolean, timeSpent: number) => void;
  startSession: (questionCount: number, filter: QuizFilter) => Question[];
  recordAnswer: (questionId: string, selectedAnswer: string, isCorrect: boolean, timeSpent: number) => void;
  completeSession: () => void;
  resetProgress: () => Promise<void>;
  getStats: () => Stats;
}

export interface Stats {
  totalQuestions: number;
  newCount: number;
  learningCount: number;
  reviewCount: number;
  masteredCount: number;
  missedCount: number;
  totalAttempts: number;
  totalCorrect: number;
  overallAccuracy: number;
  sessionsCompleted: number;
  dueForReview: number;
}

function createInitialProgress(questionId: string): CardProgress {
  return {
    questionId,
    state: 'new',
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0,
    nextReviewDate: Date.now(),
    totalCorrect: 0,
    totalAttempts: 0,
    lastAnswered: 0,
  };
}

function computeNextInterval(progress: CardProgress, isCorrect: boolean): CardProgress {
  const now = Date.now();
  const DAY = 86400000;

  if (!isCorrect) {
    return {
      ...progress,
      state: 'learning',
      interval: 0,
      repetitions: 0,
      nextReviewDate: now + 600000,
      totalAttempts: progress.totalAttempts + 1,
      lastAnswered: now,
    };
  }

  let { repetitions, interval, easeFactor } = progress;
  const quality = 4;

  repetitions += 1;

  if (repetitions === 1) {
    interval = 1;
  } else if (repetitions === 2) {
    interval = 3;
  } else {
    interval = Math.round(interval * easeFactor);
  }

  easeFactor = Math.max(1.3, easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));

  let state: CardState = 'learning';
  if (repetitions >= 2 && interval >= 7) state = 'review';
  if (repetitions >= 4 && interval >= 21) state = 'mastered';

  return {
    ...progress,
    state,
    interval,
    easeFactor,
    repetitions,
    nextReviewDate: now + interval * DAY,
    totalCorrect: progress.totalCorrect + 1,
    totalAttempts: progress.totalAttempts + 1,
    lastAnswered: now,
  };
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function selectNewQuestions(
  allQuestions: Question[],
  progress: Record<string, CardProgress>,
  count: number
): Question[] {
  const newOnes = allQuestions.filter(q => !progress[q.id] || progress[q.id].state === 'new');
  return shuffle(newOnes).slice(0, Math.min(count, newOnes.length));
}

function selectMissedQuestions(
  allQuestions: Question[],
  missedQuestionIds: string[],
  count: number
): Question[] {
  const missedSet = new Set(missedQuestionIds);
  const missed = allQuestions.filter(q => missedSet.has(q.id));
  return shuffle(missed).slice(0, Math.min(count, missed.length));
}

function selectAdaptiveQuestions(
  allQuestions: Question[],
  progress: Record<string, CardProgress>,
  count: number
): Question[] {
  const now = Date.now();
  const overdue: Question[] = [];
  const learning: Question[] = [];
  const newOnes: Question[] = [];
  const upcoming: Question[] = [];

  for (const q of allQuestions) {
    const p = progress[q.id];
    if (!p || p.state === 'new') {
      newOnes.push(q);
    } else if (p.state === 'learning') {
      if (p.nextReviewDate <= now) overdue.push(q);
      else learning.push(q);
    } else if (p.state === 'review' || p.state === 'mastered') {
      if (p.nextReviewDate <= now) overdue.push(q);
      else upcoming.push(q);
    }
  }

  const pool = [
    ...shuffle(overdue),
    ...shuffle(learning),
    ...shuffle(newOnes),
    ...shuffle(upcoming),
  ];

  return pool.slice(0, Math.min(count, pool.length));
}

function migrateMissedQuestions(
  progress: Record<string, CardProgress>,
  sessions: QuizSession[]
): string[] {
  const latestKnownResult = new Map<string, boolean>();

  // Sessions are stored newest first. Capture the newest known result per question.
  for (const session of sessions) {
    const results = Array.isArray(session.results) ? [...session.results].reverse() : [];
    for (const result of results) {
      if (!latestKnownResult.has(result.questionId)) {
        latestKnownResult.set(result.questionId, result.isCorrect);
      }
    }
  }

  const migrated: string[] = [];

  for (const question of QUESTIONS) {
    const latest = latestKnownResult.get(question.id);

    if (latest === false) {
      migrated.push(question.id);
      continue;
    }
    if (latest === true) {
      continue;
    }

    // Fallback for older attempts that may no longer exist in the retained session history.
    const p = progress[question.id];
    if (p && p.totalAttempts > p.totalCorrect) {
      migrated.push(question.id);
    }
  }

  return migrated;
}

export const useStore = create<StoreState>((set, get) => ({
  progress: {},
  sessions: [],
  currentSession: null,
  missedQuestionIds: [],

  loadProgress: async () => {
    try {
      const [progressRaw, sessionsRaw, missedRaw] = await Promise.all([
        AsyncStorage.getItem(PROGRESS_KEY),
        AsyncStorage.getItem(SESSIONS_KEY),
        AsyncStorage.getItem(MISSED_KEY),
      ]);

      const progress = progressRaw ? JSON.parse(progressRaw) : {};
      const sessions = sessionsRaw ? JSON.parse(sessionsRaw) : [];

      let missedQuestionIds: string[];
      if (missedRaw) {
        const parsed = JSON.parse(missedRaw);
        const validQuestionIds = new Set(QUESTIONS.map(q => q.id));
        missedQuestionIds = Array.isArray(parsed)
          ? parsed.filter((id): id is string => typeof id === 'string' && validQuestionIds.has(id))
          : [];
      } else {
        missedQuestionIds = migrateMissedQuestions(progress, sessions);
        await AsyncStorage.setItem(MISSED_KEY, JSON.stringify(missedQuestionIds));
      }

      set({ progress, sessions, missedQuestionIds });
    } catch (e) {
      console.error('Failed to load progress', e);
    }
  },

  updateProgress: (questionId, isCorrect, _timeSpent) => {
    const { progress } = get();
    const current = progress[questionId] ?? createInitialProgress(questionId);
    const updated = computeNextInterval(current, isCorrect);
    const newProgress = { ...progress, [questionId]: updated };
    set({ progress: newProgress });
    AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify(newProgress)).catch(console.error);
  },

  startSession: (questionCount, filter = 'adaptive') => {
    const { progress, missedQuestionIds } = get();
    const selected =
      filter === 'new' ? selectNewQuestions(QUESTIONS, progress, questionCount) :
      filter === 'missed' ? selectMissedQuestions(QUESTIONS, missedQuestionIds, questionCount) :
      selectAdaptiveQuestions(QUESTIONS, progress, questionCount);

    const session: QuizSession = {
      id: Date.now().toString(),
      startedAt: Date.now(),
      questionCount: selected.length,
      results: [],
      completed: false,
      score: 0,
      filter,
    };
    set({ currentSession: session });
    return selected;
  },

  recordAnswer: (questionId, selectedAnswer, isCorrect, timeSpent) => {
    const { currentSession, updateProgress, missedQuestionIds } = get();
    if (!currentSession) return;

    updateProgress(questionId, isCorrect, timeSpent);

    const missedSet = new Set(missedQuestionIds);
    if (!isCorrect) {
      missedSet.add(questionId);
    } else if (currentSession.filter === 'missed') {
      // A missed item is cleared only after the learner gets it right
      // while intentionally reviewing the Missed queue.
      missedSet.delete(questionId);
    }
    const updatedMissedQuestionIds = Array.from(missedSet);

    const result: SessionResult = { questionId, selectedAnswer, isCorrect, timeSpent };
    set({
      missedQuestionIds: updatedMissedQuestionIds,
      currentSession: {
        ...currentSession,
        results: [...currentSession.results, result],
      },
    });

    AsyncStorage.setItem(MISSED_KEY, JSON.stringify(updatedMissedQuestionIds)).catch(console.error);
  },

  completeSession: () => {
    const { currentSession, sessions } = get();
    if (!currentSession) return;

    const correct = currentSession.results.filter(r => r.isCorrect).length;
    const completed: QuizSession = {
      ...currentSession,
      completed: true,
      score: correct,
    };
    const updatedSessions = [completed, ...sessions].slice(0, 50);
    set({ currentSession: null, sessions: updatedSessions });
    AsyncStorage.setItem(SESSIONS_KEY, JSON.stringify(updatedSessions)).catch(console.error);
  },

  resetProgress: async () => {
    await Promise.all([
      AsyncStorage.removeItem(PROGRESS_KEY),
      AsyncStorage.removeItem(SESSIONS_KEY),
      AsyncStorage.removeItem(MISSED_KEY),
    ]);
    set({ progress: {}, sessions: [], currentSession: null, missedQuestionIds: [] });
  },

  getStats: (): Stats => {
    const { progress, sessions, missedQuestionIds } = get();
    let newCount = 0, learningCount = 0, reviewCount = 0, masteredCount = 0;
    let totalAttempts = 0, totalCorrect = 0, dueForReview = 0;
    const now = Date.now();

    for (const q of QUESTIONS) {
      const p = progress[q.id];
      if (!p || p.state === 'new') {
        newCount++;
      } else {
        if (p.state === 'learning') learningCount++;
        else if (p.state === 'review') reviewCount++;
        else if (p.state === 'mastered') masteredCount++;
        totalAttempts += p.totalAttempts;
        totalCorrect += p.totalCorrect;
        if (p.nextReviewDate <= now) dueForReview++;
      }
    }

    const completedSessions = sessions.filter(s => s.completed);

    return {
      totalQuestions: QUESTIONS.length,
      newCount,
      learningCount,
      reviewCount,
      masteredCount,
      missedCount: missedQuestionIds.length,
      totalAttempts,
      totalCorrect,
      overallAccuracy: totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0,
      sessionsCompleted: completedSessions.length,
      dueForReview,
    };
  },
}));
