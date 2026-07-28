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
    ],
  },
};

export default topic;
