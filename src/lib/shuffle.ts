const QUEUE_KEY = "german-mindmap-shuffle-queue";

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Returns the next topic slug to study, drawing from a shuffled queue
 * of all topics. Once every topic has been visited, the queue reshuffles
 * and starts a new round (never repeats a topic within the same round).
 */
export function getNextRandomTopicSlug(allSlugs: string[], currentSlug?: string): string {
  if (typeof window === "undefined" || allSlugs.length === 0) return allSlugs[0] ?? "";

  let queue: string[] = [];
  try {
    queue = JSON.parse(window.localStorage.getItem(QUEUE_KEY) ?? "[]");
  } catch {
    queue = [];
  }

  queue = queue.filter((slug) => allSlugs.includes(slug));

  if (queue.length === 0) {
    queue = shuffle(allSlugs);
    if (currentSlug && queue[0] === currentSlug && queue.length > 1) {
      [queue[0], queue[1]] = [queue[1], queue[0]];
    }
  }

  const next = queue.shift() as string;
  window.localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
  return next;
}
