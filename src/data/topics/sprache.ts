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
          { id: "sprachaufenthalt", label: "der ___", meaning: "chuyến du học ngôn ngữ", answer: "Sprachaufenthalt", note: "Sprache (ngôn ngữ) + Aufenthalt (thời gian lưu trú)." },
          { id: "wortschatz", label: "der Wortschatz erweitern", meaning: "mở rộng vốn từ", synonyms: ["Vokabeln lernen"] },
        ],
      },
      {
        id: "kommunikation",
        label: "Kommunikation",
        meaning: "giao tiếp",
        children: [
          { id: "koerpersprache", label: "die Körpersprache", meaning: "ngôn ngữ cơ thể" },
          { id: "missverstaendnis", label: "das ___", meaning: "sự hiểu lầm", answer: "Missverständnis", note: "miss- (sai/nhầm) + Verständnis (sự hiểu)." },
          { id: "mimik", label: "die Mimik und Gestik", meaning: "biểu cảm và cử chỉ", synonyms: ["Gesichtsausdruck und Handbewegungen"] },
        ],
      },
      {
        id: "mehrsprachigkeit",
        label: "Mehrsprachigkeit",
        meaning: "đa ngôn ngữ",
        children: [
          { id: "muttersprache", label: "die Muttersprache", meaning: "tiếng mẹ đẻ", synonyms: ["die Erstsprache"] },
          { id: "dialekt", label: "der ___", meaning: "phương ngữ", answer: "Dialekt" },
          { id: "vorteile2", label: "kognitive Vorteile", meaning: "lợi ích nhận thức", note: "kognitiv = liên quan đến tư duy, trí não." },
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
      {
        id: "wortarten",
        label: "Wortschatz nach Wortart",
        meaning: "từ vựng theo loại từ",
        children: [
          {
            id: "wortarten-nomen",
            label: "Nomen",
            meaning: "danh từ",
            children: [
              { id: "wa-aussprache", label: "die Aussprache", meaning: "cách phát âm" },
              { id: "wa-grammatik", label: "die Grammatik", meaning: "ngữ pháp" },
              { id: "wa-uebersetzung", label: "die Übersetzung", meaning: "bản dịch" },
              { id: "wa-ausdruck", label: "der Ausdruck", meaning: "cách diễn đạt" },
              { id: "wa-unterhaltung-sprache", label: "die Unterhaltung", meaning: "cuộc trò chuyện" },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-eine-fremdsprache-beherrschen", label: "eine Fremdsprache beherrschen", meaning: "thông thạo một ngoại ngữ" },
              { id: "wa-sich-verstaendlich-machen", label: "sich verständlich machen", meaning: "làm cho người khác hiểu mình" },
              { id: "wa-in-kontakt-treten", label: "mit jemandem in Kontakt treten", meaning: "liên hệ/kết nối với ai đó" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-uebersetzen", label: "übersetzen", meaning: "dịch (ngôn ngữ)" },
              { id: "wa-sich-ausdruecken", label: "sich ausdrücken", meaning: "diễn đạt bản thân", note: "trennbar: drückt sich aus, drückte sich aus, hat sich ausgedrückt" },
              { id: "wa-verstehen", label: "verstehen", meaning: "hiểu", note: "unregelmäßig: versteht, verstand, hat verstanden" },
              { id: "wa-kommunizieren", label: "kommunizieren mit + Dat.", meaning: "giao tiếp với" },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-fliessend", label: "fließend in + Dat.", meaning: "trôi chảy trong (ngôn ngữ)" },
              { id: "wa-vertraut", label: "vertraut mit + Dat.", meaning: "quen thuộc với" },
              { id: "wa-interessiert-sprache", label: "interessiert an + Dat.", meaning: "quan tâm đến" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
