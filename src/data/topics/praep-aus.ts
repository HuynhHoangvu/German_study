import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "praep-aus",
  title: "aus + Dativ",
  titleVi: "Giới từ aus",
  description: "bestehen aus, sich ergeben aus + aus Angst, aus diesem Grund … (nêu lý do)",
  color: "#134e4a",
  level: "B2",
  category: "praeposition",
  root: {
    id: "root",
    label: "aus + Dativ",
    meaning: "giới từ aus — luôn đi với Dativ",
    note: "Hai chức năng ở B2: (1) đi với động từ (bestehen aus, folgen aus); (2) nêu ĐỘNG CƠ, không có mạo từ: aus Angst, aus Interesse, aus diesem Grund.",
    children: [
      {
        id: "aus-verben",
        label: "Verben + aus",
        meaning: "động từ đi với aus",
        children: [
          {
            id: "aus-v1",
            label: "1. bestehen aus + Dat.",
            meaning: "bao gồm, cấu tạo từ",
            definition: "Aus bestimmten Teilen zusammengesetzt sein.",
            examples: [
              { de: "Die Prüfung besteht aus vier Teilen.", vi: "Kỳ thi gồm bốn phần." },
              { de: "Das Team besteht aus acht Personen.", vi: "Đội gồm tám người." },
            ],
            note: "Ba dạng dễ nhầm: bestehen AUS = gồm; bestehen AUF + Dat. = khăng khăng đòi; bestehen IN + Dat. = nằm ở chỗ.",
          },
          {
            id: "aus-v2",
            label: "2. sich zusammensetzen aus + Dat.",
            meaning: "cấu thành từ",
            definition: "Aus mehreren Teilen gebildet sein (formeller).",
            examples: [
              { de: "Die Miete setzt sich aus Kaltmiete und Nebenkosten zusammen.", vi: "Tiền thuê gồm tiền thuê cơ bản và phí phụ trội." },
              { de: "Die Gruppe setzt sich aus Teilnehmern vieler Länder zusammen.", vi: "Nhóm gồm người tham gia từ nhiều nước." },
            ],
          },
          {
            id: "aus-v3",
            label: "3. folgen / resultieren aus + Dat.",
            meaning: "là hệ quả của",
            definition: "Die logische Folge von etwas sein.",
            examples: [
              { de: "Daraus folgt, dass wir umdenken müssen.", vi: "Từ đó suy ra rằng chúng ta phải thay đổi tư duy." },
              { de: "Die Probleme resultieren aus mangelnder Planung.", vi: "Các vấn đề bắt nguồn từ việc thiếu quy hoạch." },
            ],
          },
          {
            id: "aus-v4",
            label: "4. sich ergeben aus + Dat.",
            meaning: "phát sinh từ, suy ra từ",
            definition: "Als Konsequenz aus etwas entstehen.",
            examples: [
              { de: "Daraus ergibt sich ein neues Problem.", vi: "Từ đó phát sinh một vấn đề mới." },
              { de: "Die Konsequenzen ergeben sich aus der Studie.", vi: "Các hệ quả được suy ra từ nghiên cứu." },
            ],
          },
          {
            id: "aus-v5",
            label: "5. entstehen aus + Dat.",
            meaning: "hình thành từ",
            definition: "Sich aus etwas entwickeln.",
            examples: [
              { de: "Aus der Idee ist ein großes Projekt entstanden.", vi: "Từ ý tưởng đó đã hình thành một dự án lớn." },
              { de: "Aus Missverständnissen entstehen oft Konflikte.", vi: "Từ hiểu lầm thường nảy sinh xung đột." },
            ],
          },
          {
            id: "aus-v6",
            label: "6. lernen aus + Dat.",
            meaning: "rút kinh nghiệm từ",
            definition: "Aus Erfahrungen Konsequenzen ziehen.",
            examples: [
              { de: "Man sollte aus seinen Fehlern lernen.", vi: "Nên rút kinh nghiệm từ sai lầm của mình." },
              { de: "Aus der Krise haben viele Firmen gelernt.", vi: "Nhiều công ty đã học được từ cuộc khủng hoảng." },
            ],
          },
          {
            id: "aus-v7",
            label: "7. schließen aus + Dat.",
            meaning: "kết luận từ",
            definition: "Aus einer Information eine Schlussfolgerung ziehen.",
            examples: [
              { de: "Daraus schließe ich, dass er nicht interessiert ist.", vi: "Từ đó tôi kết luận rằng anh ta không quan tâm." },
              { de: "Aus den Zahlen lässt sich ein klarer Trend schließen.", vi: "Từ các con số có thể rút ra xu hướng rõ ràng." },
            ],
          },
        ],
      },
      {
        id: "aus-grund",
        label: "aus + Nomen (Motiv / Grund)",
        meaning: "aus + danh từ — nêu động cơ, lý do",
        note: "Đặc điểm: KHÔNG có mạo từ. Đây là cách nêu lý do rất tự nhiên ở B2.",
        children: [
          {
            id: "aus-g1",
            label: "aus diesem Grund",
            meaning: "vì lý do này",
            definition: "Deshalb, aus dem genannten Grund.",
            examples: [
              { de: "Aus diesem Grund möchte ich den Vertrag kündigen.", vi: "Vì lý do này tôi muốn chấm dứt hợp đồng." },
              { de: "Aus gesundheitlichen Gründen kann ich nicht teilnehmen.", vi: "Vì lý do sức khỏe, tôi không thể tham gia." },
            ],
            note: "Cụm chuẩn trong thư trang trọng.",
          },
          {
            id: "aus-g2",
            label: "aus Angst / aus Sorge",
            meaning: "vì sợ / vì lo",
            definition: "Das Gefühl als Motiv einer Handlung.",
            examples: [
              { de: "Aus Angst vor Fehlern sagte er nichts.", vi: "Vì sợ sai, anh ấy đã không nói gì." },
              { de: "Aus Sorge um ihre Gesundheit ging sie zum Arzt.", vi: "Vì lo cho sức khỏe, cô ấy đã đi khám." },
            ],
          },
          {
            id: "aus-g3",
            label: "aus Interesse / aus Neugier",
            meaning: "vì quan tâm / vì tò mò",
            definition: "Das Interesse als Beweggrund.",
            examples: [
              { de: "Aus Interesse an der Kultur lerne ich Deutsch.", vi: "Vì quan tâm đến văn hóa, tôi học tiếng Đức." },
              { de: "Rein aus Neugier habe ich nachgefragt.", vi: "Chỉ vì tò mò mà tôi đã hỏi." },
            ],
          },
          {
            id: "aus-g4",
            label: "aus Erfahrung / aus Überzeugung",
            meaning: "theo kinh nghiệm / vì xác tín",
            definition: "Erfahrung oder feste Meinung als Grundlage.",
            examples: [
              { de: "Aus Erfahrung weiß ich, dass Geduld hilft.", vi: "Theo kinh nghiệm tôi biết rằng kiên nhẫn có ích." },
              { de: "Sie engagiert sich aus Überzeugung.", vi: "Cô ấy dấn thân vì niềm tin của mình." },
            ],
          },
          {
            id: "aus-g5",
            label: "aus finanziellen / beruflichen Gründen",
            meaning: "vì lý do tài chính / công việc",
            definition: "Formelle Begründung in Briefen und Anträgen.",
            examples: [
              { de: "Aus finanziellen Gründen musste ich das Studium abbrechen.", vi: "Vì lý do tài chính tôi phải bỏ dở việc học." },
              { de: "Er ist aus beruflichen Gründen umgezogen.", vi: "Anh ấy chuyển nhà vì lý do công việc." },
            ],
          },
        ],
      },
      {
        id: "aus-uebung",
        label: "Übung",
        meaning: "luyện tập",
        children: [
          { id: "aus-ue1", label: "Die Prüfung besteht ___ vier Teilen.", meaning: "gồm bốn phần", answer: "aus" },
          { id: "aus-ue2", label: "Der Kunde besteht ___ einer Rückerstattung.", meaning: "khăng khăng đòi hoàn tiền — giới từ nào?", answer: "auf" },
          { id: "aus-ue3", label: "___ diesem Grund kündige ich den Vertrag.", meaning: "vì lý do này", answer: "Aus" },
          { id: "aus-ue4", label: "Man sollte ___ seinen Fehlern lernen.", meaning: "rút kinh nghiệm từ sai lầm", answer: "aus" },
          { id: "aus-ue5", label: "___ gesundheitlichen Gründen kann ich nicht kommen.", meaning: "vì lý do sức khỏe", answer: "Aus" },
        ],
      },
    ],
  },
};

export default topic;
