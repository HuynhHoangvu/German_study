import type { Topic, VocabNode } from "@/types/topic";

const STORAGE_KEY = "german-mindmap-progress";

type ProgressStore = {
  [topicSlug: string]: {
    /** Ids of the vocabulary nodes the learner has opened. */
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

/** Records that the learner has opened (studied) one vocabulary node. */
export function markNodeStudied(topicSlug: string, nodeId: string) {
  const store = readStore();
  const entry = store[topicSlug] ?? {};
  const set = new Set(entry.visitedNodes ?? []);
  set.add(nodeId);
  entry.visitedNodes = Array.from(set);
  store[topicSlug] = entry;
  writeStore(store);
}

export function getStudiedNodes(topicSlug: string): Set<string> {
  const store = readStore();
  return new Set(store[topicSlug]?.visitedNodes ?? []);
}

export function getTopicProgress(topicSlug: string, totalNodes: number): number {
  if (totalNodes === 0) return 0;
  const studied = getStudiedNodes(topicSlug).size;
  return Math.min(100, Math.round((studied / totalNodes) * 100));
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
  studied: number;
  total: number;
  lastVisitedAt?: number;
};

export function getAllTopicsProgress(
  topics: Topic[],
  countNodes: (root: VocabNode) => number
): TopicProgressInfo[] {
  return topics.map((topic) => {
    const total = countNodes(topic.root);
    const studied = Math.min(getStudiedNodes(topic.slug).size, total);
    return {
      slug: topic.slug,
      title: topic.title,
      titleVi: topic.titleVi,
      color: topic.color,
      percent: total === 0 ? 0 : Math.round((studied / total) * 100),
      studied,
      total,
      lastVisitedAt: getLastVisited(topic.slug),
    };
  });
}

export function getOverallStats(
  topics: Topic[],
  countNodes: (root: VocabNode) => number
) {
  const all = getAllTopicsProgress(topics, countNodes);
  const totalNodes = all.reduce((sum, t) => sum + t.total, 0);
  const totalStudied = all.reduce((sum, t) => sum + t.studied, 0);
  const done = all.filter((t) => t.total > 0 && t.percent === 100).length;
  const inProgress = all.filter((t) => t.percent > 0 && t.percent < 100).length;
  const notStarted = all.filter((t) => t.percent === 0).length;

  return {
    overallPercent: totalNodes === 0 ? 0 : Math.round((totalStudied / totalNodes) * 100),
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
  countNodes: (root: VocabNode) => number,
  limit = 3
): Suggestion[] {
  const all = getAllTopicsProgress(topics, countNodes);

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
