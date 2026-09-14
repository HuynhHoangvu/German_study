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
import ehrenamt from "./ehrenamt";
import haustiere from "./haustiere";
import aussehen from "./aussehen";
import beziehungen from "./beziehungen";
import verbenPraepAkkusativ from "./verben-praep-akkusativ";
import verbenPraepDativ from "./verben-praep-dativ";
import adjektivePraepositionen from "./adjektive-praepositionen";
import konnektoren from "./konnektoren";
import grammatikStrukturen from "./grammatik-strukturen";
import redemittel from "./redemittel";
import praepAuf from "./praep-auf";
import praepAn from "./praep-an";
import praepIn from "./praep-in";
import praepUeber from "./praep-ueber";
import praepVor from "./praep-vor";
import praepUnter from "./praep-unter";
import praepFuer from "./praep-fuer";
import praepUm from "./praep-um";
import praepGegen from "./praep-gegen";
import praepMit from "./praep-mit";
import praepVon from "./praep-von";
import praepZu from "./praep-zu";
import praepNach from "./praep-nach";
import praepBei from "./praep-bei";
import praepAus from "./praep-aus";

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
  ehrenamt,
  haustiere,
  aussehen,
  beziehungen,
  verbenPraepAkkusativ,
  verbenPraepDativ,
  adjektivePraepositionen,
  konnektoren,
  grammatikStrukturen,
  redemittel,
  praepAuf,
  praepAn,
  praepIn,
  praepUeber,
  praepVor,
  praepUnter,
  praepFuer,
  praepUm,
  praepGegen,
  praepMit,
  praepVon,
  praepZu,
  praepNach,
  praepBei,
  praepAus,
];

/** Topics grouped for the home page: vocabulary themes, grammar, preposition mindmaps. */
export const themaTopics: Topic[] = topics.filter((t) => (t.category ?? "thema") === "thema");
export const grammatikTopics: Topic[] = topics.filter((t) => t.category === "grammatik");
export const praepositionTopics: Topic[] = topics.filter((t) => t.category === "praeposition");

export function getTopic(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function countNodes(node: Topic["root"]): number {
  return 1 + (node.children?.reduce((sum, c) => sum + countNodes(c), 0) ?? 0);
}

