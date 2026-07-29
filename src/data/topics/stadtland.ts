import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "stadtland",
  title: "Stadt und Land",
  titleVi: "Thành thị & Nông thôn",
  description: "Vorteile und Nachteile des Lebens in der Stadt oder auf dem Land",
  color: "#ca8a04",
  level: "B1-B2",
  root: {
    id: "root",
    label: "Stadt und Land",
    meaning: "thành thị & nông thôn",
    children: [
      {
        id: "stadt-vorteile",
        label: "Stadt: Vorteile",
        meaning: "thành thị: ưu điểm",
        children: [
          { id: "arbeitsmoeglichkeiten", label: "viele Arbeitsmöglichkeiten", meaning: "nhiều cơ hội việc làm", synonyms: ["gute Jobchancen"] },
          { id: "unterhaltung", label: "vielfältige ___", meaning: "giải trí đa dạng", answer: "Unterhaltung" },
          { id: "infrastruktur", label: "gute Infrastruktur", meaning: "cơ sở hạ tầng tốt" },
        ],
      },
      {
        id: "stadt-nachteile",
        label: "Stadt: Nachteile",
        meaning: "thành thị: nhược điểm",
        children: [
          { id: "lebenshaltungskosten", label: "hohe Lebenshaltungskosten", meaning: "chi phí sinh hoạt cao", note: "Leben (cuộc sống) + Haltung (duy trì) + Kosten (chi phí)." },
          { id: "luft-laerm", label: "Lärm und ___", meaning: "tiếng ồn và ô nhiễm", answer: "Luftverschmutzung" },
          { id: "stress2", label: "stressiger Alltag", meaning: "cuộc sống thường ngày căng thẳng" },
        ],
      },
      {
        id: "land-vorteile",
        label: "Land: Vorteile",
        meaning: "nông thôn: ưu điểm",
        children: [
          { id: "ruhig", label: "ruhig und idyllisch", meaning: "yên tĩnh và thanh bình", synonyms: ["friedlich"] },
          { id: "frischeluft", label: "frische ___", meaning: "không khí trong lành", answer: "Luft" },
          { id: "gemeinschaft", label: "engere Gemeinschaft", meaning: "cộng đồng gắn kết hơn", synonyms: ["ein starker Zusammenhalt"] },
        ],
      },
      {
        id: "land-nachteile",
        label: "Land: Nachteile",
        meaning: "nông thôn: nhược điểm",
        children: [
          { id: "wenigerjobs", label: "weniger Jobangebote", meaning: "ít cơ hội việc làm hơn" },
          { id: "anbindung", label: "schlechte ___ an den ÖPNV", meaning: "kết nối giao thông công cộng kém", answer: "Anbindung", note: "an + binden (kết nối): mức độ dễ tiếp cận phương tiện công cộng." },
          { id: "langeweile", label: "wenig Abwechslung", meaning: "ít sự đổi mới/nhàm chán", synonyms: ["die Langeweile"] },
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
              { id: "wa-vorort", label: "der Vorort", meaning: "vùng ngoại ô" },
              { id: "wa-nachbarschaft", label: "die Nachbarschaft", meaning: "khu phố/hàng xóm" },
              { id: "wa-umgebung", label: "die Umgebung", meaning: "khu vực xung quanh" },
              { id: "wa-mieter", label: "der Mieter", meaning: "người thuê nhà" },
              { id: "wa-landschaft", label: "die Landschaft", meaning: "phong cảnh" },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-aufs-land-ziehen", label: "aufs Land ziehen", meaning: "chuyển về nông thôn sống" },
              { id: "wa-in-die-stadt-ziehen", label: "in die Stadt ziehen", meaning: "chuyển lên thành phố sống" },
              { id: "wa-ein-ruhiges-leben-fuehren", label: "ein ruhiges Leben führen", meaning: "sống một cuộc sống yên bình" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-umziehen", label: "umziehen", meaning: "chuyển nhà/chuyển chỗ ở", note: "trennbar, unregelmäßig: zieht um, zog um, ist umgezogen" },
              { id: "wa-pendeln", label: "pendeln", meaning: "đi lại (giữa nơi ở và nơi làm)" },
              { id: "wa-sich-niederlassen", label: "sich niederlassen", meaning: "định cư/an cư" },
              { id: "wa-genissen-land", label: "genießen", meaning: "tận hưởng", note: "unregelmäßig: genießt, genoss, hat genossen" },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-umgeben", label: "umgeben von + Dat.", meaning: "được bao quanh bởi" },
              { id: "wa-abhaengig-stadtland", label: "abhängig von + Dat.", meaning: "phụ thuộc vào" },
              { id: "wa-weit-entfernt", label: "weit entfernt von + Dat.", meaning: "cách xa" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
