export type PhaseId =
  | 'strategy'
  | 'business'
  | 'data-understanding'
  | 'data-prep'
  | 'development'
  | 'evaluation'
  | 'operations';

export interface NoteTrap {
  wrong: string;
  why: string;
}

export interface StudyNote {
  id: string;
  phase: PhaseId;
  title: string;
  summary: string;
  keyPoints: string[];
  traps: NoteTrap[];
}

export interface Phase {
  id: PhaseId;
  name: string;
  subtitle: string;
  icon: string;
}
