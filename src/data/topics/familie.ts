import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "familie",
  title: "Familie",
  titleVi: "Gia đình",
  description: "Familienformen, Erziehung und Generationen",
  color: "#db2777",
  level: "B2",
  root: {
    id: "root",
    label: "Familie",
    meaning: "gia đình",
    children: [
      {
        id: "formen",
        label: "Familienformen",
        meaning: "hình thức gia đình",
        children: [
          { id: "kernfamilie", label: "die Kernfamilie", meaning: "gia đình hạt nhân", synonyms: ["die Kleinfamilie"] },
          { id: "alleinerziehend", label: "___ Elternteil", meaning: "cha/mẹ đơn thân", answer: "alleinerziehendes", note: "alleinerziehend = allein + erziehen: nuôi con một mình." },
          { id: "patchwork", label: "die Patchworkfamilie", meaning: "gia đình ghép (tái hôn)", note: "Familie mit Kindern aus früheren Beziehungen." },
          { id: "grossfamilie", label: "die Großfamilie", meaning: "gia đình nhiều thế hệ", synonyms: ["die Mehrgenerationenfamilie"] },
        ],
      },
      {
        id: "erziehung",
        label: "Erziehung",
        meaning: "nuôi dạy con",
        children: [
          { id: "autoritaer", label: "autoritärer Erziehungsstil", meaning: "phong cách nuôi dạy độc đoán", synonyms: ["streng erziehen"] },
          { id: "liberal", label: "___ Erziehungsstil", meaning: "phong cách nuôi dạy tự do", answer: "liberaler" },
          { id: "werte", label: "die Werte vermitteln", meaning: "truyền đạt giá trị", synonyms: ["Werte weitergeben"] },
        ],
      },
      {
        id: "probleme",
        label: "Probleme",
        meaning: "vấn đề gia đình",
        children: [
          { id: "generationenkonflikt", label: "der Generationenkonflikt", meaning: "xung đột thế hệ", note: "Generation (thế hệ) + Konflikt (xung đột)." },
          { id: "zeitmangel", label: "der chronische Zeitmangel", meaning: "tình trạng thiếu thời gian kéo dài", synonyms: ["wenig Zeit haben"] },
          { id: "scheidung", label: "die ___", meaning: "sự ly hôn", answer: "Scheidung", synonyms: ["die Trennung"] },
        ],
      },
      {
        id: "wandel",
        label: "Wandel der Familie",
        meaning: "sự thay đổi của gia đình",
        children: [
          { id: "berufstaetigkeit", label: "Berufstätigkeit beider Elternteile", meaning: "cả hai cha mẹ đi làm", note: "Beruf (nghề) + tätig sein (đang làm)." },
          { id: "kinderbetreuung", label: "die Kinderbetreuung", meaning: "chăm sóc trẻ em", synonyms: ["die Kita (Kindertagesstätte)"] },
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
              { id: "wa-geschwister", label: "die Geschwister", meaning: "anh chị em" },
              { id: "wa-verwandte", label: "der/die Verwandte", meaning: "họ hàng" },
              { id: "wa-erziehung", label: "die Erziehung", meaning: "sự nuôi dạy" },
              { id: "wa-vertrauen", label: "das Vertrauensverhältnis", meaning: "mối quan hệ tin tưởng lẫn nhau", synonyms: ["das Vertrauen"] },
              { id: "wa-elternteil", label: "der Elternteil", meaning: "một trong hai cha/mẹ" },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-verantwortung-tragen", label: "Verantwortung für die Familie tragen", meaning: "gánh vác trách nhiệm gia đình" },
              { id: "wa-zeit-verbringen", label: "Zeit mit der Familie verbringen", meaning: "dành thời gian cho gia đình" },
              { id: "wa-ein-vorbild-sein", label: "ein Vorbild für die Kinder sein", meaning: "làm tấm gương cho con cái" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-erziehen", label: "erziehen", meaning: "nuôi dạy" },
              { id: "wa-sich-kuemmern", label: "sich kümmern um + Akk.", meaning: "chăm lo cho" },
              { id: "wa-grossziehen", label: "großziehen", meaning: "nuôi lớn", note: "trennbar, unregelmäßig: zieht groß, zog groß, hat großgezogen" },
              { id: "wa-unterstuetzen", label: "unterstützen", meaning: "hỗ trợ" },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-stolz", label: "stolz auf + Akk.", meaning: "tự hào về" },
              { id: "wa-verantwortlich-familie", label: "verantwortlich für + Akk.", meaning: "chịu trách nhiệm về" },
              { id: "wa-abhaengig", label: "abhängig von + Dat.", meaning: "phụ thuộc vào" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
