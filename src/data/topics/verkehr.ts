import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "verkehr",
  title: "Verkehr / Transport",
  titleVi: "Giao thông",
  description: "Verkehrsmittel, Probleme und Lösungen im Verkehr",
  color: "#2563a8",
  level: "B1-B2",
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
          { id: "auto", label: "das Auto", meaning: "ô tô", synonyms: ["der Wagen", "der PKW"] },
          { id: "zug", label: "der Zug", meaning: "tàu hỏa" },
          { id: "fahrrad", label: "das ___", meaning: "xe đạp", answer: "Fahrrad" },
          { id: "bus", label: "der Bus", meaning: "xe buýt" },
          { id: "oepnv", label: "der ÖPNV", meaning: "phương tiện công cộng", note: "öffentlicher Personennahverkehr" },
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
          { id: "flexibel", label: "flexibel und bequem", meaning: "linh hoạt và tiện lợi" },
          { id: "umweltschaedlich", label: "umweltschädlich", meaning: "gây hại môi trường" },
          { id: "teuer", label: "hohe Unterhaltskosten", meaning: "chi phí bảo trì cao" },
        ],
      },
      {
        id: "loesungen",
        label: "Lösungen",
        meaning: "giải pháp",
        children: [
          { id: "ausbau", label: "Ausbau des ÖPNV", meaning: "mở rộng giao thông công cộng" },
          { id: "radwege", label: "mehr Radwege bauen", meaning: "xây thêm làn xe đạp" },
          { id: "elektro", label: "die ___", meaning: "xe điện", answer: "Elektroautos" },
          { id: "carsharing", label: "das Carsharing", meaning: "chia sẻ xe" },
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
        id: "wortarten",
        label: "Wortschatz nach Wortart",
        meaning: "từ vựng theo loại từ",
        children: [
          {
            id: "wortarten-nomen",
            label: "Nomen",
            meaning: "danh từ",
            children: [
              { id: "wa-fahrer", label: "der Fahrer", meaning: "người lái xe" },
              { id: "wa-fahrplan", label: "der Fahrplan", meaning: "lịch trình chạy xe" },
              { id: "wa-verkehrsschild", label: "das Verkehrsschild", meaning: "biển báo giao thông" },
              { id: "wa-fahrkarte", label: "die Fahrkarte", meaning: "vé xe" },
              { id: "wa-geschwindigkeit", label: "die Geschwindigkeit", meaning: "tốc độ" },
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
              { id: "wa-sich-verspaeten", label: "sich verspäten", meaning: "bị trễ giờ" },
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
