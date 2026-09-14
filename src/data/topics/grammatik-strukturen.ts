import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "grammatik-strukturen",
  title: "Grammatik-Strukturen B2",
  titleVi: "Cấu trúc ngữ pháp B2",
  description: "Passiv, Konjunktiv II, Relativsätze, Nominalisierung, Partizipien, n-Deklination",
  color: "#6b21a8",
  level: "B2",
  category: "grammatik",
  root: {
    id: "root",
    label: "Grammatik B2",
    meaning: "các cấu trúc ngữ pháp trọng tâm B2",
    note: "Đây là những cấu trúc giám khảo B2 kỳ vọng bạn dùng được trong bài Viết và phần Nói.",
    children: [
      {
        id: "passiv",
        label: "Passiv",
        meaning: "thể bị động",
        note: "Dùng khi hành động quan trọng hơn người thực hiện — rất hợp văn phong trang trọng.",
        children: [
          {
            id: "p-vorgangspassiv",
            label: "Vorgangspassiv: werden + Partizip II",
            meaning: "bị động hành động",
            definition: "Beschreibt einen Vorgang. Der Täter kann mit von + Dat. genannt werden.",
            examples: [
              { de: "Das Formular wird vom Sachbearbeiter geprüft.", vi: "Đơn được nhân viên phụ trách kiểm tra." },
              { de: "In Deutschland wird viel Müll getrennt.", vi: "Ở Đức rác được phân loại nhiều." },
            ],
            note: "Thì quá khứ: wurde + Partizip II; Perfekt: ist + Partizip II + worden.",
          },
          {
            id: "p-zustandspassiv",
            label: "Zustandspassiv: sein + Partizip II",
            meaning: "bị động trạng thái",
            definition: "Beschreibt das Ergebnis einer Handlung, nicht den Vorgang.",
            examples: [
              { de: "Das Geschäft ist geschlossen.", vi: "Cửa hàng đang đóng cửa (trạng thái)." },
              { de: "Die Rechnung ist schon bezahlt.", vi: "Hóa đơn đã được thanh toán rồi." },
            ],
            note: "So sánh: Das Geschäft WIRD geschlossen (đang đóng lại) vs. IST geschlossen (đã đóng).",
          },
          {
            id: "p-modalverben",
            label: "Passiv mit Modalverben",
            meaning: "bị động với động từ khuyết thiếu",
            definition: "Modalverb + Partizip II + werden (Infinitiv am Ende).",
            examples: [
              { de: "Der Antrag muss bis Freitag eingereicht werden.", vi: "Đơn phải được nộp trước thứ Sáu." },
              { de: "Diese Regel kann nicht geändert werden.", vi: "Quy định này không thể được thay đổi." },
            ],
          },
          {
            id: "p-ersatzformen",
            label: "Passiversatzformen: man / sich lassen / sein + zu",
            meaning: "các dạng thay thế bị động",
            definition: "Alternativen zum Passiv mit Modalverb: man kann…, etwas lässt sich…, etwas ist zu + Infinitiv, Adjektiv auf -bar.",
            examples: [
              { de: "Das Problem lässt sich leicht lösen. (= kann gelöst werden)", vi: "Vấn đề này dễ giải quyết." },
              { de: "Die Aufgabe ist bis morgen zu erledigen. (= muss erledigt werden)", vi: "Nhiệm vụ phải hoàn thành trước ngày mai." },
            ],
            note: "Dùng linh hoạt các dạng này là dấu hiệu trình độ B2 rõ rệt.",
          },
        ],
      },
      {
        id: "konjunktiv2",
        label: "Konjunktiv II",
        meaning: "thức giả định II",
        note: "Dùng cho điều không có thật, lời khuyên và cách nói lịch sự.",
        children: [
          {
            id: "k2-hoeflich",
            label: "Höfliche Bitten: könnten, würden, hätten gern",
            meaning: "đề nghị lịch sự",
            definition: "Der Konjunktiv II macht Bitten und Fragen höflicher.",
            examples: [
              { de: "Könnten Sie mir bitte kurz helfen?", vi: "Anh/chị giúp tôi một chút được không ạ?" },
              { de: "Ich hätte gern einen Termin am Montag.", vi: "Tôi muốn xin một cuộc hẹn vào thứ Hai." },
            ],
          },
          {
            id: "k2-irreal",
            label: "Irreale Bedingung: Wenn …, würde/hätte/wäre …",
            meaning: "điều kiện không có thật",
            definition: "Beschreibt, was passieren würde, wenn die Bedingung erfüllt wäre.",
            examples: [
              { de: "Wenn ich mehr Zeit hätte, würde ich einen Sportkurs machen.", vi: "Nếu có nhiều thời gian hơn, tôi sẽ tham gia một lớp thể thao." },
              { de: "Wenn ich du wäre, würde ich das Angebot annehmen.", vi: "Nếu tôi là bạn, tôi sẽ nhận lời đề nghị đó." },
            ],
          },
          {
            id: "k2-vergangenheit",
            label: "Konjunktiv II der Vergangenheit: hätte/wäre + Partizip II",
            meaning: "giả định quá khứ (điều đã không xảy ra)",
            definition: "Beschreibt, was in der Vergangenheit anders hätte sein können.",
            examples: [
              { de: "Wenn ich früher angefangen hätte, wäre ich jetzt fertig.", vi: "Nếu tôi bắt đầu sớm hơn thì giờ đã xong rồi." },
              { de: "Du hättest mich anrufen sollen.", vi: "Lẽ ra bạn nên gọi cho tôi." },
            ],
            note: "Cấu trúc trách móc/tiếc nuối: hätte … sollen / hätte … können.",
          },
          {
            id: "k2-ratschlag",
            label: "Ratschläge: An deiner Stelle würde ich …",
            meaning: "đưa lời khuyên",
            definition: "Typische Formulierung, um Empfehlungen zu geben.",
            examples: [
              { de: "An deiner Stelle würde ich mit dem Chef sprechen.", vi: "Nếu ở vị trí bạn, tôi sẽ nói chuyện với sếp." },
              { de: "Es wäre besser, wenn du dich schriftlich beschweren würdest.", vi: "Sẽ tốt hơn nếu bạn khiếu nại bằng văn bản." },
            ],
          },
          {
            id: "k2-formen",
            label: "Wichtige Formen: wäre, hätte, könnte, müsste, würde",
            meaning: "các dạng cần thuộc lòng",
            definition: "Starke Verben bilden eigene Formen; die meisten anderen Verben nutzen würde + Infinitiv.",
            examples: [
              { de: "Ich wäre froh, wenn es klappen würde.", vi: "Tôi sẽ mừng nếu việc đó thành công." },
              { de: "Das müsste eigentlich funktionieren.", vi: "Lẽ ra điều đó phải hoạt động được." },
            ],
          },
        ],
      },
      {
        id: "indirekte-rede",
        label: "Konjunktiv I & indirekte Rede",
        meaning: "lời nói gián tiếp",
        note: "Xuất hiện trong bài đọc báo chí phần Lesen B2.",
        children: [
          {
            id: "ki-grundform",
            label: "Konjunktiv I: er sei, er habe, er komme",
            meaning: "dạng cơ bản",
            definition: "Wird in Zeitungstexten benutzt, um fremde Aussagen neutral wiederzugeben.",
            examples: [
              { de: "Der Minister sagte, die Lage sei ernst.", vi: "Bộ trưởng nói rằng tình hình nghiêm trọng." },
              { de: "Sie erklärte, sie habe davon nichts gewusst.", vi: "Bà ấy tuyên bố mình không biết gì về việc đó." },
            ],
          },
          {
            id: "ki-ersatz",
            label: "Ersatz durch Konjunktiv II",
            meaning: "thay bằng Konjunktiv II khi trùng dạng",
            definition: "Wenn Konjunktiv I wie der Indikativ aussieht, nimmt man Konjunktiv II.",
            examples: [
              { de: "Sie sagten, sie hätten keine Zeit. (nicht: haben)", vi: "Họ nói rằng họ không có thời gian." },
              { de: "Die Nachbarn behaupten, sie würden nichts hören.", vi: "Hàng xóm khẳng định họ không nghe thấy gì." },
            ],
          },
        ],
      },
      {
        id: "relativsaetze",
        label: "Relativsätze",
        meaning: "mệnh đề quan hệ",
        note: "Cách nhanh nhất để câu văn dài và tự nhiên hơn.",
        children: [
          {
            id: "r-nominativ",
            label: "Relativpronomen im Nominativ/Akkusativ",
            meaning: "đại từ quan hệ chủ ngữ/tân ngữ",
            definition: "Genus und Numerus vom Bezugswort, Kasus von der Funktion im Relativsatz.",
            examples: [
              { de: "Der Kollege, der neben mir sitzt, kommt aus Polen.", vi: "Người đồng nghiệp ngồi cạnh tôi đến từ Ba Lan." },
              { de: "Das Buch, das ich gerade lese, ist sehr spannend.", vi: "Cuốn sách tôi đang đọc rất hấp dẫn." },
            ],
          },
          {
            id: "r-dativ",
            label: "Relativpronomen im Dativ: dem, der, denen",
            meaning: "đại từ quan hệ ở Dativ",
            definition: "Der Kasus richtet sich nach dem Verb im Relativsatz (z. B. helfen + Dat.).",
            examples: [
              { de: "Die Frau, der ich geholfen habe, hat sich bedankt.", vi: "Người phụ nữ mà tôi giúp đã cảm ơn." },
              { de: "Die Kinder, denen wir Deutsch beibringen, lernen schnell.", vi: "Những đứa trẻ chúng tôi dạy tiếng Đức học rất nhanh." },
            ],
            note: "Plural Dativ luôn là 'denen', không phải 'den'.",
          },
          {
            id: "r-praeposition",
            label: "Relativsatz mit Präposition",
            meaning: "mệnh đề quan hệ có giới từ",
            definition: "Die Präposition steht vor dem Relativpronomen und bestimmt den Kasus.",
            examples: [
              { de: "Das ist der Kurs, für den ich mich angemeldet habe.", vi: "Đây là khóa học mà tôi đã đăng ký." },
              { de: "Die Firma, bei der sie arbeitet, ist international.", vi: "Công ty nơi cô ấy làm việc mang tính quốc tế." },
            ],
          },
          {
            id: "r-was-wo",
            label: "Relativsätze mit was / wo",
            meaning: "quan hệ với was, wo",
            definition: "'was' nach alles, etwas, nichts, das; 'wo' nach Ortsangaben.",
            examples: [
              { de: "Das ist alles, was ich weiß.", vi: "Đó là tất cả những gì tôi biết." },
              { de: "Die Stadt, wo ich aufgewachsen bin, hat sich stark verändert.", vi: "Thành phố nơi tôi lớn lên đã thay đổi nhiều." },
            ],
          },
        ],
      },
      {
        id: "nominalisierung",
        label: "Nominalisierung ↔ Verbalisierung",
        meaning: "danh hóa và động từ hóa",
        note: "Kỹ năng lõi của B2: chuyển qua lại giữa câu có mệnh đề và cụm danh từ.",
        children: [
          {
            id: "n-kausal",
            label: "weil-Satz → wegen / aufgrund + Genitiv",
            meaning: "chuyển nguyên nhân sang danh từ",
            definition: "Nebensatz wird zur Nominalgruppe; typisch für Schriftsprache.",
            examples: [
              { de: "Weil das Wetter schlecht war, fiel das Fest aus. → Wegen des schlechten Wetters fiel das Fest aus.", vi: "Vì thời tiết xấu → Do thời tiết xấu, lễ hội bị hủy." },
              { de: "Aufgrund der gestiegenen Mieten ziehen viele weg.", vi: "Do tiền thuê tăng, nhiều người chuyển đi." },
            ],
          },
          {
            id: "n-temporal",
            label: "Temporal: bevor/nachdem → vor / nach + Dativ",
            meaning: "chuyển thời gian sang danh từ",
            definition: "Zeitliche Nebensätze werden zu Präpositionalgruppen.",
            examples: [
              { de: "Nachdem er angekommen war, rief er an. → Nach seiner Ankunft rief er an.", vi: "Sau khi đến, anh ấy gọi điện." },
              { de: "Vor der Abreise müssen wir das Zimmer aufräumen.", vi: "Trước khi khởi hành, chúng ta phải dọn phòng." },
            ],
          },
          {
            id: "n-konzessiv",
            label: "obwohl → trotz + Genitiv",
            meaning: "chuyển nhượng bộ sang danh từ",
            definition: "Konzessiver Nebensatz wird zur Präpositionalgruppe mit trotz.",
            examples: [
              { de: "Obwohl es regnete, gingen wir spazieren. → Trotz des Regens gingen wir spazieren.", vi: "Dù trời mưa, chúng tôi vẫn đi dạo." },
              { de: "Trotz seiner Erfahrung bekam er die Stelle nicht.", vi: "Dù có kinh nghiệm, anh ấy không nhận được việc." },
            ],
          },
          {
            id: "n-final",
            label: "damit → zu / zum Zweck + Genitiv",
            meaning: "chuyển mục đích sang danh từ",
            definition: "Finalsatz wird nominalisiert, oft mit zur / zum.",
            examples: [
              { de: "Damit die Umwelt geschützt wird → Zum Schutz der Umwelt", vi: "Để bảo vệ môi trường → Nhằm bảo vệ môi trường" },
              { de: "Zur Verbesserung der Situation wurden neue Regeln eingeführt.", vi: "Để cải thiện tình hình, các quy định mới đã được ban hành." },
            ],
          },
        ],
      },
      {
        id: "partizipien",
        label: "Partizipien & n-Deklination",
        meaning: "phân từ và biến cách n",
        children: [
          {
            id: "pt-partizip1",
            label: "Partizip I als Adjektiv: Infinitiv + d",
            meaning: "phân từ I làm tính từ (đang…)",
            definition: "Aktive, gleichzeitige Bedeutung: der steigende Preis = der Preis, der steigt.",
            examples: [
              { de: "Die steigenden Mieten sind ein großes Problem.", vi: "Tiền thuê đang tăng là vấn đề lớn." },
              { de: "Wir suchen eine Deutsch sprechende Fachkraft.", vi: "Chúng tôi tìm nhân lực biết nói tiếng Đức." },
            ],
          },
          {
            id: "pt-partizip2",
            label: "Partizip II als Adjektiv",
            meaning: "phân từ II làm tính từ (đã bị…)",
            definition: "Passive, abgeschlossene Bedeutung: die gelöste Aufgabe = die Aufgabe, die gelöst wurde.",
            examples: [
              { de: "Die renovierte Wohnung ist teurer geworden.", vi: "Căn hộ đã cải tạo trở nên đắt hơn." },
              { de: "Ein gut vorbereiteter Vortrag überzeugt.", vi: "Một bài thuyết trình được chuẩn bị kỹ sẽ thuyết phục." },
            ],
          },
          {
            id: "pt-n-deklination",
            label: "n-Deklination: der Mensch, der Kollege, der Student",
            meaning: "nhóm danh từ thêm -n",
            definition: "Bestimmte maskuline Nomen bekommen in allen Fällen außer Nominativ Singular ein -n/-en.",
            examples: [
              { de: "Ich habe mit dem Kollegen gesprochen.", vi: "Tôi đã nói chuyện với người đồng nghiệp." },
              { de: "Der Lehrer hilft dem Studenten.", vi: "Thầy giáo giúp sinh viên." },
            ],
            note: "Nhóm này gồm: Mensch, Kollege, Junge, Kunde, Patient, Student, Praktikant, Nachbar, Herr…",
          },
          {
            id: "pt-nomen-verb",
            label: "Nomen-Verb-Verbindungen",
            meaning: "cụm danh từ + động từ cố định",
            definition: "Feste Wendungen, die das Niveau des Textes deutlich heben.",
            examples: [
              { de: "Ich möchte etwas in Frage stellen.", vi: "Tôi muốn đặt câu hỏi nghi vấn về điều gì đó." },
              { de: "Das Angebot steht Ihnen jederzeit zur Verfügung.", vi: "Ưu đãi luôn sẵn sàng cho quý vị." },
            ],
            note: "Nên thuộc: eine Entscheidung treffen, Kritik üben, zur Sprache bringen, Rücksicht nehmen auf, in Kauf nehmen, Bezug nehmen auf.",
          },
        ],
      },
      {
        id: "uebung-grammatik",
        label: "Beispielsätze mit B2-Strukturen",
        meaning: "câu ví dụ theo cấu trúc",
        children: [
          { id: "ue-gr-1", label: "Der Antrag muss bis Freitag eingereicht werden.", meaning: "bị động với Modalverb" },
          { id: "ue-gr-2", label: "Wenn ich mehr Zeit hätte, würde ich mehr lesen.", meaning: "Konjunktiv II của haben" },
          { id: "ue-gr-3", label: "Könnten Sie mir bitte kurz helfen?", meaning: "đề nghị lịch sự (können)" },
          { id: "ue-gr-4", label: "Die Frau, der ich geholfen habe, hat sich bedankt.", meaning: "đại từ quan hệ Dativ giống cái" },
          { id: "ue-gr-5", label: "Die Kinder, denen wir helfen, lernen schnell.", meaning: "đại từ quan hệ Dativ số nhiều" },
          { id: "ue-gr-6", label: "Wegen des schlechten Wetters fiel das Fest aus.", meaning: "do (+ Genitiv)" },
          { id: "ue-gr-7", label: "Trotz des Regens gingen wir spazieren.", meaning: "bất chấp (+ Genitiv)" },
          { id: "ue-gr-8", label: "Ich habe mit dem Kollegen gesprochen.", meaning: "n-Deklination" },
          { id: "ue-gr-9", label: "Das Problem lässt sich leicht lösen.", meaning: "dạng thay thế bị động" },
          { id: "ue-gr-10", label: "Die steigenden Mieten sind ein Problem. (steigen, Partizip I)", meaning: "phân từ I làm tính từ" },
        ],
      },
    ],
  },
};

export default topic;
