import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "kultur",
  title: "Kultur & Kunst",
  titleVi: "Văn hóa & Nghệ thuật",
  description: "Theater, Musik, Museen, Feste und interkulturelle Unterschiede",
  color: "#9333ea",
  level: "B1-B2",
  root: {
    id: "root",
    label: "Kultur",
    meaning: "văn hóa",
    children: [
      {
        id: "kunstformen",
        label: "Kunstformen",
        meaning: "các loại hình nghệ thuật",
        children: [
          { id: "theater", label: "das Theater", meaning: "nhà hát/kịch nghệ", synonyms: ["die Bühne"] },
          { id: "museum", label: "das ___", meaning: "bảo tàng", answer: "Museum" },
          { id: "musik", label: "die Musik", meaning: "âm nhạc" },
          { id: "literatur", label: "die Literatur", meaning: "văn học" },
        ],
      },
      {
        id: "feste",
        label: "Feste & Traditionen",
        meaning: "lễ hội & truyền thống",
        children: [
          { id: "weihnachten", label: "das Weihnachten", meaning: "lễ Giáng sinh" },
          { id: "brauchtum", label: "das ___", meaning: "phong tục tập quán", answer: "Brauchtum" },
          { id: "volksfest", label: "das Volksfest", meaning: "lễ hội dân gian", synonyms: ["das Oktoberfest"] },
        ],
      },
      {
        id: "interkulturell",
        label: "Interkulturelle Unterschiede",
        meaning: "khác biệt liên văn hóa",
        children: [
          { id: "wertvorstellungen", label: "die Wertvorstellungen", meaning: "quan niệm giá trị", note: "Wert (giá trị) + Vorstellung (quan niệm)." },
          { id: "toleranz", label: "die ___", meaning: "sự khoan dung", answer: "Toleranz" },
          { id: "integration", label: "die Integration", meaning: "sự hòa nhập", synonyms: ["die Eingliederung"] },
        ],
      },
      {
        id: "bedeutung",
        label: "Bedeutung von Kultur",
        meaning: "ý nghĩa của văn hóa",
        children: [
          { id: "identitaet", label: "die kulturelle Identität", meaning: "bản sắc văn hóa", synonyms: ["die kulturelle Zugehörigkeit"] },
          { id: "austausch", label: "der kulturelle Austausch", meaning: "trao đổi văn hóa" },
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
              { id: "wa-auffuehrung", label: "die Aufführung", meaning: "buổi biểu diễn" },
              { id: "wa-kuenstler", label: "der Künstler", meaning: "nghệ sĩ" },
              { id: "wa-ausstellung", label: "die Ausstellung", meaning: "triển lãm" },
              { id: "wa-brauch", label: "der Brauch", meaning: "tập tục" },
              { id: "wa-vielfalt", label: "die Vielfalt", meaning: "sự đa dạng" },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-eine-ausstellung-besuchen", label: "eine Ausstellung besuchen", meaning: "đi xem triển lãm" },
              { id: "wa-ein-fest-feiern", label: "ein Fest feiern", meaning: "tổ chức lễ hội" },
              { id: "wa-tradition-bewahren", label: "eine Tradition bewahren", meaning: "gìn giữ một truyền thống" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-auffuehren", label: "aufführen", meaning: "biểu diễn", note: "trennbar: führt auf, führte auf, hat aufgeführt" },
              { id: "wa-feiern", label: "feiern", meaning: "tổ chức lễ/ăn mừng" },
              { id: "wa-sich-interessieren", label: "sich interessieren für + Akk.", meaning: "quan tâm đến" },
              { id: "wa-bewahren", label: "bewahren", meaning: "gìn giữ" },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-bekannt-kultur", label: "bekannt für + Akk.", meaning: "nổi tiếng vì" },
              { id: "wa-typisch", label: "typisch für + Akk.", meaning: "đặc trưng cho" },
              { id: "wa-stolz-kultur", label: "stolz auf + Akk.", meaning: "tự hào về" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
