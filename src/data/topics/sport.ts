import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "sport",
  title: "Sport & Fitness",
  titleVi: "Thể thao & Thể hình",
  description: "Breitensport, Leistungssport, Extremsport und die Rolle des Sports",
  color: "#ea580c",
  level: "B2",
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
          { id: "breitensport", label: "der Breitensport", meaning: "thể thao đại chúng", note: "breit (rộng rãi) + Sport: thể thao cho mọi người, không mang tính thi đấu chuyên nghiệp; đối lập với 'Leistungssport'." },
          { id: "leistungssport", label: "der ___", meaning: "thể thao thành tích cao", answer: "Leistungssport", synonyms: ["der Spitzensport", "der Profisport"] },
          { id: "extremsport", label: "der Extremsport", meaning: "thể thao mạo hiểm", synonyms: ["der Risikosport"], note: "thường đi kèm 'ein hohes Verletzungsrisiko eingehen' (chấp nhận rủi ro chấn thương cao)." },
          { id: "mannschaftssport", label: "der Mannschaftssport", meaning: "thể thao đồng đội", synonyms: ["der Teamsport"], note: "đối lập với 'der Individualsport' (thể thao cá nhân)." },
        ],
      },
      {
        id: "fitness",
        label: "Fitness",
        meaning: "thể hình",
        children: [
          { id: "fitnessstudio", label: "das Fitnessstudio", meaning: "phòng tập gym", synonyms: ["das Fitnesscenter"], note: "'ein Fitnessstudio-Abo abschließen' = ký hợp đồng thành viên phòng gym." },
          { id: "training", label: "ein intensives ___ absolvieren", meaning: "hoàn thành một buổi tập luyện cường độ cao", answer: "Training", note: "'absolvieren' (hoàn thành, trải qua) mang sắc thái trang trọng hơn 'machen'." },
          { id: "ausdauer", label: "die Ausdauer", meaning: "sức bền", synonyms: ["die Kondition", "das Durchhaltevermögen"] },
        ],
      },
      {
        id: "vorteile",
        label: "Vorteile",
        meaning: "lợi ích",
        children: [
          { id: "koerperlich", label: "die körperliche Leistungsfähigkeit", meaning: "năng lực thể chất", note: "trang trọng hơn 'körperliche Fitness'." },
          { id: "teamgeist", label: "der ___ stärken", meaning: "củng cố tinh thần đồng đội", answer: "Teamgeist" },
          { id: "stressabbau", label: "der Stressabbau", meaning: "giải tỏa căng thẳng", note: "'Stress abbauen' (giảm/giải tỏa căng thẳng) — động từ tách 'abbauen'." },
        ],
      },
      {
        id: "gesellschaft",
        label: "Rolle in der Gesellschaft",
        meaning: "vai trò trong xã hội",
        children: [
          { id: "vereinsleben", label: "das Vereinsleben", meaning: "đời sống câu lạc bộ", note: "Verein (câu lạc bộ/hội) + Leben (đời sống); gắn với 'ehrenamtliches Engagement' (hoạt động thiện nguyện)." },
          { id: "doping", label: "das Doping", meaning: "sử dụng chất kích thích", synonyms: ["die Leistungsmanipulation"], note: "'zu Dopingmitteln greifen' = dùng đến chất kích thích cấm." },
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
              { id: "wa-mannschaft", label: "die Mannschaft", meaning: "đội (thể thao)", synonyms: ["das Team"] },
              { id: "wa-wettkampf", label: "der Wettkampf", meaning: "cuộc thi đấu", synonyms: ["der Wettbewerb"] },
              { id: "wa-verletzung-sport", label: "die Verletzung", meaning: "chấn thương", note: "'sich eine Verletzung zuziehen' = bị (tự gây) chấn thương." },
              { id: "wa-sieg", label: "der Sieg", meaning: "chiến thắng", note: "'einen Sieg erringen' = giành chiến thắng (trang trọng hơn 'gewinnen')." },
              { id: "wa-niederlage", label: "die Niederlage", meaning: "thất bại/thua cuộc", note: "'eine Niederlage einstecken/hinnehmen müssen' = phải chấp nhận thất bại." },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-ein-spiel-gewinnen", label: "ein Spiel für sich entscheiden", meaning: "giành chiến thắng trong một trận đấu", note: "cách diễn đạt trang trọng, hay dùng trong báo thể thao thay cho 'gewinnen'." },
              { id: "wa-sich-fit-halten-sport", label: "sich körperlich fit halten", meaning: "duy trì thể lực dẻo dai" },
              { id: "wa-an-einem-wettkampf-teilnehmen", label: "an einem Wettkampf teilnehmen", meaning: "tham gia một cuộc thi đấu", note: "'teilnehmen an + Dat.' — động từ đòi giới từ 'an' với cách Dativ." },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-trainieren", label: "trainieren", meaning: "luyện tập", synonyms: ["sich vorbereiten auf + Akk."] },
              { id: "wa-gewinnen", label: "gewinnen", meaning: "thắng", note: "unregelmäßig: gewinnt, gewann, hat gewonnen" },
              { id: "wa-verlieren", label: "verlieren", meaning: "thua", note: "unregelmäßig: verliert, verlor, hat verloren" },
              { id: "wa-sich-anstrengen", label: "sich anstrengen", meaning: "gắng sức, nỗ lực hết mình", note: "phản thân + 'sich' im Akkusativ; danh từ tương ứng: 'die Anstrengung'." },
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
