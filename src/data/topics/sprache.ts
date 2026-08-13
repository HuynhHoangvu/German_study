import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "sprache",
  title: "Sprache & Kommunikation",
  titleVi: "Ngôn ngữ & Giao tiếp",
  description: "Fremdsprachen lernen, Körpersprache, Dialekte und Mehrsprachigkeit",
  color: "#0d9488",
  level: "B2",
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
          { id: "onlinekurs", label: "der Online-Sprachkurs", meaning: "khóa học ngôn ngữ trực tuyến", note: "'einen Sprachkurs belegen' = đăng ký/theo học một khóa ngôn ngữ." },
          { id: "sprachaufenthalt", label: "der ___", meaning: "chuyến du học ngôn ngữ", answer: "Sprachaufenthalt", note: "Sprache (ngôn ngữ) + Aufenthalt (thời gian lưu trú)." },
          { id: "wortschatz", label: "den Wortschatz systematisch erweitern", meaning: "mở rộng vốn từ một cách có hệ thống", synonyms: ["sich Vokabeln aneignen"] },
        ],
      },
      {
        id: "kommunikation",
        label: "Kommunikation",
        meaning: "giao tiếp",
        children: [
          { id: "koerpersprache", label: "die Körpersprache", meaning: "ngôn ngữ cơ thể", note: "'nonverbale Signale deuten' = giải mã tín hiệu phi ngôn từ." },
          { id: "missverstaendnis", label: "ein ___ ausräumen", meaning: "giải tỏa/làm rõ một sự hiểu lầm", answer: "Missverständnis", note: "miss- (sai/nhầm) + Verständnis (sự hiểu); 'ausräumen' = dọn dẹp, ở đây nghĩa bóng là giải tỏa hiểu lầm." },
          { id: "mimik", label: "die Mimik und Gestik", meaning: "biểu cảm và cử chỉ", synonyms: ["Gesichtsausdruck und Handbewegungen"] },
        ],
      },
      {
        id: "mehrsprachigkeit",
        label: "Mehrsprachigkeit",
        meaning: "đa ngôn ngữ",
        children: [
          { id: "muttersprache", label: "die Muttersprache", meaning: "tiếng mẹ đẻ", synonyms: ["die Erstsprache"] },
          { id: "dialekt", label: "einen ___ sprechen", meaning: "nói một phương ngữ", answer: "Dialekt", note: "phân biệt với 'die Mundart' (từ trang trọng/địa phương hơn cho 'phương ngữ')." },
          { id: "vorteile2", label: "kognitive Vorteile", meaning: "lợi ích nhận thức", note: "kognitiv = liên quan đến tư duy, trí não; 'die kognitive Flexibilität fördern' = thúc đẩy sự linh hoạt tư duy." },
        ],
      },
      {
        id: "digitale-kommunikation",
        label: "Digitale Kommunikation",
        meaning: "giao tiếp số",
        children: [
          { id: "chatten", label: "über Messenger-Dienste kommunizieren", meaning: "giao tiếp qua các dịch vụ nhắn tin", synonyms: ["chatten und texten"] },
          { id: "videoanruf", label: "eine Videokonferenz abhalten", meaning: "tổ chức một cuộc họp video", synonyms: ["der Videoanruf"] },
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
              { id: "wa-ausdruck", label: "der Ausdruck", meaning: "cách diễn đạt", note: "'einen treffenden Ausdruck finden' = tìm được cách diễn đạt đúng ý." },
              { id: "wa-unterhaltung-sprache", label: "die Unterhaltung", meaning: "cuộc trò chuyện", synonyms: ["das Gespräch"] },
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
              { id: "wa-uebersetzen", label: "übersetzen", meaning: "dịch (ngôn ngữ)", note: "untrennbar (không tách): übersetzt, übersetzte, hat übersetzt." },
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
