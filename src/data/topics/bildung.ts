import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "bildung",
  title: "Bildung",
  titleVi: "Giáo dục",
  description: "Schulsystem, Studium und lebenslanges Lernen",
  color: "#0f766e",
  level: "B2",
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
          { id: "ausbildung", label: "die duale Berufsausbildung", meaning: "học nghề song hành (lý thuyết và thực hành)", note: "kết hợp học tại trường nghề và thực tập tại doanh nghiệp." },
          { id: "studium", label: "das Studium", meaning: "việc học đại học", note: "ein Studium absolvieren/aufnehmen = hoàn thành/bắt đầu việc học đại học." },
        ],
      },
      {
        id: "vorteile",
        label: "Vorteile guter Bildung",
        meaning: "lợi ích giáo dục tốt",
        children: [
          { id: "chancen", label: "verbesserte Berufsaussichten", meaning: "triển vọng nghề nghiệp được cải thiện", synonyms: ["bessere Jobaussichten"] },
          { id: "selbststaendig2", label: "eigenständiges und kritisches Denken", meaning: "tư duy độc lập và phản biện", synonyms: ["kritisches Denkvermögen"] },
        ],
      },
      {
        id: "probleme",
        label: "Probleme",
        meaning: "vấn đề",
        children: [
          { id: "chancenungleichheit", label: "die ___", meaning: "bất bình đẳng cơ hội", answer: "Chancenungleichheit", note: "Chance (cơ hội) + Ungleichheit (sự bất bình đẳng)." },
          { id: "lehrermangel", label: "der akute Lehrermangel", meaning: "tình trạng thiếu giáo viên trầm trọng" },
          { id: "leistungsdruck", label: "der Leistungsdruck", meaning: "áp lực thành tích", synonyms: ["der Notendruck"], note: "unter Leistungsdruck stehen/leiden." },
        ],
      },
      {
        id: "lebenslang",
        label: "Lebenslanges Lernen",
        meaning: "học tập suốt đời",
        children: [
          { id: "weiterbildung", label: "die berufliche Weiterbildung", meaning: "đào tạo chuyên môn nâng cao" },
          { id: "onlinekurse", label: "digitale Lernangebote", meaning: "các khóa học/nội dung học trực tuyến", synonyms: ["die Onlinekurse"] },
          { id: "fremdsprachen", label: "___ erlernen", meaning: "trau dồi ngoại ngữ", answer: "Fremdsprachen" },
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
              { id: "wa-pruefung", label: "die Abschlussprüfung", meaning: "kỳ thi tốt nghiệp/kỳ thi cuối khóa", synonyms: ["die Prüfung"] },
              { id: "wa-stipendium", label: "das Stipendium", meaning: "học bổng", note: "ein Stipendium erhalten/beantragen (nhận/xin học bổng)." },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-eine-pruefung-ablegen", label: "eine Prüfung ablegen", meaning: "làm/tham gia một kỳ thi" },
              { id: "wa-abschluss-machen", label: "einen Abschluss erwerben", meaning: "đạt được một bằng cấp", synonyms: ["einen Abschluss machen"] },
              { id: "wa-wissen-erwerben", label: "fundiertes Wissen erwerben", meaning: "thu nhận kiến thức nền tảng vững chắc" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-unterrichten", label: "unterrichten", meaning: "giảng dạy", note: "jemanden in etwas unterrichten (dạy ai môn gì)." },
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
