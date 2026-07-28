import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "stadtland",
  title: "Stadt und Land",
  titleVi: "Thành thị & Nông thôn",
  description: "Vorteile und Nachteile des Lebens in der Stadt oder auf dem Land",
  color: "#ca8a04",
  level: "B1-B2",
  root: {
    id: "root",
    label: "Stadt und Land",
    meaning: "thành thị & nông thôn",
    children: [
      {
        id: "stadt-vorteile",
        label: "Stadt: Vorteile",
        meaning: "thành thị: ưu điểm",
        children: [
          { id: "arbeitsmoeglichkeiten", label: "viele Arbeitsmöglichkeiten", meaning: "nhiều cơ hội việc làm" },
          { id: "unterhaltung", label: "vielfältige ___", meaning: "giải trí đa dạng", answer: "Unterhaltung" },
          { id: "infrastruktur", label: "gute Infrastruktur", meaning: "cơ sở hạ tầng tốt" },
        ],
      },
      {
        id: "stadt-nachteile",
        label: "Stadt: Nachteile",
        meaning: "thành thị: nhược điểm",
        children: [
          { id: "lebenshaltungskosten", label: "hohe Lebenshaltungskosten", meaning: "chi phí sinh hoạt cao" },
          { id: "luft-laerm", label: "Lärm und ___", meaning: "tiếng ồn và ô nhiễm", answer: "Luftverschmutzung" },
          { id: "stress2", label: "stressiger Alltag", meaning: "cuộc sống thường ngày căng thẳng" },
        ],
      },
      {
        id: "land-vorteile",
        label: "Land: Vorteile",
        meaning: "nông thôn: ưu điểm",
        children: [
          { id: "ruhig", label: "ruhig und idyllisch", meaning: "yên tĩnh và thanh bình" },
          { id: "frischeluft", label: "frische ___", meaning: "không khí trong lành", answer: "Luft" },
          { id: "gemeinschaft", label: "engere Gemeinschaft", meaning: "cộng đồng gắn kết hơn" },
        ],
      },
      {
        id: "land-nachteile",
        label: "Land: Nachteile",
        meaning: "nông thôn: nhược điểm",
        children: [
          { id: "wenigerjobs", label: "weniger Jobangebote", meaning: "ít cơ hội việc làm hơn" },
          { id: "anbindung", label: "schlechte ___ an den ÖPNV", meaning: "kết nối giao thông công cộng kém", answer: "Anbindung" },
          { id: "langeweile", label: "wenig Abwechslung", meaning: "ít sự đổi mới/nhàm chán" },
        ],
      },
    ],
  },
};

export default topic;
