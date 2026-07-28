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
          { id: "vegetarisch", label: "vegetarisch leben", meaning: "ăn chay" },
          { id: "vegan", label: "___ leben", meaning: "ăn thuần chay", answer: "vegan" },
          { id: "bio", label: "Bio-Lebensmittel", meaning: "thực phẩm hữu cơ" },
        ],
      },
      {
        id: "gewohnheiten",
        label: "Essgewohnheiten",
        meaning: "thói quen ăn uống",
        children: [
          { id: "fastfood2", label: "das Fast Food", meaning: "đồ ăn nhanh" },
          { id: "fertiggerichte", label: "die ___", meaning: "đồ ăn chế biến sẵn", answer: "Fertiggerichte" },
          { id: "hausgemacht", label: "hausgemachtes Essen", meaning: "đồ ăn tự nấu" },
        ],
      },
      {
        id: "probleme",
        label: "Probleme",
        meaning: "vấn đề",
        children: [
          { id: "mangelernaehrung", label: "die Mangelernährung", meaning: "suy dinh dưỡng" },
          { id: "zuckerkonsum", label: "hoher ___", meaning: "tiêu thụ đường cao", answer: "Zuckerkonsum" },
          { id: "lebensmittelverschwendung", label: "die Lebensmittelverschwendung", meaning: "lãng phí thực phẩm" },
        ],
      },
      {
        id: "empfehlungen",
        label: "Empfehlungen",
        meaning: "khuyến nghị",
        children: [
          { id: "ausgewogen2", label: "ausgewogen essen", meaning: "ăn cân bằng" },
          { id: "portionen", label: "kleinere Portionen", meaning: "khẩu phần nhỏ hơn" },
        ],
      },
    ],
  },
};

export default topic;
