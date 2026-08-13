import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "kultur",
  title: "Kultur & Kunst",
  titleVi: "Văn hóa & Nghệ thuật",
  description: "Theater, Musik, Museen, Feste und interkulturelle Unterschiede",
  color: "#9333ea",
  level: "B2",
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
          { id: "theater", label: "die darstellende Kunst", meaning: "nghệ thuật biểu diễn (sân khấu)", synonyms: ["die Bühnenkunst"], note: "Oberbegriff für Theater, Tanz, Oper etc." },
          { id: "museum", label: "die ___", meaning: "cuộc triển lãm bảo tàng", answer: "Museumsausstellung", synonyms: ["die Dauerausstellung"] },
          { id: "musik", label: "die zeitgenössische Musik", meaning: "âm nhạc đương đại", synonyms: ["die Klangkunst"] },
          { id: "literatur", label: "die Literatur", meaning: "văn học", note: "oft mit Genitiv: die Literatur des 20. Jahrhunderts." },
        ],
      },
      {
        id: "feste",
        label: "Feste & Traditionen",
        meaning: "lễ hội & truyền thống",
        children: [
          { id: "weihnachten", label: "das Brauchtum rund um Weihnachten", meaning: "phong tục xoay quanh lễ Giáng sinh", synonyms: ["der Weihnachtsbrauch"] },
          { id: "brauchtum", label: "das überlieferte ___", meaning: "phong tục tập quán được lưu truyền", answer: "Brauchtum" },
          { id: "volksfest", label: "das Volksfest", meaning: "lễ hội dân gian truyền thống", synonyms: ["das Traditionsfest"], note: "regional geprägte Großveranstaltung, z. B. das Oktoberfest." },
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
          { id: "austausch", label: "der interkulturelle Austausch", meaning: "trao đổi liên văn hóa", note: "sich austauschen mit + Dat. über + Akk." },
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
              { id: "wa-auffuehrung", label: "die Uraufführung", meaning: "buổi công diễn đầu tiên", synonyms: ["die Premiere"] },
              { id: "wa-kuenstler", label: "der Kulturschaffende", meaning: "người hoạt động sáng tạo văn hóa", synonyms: ["der Künstler"] },
              { id: "wa-ausstellung", label: "die Wanderausstellung", meaning: "triển lãm lưu động", synonyms: ["die Ausstellung"] },
              { id: "wa-brauch", label: "der überlieferte Brauch", meaning: "tập tục được lưu truyền", synonyms: ["der Ritus"] },
              { id: "wa-vielfalt", label: "die kulturelle Vielfalt", meaning: "sự đa dạng văn hóa", synonyms: ["die Pluralität"] },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-eine-ausstellung-besuchen", label: "eine Ausstellung besichtigen", meaning: "tham quan một triển lãm" },
              { id: "wa-ein-fest-feiern", label: "ein Fest ausrichten", meaning: "tổ chức/đứng ra làm lễ hội" },
              { id: "wa-tradition-bewahren", label: "eine Tradition pflegen und bewahren", meaning: "gìn giữ và vun đắp một truyền thống" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-auffuehren", label: "aufführen", meaning: "biểu diễn/công diễn", note: "trennbar: führt auf, führte auf, hat aufgeführt" },
              { id: "wa-feiern", label: "zelebrieren", meaning: "tổ chức trọng thể/ăn mừng", synonyms: ["feiern"], note: "gehobener als 'feiern', betont die Feierlichkeit." },
              { id: "wa-sich-interessieren", label: "sich begeistern für + Akk.", meaning: "say mê/hào hứng với", note: "stärker als 'sich interessieren für'." },
              { id: "wa-bewahren", label: "bewahren vor + Dat.", meaning: "gìn giữ, bảo vệ khỏi", note: "etwas vor dem Vergessen bewahren." },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-bekannt-kultur", label: "renommiert für + Akk.", meaning: "danh tiếng, nổi danh vì", synonyms: ["bekannt für + Akk."] },
              { id: "wa-typisch", label: "charakteristisch für + Akk.", meaning: "mang tính đặc trưng cho", synonyms: ["typisch für + Akk."] },
              { id: "wa-stolz-kultur", label: "stolz auf + Akk.", meaning: "tự hào về" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
