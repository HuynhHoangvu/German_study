import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "technologie",
  title: "Technologie & Medien",
  titleVi: "Công nghệ & truyền thông",
  description: "Digitalisierung, soziale Medien und ihre Auswirkungen",
  color: "#4338ca",
  level: "B1-B2",
  root: {
    id: "root",
    label: "Technologie",
    meaning: "công nghệ",
    children: [
      {
        id: "digitalisierung",
        label: "Digitalisierung",
        meaning: "số hóa",
        children: [
          { id: "smartphone", label: "das Smartphone", meaning: "điện thoại thông minh" },
          { id: "kuenstlicheintelligenz", label: "die ___", meaning: "trí tuệ nhân tạo", answer: "künstliche Intelligenz", note: "kurz: KI" },
          { id: "homeoffice2", label: "das digitale Arbeiten", meaning: "làm việc số hóa" },
        ],
      },
      {
        id: "sozialemedien",
        label: "Soziale Medien",
        meaning: "mạng xã hội",
        children: [
          { id: "vernetzung", label: "die Vernetzung", meaning: "kết nối", synonyms: ["die Verbindung"] },
          { id: "informationsaustausch", label: "der ___", meaning: "trao đổi thông tin", answer: "Informationsaustausch" },
          { id: "sucht", label: "die Social-Media-Sucht", meaning: "nghiện mạng xã hội", note: "Sucht = chứng nghiện, dùng cho nhiều loại (Handysucht, Spielsucht...)." },
        ],
      },
      {
        id: "risiken",
        label: "Risiken",
        meaning: "rủi ro",
        children: [
          { id: "datenschutz", label: "der Datenschutz", meaning: "bảo mật dữ liệu", synonyms: ["der Datenmissbrauch (Gegenteil)"] },
          { id: "fakenews", label: "die Fake News", meaning: "tin giả", synonyms: ["die Falschmeldung"] },
          { id: "cybermobbing", label: "das ___", meaning: "bắt nạt trên mạng", answer: "Cybermobbing" },
        ],
      },
      {
        id: "vorteile",
        label: "Vorteile",
        meaning: "lợi ích",
        children: [
          { id: "zugang", label: "schneller Informationszugang", meaning: "truy cập thông tin nhanh" },
          { id: "effizienz", label: "höhere Effizienz", meaning: "hiệu suất cao hơn" },
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
              { id: "wa-geraet", label: "das Gerät", meaning: "thiết bị" },
              { id: "wa-anwendung", label: "die Anwendung / App", meaning: "ứng dụng" },
              { id: "wa-datenschutz-n", label: "die Privatsphäre", meaning: "quyền riêng tư" },
              { id: "wa-netzwerk", label: "das Netzwerk", meaning: "mạng lưới" },
              { id: "wa-erfindung", label: "die Erfindung", meaning: "phát minh" },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-eine-app-herunterladen", label: "eine App herunterladen", meaning: "tải xuống một ứng dụng" },
              { id: "wa-daten-schuetzen", label: "persönliche Daten schützen", meaning: "bảo vệ dữ liệu cá nhân" },
              { id: "wa-mit-der-zeit-gehen", label: "mit der Zeit gehen", meaning: "bắt kịp thời đại" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-herunterladen", label: "herunterladen", meaning: "tải xuống", note: "trennbar, unregelmäßig: lädt herunter, lud herunter, hat heruntergeladen" },
              { id: "wa-vernetzen", label: "sich vernetzen mit + Dat.", meaning: "kết nối với" },
              { id: "wa-programmieren", label: "programmieren", meaning: "lập trình" },
              { id: "wa-abhaengen", label: "abhängen von + Dat.", meaning: "phụ thuộc vào", note: "trennbar, unregelmäßig: hängt ab, hing ab, hat abgehangen" },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-abhaengig-technik", label: "abhängig von + Dat.", meaning: "phụ thuộc vào (công nghệ)" },
              { id: "wa-vertraut-technik", label: "vertraut mit + Dat.", meaning: "quen thuộc với" },
              { id: "wa-anfaellig-technik", label: "anfällig für + Akk.", meaning: "dễ bị (lỗi, virus...)" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
