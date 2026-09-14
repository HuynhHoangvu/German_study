/** One example sentence: the German sentence plus its Vietnamese translation. */
export type Example = {
  de: string;
  vi: string;
};

export type VocabNode = {
  id: string;
  /** German label. */
  label: string;
  /** Vietnamese meaning */
  meaning?: string;
  /** German definition / paraphrase (e.g. "Auf etwas oder jemanden gut aufpassen.") */
  definition?: string;
  /** German synonyms / related words */
  synonyms?: string[];
  /** Extra note / usage hint */
  note?: string;
  /** Example sentences shown as "Beispiel 1, Beispiel 2, …" */
  examples?: Example[];
  children?: VocabNode[];
};

/** Vocabulary topics, grammar sections, and the per-preposition mindmaps. */
export type TopicCategory = "thema" | "grammatik" | "praeposition";

export type Topic = {
  slug: string;
  title: string;
  titleVi: string;
  description: string;
  color: string;
  level: "B1" | "B2" | "B1-B2";
  /** Defaults to "thema" when omitted. */
  category?: TopicCategory;
  /**
   * How the mindmap is drawn. "tree" (default) is the horizontal left-to-right
   * layout; "radial" puts the root in a circle at the centre with its branches
   * fanning out around it in all directions.
   */
  layout?: "tree" | "radial";
  root: VocabNode;
};
