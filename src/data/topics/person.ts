import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "person",
  title: "Eine Person beschreiben",
  titleVi: "Miêu tả một người",
  description: "Aussehen, Charakter und Beziehung zu einer Person",
  color: "#4f46e5",
  level: "B1-B2",
  root: {
    id: "root",
    label: "Person beschreiben",
    meaning: "miêu tả một người",
    children: [
      {
        id: "aussehen",
        label: "Aussehen",
        meaning: "ngoại hình",
        children: [
          { id: "grossgewachsen", label: "großgewachsen sein", meaning: "cao lớn", synonyms: ["groß sein"] },
          { id: "schlank", label: "___ sein", meaning: "mảnh khảnh, thon gọn", answer: "schlank", synonyms: ["dünn"] },
          { id: "gepflegt", label: "gepflegt aussehen", meaning: "trông gọn gàng, chỉn chu", synonyms: ["ordentlich aussehen"] },
        ],
      },
      {
        id: "charakter",
        label: "Charakter",
        meaning: "tính cách",
        children: [
          { id: "freundlich", label: "freundlich und hilfsbereit", meaning: "thân thiện và nhiệt tình", synonyms: ["nett und offen"] },
          { id: "humorvoll", label: "___ sein", meaning: "hài hước", answer: "humorvoll", synonyms: ["lustig"] },
          { id: "zuverlaessig", label: "zuverlässig sein", meaning: "đáng tin cậy", note: "sich auf jemanden verlassen können." },
          { id: "ehrgeizig", label: "ehrgeizig sein", meaning: "có tham vọng, cầu tiến", synonyms: ["zielstrebig sein"] },
        ],
      },
      {
        id: "beziehung",
        label: "Beziehung",
        meaning: "mối quan hệ",
        children: [
          { id: "kennenlernen", label: "sich kennenlernen", meaning: "làm quen với nhau" },
          { id: "seit-jahren", label: "wir kennen uns seit ___ Jahren", meaning: "chúng tôi quen nhau đã ... năm", answer: "zehn" },
          { id: "vertrauen", label: "einander vertrauen", meaning: "tin tưởng lẫn nhau", note: "einander = lẫn nhau (dùng thay cho 'sich gegenseitig')." },
        ],
      },
      {
        id: "gemeinsame-aktivitaeten",
        label: "Gemeinsame Aktivitäten",
        meaning: "hoạt động chung",
        children: [
          { id: "treffen", label: "sich regelmäßig treffen", meaning: "thường xuyên gặp nhau" },
          { id: "erlebnisse-teilen", label: "Erlebnisse miteinander teilen", meaning: "chia sẻ trải nghiệm cùng nhau" },
        ],
      },
    ],
  },
};

export default topic;
