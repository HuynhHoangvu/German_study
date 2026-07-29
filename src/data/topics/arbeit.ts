import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "arbeit",
  title: "Arbeit & Beruf",
  titleVi: "Công việc",
  description: "Arbeitswelt, Bewerbung und Work-Life-Balance",
  color: "#6d28d9",
  level: "B1-B2",
  root: {
    id: "root",
    label: "Arbeit",
    meaning: "công việc",
    children: [
      {
        id: "bewerbung",
        label: "Bewerbung",
        meaning: "hồ sơ xin việc",
        children: [
          { id: "lebenslauf", label: "der Lebenslauf", meaning: "sơ yếu lý lịch", synonyms: ["der CV"] },
          { id: "anschreiben", label: "das ___", meaning: "thư xin việc", answer: "Anschreiben", synonyms: ["das Motivationsschreiben"] },
          { id: "vorstellungsgespraech", label: "das Vorstellungsgespräch", meaning: "buổi phỏng vấn", synonyms: ["das Bewerbungsgespräch"] },
          { id: "qualifikation", label: "die Qualifikation", meaning: "trình độ chuyên môn" },
        ],
      },
      {
        id: "arbeitsformen",
        label: "Arbeitsformen",
        meaning: "hình thức làm việc",
        children: [
          { id: "vollzeit", label: "die Vollzeitstelle", meaning: "công việc toàn thời gian" },
          { id: "teilzeit", label: "die Teilzeitstelle", meaning: "công việc bán thời gian" },
          { id: "homeoffice", label: "das ___", meaning: "làm việc tại nhà", answer: "Homeoffice" },
          { id: "selbststaendig", label: "selbstständig arbeiten", meaning: "làm việc tự do", synonyms: ["freiberuflich arbeiten"] },
        ],
      },
      {
        id: "probleme",
        label: "Probleme im Job",
        meaning: "vấn đề trong công việc",
        children: [
          { id: "arbeitsdruck", label: "der Arbeitsdruck", meaning: "áp lực công việc", synonyms: ["der Leistungsdruck"] },
          { id: "burnout", label: "das Burnout", meaning: "kiệt sức", note: "trạng thái kiệt sức toàn diện do làm việc quá tải kéo dài." },
          { id: "unsicherheit2", label: "die Arbeitsplatzunsicherheit", meaning: "sự bất ổn công việc", note: "Arbeitsplatz (nơi làm việc) + Unsicherheit (sự bất an)." },
        ],
      },
      {
        id: "worklife",
        label: "Work-Life-Balance",
        meaning: "cân bằng cuộc sống - công việc",
        children: [
          { id: "flexible", label: "flexible Arbeitszeiten", meaning: "giờ làm việc linh hoạt" },
          { id: "urlaub", label: "genügend ___", meaning: "đủ ngày nghỉ", answer: "Urlaub" },
          { id: "erholung", label: "die Erholung", meaning: "sự nghỉ ngơi hồi phục" },
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
              { id: "wa-arbeitgeber", label: "der Arbeitgeber", meaning: "người sử dụng lao động" },
              { id: "wa-arbeitnehmer", label: "der Arbeitnehmer", meaning: "người lao động" },
              { id: "wa-gehalt", label: "das Gehalt", meaning: "lương" },
              { id: "wa-kuendigung", label: "die Kündigung", meaning: "sự sa thải/thôi việc" },
              { id: "wa-kollege", label: "der Kollege", meaning: "đồng nghiệp" },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-verantwortung", label: "die Verantwortung übernehmen", meaning: "nhận trách nhiệm" },
              { id: "wa-karrierechance", label: "eine gute Karrierechance", meaning: "một cơ hội thăng tiến tốt" },
              { id: "wa-aufstiegsmoeglichkeit", label: "die Aufstiegsmöglichkeit", meaning: "cơ hội thăng tiến" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-bewerben", label: "sich bewerben um + Akk.", meaning: "nộp đơn xin (việc gì)", note: "unregelmäßig: bewirbt sich, bewarb sich, hat sich beworben" },
              { id: "wa-kuendigen", label: "kündigen", meaning: "xin nghỉ việc/sa thải" },
              { id: "wa-einstellen", label: "einstellen", meaning: "tuyển dụng", note: "trennbar: stellt ein, stellte ein, hat eingestellt" },
              { id: "wa-verdienen", label: "verdienen", meaning: "kiếm được (tiền)" },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-zufrieden", label: "zufrieden mit + Dat.", meaning: "hài lòng với", note: "zufrieden mit dem Job sein" },
              { id: "wa-verantwortlich", label: "verantwortlich für + Akk.", meaning: "chịu trách nhiệm về" },
              { id: "wa-qualifiziert", label: "qualifiziert für + Akk.", meaning: "đủ trình độ cho" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
