import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "gesundheit",
  title: "Gesundheit",
  titleVi: "Sức khỏe",
  description: "Gewohnheiten, Krankheiten und gesunde Lebensweise",
  color: "#e0900f",
  level: "B1-B2",
  root: {
    id: "root",
    label: "Gesundheit",
    meaning: "sức khỏe",
    children: [
      {
        id: "schlechte-gewohnheiten",
        label: "Schlechte Gewohnheiten",
        meaning: "thói quen xấu",
        children: [
          { id: "junkfood", label: "zu viel Fast Food essen", meaning: "ăn quá nhiều đồ ăn nhanh", synonyms: ["ungesundes Essen"] },
          { id: "bewegungsmangel", label: "der ___", meaning: "thiếu vận động", answer: "Bewegungsmangel" },
          { id: "rauchen", label: "das Rauchen", meaning: "hút thuốc" },
          { id: "stress", label: "der Stress", meaning: "căng thẳng" },
          { id: "schlafmangel", label: "der Schlafmangel", meaning: "thiếu ngủ" },
        ],
      },
      {
        id: "vorteile-fastfood",
        label: "\"Vorteile\" von Fast Food",
        meaning: "lợi ích của fastfood",
        children: [
          { id: "schnell", label: "schnell und praktisch", meaning: "nhanh và tiện" },
          { id: "guenstig", label: "erschwingliche Preise", meaning: "giá cả phải chăng" },
          { id: "vielfalt", label: "große Auswahl", meaning: "nhiều lựa chọn" },
        ],
      },
      {
        id: "probleme",
        label: "Probleme",
        meaning: "vấn đề sức khỏe",
        children: [
          { id: "uebergewicht", label: "das Übergewicht", meaning: "béo phì", synonyms: ["die Fettleibigkeit"] },
          { id: "diabetes", label: "der ___", meaning: "tiểu đường", answer: "Diabetes" },
          { id: "herzkrankheit", label: "die Herzkrankheit", meaning: "bệnh tim mạch" },
          { id: "schlafstoerung", label: "die Schlafstörung", meaning: "rối loạn giấc ngủ" },
          { id: "bluthochdruck", label: "der Bluthochdruck", meaning: "cao huyết áp" },
        ],
      },
      {
        id: "praevention",
        label: "Prävention",
        meaning: "phòng ngừa",
        children: [
          { id: "sport", label: "regelmäßig Sport treiben", meaning: "tập thể dục đều đặn" },
          { id: "ernaehrung", label: "ausgewogene Ernährung", meaning: "chế độ ăn cân bằng" },
          { id: "vorsorge", label: "die ___", meaning: "khám sức khỏe định kỳ", answer: "Vorsorgeuntersuchung" },
        ],
      },
    ],
  },
};

export default topic;
