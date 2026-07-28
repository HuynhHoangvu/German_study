const STORAGE_KEY = "german-mindmap-progress";

type ProgressStore = {
  [topicSlug: string]: {
    completedBlanks?: string[];
    visitedNodes?: string[];
  };
};

function readStore(): ProgressStore {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeStore(store: ProgressStore) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

export function markBlankSolved(topicSlug: string, nodeId: string) {
  const store = readStore();
  const entry = store[topicSlug] ?? {};
  const set = new Set(entry.completedBlanks ?? []);
  set.add(nodeId);
  entry.completedBlanks = Array.from(set);
  store[topicSlug] = entry;
  writeStore(store);
}

export function getSolvedBlanks(topicSlug: string): Set<string> {
  const store = readStore();
  return new Set(store[topicSlug]?.completedBlanks ?? []);
}

export function getTopicProgress(topicSlug: string, totalBlanks: number): number {
  if (totalBlanks === 0) return 0;
  const solved = getSolvedBlanks(topicSlug).size;
  return Math.round((solved / totalBlanks) * 100);
}

export function resetTopicProgress(topicSlug: string) {
  const store = readStore();
  delete store[topicSlug];
  writeStore(store);
}
