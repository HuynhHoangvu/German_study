import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "bildung",
  title: "Bildung",
  titleVi: "Giáo dục",
  description: "Schulsystem, Studium und lebenslanges Lernen",
  color: "#0f766e",
  level: "B1-B2",
  root: {
    id: "root",
    label: "Bildung",
    meaning: "giáo dục",
    children: [
      {
        id: "system",
        label: "Bildungssystem",
        meaning: "hệ thống giáo dục",
        children: [
          { id: "grundschule", label: "die Grundschule", meaning: "trường tiểu học" },
          { id: "gymnasium", label: "das ___", meaning: "trường trung học (hướng đại học)", answer: "Gymnasium" },
          { id: "ausbildung", label: "die Ausbildung", meaning: "học nghề", synonyms: ["die Berufsausbildung"] },
          { id: "studium", label: "das Studium", meaning: "việc học đại học" },
        ],
      },
      {
        id: "vorteile",
        label: "Vorteile guter Bildung",
        meaning: "lợi ích giáo dục tốt",
        children: [
          { id: "chancen", label: "bessere Berufschancen", meaning: "cơ hội nghề nghiệp tốt hơn" },
          { id: "selbststaendig2", label: "selbstständiges Denken", meaning: "tư duy độc lập" },
        ],
      },
      {
        id: "probleme",
        label: "Probleme",
        meaning: "vấn đề",
        children: [
          { id: "chancenungleichheit", label: "die ___", meaning: "bất bình đẳng cơ hội", answer: "Chancenungleichheit" },
          { id: "lehrermangel", label: "der Lehrermangel", meaning: "thiếu giáo viên" },
          { id: "leistungsdruck", label: "der Leistungsdruck", meaning: "áp lực thành tích" },
        ],
      },
      {
        id: "lebenslang",
        label: "Lebenslanges Lernen",
        meaning: "học tập suốt đời",
        children: [
          { id: "weiterbildung", label: "die Weiterbildung", meaning: "đào tạo nâng cao" },
          { id: "onlinekurse", label: "die Onlinekurse", meaning: "khóa học trực tuyến" },
          { id: "fremdsprachen", label: "___ lernen", meaning: "học ngoại ngữ", answer: "Fremdsprachen" },
        ],
      },
    ],
  },
};

export default topic;
