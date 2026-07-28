import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "umwelt",
  title: "Umwelt",
  titleVi: "Môi trường",
  description: "Umweltprobleme, Klimawandel und Umweltschutz",
  color: "#1f9d55",
  level: "B1-B2",
  root: {
    id: "root",
    label: "Umwelt",
    meaning: "môi trường",
    children: [
      {
        id: "probleme",
        label: "Umweltprobleme",
        meaning: "vấn đề môi trường",
        children: [
          { id: "klimawandel", label: "der Klimawandel", meaning: "biến đổi khí hậu", synonyms: ["die globale Erwärmung"] },
          { id: "luftverschmutzung", label: "die ___", meaning: "ô nhiễm không khí", answer: "Luftverschmutzung" },
          { id: "plastikmuell", label: "der Plastikmüll", meaning: "rác thải nhựa" },
          { id: "abholzung", label: "die Abholzung", meaning: "phá rừng", synonyms: ["die Rodung"] },
          { id: "artensterben", label: "das Artensterben", meaning: "tuyệt chủng loài", note: "Art (loài) + Sterben (sự chết đi)." },
        ],
      },
      {
        id: "ursachen",
        label: "Ursachen",
        meaning: "nguyên nhân",
        children: [
          { id: "industrie", label: "die Industrieabgase", meaning: "khí thải công nghiệp" },
          { id: "konsum", label: "übermäßiger Konsum", meaning: "tiêu dùng quá mức" },
          { id: "fossile", label: "fossile Brennstoffe", meaning: "nhiên liệu hóa thạch" },
        ],
      },
      {
        id: "folgen",
        label: "Folgen",
        meaning: "hậu quả",
        children: [
          { id: "naturkatastrophen", label: "die ___", meaning: "thảm họa thiên nhiên", answer: "Naturkatastrophen" },
          { id: "meeresspiegel", label: "der steigende Meeresspiegel", meaning: "mực nước biển dâng" },
          { id: "duerre", label: "die Dürre", meaning: "hạn hán" },
        ],
      },
      {
        id: "loesungen",
        label: "Lösungen",
        meaning: "giải pháp",
        children: [
          { id: "erneuerbar", label: "erneuerbare Energien nutzen", meaning: "sử dụng năng lượng tái tạo", synonyms: ["Solar-, Windenergie"] },
          { id: "recycling", label: "das Recycling", meaning: "tái chế" },
          { id: "oepnv2", label: "öffentliche Verkehrsmittel nutzen", meaning: "dùng phương tiện công cộng" },
          { id: "reduzieren", label: "den Konsum ___", meaning: "giảm tiêu dùng", answer: "reduzieren" },
        ],
      },
    ],
  },
};

export default topic;
