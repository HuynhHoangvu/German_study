import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "notfall",
  title: "Notfall & Erste Hilfe",
  titleVi: "Cấp cứu & Sơ cứu",
  description: "Notfälle, Unfälle und Erste-Hilfe-Maßnahmen",
  color: "#dc2626",
  level: "B2",
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
          { id: "unfall", label: "der Unfall mit Personenschaden", meaning: "tai nạn gây thương tích cho người", synonyms: ["der Verkehrsunfall"] },
          { id: "herzinfarkt", label: "der ___", meaning: "nhồi máu cơ tim", answer: "Herzinfarkt" },
          { id: "verbrennung", label: "die Verbrennung zweiten Grades", meaning: "vết bỏng độ hai", note: "Grade der Verbrennung: ersten, zweiten, dritten Grades." },
          { id: "bewusstlosigkeit", label: "die Bewusstlosigkeit", meaning: "sự bất tỉnh", note: "bewusst (có ý thức) + los (mất đi, hậu tố phủ định) → bewusstlos → Bewusstlosigkeit." },
        ],
      },
      {
        id: "erste-hilfe",
        label: "Erste-Hilfe-Maßnahmen",
        meaning: "biện pháp sơ cứu",
        children: [
          { id: "wiederbelebung", label: "die Herz-Lungen-Wiederbelebung", meaning: "hồi sức tim phổi", synonyms: ["die Reanimation"], note: "Abkürzung: HLW." },
          { id: "erstickung", label: "erste Hilfe bei drohender ___", meaning: "sơ cứu khi có nguy cơ nghẹt thở", answer: "Erstickung" },
          { id: "stabile-seitenlage", label: "die stabile Seitenlage", meaning: "tư thế hồi phục nằm nghiêng", note: "wird bei bewusstlosen, aber atmenden Personen angewendet." },
        ],
      },
      {
        id: "hilfe-rufen",
        label: "Hilfe rufen",
        meaning: "gọi trợ giúp",
        children: [
          { id: "rettungswagen", label: "der Rettungswagen anfordern", meaning: "gọi xe cấp cứu đến", synonyms: ["den Krankenwagen alarmieren"] },
          { id: "notruf", label: "den ___ absetzen", meaning: "thực hiện cuộc gọi cấp cứu (112)", answer: "Notruf", note: "einen Notruf absetzen = gọi báo khẩn cấp một cách trang trọng." },
          { id: "notaufnahme2", label: "die Notaufnahme", meaning: "khoa cấp cứu", note: "in die Notaufnahme eingeliefert werden." },
        ],
      },
      {
        id: "vorbeugung",
        label: "Vorbeugung",
        meaning: "phòng ngừa",
        children: [
          { id: "erstehilfekurs", label: "der Erste-Hilfe-Kurs absolvieren", meaning: "hoàn thành khóa học sơ cứu", note: "einen Kurs absolvieren = học và hoàn tất khóa học." },
          { id: "verbandskasten", label: "der Verbandskasten", meaning: "hộp sơ cứu", synonyms: ["das Erste-Hilfe-Set"] },
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
              { id: "wa-verletzte", label: "der/die Schwerverletzte", meaning: "người bị thương nặng", synonyms: ["der/die Verletzte"] },
              { id: "wa-ersthelfer", label: "der Ersthelfer", meaning: "người sơ cứu ban đầu", note: "gesetzliche Pflicht in Deutschland: Erste Hilfe zu leisten." },
              { id: "wa-gefahr", label: "die Lebensgefahr", meaning: "nguy hiểm đến tính mạng", synonyms: ["die akute Gefahr"] },
              { id: "wa-atemstillstand", label: "der Atemstillstand", meaning: "ngừng thở", synonyms: ["der Kreislaufstillstand"] },
              { id: "wa-blutung", label: "die starke Blutung", meaning: "sự chảy máu nghiêm trọng", synonyms: ["die Verblutung"] },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-erste-hilfe-leisten", label: "erste Hilfe leisten", meaning: "tiến hành sơ cứu" },
              { id: "wa-den-notruf-waehlen", label: "den Notruf absetzen", meaning: "thực hiện cuộc gọi báo khẩn cấp" },
              { id: "wa-in-sicherheit-bringen", label: "jemanden in Sicherheit bringen", meaning: "đưa ai đó đến nơi an toàn" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-retten", label: "jemanden vor dem Ertrinken retten", meaning: "cứu ai khỏi đuối nước", note: "retten vor + Dat." },
              { id: "wa-verletzen", label: "sich schwer verletzen", meaning: "bị thương nặng", synonyms: ["sich verletzen"] },
              { id: "wa-bluten", label: "stark bluten", meaning: "chảy máu nhiều" },
              { id: "wa-reagieren", label: "besonnen reagieren auf + Akk.", meaning: "phản ứng bình tĩnh, sáng suốt trước", note: "besonnen = giữ bình tĩnh, sáng suốt trong tình huống khẩn cấp." },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-bewusstlos", label: "bewusstlos sein", meaning: "bất tỉnh" },
              { id: "wa-verantwortlich-notfall", label: "verantwortlich für + Akk.", meaning: "chịu trách nhiệm về" },
              { id: "wa-bereit", label: "gewappnet für + Akk.", meaning: "chuẩn bị sẵn sàng, ứng phó tốt với", synonyms: ["bereit für + Akk."] },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
