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
          { id: "bewusstlosigkeit", label: "die Bewusstlosigkeit", meaning: "sự bất tỉnh", note: "bewusst (có ý thức) + los (mất đi) + Bewusstlosigkeit." },
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
          { id: "rettungswagen", label: "der Rettungswagen", meaning: "xe cấp cứu", synonyms: ["der Krankenwagen"] },
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
              { id: "wa-verletzte", label: "der/die Verletzte", meaning: "người bị thương" },
              { id: "wa-ersthelfer", label: "der Ersthelfer", meaning: "người sơ cứu" },
              { id: "wa-gefahr", label: "die Gefahr", meaning: "nguy hiểm" },
              { id: "wa-atemstillstand", label: "der Atemstillstand", meaning: "ngừng thở" },
              { id: "wa-blutung", label: "die Blutung", meaning: "sự chảy máu" },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-erste-hilfe-leisten", label: "erste Hilfe leisten", meaning: "sơ cứu" },
              { id: "wa-den-notruf-waehlen", label: "den Notruf wählen", meaning: "gọi số cấp cứu" },
              { id: "wa-in-sicherheit-bringen", label: "jemanden in Sicherheit bringen", meaning: "đưa ai đó đến nơi an toàn" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-retten", label: "retten", meaning: "cứu" },
              { id: "wa-verletzen", label: "sich verletzen", meaning: "bị thương" },
              { id: "wa-bluten", label: "bluten", meaning: "chảy máu" },
              { id: "wa-reagieren", label: "reagieren auf + Akk.", meaning: "phản ứng với" },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-bewusstlos", label: "bewusstlos sein", meaning: "bất tỉnh" },
              { id: "wa-verantwortlich-notfall", label: "verantwortlich für + Akk.", meaning: "chịu trách nhiệm về" },
              { id: "wa-bereit", label: "bereit für + Akk.", meaning: "sẵn sàng cho" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
