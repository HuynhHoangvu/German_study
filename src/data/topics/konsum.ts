import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "konsum",
  title: "Konsum & Geld",
  titleVi: "Tiêu dùng & Tiền bạc",
  description: "Einkaufsgewohnheiten, Online-Shopping, Sparen und Konsumgesellschaft",
  color: "#16a34a",
  level: "B2",
  root: {
    id: "root",
    label: "Konsum & Geld",
    meaning: "tiêu dùng & tiền bạc",
    children: [
      {
        id: "einkaufen",
        label: "Einkaufsgewohnheiten",
        meaning: "thói quen mua sắm",
        children: [
          { id: "onlineshopping", label: "der Online-Konsum", meaning: "tiêu dùng trực tuyến", synonyms: ["das Online-Shopping"] },
          { id: "werbung", label: "die ___", meaning: "quảng cáo", answer: "Werbung", synonyms: ["die Reklame"], note: "gezielte Werbung = quảng cáo nhắm mục tiêu." },
          { id: "impulskauf", label: "der Impulskauf", meaning: "mua sắm bốc đồng", note: "Impuls (bốc đồng) + Kauf (việc mua): eine spontane Kaufentscheidung ohne vorheriges Abwägen." },
        ],
      },
      {
        id: "finanzen",
        label: "Finanzen",
        meaning: "tài chính",
        children: [
          { id: "sparen", label: "Rücklagen bilden", meaning: "tích lũy khoản dự phòng", synonyms: ["das Sparen"] },
          { id: "schulden", label: "die ___", meaning: "nợ nần", answer: "Schulden", note: "in die Schulden geraten = lâm vào cảnh nợ nần; verschuldet sein = bị mắc nợ." },
          { id: "kredit", label: "der Kredit", meaning: "khoản vay", synonyms: ["das Darlehen"] },
          { id: "budget", label: "ein Budget veranschlagen", meaning: "dự trù ngân sách", synonyms: ["das Budget planen"] },
        ],
      },
      {
        id: "konsumgesellschaft",
        label: "Konsumgesellschaft",
        meaning: "xã hội tiêu dùng",
        children: [
          { id: "ueberkonsum", label: "der Überkonsum", meaning: "tiêu dùng quá mức" },
          { id: "nachhaltiger", label: "___ konsumieren", meaning: "tiêu dùng bền vững", answer: "nachhaltig" },
          { id: "wegwerfgesellschaft", label: "die Wegwerfgesellschaft", meaning: "xã hội tiêu xài rồi vứt bỏ" },
        ],
      },
      {
        id: "verbraucherschutz",
        label: "Verbraucherschutz",
        meaning: "bảo vệ người tiêu dùng",
        children: [
          { id: "garantie", label: "die Gewährleistung", meaning: "trách nhiệm bảo hành theo luật định", synonyms: ["die Garantie"] },
          { id: "widerrufsrecht", label: "das Widerrufsrecht", meaning: "quyền hủy đơn hàng", note: "innerhalb der Widerrufsfrist vom Vertrag zurücktreten." },
        ],
      },
      {
        id: "trends",
        label: "Aktuelle Trend-Themen",
        meaning: "các chủ đề xu hướng (dùng cho phần Nói/Viết Teil 1)",
        children: [
          {
            id: "trend-bargeldlos",
            label: "Bargeldloses Bezahlen",
            meaning: "thanh toán không dùng tiền mặt",
            children: [
              {
                id: "trend-bargeldlos-vorteile", label: "Vorteile", meaning: "ưu điểm",
                children: [
                  { id: "bz-v1", label: "schnellere und bequemere Zahlungsabwicklung", meaning: "thanh toán nhanh và tiện lợi hơn" },
                  { id: "bz-v2", label: "die Ausgaben lassen sich leichter nachverfolgen", meaning: "dễ theo dõi chi tiêu hơn" },
                  { id: "bz-v3", label: "man muss kein Bargeld mit sich führen", meaning: "không cần mang theo tiền mặt" },
                ],
              },
              {
                id: "trend-bargeldlos-nachteile", label: "Nachteile", meaning: "nhược điểm",
                children: [
                  { id: "bz-n1", label: "die Gefahr des Datenmissbrauchs", meaning: "nguy cơ dữ liệu bị lạm dụng" },
                  { id: "bz-n2", label: "man verliert schneller den Überblick über die Ausgaben", meaning: "dễ mất kiểm soát chi tiêu hơn" },
                  { id: "bz-n3", label: "ältere Menschen tun sich oft schwer mit der Umstellung", meaning: "người lớn tuổi thường gặp khó khăn khi chuyển đổi" },
                ],
              },
              {
                id: "trend-bargeldlos-alt", label: "Alternativen / Möglichkeiten", meaning: "giải pháp thay thế",
                children: [
                  { id: "bz-a1", label: "eine Kombination aus Bargeld und digitalen Zahlungsmitteln", meaning: "kết hợp tiền mặt và phương thức thanh toán số" },
                  { id: "bz-a2", label: "ein festes Ausgabenlimit pro Monat setzen", meaning: "đặt hạn mức chi tiêu cố định hằng tháng" },
                ],
              },
              {
                id: "trend-bargeldlos-vn", label: "Situation in Vietnam", meaning: "tình hình ở Việt Nam",
                children: [
                  { id: "bz-vn1", label: "das bargeldlose Bezahlen per App verbreitet sich rasant, vor allem in den Großstädten", meaning: "thanh toán qua ứng dụng đang lan rộng nhanh chóng, nhất là ở các thành phố lớn" },
                  { id: "bz-vn2", label: "auf dem Land wird nach wie vor überwiegend mit Bargeld bezahlt", meaning: "ở nông thôn vẫn chủ yếu thanh toán bằng tiền mặt" },
                ],
              },
            ],
          },
          {
            id: "trend-onlineshop",
            label: "Online-Shopping vs. Einkaufen im traditionellen Geschäft",
            meaning: "mua sắm trực tuyến vs. mua sắm ở cửa hàng truyền thống",
            children: [
              {
                id: "trend-onlineshop-vorteile", label: "Vorteile", meaning: "ưu điểm",
                children: [
                  { id: "os-v1", label: "rund um die Uhr von zu Hause aus einkaufen können", meaning: "có thể mua sắm mọi lúc ngay tại nhà" },
                  { id: "os-v2", label: "Preise und Angebote lassen sich leicht vergleichen", meaning: "dễ dàng so sánh giá cả và ưu đãi" },
                  { id: "os-v3", label: "eine größere Auswahl an Produkten", meaning: "sự lựa chọn sản phẩm phong phú hơn" },
                ],
              },
              {
                id: "trend-onlineshop-nachteile", label: "Nachteile", meaning: "nhược điểm",
                children: [
                  { id: "os-n1", label: "man kann die Ware vor dem Kauf nicht anfassen oder anprobieren", meaning: "không thể sờ hay thử hàng trước khi mua" },
                  { id: "os-n2", label: "lange Lieferzeiten und mögliche Retouren", meaning: "thời gian giao hàng lâu và khả năng phải trả hàng" },
                  { id: "os-n3", label: "der stationäre Einzelhandel gerät zunehmend unter Druck", meaning: "ngành bán lẻ truyền thống ngày càng chịu áp lực" },
                ],
              },
              {
                id: "trend-onlineshop-alt", label: "Alternativen / Möglichkeiten", meaning: "giải pháp thay thế",
                children: [
                  { id: "os-a1", label: "das Prinzip 'online informieren, offline kaufen' nutzen", meaning: "tìm hiểu trực tuyến rồi mua trực tiếp tại cửa hàng" },
                  { id: "os-a2", label: "lokale Geschäfte gezielt unterstützen", meaning: "chủ động ủng hộ các cửa hàng địa phương" },
                ],
              },
              {
                id: "trend-onlineshop-vn", label: "Situation in Vietnam", meaning: "tình hình ở Việt Nam",
                children: [
                  { id: "os-vn1", label: "Online-Shopping boomt vor allem unter jungen Leuten in den Städten", meaning: "mua sắm trực tuyến bùng nổ đặc biệt trong giới trẻ thành thị" },
                  { id: "os-vn2", label: "traditionelle Märkte und kleine Läden spielen weiterhin eine wichtige Rolle", meaning: "chợ truyền thống và cửa hàng nhỏ vẫn đóng vai trò quan trọng" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "trend-konsumzwang",
        label: "Konsumzwang bei jungen Leuten",
        meaning: "áp lực tiêu dùng ở giới trẻ",
        children: [
          {
            id: "trend-konsumzwang-vorteile", label: "Vorteile", meaning: "ưu điểm (mặt tích cực có kiểm soát)",
            children: [
              { id: "kz-v1", label: "durch neue Produkte bleibt man technisch auf dem neuesten Stand", meaning: "nhờ sản phẩm mới, luôn cập nhật công nghệ" },
              { id: "kz-v2", label: "Statussymbole können das Selbstbewusstsein kurzfristig stärken", meaning: "biểu tượng địa vị có thể tạm thời tăng sự tự tin" },
            ],
          },
          {
            id: "trend-konsumzwang-nachteile", label: "Nachteile", meaning: "nhược điểm",
            children: [
              { id: "kz-n1", label: "der soziale Druck, mit Trends mithalten zu müssen", meaning: "áp lực xã hội phải bắt kịp xu hướng" },
              { id: "kz-n2", label: "die Gefahr, in die Schuldenfalle zu geraten", meaning: "nguy cơ rơi vào bẫy nợ nần" },
              { id: "kz-n3", label: "der Einfluss von Influencern auf das Kaufverhalten", meaning: "ảnh hưởng của người có sức ảnh hưởng đến hành vi mua sắm" },
            ],
          },
          {
            id: "trend-konsumzwang-alt", label: "Alternativen / Möglichkeiten", meaning: "giải pháp thay thế",
            children: [
              { id: "kz-a1", label: "einen bewussten und minimalistischen Lebensstil pflegen", meaning: "duy trì lối sống tiêu dùng có ý thức và tối giản" },
              { id: "kz-a2", label: "Finanzkompetenz bereits in der Schule vermitteln", meaning: "dạy kiến thức tài chính ngay từ trường học" },
            ],
          },
          {
            id: "trend-konsumzwang-vn", label: "Situation in Vietnam", meaning: "tình hình ở Việt Nam",
            children: [
              { id: "kz-vn1", label: "Social-Media-Trends üben einen starken Einfluss auf junge Konsumenten aus", meaning: "xu hướng mạng xã hội ảnh hưởng mạnh đến người tiêu dùng trẻ" },
              { id: "kz-vn2", label: "Ratenkäufe und 'Kaufe jetzt, zahle später' werden zunehmend beliebter", meaning: "mua trả góp và 'mua trước trả sau' ngày càng phổ biến" },
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
              { id: "wa-preis", label: "die Preisgestaltung", meaning: "cách định giá", synonyms: ["der Preis"] },
              { id: "wa-rabatt", label: "der Rabatt", meaning: "giảm giá", synonyms: ["der Preisnachlass"] },
              { id: "wa-rechnung", label: "die Rechnung", meaning: "hóa đơn" },
              { id: "wa-verbraucher", label: "der Verbraucher", meaning: "người tiêu dùng", synonyms: ["der Konsument"] },
              { id: "wa-ausgaben", label: "die Ausgaben", meaning: "chi tiêu" },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-geld-ausgeben", label: "Geld für etwas ausgeben", meaning: "chi tiền cho việc gì" },
              { id: "wa-preise-vergleichen", label: "Preise vergleichen", meaning: "so sánh giá" },
              { id: "wa-ein-schnaeppchen-machen", label: "ein Schnäppchen ergattern", meaning: "mua được món hời", synonyms: ["ein Schnäppchen machen"] },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-ausgeben", label: "ausgeben", meaning: "chi tiêu", note: "trennbar, unregelmäßig: gibt aus, gab aus, hat ausgegeben" },
              { id: "wa-sparen", label: "sparen", meaning: "tiết kiệm", note: "sparen an + Dat. = tiết kiệm ở khoản gì; sparen für + Akk. = tiết kiệm để dành cho." },
              { id: "wa-sich-leisten", label: "sich leisten + Akk.", meaning: "đủ khả năng mua" },
              { id: "wa-zurueckgeben", label: "zurückgeben", meaning: "trả lại (hàng)", note: "trennbar, unregelmäßig: gibt zurück, gab zurück, hat zurückgegeben" },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-zufrieden-konsum", label: "zufrieden mit + Dat.", meaning: "hài lòng với (sản phẩm)" },
              { id: "wa-abhaengig-konsum", label: "abhängig von + Dat.", meaning: "phụ thuộc vào" },
              { id: "wa-verantwortlich-konsum", label: "verantwortlich für + Akk.", meaning: "có trách nhiệm về" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
