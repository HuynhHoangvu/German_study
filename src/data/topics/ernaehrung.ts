import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "ernaehrung",
  title: "Ernährung",
  titleVi: "Dinh dưỡng",
  description: "Essgewohnheiten, gesunde Ernährung und Ernährungstrends",
  color: "#65a30d",
  level: "B1-B2",
  root: {
    id: "root",
    label: "Ernährung",
    meaning: "dinh dưỡng",
    children: [
      {
        id: "trends",
        label: "Ernährungstrends",
        meaning: "xu hướng ăn uống",
        children: [
          { id: "vegetarisch", label: "vegetarisch leben", meaning: "ăn chay", synonyms: ["fleischlos essen"] },
          { id: "vegan", label: "___ leben", meaning: "ăn thuần chay", answer: "vegan" },
          { id: "bio", label: "Bio-Lebensmittel", meaning: "thực phẩm hữu cơ", synonyms: ["ökologische Lebensmittel"], note: "Bio = kurz für biologisch angebaut, ohne künstliche Zusätze." },
        ],
      },
      {
        id: "gewohnheiten",
        label: "Essgewohnheiten",
        meaning: "thói quen ăn uống",
        children: [
          { id: "fastfood2", label: "das Fast Food", meaning: "đồ ăn nhanh", synonyms: ["das Junkfood"] },
          { id: "fertiggerichte", label: "die ___", meaning: "đồ ăn chế biến sẵn", answer: "Fertiggerichte", note: "Fertiggerichte = Essen, das man nur noch aufwärmen muss." },
          { id: "hausgemacht", label: "hausgemachtes Essen", meaning: "đồ ăn tự nấu", synonyms: ["selbstgekochtes Essen"] },
        ],
      },
      {
        id: "probleme",
        label: "Probleme",
        meaning: "vấn đề",
        children: [
          { id: "mangelernaehrung", label: "die Mangelernährung", meaning: "suy dinh dưỡng", synonyms: ["die Unterernährung"] },
          { id: "zuckerkonsum", label: "hoher ___", meaning: "tiêu thụ đường cao", answer: "Zuckerkonsum" },
          { id: "lebensmittelverschwendung", label: "die Lebensmittelverschwendung", meaning: "lãng phí thực phẩm", note: "zusammengesetzt aus: Lebensmittel + Verschwendung." },
        ],
      },
      {
        id: "empfehlungen",
        label: "Empfehlungen",
        meaning: "khuyến nghị",
        children: [
          { id: "ausgewogen2", label: "ausgewogen essen", meaning: "ăn cân bằng", synonyms: ["sich gesund ernähren"] },
          { id: "portionen", label: "kleinere Portionen", meaning: "khẩu phần nhỏ hơn" },
        ],
      },
    ],
  },
};

export default topic;
