import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "beziehungen",
  title: "Zwischenmenschliche Beziehungen",
  titleVi: "Mối quan hệ xã hội",
  description: "Freundschaft, Familie, Nachbarschaft und Konflikte im Miteinander",
  color: "#7e22ce",
  level: "B2",
  root: {
    id: "root",
    label: "Beziehungen",
    meaning: "mối quan hệ xã hội",
    children: [
      {
        id: "arten",
        label: "Arten von Beziehungen",
        meaning: "các loại mối quan hệ",
        children: [
          { id: "freundschaft", label: "die enge Freundschaft", meaning: "tình bạn thân thiết", synonyms: ["die Vertrautheit"], note: "eine enge Freundschaft pflegen = duy trì một tình bạn thân thiết." },
          { id: "bekanntschaft", label: "die ___", meaning: "mối quen biết (chưa thân)", answer: "Bekanntschaft", note: "flüchtige Bekanntschaft = quen biết sơ sài." },
          { id: "partnerschaft", label: "die gleichberechtigte Partnerschaft", meaning: "mối quan hệ bình đẳng (bạn đời)", synonyms: ["die Beziehung auf Augenhöhe"] },
          { id: "nachbarschaftsverhaeltnis", label: "das Nachbarschaftsverhältnis", meaning: "mối quan hệ hàng xóm", note: "ein gutes Nachbarschaftsverhältnis pflegen." },
        ],
      },
      {
        id: "konflikte",
        label: "Konflikte & Kommunikation",
        meaning: "xung đột và giao tiếp",
        children: [
          { id: "missverstaendnis", label: "ein Missverständnis ausräumen", meaning: "giải quyết một hiểu lầm", synonyms: ["ein Missverständnis klären"] },
          { id: "streit", label: "einen ___ schlichten", meaning: "hòa giải một cuộc cãi vã", answer: "Streit", synonyms: ["einen Konflikt beilegen"] },
          { id: "vertrauensbruch", label: "der Vertrauensbruch", meaning: "sự phản bội lòng tin", note: "das Vertrauen brechen/missbrauchen." },
          { id: "kompromiss", label: "einen Kompromiss eingehen", meaning: "chấp nhận một sự thỏa hiệp", synonyms: ["sich einigen auf + Akk."] },
        ],
      },
      {
        id: "naehe-distanz",
        label: "Nähe & Distanz",
        meaning: "sự gần gũi và khoảng cách",
        children: [
          { id: "sich-entfremden", label: "sich voneinander entfremden", meaning: "trở nên xa cách nhau", note: "reflexiv: entfremdet sich, entfremdete sich, hat sich entfremdet." },
          { id: "kontakt-halten", label: "den ___ pflegen", meaning: "duy trì liên lạc", answer: "Kontakt", synonyms: ["in Kontakt bleiben"] },
          { id: "einsamkeit", label: "die soziale Isolation", meaning: "sự cô lập xã hội", synonyms: ["die Einsamkeit"] },
        ],
      },
      {
        id: "trends",
        label: "Aktuelle Trend-Themen",
        meaning: "các chủ đề xu hướng (dùng cho phần Nói/Viết Teil 1)",
        children: [
          {
            id: "trend-online",
            label: "Online-Freundschaften vs. Freundschaften im echten Leben",
            meaning: "tình bạn trên mạng vs. đời thực",
            children: [
              {
                id: "trend-online-vorteile", label: "Vorteile", meaning: "ưu điểm",
                children: [
                  { id: "to-v1", label: "trotz räumlicher Distanz in Kontakt bleiben können", meaning: "vẫn giữ liên lạc dù cách xa về địa lý" },
                  { id: "to-v2", label: "leichter Gleichgesinnte finden", meaning: "dễ dàng tìm được người cùng chí hướng" },
                  { id: "to-v3", label: "niedrigere Hemmschwelle beim ersten Kontakt", meaning: "ngưỡng e ngại thấp hơn khi bắt đầu làm quen" },
                ],
              },
              {
                id: "trend-online-nachteile", label: "Nachteile", meaning: "nhược điểm",
                children: [
                  { id: "to-n1", label: "der Mangel an nonverbaler Kommunikation", meaning: "thiếu giao tiếp phi ngôn ngữ" },
                  { id: "to-n2", label: "die Gefahr oberflächlicher Kontakte", meaning: "nguy cơ các mối quan hệ hời hợt" },
                  { id: "to-n3", label: "Identitäten können vorgetäuscht werden", meaning: "danh tính có thể bị giả mạo" },
                ],
              },
              {
                id: "trend-online-alt", label: "Alternativen / Möglichkeiten", meaning: "giải pháp thay thế",
                children: [
                  { id: "to-a1", label: "Online-Kontakte gezielt durch persönliche Treffen vertiefen", meaning: "chủ động gặp gỡ trực tiếp để làm sâu sắc mối quan hệ online" },
                  { id: "to-a2", label: "bewusst zwischen Online- und Offline-Zeit unterscheiden", meaning: "chủ động phân biệt thời gian online và offline" },
                ],
              },
              {
                id: "trend-online-vn", label: "Situation in Vietnam", meaning: "tình hình ở Việt Nam",
                children: [
                  { id: "to-vn1", label: "soziale Netzwerke wie Facebook und Zalo prägen den Alltag stark", meaning: "mạng xã hội như Facebook và Zalo ảnh hưởng mạnh đến đời sống hàng ngày" },
                  { id: "to-vn2", label: "persönliche Treffen bleiben besonders unter älteren Generationen wichtig", meaning: "gặp gỡ trực tiếp vẫn quan trọng, nhất là với thế hệ lớn tuổi" },
                ],
              },
            ],
          },
          {
            id: "trend-nachbarn",
            label: "Das Verhältnis zu Nachbarn",
            meaning: "mối quan hệ hàng xóm",
            children: [
              {
                id: "trend-nachbarn-vorteile", label: "Vorteile", meaning: "ưu điểm",
                children: [
                  { id: "tn-v1", label: "gegenseitige Hilfe im Alltag (z. B. Blumen gießen)", meaning: "giúp đỡ lẫn nhau trong đời sống hàng ngày (vd. tưới cây)" },
                  { id: "tn-v2", label: "ein Gefühl der Sicherheit durch aufmerksame Nachbarn", meaning: "cảm giác an toàn nhờ hàng xóm để ý" },
                ],
              },
              {
                id: "trend-nachbarn-nachteile", label: "Nachteile", meaning: "nhược điểm",
                children: [
                  { id: "tn-n1", label: "der Lärm und Streitigkeiten wegen Ruhestörung", meaning: "tiếng ồn và cãi vã do gây ồn ào" },
                  { id: "tn-n2", label: "der Eingriff in die Privatsphäre", meaning: "sự xâm phạm đời tư" },
                ],
              },
              {
                id: "trend-nachbarn-alt", label: "Alternativen / Möglichkeiten", meaning: "giải pháp thay thế",
                children: [
                  { id: "tn-a1", label: "klare Absprachen und Hausordnungen treffen", meaning: "đưa ra thỏa thuận và nội quy rõ ràng" },
                ],
              },
              {
                id: "trend-nachbarn-vn", label: "Situation in Vietnam", meaning: "tình hình ở Việt Nam",
                children: [
                  { id: "tn-vn1", label: "in traditionellen Vierteln ist der Zusammenhalt unter Nachbarn oft stark ausgeprägt", meaning: "ở các khu phố truyền thống, sự gắn kết hàng xóm thường rất chặt chẽ" },
                  { id: "tn-vn2", label: "in modernen Wohnanlagen kennen sich Nachbarn oft kaum", meaning: "ở các khu chung cư hiện đại, hàng xóm thường ít biết nhau" },
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
              { id: "wa-vertrauen", label: "das Vertrauen", meaning: "sự tin tưởng", note: "Vertrauen zu jemandem aufbauen/gewinnen/verlieren." },
              { id: "wa-ruecksicht", label: "die Rücksichtnahme", meaning: "sự quan tâm/nhường nhịn", synonyms: ["die Rücksicht"] },
              { id: "wa-toleranz", label: "die Toleranz", meaning: "sự khoan dung" },
              { id: "wa-verstaendnis", label: "das Verständnis", meaning: "sự thấu hiểu", note: "Verständnis für jemanden aufbringen." },
              { id: "wa-zusammenhalt", label: "der Zusammenhalt", meaning: "sự gắn kết" },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-vertrauensvolle", label: "eine vertrauensvolle Beziehung", meaning: "một mối quan hệ đầy tin tưởng" },
              { id: "wa-respektvoller-umgang", label: "der respektvolle Umgang miteinander", meaning: "cách đối xử tôn trọng lẫn nhau" },
              { id: "wa-offene-kommunikation", label: "eine offene Kommunikation pflegen", meaning: "duy trì giao tiếp cởi mở" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-sich-verstehen", label: "sich verstehen mit + Dat.", meaning: "hòa hợp với ai", note: "sich gut mit jemandem verstehen." },
              { id: "wa-vertrauen-verb", label: "vertrauen + Dat.", meaning: "tin tưởng ai", note: "jemandem blind vertrauen." },
              { id: "wa-missverstaendnis-ausraeumen", label: "ein Missverständnis ausräumen", meaning: "giải quyết một hiểu lầm" },
              { id: "wa-sich-versoehnen", label: "sich versöhnen mit + Dat.", meaning: "làm hòa với ai", note: "reflexiv: versöhnt sich, versöhnte sich, hat sich versöhnt." },
              { id: "wa-unterstuetzen", label: "unterstützen", meaning: "hỗ trợ, giúp đỡ", synonyms: ["beistehen + Dat."] },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-zwischenmenschlich", label: "zwischenmenschlich", meaning: "giữa người với người" },
              { id: "wa-vertraut-mit", label: "vertraut mit + Dat.", meaning: "thân thuộc/gần gũi với" },
              { id: "wa-eifersuechtig", label: "eifersüchtig auf + Akk.", meaning: "ghen tị với" },
              { id: "wa-loyal", label: "loyal gegenüber + Dat.", meaning: "trung thành với" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
