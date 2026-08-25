import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "technologie",
  title: "Technologie & Medien",
  titleVi: "Công nghệ & truyền thông",
  description: "Digitalisierung, soziale Medien und ihre Auswirkungen",
  color: "#4338ca",
  level: "B2",
  root: {
    id: "root",
    label: "Technologie",
    meaning: "công nghệ",
    children: [
      {
        id: "digitalisierung",
        label: "Digitalisierung",
        meaning: "số hóa",
        children: [
          { id: "smartphone", label: "das Smartphone", meaning: "điện thoại thông minh", note: "'ständig am Smartphone hängen' = dán mắt vào điện thoại liên tục." },
          { id: "kuenstlicheintelligenz", label: "die ___", meaning: "trí tuệ nhân tạo", answer: "künstliche Intelligenz", note: "kurz: KI" },
          { id: "homeoffice2", label: "die digitale Arbeitswelt", meaning: "thế giới việc làm số hóa", synonyms: ["das digitale Arbeiten"] },
        ],
      },
      {
        id: "sozialemedien",
        label: "Soziale Medien",
        meaning: "mạng xã hội",
        children: [
          { id: "vernetzung", label: "die globale Vernetzung", meaning: "sự kết nối toàn cầu", synonyms: ["die Verbindung"] },
          { id: "informationsaustausch", label: "der ___", meaning: "trao đổi thông tin", answer: "Informationsaustausch" },
          { id: "sucht", label: "die Social-Media-Sucht", meaning: "chứng nghiện mạng xã hội", note: "Sucht = chứng nghiện, dùng cho nhiều loại (Handysucht, Spielsucht...); 'in eine Abhängigkeit geraten' = rơi vào tình trạng lệ thuộc." },
        ],
      },
      {
        id: "risiken",
        label: "Risiken",
        meaning: "rủi ro",
        children: [
          { id: "datenschutz", label: "der Datenschutz", meaning: "bảo mật dữ liệu", synonyms: ["der Datenmissbrauch (Gegenteil)"], note: "'gegen den Datenschutz verstoßen' = vi phạm quy định bảo mật dữ liệu." },
          { id: "fakenews", label: "gezielte Desinformation", meaning: "thông tin sai lệch có chủ đích", synonyms: ["die Fake News", "die Falschmeldung"] },
          { id: "cybermobbing", label: "das ___", meaning: "bắt nạt trên mạng", answer: "Cybermobbing", note: "'Opfer von Cybermobbing werden' = trở thành nạn nhân của bắt nạt trên mạng." },
        ],
      },
      {
        id: "vorteile",
        label: "Vorteile",
        meaning: "lợi ích",
        children: [
          { id: "zugang", label: "ein unmittelbarer Informationszugang", meaning: "khả năng tiếp cận thông tin tức thời", synonyms: ["schneller Informationszugang"] },
          { id: "effizienz", label: "eine deutliche Effizienzsteigerung", meaning: "sự gia tăng hiệu suất rõ rệt", synonyms: ["höhere Effizienz"] },
        ],
      },
      {
        id: "trends",
        label: "Aktuelle Trend-Themen",
        meaning: "các chủ đề xu hướng (dùng cho phần Nói/Viết Teil 1)",
        children: [
          {
            id: "trend-ebooks",
            label: "E-Books vs. gedruckte Bücher",
            meaning: "sách điện tử vs. sách giấy",
            children: [
              {
                id: "trend-ebooks-vorteile", label: "Vorteile", meaning: "ưu điểm",
                children: [
                  { id: "eb-v1", label: "platzsparend und jederzeit griffbereit", meaning: "tiết kiệm chỗ và luôn sẵn có mọi lúc" },
                  { id: "eb-v2", label: "sofortiger Zugriff auf ein riesiges Angebot", meaning: "truy cập tức thì vào kho sách khổng lồ" },
                  { id: "eb-v3", label: "die Schriftgröße lässt sich individuell anpassen", meaning: "có thể tự điều chỉnh cỡ chữ theo ý muốn" },
                ],
              },
              {
                id: "trend-ebooks-nachteile", label: "Nachteile", meaning: "nhược điểm",
                children: [
                  { id: "eb-n1", label: "das haptische Leseerlebnis geht verloren", meaning: "trải nghiệm cầm nắm khi đọc bị mất đi" },
                  { id: "eb-n2", label: "die Bildschirmzeit belastet die Augen", meaning: "thời gian nhìn màn hình gây mỏi mắt" },
                  { id: "eb-n3", label: "man ist auf einen Akku bzw. ein Gerät angewiesen", meaning: "phải phụ thuộc vào pin hoặc thiết bị" },
                ],
              },
              {
                id: "trend-ebooks-alt", label: "Alternativen / Möglichkeiten", meaning: "giải pháp thay thế",
                children: [
                  { id: "eb-a1", label: "Hörbücher als Ergänzung nutzen", meaning: "dùng sách nói như một hình thức bổ sung" },
                  { id: "eb-a2", label: "gedruckte Bücher aus der Bibliothek ausleihen", meaning: "mượn sách giấy từ thư viện" },
                ],
              },
              {
                id: "trend-ebooks-vn", label: "Situation in Vietnam", meaning: "tình hình ở Việt Nam",
                children: [
                  { id: "eb-vn1", label: "gedruckte Bücher genießen nach wie vor hohes Ansehen", meaning: "sách giấy vẫn được coi trọng như trước" },
                  { id: "eb-vn2", label: "E-Books gewinnen vor allem unter jungen Leuten an Beliebtheit", meaning: "sách điện tử ngày càng phổ biến, nhất là với giới trẻ" },
                ],
              },
            ],
          },
          {
            id: "trend-smartphonekinder",
            label: "Smartphones für Kinder",
            meaning: "trẻ em và điện thoại thông minh",
            children: [
              {
                id: "trend-smartphonekinder-vorteile", label: "Vorteile", meaning: "ưu điểm",
                children: [
                  { id: "sk-v1", label: "die Kinder sind für die Eltern jederzeit erreichbar", meaning: "cha mẹ có thể liên lạc với con bất cứ lúc nào" },
                  { id: "sk-v2", label: "ein früher, spielerischer Umgang mit digitalen Medien", meaning: "làm quen sớm và tự nhiên với thiết bị số" },
                ],
              },
              {
                id: "trend-smartphonekinder-nachteile", label: "Nachteile", meaning: "nhược điểm",
                children: [
                  { id: "sk-n1", label: "die Gefahr, in eine Abhängigkeit zu geraten", meaning: "nguy cơ rơi vào tình trạng lệ thuộc" },
                  { id: "sk-n2", label: "der Kontakt mit ungeeigneten Inhalten", meaning: "tiếp xúc với nội dung không phù hợp" },
                  { id: "sk-n3", label: "die soziale Entwicklung kann darunter leiden", meaning: "sự phát triển kỹ năng xã hội có thể bị ảnh hưởng" },
                ],
              },
              {
                id: "trend-smartphonekinder-alt", label: "Alternativen / Möglichkeiten", meaning: "giải pháp thay thế",
                children: [
                  { id: "sk-a1", label: "ein einfaches Kindertelefon ohne Internetzugang", meaning: "điện thoại đơn giản dành cho trẻ, không có internet" },
                  { id: "sk-a2", label: "feste Bildschirmzeiten mit den Eltern vereinbaren", meaning: "thỏa thuận thời gian dùng màn hình cố định với cha mẹ" },
                ],
              },
              {
                id: "trend-smartphonekinder-vn", label: "Situation in Vietnam", meaning: "tình hình ở Việt Nam",
                children: [
                  { id: "sk-vn1", label: "immer mehr Kinder besitzen bereits im Grundschulalter ein eigenes Smartphone", meaning: "ngày càng nhiều trẻ đã có điện thoại riêng từ bậc tiểu học" },
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
              { id: "wa-geraet", label: "das Gerät", meaning: "thiết bị" },
              { id: "wa-anwendung", label: "die Anwendung / App", meaning: "ứng dụng" },
              { id: "wa-datenschutz-n", label: "die Privatsphäre", meaning: "quyền riêng tư", note: "'die Privatsphäre verletzen' = xâm phạm quyền riêng tư." },
              { id: "wa-netzwerk", label: "das Netzwerk", meaning: "mạng lưới" },
              { id: "wa-erfindung", label: "die Erfindung", meaning: "phát minh", synonyms: ["die Innovation"] },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-eine-app-herunterladen", label: "eine App herunterladen", meaning: "tải xuống một ứng dụng" },
              { id: "wa-daten-schuetzen", label: "persönliche Daten vor Missbrauch schützen", meaning: "bảo vệ dữ liệu cá nhân khỏi bị lạm dụng", synonyms: ["persönliche Daten schützen"] },
              { id: "wa-mit-der-zeit-gehen", label: "mit der rasanten Entwicklung Schritt halten", meaning: "theo kịp tốc độ phát triển nhanh chóng", synonyms: ["mit der Zeit gehen"] },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-herunterladen", label: "herunterladen", meaning: "tải xuống", note: "trennbar, unregelmäßig: lädt herunter, lud herunter, hat heruntergeladen" },
              { id: "wa-vernetzen", label: "sich vernetzen mit + Dat.", meaning: "kết nối với" },
              { id: "wa-programmieren", label: "programmieren", meaning: "lập trình" },
              { id: "wa-abhaengen", label: "abhängen von + Dat.", meaning: "phụ thuộc vào", note: "trennbar, unregelmäßig: hängt ab, hing ab, hat abgehangen" },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-abhaengig-technik", label: "abhängig von + Dat.", meaning: "phụ thuộc vào (công nghệ)" },
              { id: "wa-vertraut-technik", label: "vertraut mit + Dat.", meaning: "quen thuộc với" },
              { id: "wa-anfaellig-technik", label: "anfällig für + Akk.", meaning: "dễ bị (lỗi, virus...)" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
