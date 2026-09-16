export interface QuestionOption {
  A: string;
  B: string;
  C: string;
  D: string;
}

export interface IncorrectExplanation {
  options: string[];
  text: string;
}

export interface Question {
  id: string;
  question: string;
  options: QuestionOption;
  correct: 'A' | 'B' | 'C' | 'D';
  correctExplanation: string;
  incorrectExplanations: IncorrectExplanation[];
  examSource: number;
}

// Adaptive learning state per question
export type CardState = 'new' | 'learning' | 'review' | 'mastered';

export interface CardProgress {
  questionId: string;
  state: CardState;
  interval: number;       // days until next review
  easeFactor: number;     // SM-2 ease factor (starts at 2.5)
  repetitions: number;    // consecutive correct answers
  nextReviewDate: number; // timestamp
  totalCorrect: number;
  totalAttempts: number;
  lastAnswered: number;   // timestamp
}

export interface SessionResult {
  questionId: string;
  selectedAnswer: string;
  isCorrect: boolean;
  timeSpent: number; // ms
}

export interface QuizSession {
  id: string;
  startedAt: number;
  questionCount: number;
  results: SessionResult[];
  completed: boolean;
  score: number;
}

export type OptionKey = 'A' | 'B' | 'C' | 'D';
