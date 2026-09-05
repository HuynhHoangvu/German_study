export type ExamQuestion = {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
};

export type LesenSection = {
  title: string;
  passage: string;
  questions: ExamQuestion[];
};

export type HoerenSection = {
  title: string;
  intro: string;
  script: string[];
  questions: ExamQuestion[];
};

export type SchreibenSection = {
  title: string;
  prompt: string;
  minWords: number;
  checklist: string[];
};

export type SprechenSection = {
  title: string;
  prompt: string;
  prepSeconds: number;
  talkSeconds: number;
  checklist: string[];
};

export type MockExam = {
  id: string;
  title: string;
  topic: string;
  lesen: LesenSection;
  hoeren: HoerenSection;
  schreiben: SchreibenSection;
  sprechen: SprechenSection;
};

export type ExamResult = {
  examId: string;
  lesenScore: number;
  lesenTotal: number;
  hoerenScore: number;
  hoerenTotal: number;
  schreibenScore: number;
  sprechenScore: number;
  overallPercent: number;
  completedAt: number;
};
