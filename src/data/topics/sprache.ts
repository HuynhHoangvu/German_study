import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "sprache",
  title: "Sprache & Kommunikation",
  titleVi: "Ngôn ngữ & Giao tiếp",
  description: "Fremdsprachen lernen, Körpersprache, Dialekte und Mehrsprachigkeit",
  color: "#0d9488",
  level: "B1-B2",
  root: {
    id: "root",
    label: "Sprache",
    meaning: "ngôn ngữ",
    children: [
      {
        id: "sprachenlernen",
        label: "Fremdsprachen lernen",
        meaning: "học ngoại ngữ",
        children: [
          { id: "onlinekurs", label: "der Online-Sprachkurs", meaning: "khóa học ngôn ngữ trực tuyến" },
          { id: "sprachaufenthalt", label: "der ___", meaning: "chuyến du học ngôn ngữ", answer: "Sprachaufenthalt" },
          { id: "wortschatz", label: "der Wortschatz erweitern", meaning: "mở rộng vốn từ" },
        ],
      },
      {
        id: "kommunikation",
        label: "Kommunikation",
        meaning: "giao tiếp",
        children: [
          { id: "koerpersprache", label: "die Körpersprache", meaning: "ngôn ngữ cơ thể" },
          { id: "missverstaendnis", label: "das ___", meaning: "sự hiểu lầm", answer: "Missverständnis" },
          { id: "mimik", label: "die Mimik und Gestik", meaning: "biểu cảm và cử chỉ" },
        ],
      },
      {
        id: "mehrsprachigkeit",
        label: "Mehrsprachigkeit",
        meaning: "đa ngôn ngữ",
        children: [
          { id: "muttersprache", label: "die Muttersprache", meaning: "tiếng mẹ đẻ" },
          { id: "dialekt", label: "der ___", meaning: "phương ngữ", answer: "Dialekt" },
          { id: "vorteile2", label: "kognitive Vorteile", meaning: "lợi ích nhận thức" },
        ],
      },
      {
        id: "digitale-kommunikation",
        label: "Digitale Kommunikation",
        meaning: "giao tiếp số",
        children: [
          { id: "chatten", label: "chatten und texten", meaning: "nhắn tin/chat" },
          { id: "videoanruf", label: "der Videoanruf", meaning: "cuộc gọi video" },
        ],
      },
    ],
  },
};

export default topic;
