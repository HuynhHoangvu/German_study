import type { Topic, VocabNode } from "@/types/topic";

const STORAGE_KEY = "german-mindmap-progress";

type ProgressStore = {
  [topicSlug: string]: {
    completedBlanks?: string[];
    visitedNodes?: string[];
    lastVisitedAt?: number;
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

export function markTopicVisited(topicSlug: string) {
  const store = readStore();
  const entry = store[topicSlug] ?? {};
  entry.lastVisitedAt = Date.now();
  store[topicSlug] = entry;
  writeStore(store);
}

export function getLastVisited(topicSlug: string): number | undefined {
  const store = readStore();
  return store[topicSlug]?.lastVisitedAt;
}

export type TopicProgressInfo = {
  slug: string;
  title: string;
  titleVi: string;
  color: string;
  percent: number;
  solved: number;
  total: number;
  lastVisitedAt?: number;
};

export function getAllTopicsProgress(
  topics: Topic[],
  countBlanks: (root: VocabNode) => number
): TopicProgressInfo[] {
  return topics.map((topic) => {
    const total = countBlanks(topic.root);
    const solved = getSolvedBlanks(topic.slug).size;
    return {
      slug: topic.slug,
      title: topic.title,
      titleVi: topic.titleVi,
      color: topic.color,
      percent: total === 0 ? 0 : Math.round((solved / total) * 100),
      solved,
      total,
      lastVisitedAt: getLastVisited(topic.slug),
    };
  });
}

export function getOverallStats(
  topics: Topic[],
  countBlanks: (root: VocabNode) => number
) {
  const all = getAllTopicsProgress(topics, countBlanks);
  const totalBlanks = all.reduce((sum, t) => sum + t.total, 0);
  const totalSolved = all.reduce((sum, t) => sum + t.solved, 0);
  const done = all.filter((t) => t.total > 0 && t.percent === 100).length;
  const inProgress = all.filter((t) => t.percent > 0 && t.percent < 100).length;
  const notStarted = all.filter((t) => t.percent === 0).length;

  return {
    overallPercent: totalBlanks === 0 ? 0 : Math.round((totalSolved / totalBlanks) * 100),
    done,
    inProgress,
    notStarted,
    totalTopics: all.length,
  };
}

export type SuggestionReason = "continue" | "new" | "review";

export type Suggestion = TopicProgressInfo & { reason: SuggestionReason };

export function getSuggestions(
  topics: Topic[],
  countBlanks: (root: VocabNode) => number,
  limit = 3
): Suggestion[] {
  const all = getAllTopicsProgress(topics, countBlanks);

  const inProgress = all
    .filter((t) => t.percent > 0 && t.percent < 100)
    .sort((a, b) => b.percent - a.percent)
    .map((t) => ({ ...t, reason: "continue" as const }));

  const notStarted = all
    .filter((t) => t.percent === 0)
    .map((t) => ({ ...t, reason: "new" as const }));

  const forReview = all
    .filter((t) => t.total > 0 && t.percent === 100)
    .sort((a, b) => (a.lastVisitedAt ?? 0) - (b.lastVisitedAt ?? 0))
    .map((t) => ({ ...t, reason: "review" as const }));

  return [...inProgress, ...notStarted, ...forReview].slice(0, limit);
}
