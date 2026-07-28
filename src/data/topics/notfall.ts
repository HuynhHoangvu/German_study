import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "notfall",
  title: "Notfall & Erste Hilfe",
  titleVi: "Cấp cứu & Sơ cứu",
  description: "Notfälle, Unfälle und Erste-Hilfe-Maßnahmen",
  color: "#dc2626",
  level: "B1-B2",
  root: {
    id: "root",
    label: "Notfall",
    meaning: "trường hợp khẩn cấp",
    children: [
      {
        id: "notfaelle",
        label: "Arten von Notfällen",
        meaning: "các loại tình huống khẩn cấp",
        children: [
          { id: "unfall", label: "der Unfall", meaning: "tai nạn" },
          { id: "herzinfarkt", label: "der ___", meaning: "nhồi máu cơ tim", answer: "Herzinfarkt" },
          { id: "verbrennung", label: "die Verbrennung", meaning: "vết bỏng" },
          { id: "bewusstlosigkeit", label: "die Bewusstlosigkeit", meaning: "sự bất tỉnh" },
        ],
      },
      {
        id: "erste-hilfe",
        label: "Erste-Hilfe-Maßnahmen",
        meaning: "biện pháp sơ cứu",
        children: [
          { id: "wiederbelebung", label: "die Wiederbelebung", meaning: "hồi sức cấp cứu", synonyms: ["die Reanimation"] },
          { id: "erstickung", label: "erste Hilfe bei ___", meaning: "sơ cứu khi bị nghẹt thở", answer: "Erstickung" },
          { id: "stabile-seitenlage", label: "die stabile Seitenlage", meaning: "tư thế hồi phục nằm nghiêng" },
        ],
      },
      {
        id: "hilfe-rufen",
        label: "Hilfe rufen",
        meaning: "gọi trợ giúp",
        children: [
          { id: "rettungswagen", label: "der Rettungswagen", meaning: "xe cấp cứu" },
          { id: "notruf", label: "den ___ wählen", meaning: "gọi số cấp cứu (112)", answer: "Notruf" },
          { id: "notaufnahme2", label: "die Notaufnahme", meaning: "khoa cấp cứu" },
        ],
      },
      {
        id: "vorbeugung",
        label: "Vorbeugung",
        meaning: "phòng ngừa",
        children: [
          { id: "erstehilfekurs", label: "der Erste-Hilfe-Kurs", meaning: "khóa học sơ cứu" },
          { id: "verbandskasten", label: "der Verbandskasten", meaning: "hộp sơ cứu" },
        ],
      },
    ],
  },
};

export default topic;
