import type { ExamResult } from "@/types/exam";

const STORAGE_KEY = "german-mock-exam-results";

type ResultStore = { [examId: string]: ExamResult };

function readStore(): ResultStore {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeStore(store: ResultStore) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

export function saveExamResult(result: ExamResult) {
  const store = readStore();
  const existing = store[result.examId];
  if (!existing || result.overallPercent >= existing.overallPercent) {
    store[result.examId] = result;
    writeStore(store);
  }
}

export function getExamResult(examId: string): ExamResult | undefined {
  return readStore()[examId];
}

export function getAllExamResults(): ResultStore {
  return readStore();
}
