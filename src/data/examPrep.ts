export type SkillTip = {
  title: string;
  timeHint: string;
  tips: string[];
};

export const skillStrategies: SkillTip[] = [
  {
    title: "Lesen — Đọc hiểu",
    timeHint: "≈ 65 phút, 4-5 dạng bài (trắc nghiệm, đúng/sai, nối câu, điền từ)",
    tips: [
      "Đọc câu hỏi TRƯỚC khi đọc bài — biết mình cần tìm gì để đọc có mục đích.",
      "Skimming: đọc câu đầu + câu cuối mỗi đoạn để nắm ý chính trong 1-2 phút.",
      "Scanning: quét nhanh tìm từ khóa/số liệu/tên riêng khi câu hỏi hỏi chi tiết cụ thể.",
      "Gạch chân từ nối (jedoch, dennoch, allerdings, daher...) — chúng báo hiệu chỗ đổi ý, hay ra câu hỏi bẫy.",
      "Không dịch từng từ — đoán nghĩa từ mới qua ngữ cảnh, đừng dừng lại tra từ điển khi làm đề thi thật.",
      "Phân bổ thời gian cứng: chia đều số phút cho từng phần, phần nào khó bỏ qua làm sau, không sa đà.",
      "Với dạng đúng/sai (Richtig/Falsch): cẩn thận câu có phủ định kép hoặc từ tuyệt đối (immer, nie, alle) — thường là bẫy.",
    ],
  },
  {
    title: "Hören — Nghe hiểu",
    timeHint: "≈ 30-40 phút, nghe 2 lần cho phần hội thoại/phỏng vấn, 1 lần cho tin tức",
    tips: [
      "Đọc trước câu hỏi và đáp án trong thời gian chờ — dự đoán từ khóa sẽ nghe được.",
      "Lượt nghe đầu: nắm ý chính, chọn đáp án chắc chắn. Lượt nghe hai: xác nhận và điền câu còn phân vân.",
      "Chú ý ngữ điệu — giọng lên xuống, ngập ngừng thường báo hiệu ý kiến trái chiều hoặc mỉa mai.",
      "Luyện tai với người nói nhanh/giọng vùng miền (Áo, Thụy Sĩ) qua Tagesschau, ZDF heute — đề thi thật không luôn nói chuẩn Hochdeutsch chậm rãi.",
      "Không hoảng khi bỏ lỡ 1 câu — tiếp tục nghe câu sau, đừng để mất luôn cả đoạn vì cố nhớ lại câu cũ.",
      "Ghi chú bằng từ khóa viết tắt (số, tên, có/không) thay vì viết câu đầy đủ khi đang nghe.",
    ],
  },
  {
    title: "Schreiben — Viết",
    timeHint: "≈ 75-80 phút, 2 phần: bài luận diễn đàn/quan điểm + thư/email trang trọng",
    tips: [
      "Phần 1 (quan điểm): theo khung Mở bài → Nêu quan điểm cá nhân → Lý do/ví dụ → Ưu điểm → Nhược điểm → Đề xuất thay thế → Kết bài. Viết đủ khung điểm cao hơn viết hay nhưng thiếu ý.",
      "Phần 2 (thư trang trọng): luôn có đủ 3 phần — lý do viết thư, nội dung chính (2-3 luận điểm), đề nghị/kết thúc lịch sự.",
      "Học thuộc 5-6 Redemittel cho mỗi chức năng (mở đầu, nêu ý kiến, phản bác, kết luận) — xem bên dưới.",
      "Dùng câu phức có Konjunktiv II, Passiv, Nebensätze (weil, obwohl, während, indem) để tăng điểm ngữ pháp — nhưng ưu tiên viết ĐÚNG hơn viết PHỨC TẠP mà sai.",
      "Luôn đếm số từ — thiếu số từ yêu cầu bị trừ điểm trực tiếp dù nội dung tốt.",
      "Dành 3-5 phút cuối để đọc lại: soát lỗi giống đực/cái/trung (der/die/das), chia động từ, dấu phẩy trước dass/weil.",
    ],
  },
  {
    title: "Sprechen — Nói",
    timeHint: "≈ 15 phút, thi theo cặp: thuyết trình ngắn + thảo luận + (tuỳ format) đưa ra quyết định chung",
    tips: [
      "Phần thuyết trình: chuẩn bị cấu trúc cố định — giới thiệu chủ đề, tình hình ở Việt Nam, ưu/nhược điểm, quan điểm cá nhân, kết luận. Luyện tới mức nói trôi chảy không cần học thuộc từng chữ.",
      "Dùng từ nối cao cấp: einerseits...andererseits, im Gegensatz dazu, das hängt davon ab, ob..., abgesehen davon.",
      "Phần thảo luận: luôn phản hồi ý bạn cùng cặp trước khi nêu ý mình (\"Das stimmt, aber...\" / \"Ich sehe das anders, weil...\") — giám khảo chấm khả năng tương tác, không chỉ nói một mình.",
      "Nếu bí từ, diễn giải bằng cách khác thay vì im lặng — lưu loát quan trọng hơn từ vựng hoàn hảo.",
      "Luyện phát âm trọng âm từ và ngữ điệu câu hỏi/khẳng định — giám khảo chấm cả phần Aussprache.",
      "Ghép cặp luyện nói hàng ngày (bạn học, gia sư, hoặc tự nói với gương/ghi âm) để quen phản xạ dưới áp lực thời gian.",
    ],
  },
];

