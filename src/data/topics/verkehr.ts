import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "verkehr",
  title: "Verkehr / Transport",
  titleVi: "Giao thông",
  description: "Verkehrsmittel, Probleme und Lösungen im Verkehr",
  color: "#2563a8",
  level: "B2",
  root: {
    id: "root",
    label: "Verkehr",
    meaning: "giao thông",
    children: [
      {
        id: "verkehrsmittel",
        label: "Verkehrsmittel",
        meaning: "phương tiện giao thông",
        children: [
          { id: "auto", label: "der Individualverkehr", meaning: "giao thông cá nhân (ô tô riêng)", synonyms: ["der Wagen", "der PKW"] },
          { id: "zug", label: "der Fernverkehrszug", meaning: "tàu hỏa (đường dài)", synonyms: ["der Regionalzug"] },
          { id: "fahrrad", label: "das ___", meaning: "xe đạp", answer: "Fahrrad" },
          { id: "bus", label: "der Linienbus", meaning: "xe buýt công cộng theo tuyến" },
          { id: "oepnv", label: "der ÖPNV", meaning: "phương tiện công cộng", note: "Abkürzung für 'öffentlicher Personennahverkehr'; oft in Kollokationen wie 'den ÖPNV ausbauen/nutzen'." },
        ],
      },
      {
        id: "probleme",
        label: "Probleme",
        meaning: "vấn đề",
        children: [
          { id: "stau", label: "der Stau", meaning: "kẹt xe", synonyms: ["der Verkehrsstau"] },
          { id: "unfall", label: "der Verkehrsunfall", meaning: "tai nạn giao thông" },
          { id: "laerm", label: "der ___", meaning: "tiếng ồn", answer: "Lärm" },
          { id: "abgase", label: "die Abgase", meaning: "khí thải", synonyms: ["die Emissionen"] },
          { id: "parkplatzmangel", label: "der Parkplatzmangel", meaning: "thiếu chỗ đỗ xe", note: "Parkplatz (chỗ đỗ xe) + Mangel (sự thiếu hụt)." },
        ],
      },
      {
        id: "vorteile",
        label: "Vor- und Nachteile Auto",
        meaning: "ưu nhược điểm ô tô",
        children: [
          { id: "flexibel", label: "hohe zeitliche Flexibilität", meaning: "tính linh hoạt cao về thời gian" },
          { id: "umweltschaedlich", label: "umweltschädlich", meaning: "gây hại môi trường", synonyms: ["klimaschädlich"] },
          { id: "teuer", label: "hohe Unterhaltskosten", meaning: "chi phí bảo trì cao", synonyms: ["die Anschaffungskosten"] },
        ],
      },
      {
        id: "loesungen",
        label: "Lösungen",
        meaning: "giải pháp",
        children: [
          { id: "ausbau", label: "den ÖPNV konsequent ausbauen", meaning: "mở rộng giao thông công cộng một cách triệt để" },
          { id: "radwege", label: "das Radwegenetz erweitern", meaning: "mở rộng mạng lưới làn xe đạp" },
          { id: "elektro", label: "die ___", meaning: "xe điện", answer: "Elektroautos" },
          { id: "carsharing", label: "das Carsharing fördern", meaning: "khuyến khích mô hình chia sẻ xe" },
          { id: "tempolimit", label: "ein Tempolimit einführen", meaning: "áp dụng giới hạn tốc độ" },
        ],
      },
      {
        id: "zukunft",
        label: "Zukunft",
        meaning: "tương lai",
        children: [
          { id: "autonom", label: "autonomes Fahren", meaning: "xe tự lái", synonyms: ["selbstfahrende Autos"] },
          { id: "smartcity", label: "vernetzte Verkehrssysteme", meaning: "hệ thống giao thông thông minh" },
        ],
      },
      {
        id: "trends",
        label: "Aktuelle Trend-Themen",
        meaning: "các chủ đề xu hướng (dùng cho phần Nói/Viết Teil 1)",
        children: [
          {
            id: "trend-elektroauto",
            label: "Elektroautos",
            meaning: "xe điện",
            children: [
              {
                id: "trend-elektroauto-vorteile", label: "Vorteile", meaning: "ưu điểm",
                children: [
                  { id: "te-v1", label: "keine direkten Abgasemissionen im Fahrbetrieb", meaning: "không phát thải khí thải trực tiếp khi vận hành" },
                  { id: "te-v2", label: "geringere Betriebskosten dank günstigerem Strom als Benzin", meaning: "chi phí vận hành thấp hơn vì điện rẻ hơn xăng" },
                  { id: "te-v3", label: "deutlich leiser als Verbrennungsmotoren", meaning: "êm ái hơn nhiều so với động cơ đốt trong" },
                ],
              },
              {
                id: "trend-elektroauto-nachteile", label: "Nachteile", meaning: "nhược điểm",
                children: [
                  { id: "te-n1", label: "hoher Anschaffungspreis im Vergleich zu Benzinautos", meaning: "giá mua ban đầu cao hơn so với xe xăng" },
                  { id: "te-n2", label: "die begrenzte Reichweite und lange Ladezeiten", meaning: "quãng đường đi được có hạn và thời gian sạc lâu" },
                  { id: "te-n3", label: "das noch lückenhafte Netz an Ladestationen", meaning: "mạng lưới trạm sạc vẫn còn thưa thớt" },
                ],
              },
              {
                id: "trend-elektroauto-alt", label: "Alternativen / Möglichkeiten", meaning: "giải pháp thay thế",
                children: [
                  { id: "te-a1", label: "staatliche Kaufprämien und Steuervergünstigungen anbieten", meaning: "đưa ra trợ cấp mua xe và ưu đãi thuế của nhà nước" },
                  { id: "te-a2", label: "das Ladenetz flächendeckend ausbauen", meaning: "mở rộng mạng lưới trạm sạc trên diện rộng" },
                ],
              },
              {
                id: "trend-elektroauto-vn", label: "Situation in Vietnam", meaning: "tình hình ở Việt Nam",
                children: [
                  { id: "te-vn1", label: "einheimische Hersteller wie VinFast treiben die Verbreitung von Elektroautos voran", meaning: "các hãng nội địa như VinFast đang thúc đẩy phổ biến xe điện" },
                  { id: "te-vn2", label: "das Ladeinfrastrukturnetz steckt noch in den Anfängen", meaning: "hạ tầng trạm sạc vẫn còn ở giai đoạn khởi đầu" },
                ],
              },
            ],
          },
          {
            id: "trend-autofrei",
            label: "Autofreie Innenstadt",
            meaning: "cấm ô tô trong trung tâm thành phố",
            children: [
              {
                id: "trend-autofrei-vorteile", label: "Vorteile", meaning: "ưu điểm",
                children: [
                  { id: "ta-v1", label: "weniger Lärm- und Luftverschmutzung im Stadtzentrum", meaning: "giảm tiếng ồn và ô nhiễm không khí ở trung tâm thành phố" },
                  { id: "ta-v2", label: "mehr Platz und Sicherheit für Fußgänger und Radfahrer", meaning: "nhiều không gian và an toàn hơn cho người đi bộ và xe đạp" },
                  { id: "ta-v3", label: "die Aufenthaltsqualität in der Innenstadt steigt", meaning: "chất lượng không gian sống ở trung tâm thành phố tăng lên" },
                ],
              },
              {
                id: "trend-autofrei-nachteile", label: "Nachteile", meaning: "nhược điểm",
                children: [
                  { id: "ta-n1", label: "Einbußen für den innerstädtischen Einzelhandel befürchtet", meaning: "lo ngại thiệt hại cho hoạt động bán lẻ trong trung tâm thành phố" },
                  { id: "ta-n2", label: "eingeschränkte Erreichbarkeit für ältere und mobilitätseingeschränkte Menschen", meaning: "khả năng tiếp cận bị hạn chế đối với người già và người khuyết tật vận động" },
                ],
              },
              {
                id: "trend-autofrei-alt", label: "Alternativen / Möglichkeiten", meaning: "giải pháp thay thế",
                children: [
                  { id: "ta-a1", label: "Park-and-Ride-Systeme am Stadtrand einrichten", meaning: "xây dựng hệ thống gửi xe ở ngoại ô rồi đi tiếp bằng xe công cộng" },
                  { id: "ta-a2", label: "den ÖPNV und das Radwegenetz als Ausgleich ausbauen", meaning: "mở rộng giao thông công cộng và mạng lưới xe đạp để bù đắp" },
                ],
              },
              {
                id: "trend-autofrei-vn", label: "Situation in Vietnam", meaning: "tình hình ở Việt Nam",
                children: [
                  { id: "ta-vn1", label: "in Hanoi und Ho-Chi-Minh-Stadt gibt es erste Pilotprojekte für autofreie Zonen", meaning: "Hà Nội và TP.HCM đã có một số dự án thí điểm khu vực cấm ô tô" },
                  { id: "ta-vn2", label: "der ÖPNV ist noch nicht gut genug ausgebaut, um das Auto vollständig zu ersetzen", meaning: "giao thông công cộng chưa đủ phát triển để thay thế hoàn toàn ô tô" },
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
              { id: "wa-fahrer", label: "der Verkehrsteilnehmer", meaning: "người tham gia giao thông" },
              { id: "wa-fahrplan", label: "der Fahrplan", meaning: "lịch trình chạy xe" },
              { id: "wa-verkehrsschild", label: "das Verkehrsschild", meaning: "biển báo giao thông" },
              { id: "wa-fahrkarte", label: "die Fahrkarte", meaning: "vé xe" },
              { id: "wa-geschwindigkeitsbegrenzung", label: "die Geschwindigkeitsbegrenzung", meaning: "giới hạn tốc độ" },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-eine-fahrkarte-kaufen", label: "eine Fahrkarte kaufen", meaning: "mua vé xe" },
              { id: "wa-im-stau-stehen", label: "im Stau stehen", meaning: "kẹt xe (đứng trong dòng kẹt xe)" },
              { id: "wa-oepnv-nutzen", label: "den ÖPNV nutzen", meaning: "sử dụng phương tiện công cộng" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-fahren", label: "fahren", meaning: "lái xe/đi (bằng phương tiện)", note: "unregelmäßig: fährt, fuhr, ist gefahren" },
              { id: "wa-umsteigen", label: "umsteigen", meaning: "đổi chuyến/đổi xe", note: "trennbar, unregelmäßig: steigt um, stieg um, ist umgestiegen" },
              { id: "wa-parken", label: "parken", meaning: "đỗ xe" },
              { id: "wa-sich-verspaeten", label: "sich verspäten", meaning: "bị trễ giờ", note: "reflexives Verb, oft mit Zeitangabe: 'sich um X Minuten verspäten'." },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-zustaendig-verkehr", label: "zuständig für + Akk.", meaning: "phụ trách về" },
              { id: "wa-abhaengig-verkehr", label: "abhängig von + Dat.", meaning: "phụ thuộc vào" },
              { id: "wa-verantwortlich-verkehr", label: "verantwortlich für + Akk.", meaning: "chịu trách nhiệm về" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
