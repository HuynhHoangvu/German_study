import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "reisen",
  title: "Reisen & Tourismus",
  titleVi: "Du lịch",
  description: "Reiseformen, Vorteile und Auswirkungen des Tourismus",
  color: "#0284c7",
  level: "B1-B2",
  root: {
    id: "root",
    label: "Reisen",
    meaning: "du lịch",
    children: [
      {
        id: "reiseformen",
        label: "Reiseformen",
        meaning: "hình thức du lịch",
        children: [
          { id: "pauschalreise", label: "die Pauschalreise", meaning: "du lịch trọn gói" },
          { id: "individualreise", label: "die ___", meaning: "du lịch tự túc", answer: "Individualreise" },
          { id: "rucksacktourismus", label: "der Rucksacktourismus", meaning: "du lịch bụi" },
        ],
      },
      {
        id: "vorteile",
        label: "Vorteile",
        meaning: "lợi ích",
        children: [
          { id: "horizonterweiterung", label: "die Horizonterweiterung", meaning: "mở mang tầm nhìn" },
          { id: "erholung2", label: "die Erholung vom Alltag", meaning: "nghỉ ngơi khỏi đời thường" },
          { id: "kulturaustausch", label: "der ___", meaning: "trao đổi văn hóa", answer: "Kulturaustausch" },
        ],
      },
      {
        id: "nachteile",
        label: "Negative Auswirkungen",
        meaning: "tác động tiêu cực",
        children: [
          { id: "massentourismus", label: "der Massentourismus", meaning: "du lịch đại trà" },
          { id: "umweltbelastung", label: "die Umweltbelastung", meaning: "gánh nặng môi trường" },
          { id: "co2", label: "hoher CO2-Ausstoß", meaning: "lượng khí thải CO2 cao" },
        ],
      },
      {
        id: "nachhaltig",
        label: "Nachhaltiger Tourismus",
        meaning: "du lịch bền vững",
        children: [
          { id: "oekotourismus", label: "der Ökotourismus", meaning: "du lịch sinh thái" },
          { id: "regional", label: "regional und ___ reisen", meaning: "du lịch bền vững, gần địa phương", answer: "nachhaltig" },
        ],
      },
    ],
  },
};

export default topic;