export const redemittel: { category: string; phrases: string[] }[] = [
  {
    category: "Mở đầu bài viết / bài nói",
    phrases: [
      "Heutzutage ist … ein viel diskutiertes Thema.",
      "In letzter Zeit hört man immer öfter von …",
      "Ich möchte in meinem Beitrag zunächst auf … eingehen.",
    ],
  },
  {
    category: "Nêu quan điểm cá nhân",
    phrases: [
      "Meiner Meinung nach …",
      "Ich bin der Ansicht, dass …",
      "Aus meiner Sicht spricht vieles dafür/dagegen, dass …",
    ],
  },
  {
    category: "Đưa ra lý do, ví dụ",
    phrases: [
      "Das liegt vor allem daran, dass …",
      "Ein gutes Beispiel dafür ist …",
      "Dies lässt sich anhand von … verdeutlichen.",
    ],
  },
  {
    category: "So sánh ưu / nhược điểm",
    phrases: [
      "Einerseits …, andererseits …",
      "Ein Vorteil/Nachteil besteht darin, dass …",
      "Im Vergleich dazu …",
    ],
  },
  {
    category: "Phản bác lịch sự (Sprechen)",
    phrases: [
      "Das mag stimmen, aber …",
      "Ich verstehe deinen Punkt, sehe es aber etwas anders.",
      "Da bin ich anderer Meinung, weil …",
    ],
  },
  {
    category: "Kết luận",
    phrases: [
      "Zusammenfassend lässt sich sagen, dass …",
      "Abschließend möchte ich betonen, dass …",
      "Alles in allem bin ich der Meinung, dass …",
    ],
  },
];

export type SprintWeek = {
  week: string;
  focus: string;
  actions: string[];
};

export const fourWeekSprint: SprintWeek[] = [
  {
    week: "Tuần 1",
    focus: "Rà soát nền tảng — từ vựng & ngữ pháp trọng tâm",
    actions: [
      "Ôn lại các chủ đề từ vựng B2 hay ra thi: Môi trường, Công nghệ, Y tế, Giáo dục, Việc làm (dùng ngay các mindmap trong app).",
      "Ôn chắc: Passiv, Konjunktiv II, câu bị động với modal, Nomen-Verb-Verbindungen (eine Entscheidung treffen, Rücksicht nehmen...).",
      "Làm 1 đề Lesen + 1 đề Hören để xác định điểm yếu đang ở kỹ năng nào.",
    ],
  },
  {
    week: "Tuần 2",
    focus: "Luyện kỹ thuật Đọc & Nghe, học Redemittel",
    actions: [
      "Mỗi ngày đọc 1 bài báo ngắn (DW, Deutsche Welle Langsam) + luyện skimming/scanning theo thời gian giới hạn.",
      "Mỗi ngày nghe 15-20 phút podcast/tin tức, tập ghi chú từ khóa khi nghe.",
      "Học thuộc toàn bộ bảng Redemittel bên dưới — mục tiêu dùng được tự nhiên không cần nhớ máy móc.",
    ],
  },
  {
    week: "Tuần 3",
    focus: "Luyện Viết & Nói có phản hồi",
    actions: [
      "Viết 3-4 bài luận quan điểm + 2-3 email trang trọng theo đúng khung, nhờ giáo viên/bạn học sửa lỗi ngữ pháp.",
      "Luyện nói theo cặp mỗi ngày 15-20 phút: 1 người thuyết trình, 1 người phản biện, đổi vai.",
      "Ghi âm phần nói của mình, nghe lại để tự sửa phát âm và tốc độ nói.",
    ],
  },
  {
    week: "Tuần 4",
    focus: "Thi thử sát ngày thi + tâm lý phòng thi",
    actions: [
      "Giải ít nhất 2 đề thi thử đầy đủ 4 kỹ năng trong đúng giới hạn thời gian thi thật.",
      "Ôn lại lỗi sai lặp lại nhiều lần trong các bài luyện trước đó — không học cái mới nữa, chỉ củng cố.",
      "Chuẩn bị tâm lý: ngủ đủ trước ngày thi, đọc kỹ hướng dẫn từng phần, phân bổ thời gian ngay khi nhận đề.",
    ],
  },
];

export const recommendedMaterials: { title: string; note: string }[] = [
  { title: "Aspekte neu B2 / Erkundungen B2 / Sicher! B2", note: "Giáo trình nền tảng, học từ vựng + ngữ pháp theo chủ đề." },
  { title: "Mit Erfolg zum Goethe-Zertifikat B2", note: "Sách luyện đề bám sát format thi Goethe, có băng nghe." },
  { title: "So geht's zu B2", note: "Giải thích chi tiết chiến lược làm từng dạng bài, phù hợp người tự học." },
  { title: "Prüfungstraining DaF – B2", note: "Bộ đề luyện thi chuyên sâu, nhiều đề thi thử đủ 4 kỹ năng." },
];
