import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "freizeit",
  title: "Freizeit",
  titleVi: "Thời gian rảnh",
  description: "Freizeitaktivitäten, Hobbys und ihre Bedeutung",
  color: "#c026d3",
  level: "B1-B2",
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
          { id: "sport2", label: "Sport treiben", meaning: "tập thể thao" },
          { id: "lesen", label: "___", meaning: "đọc sách", answer: "lesen" },
          { id: "reisen2", label: "reisen", meaning: "du lịch" },
          { id: "ehrenamt", label: "sich ehrenamtlich engagieren", meaning: "hoạt động tình nguyện" },
        ],
      },
      {
        id: "bedeutung",
        label: "Bedeutung",
        meaning: "ý nghĩa",
        children: [
          { id: "erholung3", label: "die Erholung", meaning: "sự nghỉ ngơi" },
          { id: "ausgleich", label: "der ___ zum Alltag", meaning: "sự cân bằng với đời thường", answer: "Ausgleich" },
          { id: "selbstverwirklichung", label: "die Selbstverwirklichung", meaning: "tự hiện thực hóa bản thân" },
        ],
      },
      {
        id: "probleme",
        label: "Probleme",
        meaning: "vấn đề",
        children: [
          { id: "zeitmangel2", label: "der Zeitmangel", meaning: "thiếu thời gian" },
          { id: "bildschirmzeit", label: "zu viel ___", meaning: "quá nhiều thời gian dùng màn hình", answer: "Bildschirmzeit" },
        ],
      },
    ],
  },
};

export default topic;
