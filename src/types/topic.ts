export type VocabNode = {
  id: string;
  /** German label. Use "___" inside the label to mark a fill-in-the-blank spot. */
  label: string;
  /** Vietnamese meaning */
  meaning?: string;
  /** German synonyms / related words */
  synonyms?: string[];
  /** Extra note / example sentence */
  note?: string;
  /** If set, this node is a fill-in-the-blank exercise; answer is checked against user input */
  answer?: string;
  children?: VocabNode[];
};

export type Topic = {
  slug: string;
  title: string;
  titleVi: string;
  description: string;
  color: string;
  level: "B1" | "B2" | "B1-B2";
  root: VocabNode;
};
