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
import kultur from "./kultur";
import konsum from "./konsum";
import sport from "./sport";
import sprache from "./sprache";
import politik from "./politik";
import krankenpflege from "./krankenpflege";
import koerper from "./koerper";
import notfall from "./notfall";
import person from "./person";
import stadtland from "./stadtland";

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
  kultur,
  konsum,
  sport,
  sprache,
  politik,
  krankenpflege,
  koerper,
  notfall,
  person,
  stadtland,
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
