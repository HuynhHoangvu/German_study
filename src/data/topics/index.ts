import { Topic } from "@/types/topic";

import kriminalitaet from "./kriminalitaet";
import verkehr from "./verkehr";
import gesundheit from "./gesundheit";
import umwelt from "./umwelt";
import arbeit from "./arbeit";
import bildung from "./bildung";
import familie from "./familie";
import wohnen from "./wohnen";
import reisen from "./reisen";
import technologie from "./technologie";
import ernaehrung from "./ernaehrung";
import freizeit from "./freizeit";

export const topics: Topic[] = [
  gesundheit,
  kriminalitaet,
  verkehr,
  umwelt,
  arbeit,
  bildung,
  familie,
  wohnen,
  reisen,
  technologie,
  ernaehrung,
  freizeit,
];

export function getTopic(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function countNodes(node: Topic["root"]): number {
  return 1 + (node.children?.reduce((sum, c) => sum + countNodes(c), 0) ?? 0);
}

export function countBlanks(node: Topic["root"]): number {
  const own = node.answer ? 1 : 0;
  return own + (node.children?.reduce((sum, c) => sum + countBlanks(c), 0) ?? 0);
}
