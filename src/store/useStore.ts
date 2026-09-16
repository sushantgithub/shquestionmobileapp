import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CardProgress, CardState, QuizSession, SessionResult, Question } from '../types';
import { QUESTIONS } from '../data/questions';

const PROGRESS_KEY = '@adaptive_quiz_progress';
const SESSIONS_KEY = '@adaptive_quiz_sessions';

interface StoreState {
  progress: Record<string, CardProgress>;
  sessions: QuizSession[];
  currentSession: QuizSession | null;

  // Actions
  loadProgress: () => Promise<void>;
  updateProgress: (questionId: string, isCorrect: boolean, timeSpent: number) => void;
  startSession: (questionCount: number) => Question[];
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
    // Failed — reset to learning
    return {
      ...progress,
      state: 'learning',
      interval: 0,
      repetitions: 0,
      nextReviewDate: now + 600000, // review again in 10 minutes (same session logic)
      totalAttempts: progress.totalAttempts + 1,
      lastAnswered: now,
    };
  }

  // Correct answer — SM-2 algorithm
  let { repetitions, interval, easeFactor } = progress;
  const quality = 4; // treating correct as "good"

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

function selectAdaptiveQuestions(
  allQuestions: Question[],
  progress: Record<string, CardProgress>,
  count: number
): Question[] {
  const now = Date.now();

  // Categorize questions
  const overdue: Question[] = [];
  const learning: Question[] = [];
  const newOnes: Question[] = [];
  const upcoming: Question[] = [];

  for (const q of allQuestions) {
    const p = progress[q.id];
    if (!p || p.state === 'new') {
      newOnes.push(q);
    } else if (p.state === 'learning') {
      if (p.nextReviewDate <= now) {
        overdue.push(q);
      } else {
        learning.push(q);
      }
    } else if (p.state === 'review' || p.state === 'mastered') {
      if (p.nextReviewDate <= now) {
        overdue.push(q);
      } else {
        upcoming.push(q);
      }
    }
  }

  // Shuffle each bucket
  const shuffle = <T>(arr: T[]): T[] => arr.sort(() => Math.random() - 0.5);
  shuffle(overdue);
  shuffle(learning);
  shuffle(newOnes);

  // Priority: overdue > learning > new > upcoming
  const pool = [...overdue, ...learning, ...newOnes, ...shuffle(upcoming)];

  return pool.slice(0, Math.min(count, pool.length));
}

export const useStore = create<StoreState>((set, get) => ({
  progress: {},
  sessions: [],
  currentSession: null,

  loadProgress: async () => {
    try {
      const [progressRaw, sessionsRaw] = await Promise.all([
        AsyncStorage.getItem(PROGRESS_KEY),
        AsyncStorage.getItem(SESSIONS_KEY),
      ]);
      const progress = progressRaw ? JSON.parse(progressRaw) : {};
      const sessions = sessionsRaw ? JSON.parse(sessionsRaw) : [];
      set({ progress, sessions });
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

  startSession: (questionCount) => {
    const { progress } = get();
    const selected = selectAdaptiveQuestions(QUESTIONS, progress, questionCount);
    const session: QuizSession = {
      id: Date.now().toString(),
      startedAt: Date.now(),
      questionCount: selected.length,
      results: [],
      completed: false,
      score: 0,
    };
    set({ currentSession: session });
    return selected;
  },

  recordAnswer: (questionId, selectedAnswer, isCorrect, timeSpent) => {
    const { currentSession, updateProgress } = get();
    if (!currentSession) return;

    updateProgress(questionId, isCorrect, timeSpent);

    const result: SessionResult = { questionId, selectedAnswer, isCorrect, timeSpent };
    set({
      currentSession: {
        ...currentSession,
        results: [...currentSession.results, result],
      },
    });
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
    const updatedSessions = [completed, ...sessions].slice(0, 50); // keep last 50
    set({ currentSession: null, sessions: updatedSessions });
    AsyncStorage.setItem(SESSIONS_KEY, JSON.stringify(updatedSessions)).catch(console.error);
  },

  resetProgress: async () => {
    await Promise.all([
      AsyncStorage.removeItem(PROGRESS_KEY),
      AsyncStorage.removeItem(SESSIONS_KEY),
    ]);
    set({ progress: {}, sessions: [], currentSession: null });
  },

  getStats: (): Stats => {
    const { progress, sessions } = get();
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
      totalAttempts,
      totalCorrect,
      overallAccuracy: totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0,
      sessionsCompleted: completedSessions.length,
      dueForReview,
    };
  },
}));
