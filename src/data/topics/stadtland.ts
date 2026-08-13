import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "stadtland",
  title: "Stadt und Land",
  titleVi: "Thành thị & Nông thôn",
  description: "Vorteile und Nachteile des Lebens in der Stadt oder auf dem Land",
  color: "#ca8a04",
  level: "B2",
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
          { id: "arbeitsmoeglichkeiten", label: "ein breites Spektrum an Arbeitsmöglichkeiten", meaning: "phổ rộng các cơ hội việc làm", synonyms: ["gute Jobchancen"] },
          { id: "unterhaltung", label: "ein vielfältiges ___sangebot", meaning: "danh mục giải trí đa dạng phong phú", answer: "Unterhaltung", note: "'Unterhaltungsangebot' = danh mục các hình thức giải trí sẵn có." },
          { id: "infrastruktur", label: "eine gut ausgebaute Infrastruktur", meaning: "cơ sở hạ tầng được xây dựng tốt", note: "'ausgebaut' (đã được mở rộng/hoàn thiện) mang sắc thái cụ thể hơn 'gut'." },
        ],
      },
      {
        id: "stadt-nachteile",
        label: "Stadt: Nachteile",
        meaning: "thành thị: nhược điểm",
        children: [
          { id: "lebenshaltungskosten", label: "exorbitant hohe Lebenshaltungskosten", meaning: "chi phí sinh hoạt cao đến mức phi lý", note: "Leben (cuộc sống) + Haltung (duy trì) + Kosten (chi phí); 'exorbitant' = quá mức, phi lý." },
          { id: "luft-laerm", label: "Lärmbelästigung und ___", meaning: "ô nhiễm tiếng ồn và ô nhiễm không khí", answer: "Luftverschmutzung", note: "'Lärmbelästigung' (sự quấy nhiễu bởi tiếng ồn) trang trọng hơn 'Lärm'." },
          { id: "stress2", label: "ein von Hektik geprägter Alltag", meaning: "cuộc sống thường ngày bị chi phối bởi sự vội vã, hối hả", synonyms: ["stressiger Alltag"] },
        ],
      },
      {
        id: "land-vorteile",
        label: "Land: Vorteile",
        meaning: "nông thôn: ưu điểm",
        children: [
          { id: "ruhig", label: "beschaulich und idyllisch", meaning: "yên bình và thanh bình", synonyms: ["ruhig", "friedlich"], note: "'beschaulich' (thanh bình, tĩnh lặng) mang sắc thái văn chương hơn 'ruhig'." },
          { id: "frischeluft", label: "unverfälschte ___", meaning: "không khí trong lành, chưa bị ô nhiễm", answer: "Luft", note: "'unverfälscht' = nguyên chất, không bị pha tạp." },
          { id: "gemeinschaft", label: "ein enger Gemeinschaftssinn", meaning: "ý thức cộng đồng gắn kết", synonyms: ["ein starker Zusammenhalt"] },
        ],
      },
      {
        id: "land-nachteile",
        label: "Land: Nachteile",
        meaning: "nông thôn: nhược điểm",
        children: [
          { id: "wenigerjobs", label: "ein eingeschränktes Arbeitsplatzangebot", meaning: "nguồn việc làm bị hạn chế", synonyms: ["weniger Jobangebote"] },
          { id: "anbindung", label: "eine mangelhafte ___ an den ÖPNV", meaning: "kết nối giao thông công cộng thiếu sót/kém", answer: "Anbindung", note: "an + binden (kết nối): mức độ dễ tiếp cận phương tiện công cộng; 'mangelhaft' trang trọng hơn 'schlecht'." },
          { id: "langeweile", label: "mangelnde Abwechslung", meaning: "thiếu sự đổi mới, đơn điệu", synonyms: ["die Langeweile", "eintönig"] },
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
              { id: "wa-mieter", label: "der Mieter", meaning: "người thuê nhà", note: "đối lập với 'der Vermieter' (chủ nhà cho thuê)." },
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
              { id: "wa-ein-ruhiges-leben-fuehren", label: "ein zurückgezogenes Leben führen", meaning: "sống một cuộc sống ẩn dật, tách biệt", synonyms: ["ein ruhiges Leben führen"] },
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
