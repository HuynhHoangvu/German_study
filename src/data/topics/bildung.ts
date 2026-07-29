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
          { id: "chancen", label: "bessere Berufschancen", meaning: "cơ hội nghề nghiệp tốt hơn", synonyms: ["bessere Jobaussichten"] },
          { id: "selbststaendig2", label: "selbstständiges Denken", meaning: "tư duy độc lập", synonyms: ["kritisches Denken"] },
        ],
      },
      {
        id: "probleme",
        label: "Probleme",
        meaning: "vấn đề",
        children: [
          { id: "chancenungleichheit", label: "die ___", meaning: "bất bình đẳng cơ hội", answer: "Chancenungleichheit", note: "Chance (cơ hội) + Ungleichheit (sự bất bình đẳng)." },
          { id: "lehrermangel", label: "der Lehrermangel", meaning: "thiếu giáo viên" },
          { id: "leistungsdruck", label: "der Leistungsdruck", meaning: "áp lực thành tích", synonyms: ["der Notendruck"] },
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
              { id: "wa-lehrer", label: "der Lehrer / die Lehrerin", meaning: "giáo viên" },
              { id: "wa-schueler", label: "der Schüler / die Schülerin", meaning: "học sinh" },
              { id: "wa-note", label: "die Note", meaning: "điểm số" },
              { id: "wa-pruefung", label: "die Prüfung", meaning: "kỳ thi" },
              { id: "wa-stipendium", label: "das Stipendium", meaning: "học bổng" },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-eine-pruefung-ablegen", label: "eine Prüfung ablegen", meaning: "làm/tham gia một kỳ thi" },
              { id: "wa-abschluss-machen", label: "einen Abschluss machen", meaning: "hoàn thành một bằng cấp" },
              { id: "wa-wissen-erwerben", label: "Wissen erwerben", meaning: "thu nhận kiến thức" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-unterrichten", label: "unterrichten", meaning: "giảng dạy" },
              { id: "wa-bestehen", label: "bestehen", meaning: "vượt qua (kỳ thi)", note: "unregelmäßig: besteht, bestand, hat bestanden" },
              { id: "wa-durchfallen", label: "durchfallen", meaning: "trượt (kỳ thi)", note: "trennbar, unregelmäßig: fällt durch, fiel durch, ist durchgefallen" },
              { id: "wa-sich-vorbereiten", label: "sich vorbereiten auf + Akk.", meaning: "chuẩn bị cho" },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-interessiert", label: "interessiert an + Dat.", meaning: "quan tâm đến" },
              { id: "wa-begabt", label: "begabt für + Akk.", meaning: "có năng khiếu về" },
              { id: "wa-erfolgreich", label: "erfolgreich in + Dat.", meaning: "thành công trong" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
