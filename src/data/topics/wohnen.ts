import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "wohnen",
  title: "Wohnen",
  titleVi: "Nhà ở",
  description: "Wohnformen, Wohnungssuche und Wohnungsmarkt",
  color: "#b45309",
  level: "B2",
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
          { id: "wohnung", label: "die Eigentumswohnung", meaning: "căn hộ sở hữu (mua đứt)", synonyms: ["die Mietwohnung"] },
          { id: "wg", label: "die ___", meaning: "ở ghép", answer: "Wohngemeinschaft", note: "kurz: WG; Kollokation: 'in einer WG wohnen/leben'." },
          { id: "einfamilienhaus", label: "das Einfamilienhaus", meaning: "nhà ở riêng (một gia đình)", synonyms: ["das Mehrfamilienhaus"] },
          { id: "miete", label: "zur Miete wohnen", meaning: "ở nhà thuê", synonyms: ["im Eigenheim wohnen"] },
        ],
      },
      {
        id: "wohnungssuche",
        label: "Wohnungssuche",
        meaning: "tìm nhà",
        children: [
          { id: "makler", label: "der Immobilienmakler", meaning: "môi giới bất động sản" },
          { id: "besichtigung", label: "die ___", meaning: "xem nhà", answer: "Besichtigung" },
          { id: "kaution", label: "die Kaution hinterlegen", meaning: "đặt tiền cọc", note: "Verb + Nomen-Kollokation; hinterlegen = ký gửi, đặt cọc." },
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
          { id: "mietpreisbremse", label: "die Mietpreisbremse verschärfen", meaning: "siết chặt quy định trần giá thuê nhà" },
        ],
      },
      {
        id: "trends",
        label: "Aktuelle Trend-Themen",
        meaning: "các chủ đề xu hướng (dùng cho phần Nói/Viết Teil 1)",
        children: [
          {
            id: "trend-hotelmama",
            label: "Hotel Mama",
            meaning: "thanh niên sống chung với bố mẹ quá lâu",
            children: [
              {
                id: "trend-hotelmama-vorteile", label: "Vorteile", meaning: "ưu điểm",
                children: [
                  { id: "hm-v1", label: "keine Mietkosten und finanzielle Entlastung", meaning: "không tốn tiền thuê nhà, giảm gánh nặng tài chính" },
                  { id: "hm-v2", label: "mehr Zeit, um Geld für später anzusparen", meaning: "có nhiều thời gian hơn để tiết kiệm tiền cho tương lai" },
                  { id: "hm-v3", label: "die vertraute Umgebung und emotionale Unterstützung", meaning: "môi trường quen thuộc và sự hỗ trợ về tinh thần" },
                ],
              },
              {
                id: "trend-hotelmama-nachteile", label: "Nachteile", meaning: "nhược điểm",
                children: [
                  { id: "hm-n1", label: "mangelnde Privatsphäre und Unabhängigkeit", meaning: "thiếu không gian riêng tư và sự độc lập" },
                  { id: "hm-n2", label: "der verzögerte Schritt ins eigenständige Leben", meaning: "chậm trễ trong việc bước vào cuộc sống tự lập" },
                  { id: "hm-n3", label: "mögliche Konflikte wegen unterschiedlicher Lebensgewohnheiten", meaning: "dễ xảy ra mâu thuẫn do thói quen sống khác nhau" },
                ],
              },
              {
                id: "trend-hotelmama-alt", label: "Alternativen / Möglichkeiten", meaning: "giải pháp thay thế",
                children: [
                  { id: "hm-a1", label: "eine kleine, günstige Wohnung mit Freunden teilen", meaning: "ở ghép căn hộ nhỏ, giá rẻ cùng bạn bè" },
                  { id: "hm-a2", label: "sich schrittweise finanziell unabhängig machen", meaning: "dần dần tự chủ về tài chính" },
                ],
              },
              {
                id: "trend-hotelmama-vn", label: "Situation in Vietnam", meaning: "tình hình ở Việt Nam",
                children: [
                  { id: "hm-vn1", label: "aus kultureller Tradition bleiben viele junge Menschen lange im Elternhaus", meaning: "do truyền thống văn hóa, nhiều bạn trẻ ở lại nhà bố mẹ rất lâu" },
                  { id: "hm-vn2", label: "in Großstädten wagen immer mehr junge Leute den Auszug", meaning: "ở các thành phố lớn, ngày càng nhiều bạn trẻ dám ra ở riêng" },
                ],
              },
            ],
          },
          {
            id: "trend-wg",
            label: "Wohngemeinschaft (WG)",
            meaning: "sống trong căn hộ chia sẻ",
            children: [
              {
                id: "trend-wg-vorteile", label: "Vorteile", meaning: "ưu điểm",
                children: [
                  { id: "wg-v1", label: "geteilte Mietkosten senken die finanzielle Belastung", meaning: "chia sẻ tiền thuê giúp giảm gánh nặng tài chính" },
                  { id: "wg-v2", label: "soziale Kontakte und gegenseitige Unterstützung im Alltag", meaning: "có bạn bè và hỗ trợ lẫn nhau trong sinh hoạt hằng ngày" },
                  { id: "wg-v3", label: "mehr Unabhängigkeit vom Elternhaus", meaning: "độc lập hơn với gia đình bố mẹ" },
                ],
              },
              {
                id: "trend-wg-nachteile", label: "Nachteile", meaning: "nhược điểm",
                children: [
                  { id: "wg-n1", label: "Konflikte wegen Sauberkeit oder Lautstärke", meaning: "mâu thuẫn vì vấn đề vệ sinh hoặc tiếng ồn" },
                  { id: "wg-n2", label: "weniger Privatsphäre als in einer eigenen Wohnung", meaning: "ít riêng tư hơn so với ở căn hộ riêng" },
                ],
              },
              {
                id: "trend-wg-alt", label: "Alternativen / Möglichkeiten", meaning: "giải pháp thay thế",
                children: [
                  { id: "wg-a1", label: "eine eigene, kleinere Wohnung allein beziehen", meaning: "tự thuê một căn hộ nhỏ hơn, ở một mình" },
                  { id: "wg-a2", label: "klare Regeln für das Zusammenleben vereinbaren", meaning: "thỏa thuận quy tắc rõ ràng cho việc sống chung" },
                ],
              },
              {
                id: "trend-wg-vn", label: "Situation in Vietnam", meaning: "tình hình ở Việt Nam",
                children: [
                  { id: "wg-vn1", label: "besonders unter Studierenden und Berufseinsteigern in den Großstädten beliebt", meaning: "phổ biến đặc biệt trong sinh viên và người mới đi làm ở các thành phố lớn" },
                ],
              },
            ],
          },
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
              { id: "wa-nebenkosten", label: "die Nebenkostenabrechnung", meaning: "bảng quyết toán chi phí phụ (điện nước...)" },
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
              { id: "wa-vermieten", label: "vermieten", meaning: "cho thuê", note: "trennbar? nein — untrennbares Präfix ver-; Kollokation: 'eine Wohnung an jmdn. vermieten'." },
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
