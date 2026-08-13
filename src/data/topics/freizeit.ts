import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "freizeit",
  title: "Freizeit",
  titleVi: "Thời gian rảnh",
  description: "Freizeitaktivitäten, Hobbys und ihre Bedeutung",
  color: "#c026d3",
  level: "B2",
  root: {
    id: "root",
    label: "Freizeit",
    meaning: "thời gian rảnh",
    children: [
      {
        id: "aktivitaeten",
        label: "Aktivitäten",
        meaning: "hoạt động",
        children: [
          { id: "sport2", label: "sich sportlich betätigen", meaning: "vận động thể thao", synonyms: ["Sport treiben"] },
          { id: "lesen", label: "___", meaning: "đọc sách", answer: "lesen" },
          { id: "reisen2", label: "auf Reisen gehen", meaning: "đi du lịch", synonyms: ["reisen"] },
          { id: "ehrenamt", label: "sich ehrenamtlich engagieren", meaning: "hoạt động tình nguyện", synonyms: ["freiwillig arbeiten"], note: "ehrenamtlich = không lương, tự nguyện vì cộng đồng." },
        ],
      },
      {
        id: "bedeutung",
        label: "Bedeutung",
        meaning: "ý nghĩa",
        children: [
          { id: "erholung3", label: "die Erholung", meaning: "sự nghỉ ngơi", synonyms: ["die Entspannung"] },
          { id: "ausgleich", label: "der ___ zum Alltag", meaning: "sự cân bằng với đời thường", answer: "Ausgleich" },
          { id: "selbstverwirklichung", label: "die Selbstverwirklichung", meaning: "tự hiện thực hóa bản thân", note: "selbst (tự) + Verwirklichung (hiện thực hóa)." },
        ],
      },
      {
        id: "probleme",
        label: "Probleme",
        meaning: "vấn đề",
        children: [
          { id: "zeitmangel2", label: "der chronische Zeitmangel", meaning: "tình trạng thiếu thời gian kéo dài", synonyms: ["wenig Zeit haben"] },
          { id: "bildschirmzeit", label: "zu viel ___", meaning: "quá nhiều thời gian dùng màn hình", answer: "Bildschirmzeit" },
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
              { id: "wa-hobby", label: "das Hobby", meaning: "sở thích" },
              { id: "wa-freizeitbeschaeftigung", label: "die Freizeitbeschäftigung", meaning: "hoạt động giải trí" },
              { id: "wa-verein", label: "der Verein", meaning: "câu lạc bộ/hội", note: "einem Verein beitreten (gia nhập một hội)." },
              { id: "wa-veranstaltung", label: "die Veranstaltung", meaning: "sự kiện" },
              { id: "wa-langeweile3", label: "die Langeweile", meaning: "sự nhàm chán", note: "vor Langeweile = vì quá nhàm chán." },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-zeit-vertreiben", label: "sich die Zeit vertreiben", meaning: "giết thời gian" },
              { id: "wa-einem-hobby-nachgehen", label: "einem Hobby nachgehen", meaning: "theo đuổi một sở thích" },
              { id: "wa-neue-leute-kennenlernen", label: "neue Leute kennenlernen", meaning: "làm quen người mới" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-sich-entspannen", label: "sich entspannen", meaning: "thư giãn" },
              { id: "wa-teilnehmen", label: "teilnehmen an + Dat.", meaning: "tham gia vào", note: "trennbar, unregelmäßig: nimmt teil, nahm teil, hat teilgenommen" },
              { id: "wa-sich-beschaeftigen", label: "sich beschäftigen mit + Dat.", meaning: "bận rộn/để tâm với" },
              { id: "wa-geniessen", label: "genießen", meaning: "tận hưởng", note: "unregelmäßig: genießt, genoss, hat genossen" },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-begeistert", label: "begeistert von + Dat.", meaning: "hào hứng với" },
              { id: "wa-interessiert-freizeit", label: "interessiert an + Dat.", meaning: "quan tâm đến" },
              { id: "wa-beschaeftigt", label: "beschäftigt mit + Dat.", meaning: "bận với" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
