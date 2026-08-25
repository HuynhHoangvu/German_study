import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "bildung",
  title: "Bildung",
  titleVi: "Giáo dục",
  description: "Schulsystem, Studium und lebenslanges Lernen",
  color: "#0f766e",
  level: "B2",
  root: {
    id: "root",
    label: "Bildung",
    meaning: "giáo dục",
    children: [
      {
        id: "system",
        label: "Bildungssystem",
        meaning: "hệ thống giáo dục",
        children: [
          { id: "grundschule", label: "die Grundschule", meaning: "trường tiểu học" },
          { id: "gymnasium", label: "das ___", meaning: "trường trung học (hướng đại học)", answer: "Gymnasium" },
          { id: "ausbildung", label: "die duale Berufsausbildung", meaning: "học nghề song hành (lý thuyết và thực hành)", note: "kết hợp học tại trường nghề và thực tập tại doanh nghiệp." },
          { id: "studium", label: "das Studium", meaning: "việc học đại học", note: "ein Studium absolvieren/aufnehmen = hoàn thành/bắt đầu việc học đại học." },
        ],
      },
      {
        id: "vorteile",
        label: "Vorteile guter Bildung",
        meaning: "lợi ích giáo dục tốt",
        children: [
          { id: "chancen", label: "verbesserte Berufsaussichten", meaning: "triển vọng nghề nghiệp được cải thiện", synonyms: ["bessere Jobaussichten"] },
          { id: "selbststaendig2", label: "eigenständiges und kritisches Denken", meaning: "tư duy độc lập và phản biện", synonyms: ["kritisches Denkvermögen"] },
        ],
      },
      {
        id: "probleme",
        label: "Probleme",
        meaning: "vấn đề",
        children: [
          { id: "chancenungleichheit", label: "die ___", meaning: "bất bình đẳng cơ hội", answer: "Chancenungleichheit", note: "Chance (cơ hội) + Ungleichheit (sự bất bình đẳng)." },
          { id: "lehrermangel", label: "der akute Lehrermangel", meaning: "tình trạng thiếu giáo viên trầm trọng" },
          { id: "leistungsdruck", label: "der Leistungsdruck", meaning: "áp lực thành tích", synonyms: ["der Notendruck"], note: "unter Leistungsdruck stehen/leiden." },
        ],
      },
      {
        id: "lebenslang",
        label: "Lebenslanges Lernen",
        meaning: "học tập suốt đời",
        children: [
          { id: "weiterbildung", label: "die berufliche Weiterbildung", meaning: "đào tạo chuyên môn nâng cao" },
          { id: "onlinekurse", label: "digitale Lernangebote", meaning: "các khóa học/nội dung học trực tuyến", synonyms: ["die Onlinekurse"] },
          { id: "fremdsprachen", label: "___ erlernen", meaning: "trau dồi ngoại ngữ", answer: "Fremdsprachen" },
        ],
      },
      {
        id: "trends",
        label: "Aktuelle Trend-Themen",
        meaning: "các chủ đề xu hướng (dùng cho phần Nói/Viết Teil 1)",
        children: [
          {
            id: "trend-gapyear",
            label: "Gap-Year nach dem Studium",
            meaning: "năm nghỉ sau khi tốt nghiệp",
            children: [
              {
                id: "trend-gapyear-vorteile", label: "Vorteile", meaning: "ưu điểm",
                children: [
                  { id: "gy-v1", label: "praktische Erfahrungen im Ausland sammeln", meaning: "tích lũy kinh nghiệm thực tế ở nước ngoài" },
                  { id: "gy-v2", label: "Zeit für Selbstfindung und Orientierung", meaning: "có thời gian tìm hiểu bản thân và định hướng" },
                  { id: "gy-v3", label: "eine Verschnaufpause vor dem Berufseinstieg", meaning: "khoảng nghỉ trước khi bước vào công việc" },
                ],
              },
              {
                id: "trend-gapyear-nachteile", label: "Nachteile", meaning: "nhược điểm",
                children: [
                  { id: "gy-n1", label: "der verzögerte Berufseinstieg", meaning: "việc bắt đầu sự nghiệp bị trì hoãn" },
                  { id: "gy-n2", label: "hohe Kosten für Reisen und Aufenthalt", meaning: "chi phí cao cho việc đi lại và lưu trú" },
                  { id: "gy-n3", label: "die Gefahr, den Anschluss zu verlieren", meaning: "nguy cơ bị tụt lại so với bạn bè đồng trang lứa" },
                ],
              },
              {
                id: "trend-gapyear-alt", label: "Alternativen / Möglichkeiten", meaning: "giải pháp thay thế",
                children: [
                  { id: "gy-a1", label: "ein Praktikum parallel zum Studienabschluss absolvieren", meaning: "thực tập song song với việc hoàn thành bằng cấp" },
                  { id: "gy-a2", label: "ein kurzer, gezielter Auslandsaufenthalt statt eines ganzen Jahres", meaning: "một chuyến đi nước ngoài ngắn, có mục tiêu rõ ràng thay vì cả năm" },
                ],
              },
              {
                id: "trend-gapyear-vn", label: "Situation in Vietnam", meaning: "tình hình ở Việt Nam",
                children: [
                  { id: "gy-vn1", label: "ein Gap-Year ist in Vietnam gesellschaftlich noch wenig akzeptiert", meaning: "năm nghỉ chưa được xã hội Việt Nam chấp nhận rộng rãi" },
                  { id: "gy-vn2", label: "viele Eltern erwarten einen nahtlosen Übergang ins Berufsleben", meaning: "nhiều phụ huynh kỳ vọng con chuyển tiếp ngay vào công việc" },
                ],
              },
            ],
          },
          {
            id: "trend-fremdsprachen-kiga",
            label: "Fremdsprachen ab dem Kindergarten",
            meaning: "học ngoại ngữ từ tuổi mẫu giáo",
            children: [
              {
                id: "trend-fremdsprachen-kiga-vorteile", label: "Vorteile", meaning: "ưu điểm",
                children: [
                  { id: "fs-v1", label: "Kinder lernen Sprachen in jungem Alter besonders leicht", meaning: "trẻ nhỏ tiếp thu ngôn ngữ dễ dàng hơn ở độ tuổi này" },
                  { id: "fs-v2", label: "eine authentische Aussprache wird von Anfang an geprägt", meaning: "phát âm chuẩn được hình thành ngay từ đầu" },
                  { id: "fs-v3", label: "die kognitive Entwicklung wird gefördert", meaning: "sự phát triển nhận thức được thúc đẩy" },
                ],
              },
              {
                id: "trend-fremdsprachen-kiga-nachteile", label: "Nachteile", meaning: "nhược điểm",
                children: [
                  { id: "fs-n1", label: "die Gefahr der Überforderung im frühen Kindesalter", meaning: "nguy cơ quá tải ở độ tuổi còn quá nhỏ" },
                  { id: "fs-n2", label: "der Mangel an qualifizierten Erzieherinnen und Erziehern", meaning: "thiếu giáo viên mầm non đủ trình độ" },
                  { id: "fs-n3", label: "hohe zusätzliche Kosten für die Eltern", meaning: "chi phí phát sinh cao cho phụ huynh" },
                ],
              },
              {
                id: "trend-fremdsprachen-kiga-alt", label: "Alternativen / Möglichkeiten", meaning: "giải pháp thay thế",
                children: [
                  { id: "fs-a1", label: "spielerischer Fremdsprachenkontakt statt strukturierten Unterrichts", meaning: "tiếp xúc ngoại ngữ qua trò chơi thay vì học có cấu trúc" },
                  { id: "fs-a2", label: "der Fremdsprachenunterricht erst ab der Grundschule", meaning: "chỉ bắt đầu dạy ngoại ngữ từ bậc tiểu học" },
                ],
              },
              {
                id: "trend-fremdsprachen-kiga-vn", label: "Situation in Vietnam", meaning: "tình hình ở Việt Nam",
                children: [
                  { id: "fs-vn1", label: "Englisch wird in vielen Kindergärten in Großstädten bereits angeboten", meaning: "tiếng Anh đã được dạy ở nhiều trường mẫu giáo tại các thành phố lớn" },
                  { id: "fs-vn2", label: "auf dem Land ist ein solches Angebot noch selten", meaning: "ở nông thôn dịch vụ này vẫn còn hiếm" },
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
              { id: "wa-lehrer", label: "der Lehrer / die Lehrerin", meaning: "giáo viên" },
              { id: "wa-schueler", label: "der Schüler / die Schülerin", meaning: "học sinh" },
              { id: "wa-note", label: "die Note", meaning: "điểm số" },
              { id: "wa-pruefung", label: "die Abschlussprüfung", meaning: "kỳ thi tốt nghiệp/kỳ thi cuối khóa", synonyms: ["die Prüfung"] },
              { id: "wa-stipendium", label: "das Stipendium", meaning: "học bổng", note: "ein Stipendium erhalten/beantragen (nhận/xin học bổng)." },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-eine-pruefung-ablegen", label: "eine Prüfung ablegen", meaning: "làm/tham gia một kỳ thi" },
              { id: "wa-abschluss-machen", label: "einen Abschluss erwerben", meaning: "đạt được một bằng cấp", synonyms: ["einen Abschluss machen"] },
              { id: "wa-wissen-erwerben", label: "fundiertes Wissen erwerben", meaning: "thu nhận kiến thức nền tảng vững chắc" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-unterrichten", label: "unterrichten", meaning: "giảng dạy", note: "jemanden in etwas unterrichten (dạy ai môn gì)." },
              { id: "wa-bestehen", label: "bestehen", meaning: "vượt qua (kỳ thi)", note: "unregelmäßig: besteht, bestand, hat bestanden" },
              { id: "wa-durchfallen", label: "durchfallen", meaning: "trượt (kỳ thi)", note: "trennbar, unregelmäßig: fällt durch, fiel durch, ist durchgefallen" },
              { id: "wa-sich-vorbereiten", label: "sich vorbereiten auf + Akk.", meaning: "chuẩn bị cho" },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-interessiert", label: "interessiert an + Dat.", meaning: "quan tâm đến" },
              { id: "wa-begabt", label: "begabt für + Akk.", meaning: "có năng khiếu về" },
              { id: "wa-erfolgreich", label: "erfolgreich in + Dat.", meaning: "thành công trong" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
