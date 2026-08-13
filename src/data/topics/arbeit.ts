import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "arbeit",
  title: "Arbeit & Beruf",
  titleVi: "Công việc",
  description: "Arbeitswelt, Bewerbung und Work-Life-Balance",
  color: "#6d28d9",
  level: "B2",
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
          { id: "lebenslauf", label: "der tabellarische Lebenslauf", meaning: "sơ yếu lý lịch dạng bảng", synonyms: ["der CV"], note: "in Bewerbungen üblich: übersichtlich in Tabellenform, nicht als Fließtext." },
          { id: "anschreiben", label: "das ___", meaning: "thư xin việc (trình bày động cơ)", answer: "Anschreiben", synonyms: ["das Motivationsschreiben"] },
          { id: "vorstellungsgespraech", label: "das Vorstellungsgespräch", meaning: "buổi phỏng vấn", synonyms: ["das Bewerbungsgespräch", "das Auswahlgespräch"] },
          { id: "qualifikation", label: "die fachliche Qualifikation", meaning: "trình độ chuyên môn", note: "fachlich = thuộc về chuyên môn, thường đi kèm 'Qualifikation', 'Kompetenz'." },
        ],
      },
      {
        id: "arbeitsformen",
        label: "Arbeitsformen",
        meaning: "hình thức làm việc",
        children: [
          { id: "vollzeit", label: "eine Vollzeitstelle bekleiden", meaning: "đảm nhận một vị trí toàn thời gian", note: "'eine Stelle bekleiden' = trang trọng hơn 'haben'." },
          { id: "teilzeit", label: "die Teilzeitbeschäftigung", meaning: "việc làm bán thời gian" },
          { id: "homeoffice", label: "im ___ arbeiten", meaning: "làm việc tại nhà", answer: "Homeoffice" },
          { id: "selbststaendig", label: "freiberuflich tätig sein", meaning: "hành nghề tự do", synonyms: ["selbstständig arbeiten"] },
        ],
      },
      {
        id: "probleme",
        label: "Probleme im Job",
        meaning: "vấn đề trong công việc",
        children: [
          { id: "arbeitsdruck", label: "der Leistungsdruck", meaning: "áp lực thành tích", synonyms: ["der Arbeitsdruck"], note: "einem hohen Leistungsdruck ausgesetzt sein." },
          { id: "burnout", label: "das Burnout-Syndrom", meaning: "hội chứng kiệt sức", note: "trạng thái kiệt sức toàn diện về thể chất và tinh thần do làm việc quá tải kéo dài." },
          { id: "unsicherheit2", label: "die Arbeitsplatzunsicherheit", meaning: "sự bất ổn công việc", note: "Arbeitsplatz (nơi làm việc) + Unsicherheit (sự bất an); auch: 'von Kündigung bedroht sein'." },
        ],
      },
      {
        id: "worklife",
        label: "Work-Life-Balance",
        meaning: "cân bằng cuộc sống - công việc",
        children: [
          { id: "flexible", label: "flexible Arbeitszeitmodelle", meaning: "các mô hình giờ làm việc linh hoạt" },
          { id: "urlaub", label: "ausreichend ___", meaning: "đủ ngày nghỉ", answer: "Urlaub" },
          { id: "erholung", label: "die Erholung", meaning: "sự nghỉ ngơi hồi phục", note: "sich erholen von + Dat. = hồi phục sau việc gì." },
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
              { id: "wa-gehalt", label: "das Gehalt", meaning: "lương", synonyms: ["die Vergütung", "das Entgelt"] },
              { id: "wa-kuendigung", label: "die betriebsbedingte Kündigung", meaning: "sự sa thải vì lý do kinh doanh", note: "phân biệt mit 'verhaltensbedingt' (do hành vi) và 'personenbedingt' (do cá nhân)." },
              { id: "wa-kollege", label: "der Kollege", meaning: "đồng nghiệp" },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-verantwortung", label: "Verantwortung übernehmen", meaning: "nhận trách nhiệm" },
              { id: "wa-karrierechance", label: "vielversprechende Karriereaussichten", meaning: "triển vọng nghề nghiệp đầy hứa hẹn" },
              { id: "wa-aufstiegsmoeglichkeit", label: "die Aufstiegsmöglichkeit", meaning: "cơ hội thăng tiến" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-bewerben", label: "sich bewerben um + Akk.", meaning: "nộp đơn xin (việc gì)", note: "unregelmäßig: bewirbt sich, bewarb sich, hat sich beworben" },
              { id: "wa-kuendigen", label: "kündigen", meaning: "xin nghỉ việc/sa thải", note: "jemandem kündigen (sa thải ai) vs. jemandem/etwas kündigen (từ chối hợp đồng)." },
              { id: "wa-einstellen", label: "einstellen", meaning: "tuyển dụng", note: "trennbar: stellt ein, stellte ein, hat eingestellt" },
              { id: "wa-verdienen", label: "ein Gehalt beziehen", meaning: "nhận lương", synonyms: ["verdienen"], note: "'beziehen' trang trọng hơn 'verdienen', dùng cho lương/trợ cấp." },
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
