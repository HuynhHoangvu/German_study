import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "familie",
  title: "Familie",
  titleVi: "Gia đình",
  description: "Familienformen, Erziehung und Generationen",
  color: "#db2777",
  level: "B1-B2",
  root: {
    id: "root",
    label: "Familie",
    meaning: "gia đình",
    children: [
      {
        id: "formen",
        label: "Familienformen",
        meaning: "hình thức gia đình",
        children: [
          { id: "kernfamilie", label: "die Kernfamilie", meaning: "gia đình hạt nhân" },
          { id: "alleinerziehend", label: "___ Elternteil", meaning: "cha/mẹ đơn thân", answer: "alleinerziehendes" },
          { id: "patchwork", label: "die Patchworkfamilie", meaning: "gia đình ghép (tái hôn)" },
          { id: "grossfamilie", label: "die Großfamilie", meaning: "gia đình nhiều thế hệ" },
        ],
      },
      {
        id: "erziehung",
        label: "Erziehung",
        meaning: "nuôi dạy con",
        children: [
          { id: "autoritaer", label: "autoritärer Erziehungsstil", meaning: "phong cách nuôi dạy độc đoán" },
          { id: "liberal", label: "___ Erziehungsstil", meaning: "phong cách nuôi dạy tự do", answer: "liberaler" },
          { id: "werte", label: "die Werte vermitteln", meaning: "truyền đạt giá trị" },
        ],
      },
      {
        id: "probleme",
        label: "Probleme",
        meaning: "vấn đề gia đình",
        children: [
          { id: "generationenkonflikt", label: "der Generationenkonflikt", meaning: "xung đột thế hệ" },
          { id: "zeitmangel", label: "der Zeitmangel", meaning: "thiếu thời gian" },
          { id: "scheidung", label: "die ___", meaning: "sự ly hôn", answer: "Scheidung" },
        ],
      },
      {
        id: "wandel",
        label: "Wandel der Familie",
        meaning: "sự thay đổi của gia đình",
        children: [
          { id: "berufstaetigkeit", label: "Berufstätigkeit beider Elternteile", meaning: "cả hai cha mẹ đi làm" },
          { id: "kinderbetreuung", label: "die Kinderbetreuung", meaning: "chăm sóc trẻ em" },
        ],
      },
    ],
  },
};

export default topic;
