import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "wohnen",
  title: "Wohnen",
  titleVi: "Nhà ở",
  description: "Wohnformen, Wohnungssuche und Wohnungsmarkt",
  color: "#b45309",
  level: "B1-B2",
  root: {
    id: "root",
    label: "Wohnen",
    meaning: "nhà ở",
    children: [
      {
        id: "wohnformen",
        label: "Wohnformen",
        meaning: "hình thức nhà ở",
        children: [
          { id: "wohnung", label: "die Wohnung", meaning: "căn hộ" },
          { id: "wg", label: "die ___", meaning: "ở ghép", answer: "Wohngemeinschaft", note: "kurz: WG" },
          { id: "einfamilienhaus", label: "das Einfamilienhaus", meaning: "nhà ở riêng (một gia đình)" },
          { id: "miete", label: "zur Miete wohnen", meaning: "ở nhà thuê" },
        ],
      },
      {
        id: "wohnungssuche",
        label: "Wohnungssuche",
        meaning: "tìm nhà",
        children: [
          { id: "makler", label: "der Makler", meaning: "môi giới nhà đất" },
          { id: "besichtigung", label: "die ___", meaning: "xem nhà", answer: "Besichtigung" },
          { id: "kaution", label: "die Kaution", meaning: "tiền đặt cọc" },
        ],
      },
      {
        id: "probleme",
        label: "Probleme",
        meaning: "vấn đề",
        children: [
          { id: "mietpreise", label: "steigende Mietpreise", meaning: "giá thuê nhà tăng", synonyms: ["die Mietexplosion"] },
          { id: "wohnungsmangel", label: "der Wohnungsmangel", meaning: "thiếu nhà ở", synonyms: ["die Wohnungsnot"] },
          { id: "gentrifizierung", label: "die Gentrifizierung", meaning: "quá trình đô thị hóa/nâng cấp khu dân cư", note: "khu dân cư cũ được nâng cấp, khiến giá thuê tăng và cư dân cũ phải chuyển đi." },
        ],
      },
      {
        id: "loesungen",
        label: "Lösungen",
        meaning: "giải pháp",
        children: [
          { id: "sozialwohnungen", label: "mehr ___ bauen", meaning: "xây thêm nhà ở xã hội", answer: "Sozialwohnungen" },
          { id: "mietpreisbremse", label: "die Mietpreisbremse", meaning: "trần giá thuê nhà" },
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
              { id: "wa-vermieter", label: "der Vermieter", meaning: "chủ nhà cho thuê" },
              { id: "wa-mietvertrag", label: "der Mietvertrag", meaning: "hợp đồng thuê nhà" },
              { id: "wa-nebenkosten", label: "die Nebenkosten", meaning: "chi phí phụ (điện nước...)" },
              { id: "wa-umzug", label: "der Umzug", meaning: "sự chuyển nhà" },
              { id: "wa-vermietung", label: "die Vermietung", meaning: "việc cho thuê" },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-eine-wohnung-mieten", label: "eine Wohnung mieten", meaning: "thuê một căn hộ" },
              { id: "wa-den-mietvertrag-unterschreiben", label: "den Mietvertrag unterschreiben", meaning: "ký hợp đồng thuê nhà" },
              { id: "wa-in-eine-neue-wohnung-ziehen", label: "in eine neue Wohnung ziehen", meaning: "chuyển đến căn hộ mới" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-mieten", label: "mieten", meaning: "thuê (nhà)" },
              { id: "wa-vermieten", label: "vermieten", meaning: "cho thuê" },
              { id: "wa-einrichten", label: "einrichten", meaning: "trang trí/bài trí nội thất", note: "trennbar: richtet ein, richtete ein, hat eingerichtet" },
              { id: "wa-renovieren", label: "renovieren", meaning: "cải tạo/tân trang" },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-zufrieden-wohnen", label: "zufrieden mit + Dat.", meaning: "hài lòng với (chỗ ở)" },
              { id: "wa-verantwortlich-wohnen", label: "verantwortlich für + Akk.", meaning: "chịu trách nhiệm về" },
              { id: "wa-abhaengig-wohnen", label: "abhängig von + Dat.", meaning: "phụ thuộc vào" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
