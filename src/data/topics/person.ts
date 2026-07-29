import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "person",
  title: "Eine Person beschreiben",
  titleVi: "Miêu tả một người",
  description: "Aussehen, Charakter und Beziehung zu einer Person",
  color: "#4f46e5",
  level: "B1-B2",
  root: {
    id: "root",
    label: "Person beschreiben",
    meaning: "miêu tả một người",
    children: [
      {
        id: "aussehen",
        label: "Aussehen",
        meaning: "ngoại hình",
        children: [
          { id: "grossgewachsen", label: "großgewachsen sein", meaning: "cao lớn", synonyms: ["groß sein"] },
          { id: "schlank", label: "___ sein", meaning: "mảnh khảnh, thon gọn", answer: "schlank", synonyms: ["dünn"] },
          { id: "gepflegt", label: "gepflegt aussehen", meaning: "trông gọn gàng, chỉn chu", synonyms: ["ordentlich aussehen"] },
        ],
      },
      {
        id: "charakter",
        label: "Charakter",
        meaning: "tính cách",
        children: [
          { id: "freundlich", label: "freundlich und hilfsbereit", meaning: "thân thiện và nhiệt tình", synonyms: ["nett und offen"] },
          { id: "humorvoll", label: "___ sein", meaning: "hài hước", answer: "humorvoll", synonyms: ["lustig"] },
          { id: "zuverlaessig", label: "zuverlässig sein", meaning: "đáng tin cậy", note: "sich auf jemanden verlassen können." },
          { id: "ehrgeizig", label: "ehrgeizig sein", meaning: "có tham vọng, cầu tiến", synonyms: ["zielstrebig sein"] },
        ],
      },
      {
        id: "beziehung",
        label: "Beziehung",
        meaning: "mối quan hệ",
        children: [
          { id: "kennenlernen", label: "sich kennenlernen", meaning: "làm quen với nhau" },
          { id: "seit-jahren", label: "wir kennen uns seit ___ Jahren", meaning: "chúng tôi quen nhau đã ... năm", answer: "zehn" },
          { id: "vertrauen", label: "einander vertrauen", meaning: "tin tưởng lẫn nhau", note: "einander = lẫn nhau (dùng thay cho 'sich gegenseitig')." },
        ],
      },
      {
        id: "gemeinsame-aktivitaeten",
        label: "Gemeinsame Aktivitäten",
        meaning: "hoạt động chung",
        children: [
          { id: "treffen", label: "sich regelmäßig treffen", meaning: "thường xuyên gặp nhau" },
          { id: "erlebnisse-teilen", label: "Erlebnisse miteinander teilen", meaning: "chia sẻ trải nghiệm cùng nhau" },
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
              { id: "wa-eigenschaft", label: "die Eigenschaft", meaning: "đặc điểm/tính cách" },
              { id: "wa-persoenlichkeit", label: "die Persönlichkeit", meaning: "nhân cách" },
              { id: "wa-erscheinung", label: "die Erscheinung", meaning: "diện mạo" },
              { id: "wa-freundschaft", label: "die Freundschaft", meaning: "tình bạn" },
              { id: "wa-verhalten", label: "das Verhalten", meaning: "hành vi/cách cư xử" },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-einen-guten-eindruck-machen", label: "einen guten Eindruck machen", meaning: "gây ấn tượng tốt" },
              { id: "wa-ein-gutes-verhaeltnis-haben", label: "ein gutes Verhältnis zu jemandem haben", meaning: "có mối quan hệ tốt với ai đó" },
              { id: "wa-sinn-fuer-humor", label: "Sinn für Humor haben", meaning: "có khiếu hài hước" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-beschreiben", label: "beschreiben", meaning: "miêu tả", note: "unregelmäßig: beschreibt, beschrieb, hat beschrieben" },
              { id: "wa-wirken", label: "wirken auf + Akk.", meaning: "gây ấn tượng/tạo cảm giác với" },
              { id: "wa-sich-verstehen", label: "sich gut verstehen mit + Dat.", meaning: "hòa hợp tốt với" },
              { id: "wa-vertrauen-verb", label: "vertrauen + Dat.", meaning: "tin tưởng vào" },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-bekannt-person", label: "bekannt mit + Dat.", meaning: "quen biết với" },
              { id: "wa-befreundet", label: "befreundet mit + Dat.", meaning: "là bạn của" },
              { id: "wa-stolz-person", label: "stolz auf + Akk.", meaning: "tự hào về" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
