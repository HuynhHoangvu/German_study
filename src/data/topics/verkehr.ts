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
    ],
  },
};

export default topic;
