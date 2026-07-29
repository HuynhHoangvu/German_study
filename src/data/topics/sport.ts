import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "sport",
  title: "Sport & Fitness",
  titleVi: "Thể thao & Thể hình",
  description: "Breitensport, Leistungssport, Extremsport und die Rolle des Sports",
  color: "#ea580c",
  level: "B1-B2",
  root: {
    id: "root",
    label: "Sport",
    meaning: "thể thao",
    children: [
      {
        id: "sportarten",
        label: "Sportarten",
        meaning: "các môn thể thao",
        children: [
          { id: "breitensport", label: "der Breitensport", meaning: "thể thao đại chúng", note: "breit (rộng rãi) + Sport: thể thao cho mọi người, không thi đấu." },
          { id: "leistungssport", label: "der ___", meaning: "thể thao thành tích cao", answer: "Leistungssport", synonyms: ["der Profisport"] },
          { id: "extremsport", label: "der Extremsport", meaning: "thể thao mạo hiểm" },
          { id: "mannschaftssport", label: "der Mannschaftssport", meaning: "thể thao đồng đội", synonyms: ["der Teamsport"] },
        ],
      },
      {
        id: "fitness",
        label: "Fitness",
        meaning: "thể hình",
        children: [
          { id: "fitnessstudio", label: "das Fitnessstudio", meaning: "phòng tập gym", synonyms: ["das Fitnesscenter"] },
          { id: "training", label: "das ___ absolvieren", meaning: "tập luyện", answer: "Training" },
          { id: "ausdauer", label: "die Ausdauer", meaning: "sức bền", synonyms: ["die Kondition"] },
        ],
      },
      {
        id: "vorteile",
        label: "Vorteile",
        meaning: "lợi ích",
        children: [
          { id: "koerperlich", label: "körperliche Fitness", meaning: "thể chất khỏe mạnh" },
          { id: "teamgeist", label: "der ___", meaning: "tinh thần đồng đội", answer: "Teamgeist" },
          { id: "stressabbau", label: "der Stressabbau", meaning: "giảm căng thẳng" },
        ],
      },
      {
        id: "gesellschaft",
        label: "Rolle in der Gesellschaft",
        meaning: "vai trò trong xã hội",
        children: [
          { id: "vereinsleben", label: "das Vereinsleben", meaning: "đời sống câu lạc bộ", note: "Verein (câu lạc bộ/hội) + Leben (đời sống)." },
          { id: "doping", label: "das Doping", meaning: "sử dụng chất kích thích" },
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
              { id: "wa-mannschaft", label: "die Mannschaft", meaning: "đội (thể thao)" },
              { id: "wa-wettkampf", label: "der Wettkampf", meaning: "cuộc thi đấu" },
              { id: "wa-verletzung-sport", label: "die Verletzung", meaning: "chấn thương" },
              { id: "wa-sieg", label: "der Sieg", meaning: "chiến thắng" },
              { id: "wa-niederlage", label: "die Niederlage", meaning: "thất bại/thua cuộc" },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-ein-spiel-gewinnen", label: "ein Spiel gewinnen", meaning: "thắng một trận đấu" },
              { id: "wa-sich-fit-halten-sport", label: "sich fit halten", meaning: "giữ gìn thể lực" },
              { id: "wa-an-einem-wettkampf-teilnehmen", label: "an einem Wettkampf teilnehmen", meaning: "tham gia một cuộc thi đấu" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-trainieren", label: "trainieren", meaning: "luyện tập" },
              { id: "wa-gewinnen", label: "gewinnen", meaning: "thắng", note: "unregelmäßig: gewinnt, gewann, hat gewonnen" },
              { id: "wa-verlieren", label: "verlieren", meaning: "thua", note: "unregelmäßig: verliert, verlor, hat verloren" },
              { id: "wa-sich-anstrengen", label: "sich anstrengen", meaning: "gắng sức" },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-erfolgreich-sport", label: "erfolgreich in + Dat.", meaning: "thành công trong (môn gì)" },
              { id: "wa-begeistert-sport", label: "begeistert von + Dat.", meaning: "hào hứng với" },
              { id: "wa-stolz-sport", label: "stolz auf + Akk.", meaning: "tự hào về" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
