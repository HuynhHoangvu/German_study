import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "haustiere",
  title: "Haustiere",
  titleVi: "Thú cưng",
  description: "Tierarten, Verantwortung, Pflege und Haustiere in der Gesellschaft",
  color: "#a16207",
  level: "B2",
  root: {
    id: "root",
    label: "Haustiere",
    meaning: "thú cưng",
    children: [
      {
        id: "arten",
        label: "Arten von Haustieren",
        meaning: "các loại thú cưng",
        children: [
          { id: "hund", label: "der Hund", meaning: "con chó", note: "gilt als 'der beste Freund des Menschen'." },
          { id: "katze", label: "die Katze", meaning: "con mèo", synonyms: ["der Stubentiger"], note: "'der Stubentiger' = cách gọi thân mật, hài hước cho mèo nhà." },
          { id: "kleintier", label: "das ___", meaning: "thú nhỏ (chuột lang, thỏ...)", answer: "Kleintier", synonyms: ["das Nagetier"] },
          { id: "exotisch", label: "exotische Haustiere halten", meaning: "nuôi thú cưng ngoại lai", note: "z.B. Reptilien, Spinnen; rechtlich oft eingeschränkt." },
        ],
      },
      {
        id: "pflege",
        label: "Verantwortung & Pflege",
        meaning: "trách nhiệm và chăm sóc",
        children: [
          { id: "artgerecht", label: "ein Tier artgerecht halten", meaning: "nuôi động vật đúng theo tập tính của loài", note: "'artgerecht' = phù hợp với đặc tính tự nhiên của loài vật." },
          { id: "tierarzt2", label: "regelmäßig zum ___ gehen", meaning: "đi khám thú y định kỳ", answer: "Tierarzt" },
          { id: "impfung", label: "die Impfung", meaning: "việc tiêm phòng", synonyms: ["die Schutzimpfung"] },
          { id: "verantwortungsvoll2", label: "eine verantwortungsvolle Tierhaltung", meaning: "việc nuôi thú cưng có trách nhiệm", note: "bao gồm cả 'artgerechte Ernährung' und 'ausreichend Bewegung'." },
        ],
      },
      {
        id: "gesellschaft",
        label: "Haustiere und Gesellschaft",
        meaning: "thú cưng và xã hội",
        children: [
          { id: "tierschutz", label: "der Tierschutz", meaning: "việc bảo vệ động vật", synonyms: ["der Tierschutzverein"], note: "einem 'Tierheim' Tiere abnehmen = nhận nuôi từ trại cứu hộ." },
          { id: "tierheim", label: "ein Tier aus dem ___ adoptieren", meaning: "nhận nuôi thú từ trại cứu hộ", answer: "Tierheim" },
          { id: "vermenschlichung", label: "die Vermenschlichung von Haustieren", meaning: "sự nhân cách hóa thú cưng", note: "xu hướng đối xử với thú cưng như con người, ví dụ mặc quần áo, tổ chức sinh nhật." },
          { id: "allergie2", label: "eine Tierhaarallergie", meaning: "dị ứng lông thú", note: "phổ biến ở trẻ em, cần cân nhắc trước khi nuôi thú." },
        ],
      },
      {
        id: "trends",
        label: "Aktuelle Trend-Themen",
        meaning: "các chủ đề xu hướng (dùng cho phần Nói/Viết Teil 1)",
        children: [
          {
            id: "trend-stadtwohnung",
            label: "Haustiere in der Stadtwohnung halten",
            meaning: "nuôi thú cưng trong căn hộ thành phố nhỏ",
            children: [
              {
                id: "trend-stadtwohnung-vorteile", label: "Vorteile", meaning: "ưu điểm",
                children: [
                  { id: "ts-v1", label: "Gesellschaft und emotionale Unterstützung im Alltag", meaning: "bạn đồng hành và hỗ trợ tinh thần trong cuộc sống thường ngày" },
                  { id: "ts-v2", label: "mehr Bewegung durch regelmäßige Spaziergänge", meaning: "vận động nhiều hơn nhờ các buổi đi dạo đều đặn" },
                  { id: "ts-v3", label: "das Sicherheitsgefühl in der eigenen Wohnung steigt", meaning: "cảm giác an toàn trong nhà tăng lên" },
                ],
              },
              {
                id: "trend-stadtwohnung-nachteile", label: "Nachteile", meaning: "nhược điểm",
                children: [
                  { id: "ts-n1", label: "wenig Platz für ein artgerechtes Leben", meaning: "ít không gian để sống đúng theo tập tính loài" },
                  { id: "ts-n2", label: "die Lärmbelästigung für Nachbarn", meaning: "gây ồn ào làm phiền hàng xóm" },
                  { id: "ts-n3", label: "fehlender Auslauf im Grünen", meaning: "thiếu không gian vận động ngoài trời" },
                ],
              },
              {
                id: "trend-stadtwohnung-alt", label: "Alternativen / Möglichkeiten", meaning: "giải pháp thay thế",
                children: [
                  { id: "ts-a1", label: "eine kleinere, wohnungsgeeignete Tierart wählen", meaning: "chọn loài thú nhỏ phù hợp với căn hộ" },
                  { id: "ts-a2", label: "gemeinsam genutzte Grünflächen in der Nachbarschaft nutzen", meaning: "sử dụng khu vực xanh chung trong khu dân cư" },
                ],
              },
              {
                id: "trend-stadtwohnung-vn", label: "Situation in Vietnam", meaning: "tình hình ở Việt Nam",
                children: [
                  { id: "ts-vn1", label: "immer mehr junge Städter halten sich Hunde oder Katzen in kleinen Wohnungen", meaning: "ngày càng nhiều người trẻ thành phố nuôi chó mèo trong căn hộ nhỏ" },
                  { id: "ts-vn2", label: "in vielen Wohnanlagen ist die Tierhaltung noch nicht klar geregelt", meaning: "ở nhiều khu chung cư, việc nuôi thú cưng vẫn chưa được quy định rõ ràng" },
                ],
              },
            ],
          },
          {
            id: "trend-kosten",
            label: "Die Kosten der Haustierhaltung",
            meaning: "chi phí nuôi thú cưng",
            children: [
              {
                id: "trend-kosten-vorteile", label: "Vorteile / Vorzüge trotz Kosten", meaning: "ưu điểm dù tốn kém",
                children: [
                  { id: "tk-v1", label: "die langfristige Bereicherung des Lebens durch ein Haustier", meaning: "cuộc sống được làm phong phú lâu dài nhờ thú cưng" },
                  { id: "tk-v2", label: "gute Pflege verhindert teurere Tierarztkosten später", meaning: "chăm sóc tốt giúp tránh chi phí thú y đắt đỏ hơn về sau" },
                  { id: "tk-v3", label: "die Investition zahlt sich durch Lebensqualität aus", meaning: "khoản đầu tư được đền đáp bằng chất lượng cuộc sống" },
                ],
              },
              {
                id: "trend-kosten-nachteile", label: "Nachteile / finanzielle Belastung", meaning: "nhược điểm / gánh nặng tài chính",
                children: [
                  { id: "tk-n1", label: "hohe Ausgaben für Futter, Tierarzt und Ausstattung", meaning: "chi phí cao cho thức ăn, thú y và dụng cụ" },
                  { id: "tk-n2", label: "unvorhersehbare Kosten bei Krankheit oder Unfall", meaning: "chi phí không lường trước khi thú bị bệnh hoặc tai nạn" },
                  { id: "tk-n3", label: "eine finanzielle Belastung, die unterschätzt wird", meaning: "gánh nặng tài chính thường bị đánh giá thấp" },
                ],
              },
              {
                id: "trend-kosten-alt", label: "Alternativen / Möglichkeiten", meaning: "giải pháp thay thế",
                children: [
                  { id: "tk-a1", label: "eine Tierversicherung abschließen", meaning: "mua bảo hiểm cho thú cưng" },
                  { id: "tk-a2", label: "vor der Anschaffung ein Budget realistisch planen", meaning: "lập ngân sách thực tế trước khi nhận nuôi" },
                ],
              },
              {
                id: "trend-kosten-vn", label: "Situation in Vietnam", meaning: "tình hình ở Việt Nam",
                children: [
                  { id: "tk-vn1", label: "Tierversicherungen sind in Vietnam noch wenig verbreitet", meaning: "bảo hiểm thú cưng ở Việt Nam vẫn chưa phổ biến" },
                  { id: "tk-vn2", label: "hochwertiges Tierfutter und Tierarztbesuche sind für viele Familien teuer", meaning: "thức ăn chất lượng cao và khám thú y đắt đỏ với nhiều gia đình" },
                ],
              },
            ],
          },
          {
            id: "trend-kindliche-entwicklung",
            label: "Auswirkungen von Haustieren auf die kindliche Entwicklung",
            meaning: "ảnh hưởng của thú cưng đến sự phát triển của trẻ em",
            children: [
              {
                id: "trend-kindliche-entwicklung-vorteile", label: "Vorteile", meaning: "ưu điểm",
                children: [
                  { id: "tke-v1", label: "die Förderung von Verantwortungsbewusstsein", meaning: "thúc đẩy ý thức trách nhiệm" },
                  { id: "tke-v2", label: "eine positive emotionale Entwicklung durch Nähe zum Tier", meaning: "phát triển cảm xúc tích cực nhờ gần gũi với động vật" },
                  { id: "tke-v3", label: "das Erlernen von Empathie im Umgang mit Lebewesen", meaning: "học được sự đồng cảm khi tiếp xúc với sinh vật sống" },
                ],
              },
              {
                id: "trend-kindliche-entwicklung-nachteile", label: "Nachteile", meaning: "nhược điểm",
                children: [
                  { id: "tke-n1", label: "ein erhöhtes Allergierisiko", meaning: "nguy cơ dị ứng cao hơn" },
                  { id: "tke-n2", label: "zusätzliche Verantwortung und Aufwand für die Eltern", meaning: "trách nhiệm và công sức bổ sung cho bố mẹ" },
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
              { id: "wh-tierarzt", label: "der Tierarzt", meaning: "bác sĩ thú y" },
              { id: "wh-haustier", label: "das Haustier", meaning: "thú cưng" },
              { id: "wh-tierheim", label: "das Tierheim", meaning: "trại cứu hộ động vật" },
              { id: "wh-tierhaltung", label: "die Tierhaltung", meaning: "việc nuôi thú" },
              { id: "wh-gassi", label: "der Gassi-Gang", meaning: "việc dắt chó đi dạo", note: "'mit dem Hund Gassi gehen' = đi dạo với chó." },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wh-artgerechte-haltung", label: "die artgerechte Haltung", meaning: "việc nuôi đúng tập tính loài" },
              { id: "wh-tierische-gesellschaft", label: "tierische Gesellschaft leisten", meaning: "làm bạn đồng hành (của thú vật)" },
              { id: "wh-langfristige-verpflichtung", label: "eine langfristige Verpflichtung eingehen", meaning: "gánh vác một cam kết dài hạn" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wh-fuettern", label: "füttern", meaning: "cho ăn" },
              { id: "wh-halten", label: "ein Tier halten", meaning: "nuôi một con vật" },
              { id: "wh-adoptieren", label: "adoptieren", meaning: "nhận nuôi" },
              { id: "wh-impfen", label: "impfen lassen", meaning: "cho đi tiêm phòng", note: "lassen + Infinitiv = nhờ ai làm gì cho mình." },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wh-verantwortungsbewusst", label: "verantwortungsbewusst gegenüber + Dat.", meaning: "có ý thức trách nhiệm với" },
              { id: "wh-treu", label: "treu", meaning: "trung thành" },
              { id: "wh-abhaengig", label: "abhängig von + Dat.", meaning: "phụ thuộc vào" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
