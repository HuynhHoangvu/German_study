import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "person",
  title: "Eine Person beschreiben",
  titleVi: "Miêu tả một người",
  description: "Aussehen, Charakter und Beziehung zu einer Person",
  color: "#4f46e5",
  level: "B2",
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
          { id: "grossgewachsen", label: "hochgewachsen sein", meaning: "cao ráo, dong dỏng", synonyms: ["großgewachsen sein"] },
          { id: "schlank", label: "___ gebaut sein", meaning: "vóc dáng thon gọn, mảnh mai", answer: "schlank", synonyms: ["schmächtig"] },
          { id: "gepflegt", label: "ein gepflegtes Erscheinungsbild haben", meaning: "có ngoại hình chỉn chu, gọn gàng", synonyms: ["gepflegt aussehen"] },
        ],
      },
      {
        id: "charakter",
        label: "Charakter",
        meaning: "tính cách",
        children: [
          { id: "freundlich", label: "aufgeschlossen und hilfsbereit", meaning: "cởi mở và nhiệt tình giúp đỡ", synonyms: ["freundlich und zuvorkommend"] },
          { id: "humorvoll", label: "___ sein", meaning: "có óc hài hước tinh tế", answer: "humorvoll", synonyms: ["schlagfertig"], note: "schlagfertig = phản ứng dí dỏm, nhanh trí." },
          { id: "zuverlaessig", label: "zuverlässig sein", meaning: "đáng tin cậy", note: "sich auf jemanden verlassen können + Akk." },
          { id: "ehrgeizig", label: "ehrgeizig und zielstrebig", meaning: "có tham vọng và kiên định theo đuổi mục tiêu", synonyms: ["strebsam"] },
        ],
      },
      {
        id: "beziehung",
        label: "Beziehung",
        meaning: "mối quan hệ",
        children: [
          { id: "kennenlernen", label: "sich näher kennenlernen", meaning: "tìm hiểu, làm quen sâu hơn với nhau" },
          { id: "seit-jahren", label: "wir kennen uns seit ___ Jahren", meaning: "chúng tôi quen nhau đã ... năm", answer: "zehn" },
          { id: "vertrauen", label: "einander blind vertrauen", meaning: "tin tưởng tuyệt đối lẫn nhau", note: "einander = lẫn nhau (dùng thay cho 'sich gegenseitig'); blind vertrauen = tin tưởng tuyệt đối." },
        ],
      },
      {
        id: "gemeinsame-aktivitaeten",
        label: "Gemeinsame Aktivitäten",
        meaning: "hoạt động chung",
        children: [
          { id: "treffen", label: "sich regelmäßig treffen", meaning: "thường xuyên gặp gỡ nhau", note: "sich treffen mit + Dat." },
          { id: "erlebnisse-teilen", label: "gemeinsame Erlebnisse teilen", meaning: "cùng nhau chia sẻ những trải nghiệm chung" },
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
              { id: "wa-eigenschaft", label: "die Charaktereigenschaft", meaning: "nét tính cách", synonyms: ["die Eigenschaft"] },
              { id: "wa-persoenlichkeit", label: "die Persönlichkeit", meaning: "nhân cách, cá tính" },
              { id: "wa-erscheinung", label: "das äußere Erscheinungsbild", meaning: "diện mạo bên ngoài", synonyms: ["die Erscheinung"] },
              { id: "wa-freundschaft", label: "die enge Freundschaft", meaning: "tình bạn thân thiết", synonyms: ["die Vertrautheit"] },
              { id: "wa-verhalten", label: "das Verhalten gegenüber + Dat.", meaning: "hành vi/cách cư xử đối với", note: "gegenüber steht meist nach dem Bezugswort." },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-einen-guten-eindruck-machen", label: "einen bleibenden Eindruck hinterlassen", meaning: "để lại ấn tượng khó quên" },
              { id: "wa-ein-gutes-verhaeltnis-haben", label: "ein enges Verhältnis zu jemandem haben", meaning: "có mối quan hệ thân thiết với ai đó" },
              { id: "wa-sinn-fuer-humor", label: "einen ausgeprägten Sinn für Humor haben", meaning: "có khiếu hài hước rõ nét" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-beschreiben", label: "charakterisieren", meaning: "khắc họa tính cách/miêu tả đặc điểm", synonyms: ["beschreiben"], note: "gehobener als 'beschreiben', betont Charakterzüge." },
              { id: "wa-wirken", label: "wirken auf + Akk.", meaning: "gây ấn tượng/tạo cảm giác với" },
              { id: "wa-sich-verstehen", label: "sich blendend verstehen mit + Dat.", meaning: "hòa hợp cực kỳ tốt với", synonyms: ["sich gut verstehen mit + Dat."] },
              { id: "wa-vertrauen-verb", label: "vertrauen + Dat.", meaning: "tin tưởng vào", note: "Dativverb: jemandem vertrauen (nicht: jemanden)." },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-bekannt-person", label: "vertraut mit + Dat.", meaning: "thân quen, gần gũi với", synonyms: ["bekannt mit + Dat."] },
              { id: "wa-befreundet", label: "eng befreundet mit + Dat.", meaning: "là bạn thân thiết của" },
              { id: "wa-stolz-person", label: "stolz auf + Akk.", meaning: "tự hào về" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
