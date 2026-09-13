import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "konnektoren",
  title: "Konnektoren & Satzverbindungen",
  titleVi: "Liên từ & cách nối câu",
  description: "weil, obwohl, damit, sodass, indem … + quy tắc vị trí động từ",
  color: "#b91c1c",
  level: "B2",
  category: "grammatik",
  root: {
    id: "root",
    label: "Konnektoren",
    meaning: "liên từ nối câu",
    note: "Ba nhóm theo vị trí động từ: Position 0 (und, aber, denn…), Position 1 (deshalb, trotzdem…), Nebensatz — động từ đứng cuối (weil, obwohl…).",
    children: [
      {
        id: "kausal",
        label: "Kausal — Grund",
        meaning: "nguyên nhân (tại sao?)",
        note: "Câu hỏi: Warum? Aus welchem Grund?",
        children: [
          {
            id: "k-weil",
            label: "weil (+ Verb am Ende)",
            meaning: "bởi vì",
            definition: "Nebensatzkonnektor: Das Verb steht am Satzende.",
            examples: [
              { de: "Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.", vi: "Tôi học tiếng Đức vì tôi muốn làm việc ở Đức." },
              { de: "Weil der Zug Verspätung hatte, kam ich zu spät.", vi: "Vì tàu trễ nên tôi đến muộn." },
            ],
          },
          {
            id: "k-da",
            label: "da (+ Verb am Ende)",
            meaning: "vì (trang trọng hơn weil)",
            definition: "Wie weil, aber schriftlicher; steht oft am Satzanfang, wenn der Grund schon bekannt ist.",
            examples: [
              { de: "Da die Nachfrage stark gestiegen ist, erhöhen wir die Produktion.", vi: "Vì nhu cầu tăng mạnh nên chúng tôi tăng sản lượng." },
              { de: "Da es regnete, blieben wir zu Hause.", vi: "Vì trời mưa nên chúng tôi ở nhà." },
            ],
            note: "Trong bài Viết B2 nên dùng 'da' ở đầu câu thay vì 'weil' để nâng văn phong.",
          },
          {
            id: "k-denn",
            label: "denn (Position 0)",
            meaning: "bởi vì (nối hai câu chính)",
            definition: "Hauptsatzkonnektor auf Position 0: Danach folgt normale Satzstellung (Subjekt + Verb).",
            examples: [
              { de: "Ich bleibe heute zu Hause, denn ich fühle mich nicht gut.", vi: "Hôm nay tôi ở nhà, vì tôi thấy không khỏe." },
              { de: "Er kam nicht, denn er hatte einen wichtigen Termin.", vi: "Anh ấy không đến, vì có một cuộc hẹn quan trọng." },
            ],
            note: "Sau 'denn' KHÔNG đảo ngữ: denn ich fühle (không phải: denn fühle ich).",
          },
          {
            id: "k-deshalb",
            label: "deshalb / deswegen / daher / darum (Position 1)",
            meaning: "vì vậy, do đó",
            definition: "Der Konnektor steht auf Position 1, das Verb folgt direkt auf Position 2.",
            examples: [
              { de: "Die Mieten sind sehr hoch, deshalb ziehen viele aufs Land.", vi: "Tiền thuê nhà rất cao, vì vậy nhiều người chuyển về nông thôn." },
              { de: "Er hat sich gut vorbereitet, daher hat er die Prüfung bestanden.", vi: "Anh ấy chuẩn bị tốt nên đã đỗ kỳ thi." },
            ],
            note: "Đảo ngữ bắt buộc: deshalb ZIEHEN viele (Verb đứng ngay sau).",
          },
          {
            id: "k-wegen",
            label: "wegen / aufgrund + Genitiv",
            meaning: "do, vì (giới từ + danh từ)",
            definition: "Präposition mit Genitiv; verbindet keinen Satz, sondern eine Nominalgruppe.",
            examples: [
              { de: "Wegen des schlechten Wetters fiel das Fest aus.", vi: "Do thời tiết xấu, lễ hội bị hủy." },
              { de: "Aufgrund der hohen Kosten wurde das Projekt gestoppt.", vi: "Do chi phí cao, dự án đã bị dừng." },
            ],
            note: "Kỹ năng B2: chuyển weil-Satz thành wegen + Nomen (Nominalisierung).",
          },
        ],
      },
      {
        id: "konzessiv",
        label: "Konzessiv — Gegengrund",
        meaning: "nhượng bộ (mặc dù)",
        note: "Dùng khi kết quả trái với mong đợi.",
        children: [
          {
            id: "kz-obwohl",
            label: "obwohl (+ Verb am Ende)",
            meaning: "mặc dù",
            definition: "Nebensatz: nennt einen Gegengrund, der die Handlung nicht verhindert.",
            examples: [
              { de: "Obwohl er müde war, arbeitete er weiter.", vi: "Mặc dù mệt, anh ấy vẫn làm tiếp." },
              { de: "Sie hat den Job bekommen, obwohl sie wenig Erfahrung hatte.", vi: "Cô ấy nhận được việc dù ít kinh nghiệm." },
            ],
          },
          {
            id: "kz-trotzdem",
            label: "trotzdem / dennoch (Position 1)",
            meaning: "tuy vậy, dù vậy",
            definition: "Hauptsatzkonnektor auf Position 1, Verb auf Position 2.",
            examples: [
              { de: "Das Auto ist teuer, trotzdem kaufe ich es.", vi: "Chiếc xe đắt, dù vậy tôi vẫn mua." },
              { de: "Er hatte kaum gelernt, dennoch bestand er die Prüfung.", vi: "Anh ấy gần như không học, thế mà vẫn đỗ." },
            ],
          },
          {
            id: "kz-trotz",
            label: "trotz + Genitiv",
            meaning: "bất chấp",
            definition: "Präposition mit Genitiv + Nomen.",
            examples: [
              { de: "Trotz des Regens gingen wir spazieren.", vi: "Bất chấp trời mưa, chúng tôi vẫn đi dạo." },
              { de: "Trotz großer Anstrengung schaffte er es nicht.", vi: "Dù nỗ lực lớn, anh ấy vẫn không làm được." },
            ],
          },
          {
            id: "kz-zwar-aber",
            label: "zwar …, aber …",
            meaning: "tuy … nhưng …",
            definition: "Nennt zuerst ein Zugeständnis, dann den Gegensatz.",
            examples: [
              { de: "Das Homeoffice spart zwar Zeit, aber es fehlt der Kontakt zu Kollegen.", vi: "Làm việc tại nhà tuy tiết kiệm thời gian nhưng thiếu tiếp xúc đồng nghiệp." },
              { de: "Ich habe zwar wenig Geld, aber ich bin zufrieden.", vi: "Tôi tuy ít tiền nhưng hài lòng." },
            ],
            note: "Cấu trúc vàng cho phần trình bày ưu - nhược điểm (Teil 1 Sprechen).",
          },
        ],
      },
      {
        id: "final",
        label: "Final — Ziel / Absicht",
        meaning: "mục đích (để làm gì?)",
        note: "Câu hỏi: Wozu? Zu welchem Zweck?",
        children: [
          {
            id: "f-damit",
            label: "damit (+ Verb am Ende)",
            meaning: "để (hai chủ ngữ khác nhau)",
            definition: "Nebensatz mit Ziel; wird benutzt, wenn Haupt- und Nebensatz verschiedene Subjekte haben.",
            examples: [
              { de: "Ich erkläre es noch einmal, damit alle es verstehen.", vi: "Tôi giải thích lại để mọi người đều hiểu." },
              { de: "Die Eltern sparen, damit ihr Kind studieren kann.", vi: "Bố mẹ tiết kiệm để con họ có thể học đại học." },
            ],
          },
          {
            id: "f-um-zu",
            label: "um … zu + Infinitiv",
            meaning: "để (cùng một chủ ngữ)",
            definition: "Infinitivsatz; nur möglich, wenn beide Sätze dasselbe Subjekt haben.",
            examples: [
              { de: "Ich lerne Deutsch, um in Deutschland zu arbeiten.", vi: "Tôi học tiếng Đức để làm việc ở Đức." },
              { de: "Sie steht früh auf, um pünktlich zu sein.", vi: "Cô ấy dậy sớm để đúng giờ." },
            ],
            note: "Lỗi hay gặp: dùng 'um zu' khi hai chủ ngữ khác nhau — phải dùng 'damit'.",
          },
          {
            id: "f-zwecks",
            label: "zum Zweck / zwecks + Genitiv",
            meaning: "nhằm mục đích (rất trang trọng)",
            definition: "Nominale Variante des Finalsatzes, typisch für Amtssprache.",
            examples: [
              { de: "Zwecks besserer Organisation bitten wir um Anmeldung.", vi: "Nhằm tổ chức tốt hơn, chúng tôi đề nghị đăng ký." },
              { de: "Die Daten werden zum Zweck der Auswertung gespeichert.", vi: "Dữ liệu được lưu nhằm mục đích phân tích." },
            ],
          },
        ],
      },
      {
        id: "konsekutiv",
        label: "Konsekutiv — Folge",
        meaning: "hệ quả (dẫn đến điều gì)",
        children: [
          {
            id: "ks-sodass",
            label: "sodass (+ Verb am Ende)",
            meaning: "khiến cho, đến mức",
            definition: "Nennt die Folge einer Handlung im Nebensatz.",
            examples: [
              { de: "Es regnete stark, sodass das Spiel abgesagt wurde.", vi: "Trời mưa to khiến trận đấu bị hủy." },
              { de: "Er sprach sehr leise, sodass ihn niemand verstand.", vi: "Anh ấy nói rất nhỏ khiến không ai hiểu." },
            ],
          },
          {
            id: "ks-so-dass",
            label: "so + Adjektiv …, dass …",
            meaning: "… đến mức mà …",
            definition: "Betont die Intensität, die zu einer Folge führt.",
            examples: [
              { de: "Die Miete ist so hoch, dass viele wegziehen.", vi: "Tiền thuê cao đến mức nhiều người phải dọn đi." },
              { de: "Ich war so müde, dass ich sofort einschlief.", vi: "Tôi mệt đến mức ngủ thiếp đi ngay." },
            ],
          },
          {
            id: "ks-folglich",
            label: "folglich / infolgedessen / somit (Position 1)",
            meaning: "do đó, kết quả là",
            definition: "Schriftsprachliche Hauptsatzkonnektoren für Folgen.",
            examples: [
              { de: "Die Kosten stiegen, folglich mussten die Preise erhöht werden.", vi: "Chi phí tăng, do đó giá phải tăng theo." },
              { de: "Er hat die Frist verpasst, infolgedessen wurde sein Antrag abgelehnt.", vi: "Anh ấy trễ hạn, hệ quả là đơn bị từ chối." },
            ],
            note: "Ghi điểm cao trong bài Viết trang trọng.",
          },
        ],
      },
      {
        id: "konditional",
        label: "Konditional — Bedingung",
        meaning: "điều kiện (nếu)",
        children: [
          {
            id: "kd-wenn",
            label: "wenn (+ Verb am Ende)",
            meaning: "nếu / khi",
            definition: "Reale Bedingung oder wiederholte Handlung.",
            examples: [
              { de: "Wenn ich Zeit habe, besuche ich dich.", vi: "Nếu có thời gian, tôi sẽ ghé thăm bạn." },
              { de: "Wenn man regelmäßig übt, macht man schnell Fortschritte.", vi: "Nếu luyện tập đều đặn, người ta tiến bộ nhanh." },
            ],
          },
          {
            id: "kd-falls",
            label: "falls / sofern (+ Verb am Ende)",
            meaning: "trong trường hợp, miễn là",
            definition: "Betont, dass die Bedingung unsicher ist; formeller als wenn.",
            examples: [
              { de: "Falls Sie Fragen haben, melden Sie sich gern.", vi: "Nếu quý vị có câu hỏi, xin cứ liên hệ." },
              { de: "Sofern das Wetter mitspielt, findet das Fest draußen statt.", vi: "Miễn là thời tiết thuận lợi, lễ hội sẽ diễn ra ngoài trời." },
            ],
          },
          {
            id: "kd-sonst",
            label: "sonst / andernfalls (Position 1)",
            meaning: "nếu không thì",
            definition: "Nennt die negative Folge, wenn die Bedingung nicht erfüllt wird.",
            examples: [
              { de: "Beeil dich, sonst verpassen wir den Bus.", vi: "Nhanh lên, nếu không chúng ta lỡ xe buýt." },
              { de: "Bitte zahlen Sie bis Freitag, andernfalls entstehen Mahngebühren.", vi: "Xin thanh toán trước thứ Sáu, nếu không sẽ phát sinh phí nhắc nợ." },
            ],
          },
        ],
      },
      {
        id: "adversativ",
        label: "Adversativ — Gegensatz",
        meaning: "đối lập, tương phản",
        children: [
          {
            id: "ad-aber",
            label: "aber (Position 0)",
            meaning: "nhưng",
            definition: "Verbindet zwei Hauptsätze ohne Umstellung.",
            examples: [
              { de: "Die Wohnung ist schön, aber sie ist zu teuer.", vi: "Căn hộ đẹp nhưng quá đắt." },
              { de: "Ich wollte kommen, aber ich hatte keine Zeit.", vi: "Tôi muốn đến nhưng không có thời gian." },
            ],
          },
          {
            id: "ad-jedoch",
            label: "jedoch / allerdings (Position 1 oder 0)",
            meaning: "tuy nhiên",
            definition: "Schriftsprachliche Variante von aber; als Position-1-Konnektor folgt das Verb direkt.",
            examples: [
              { de: "Das Angebot klingt gut, jedoch fehlen wichtige Details.", vi: "Đề nghị nghe hay, tuy nhiên thiếu nhiều chi tiết quan trọng." },
              { de: "Die Idee ist interessant, allerdings ist sie teuer.", vi: "Ý tưởng thú vị, có điều lại tốn kém." },
            ],
          },
          {
            id: "ad-waehrend",
            label: "während (+ Verb am Ende, gegensätzlich)",
            meaning: "trong khi (đối lập)",
            definition: "Stellt zwei Sachverhalte gegenüber.",
            examples: [
              { de: "Während in der Stadt die Mieten steigen, stehen auf dem Land Häuser leer.", vi: "Trong khi tiền thuê ở thành phố tăng thì ở nông thôn nhà bỏ trống." },
              { de: "Er ist sehr ruhig, während seine Schwester sehr gesprächig ist.", vi: "Anh ấy rất trầm, trong khi em gái thì nói nhiều." },
            ],
            note: "'während' có hai nghĩa: thời gian (cùng lúc) và đối lập — xem ngữ cảnh.",
          },
          {
            id: "ad-sondern",
            label: "nicht … sondern … (Position 0)",
            meaning: "không … mà là …",
            definition: "Korrigiert eine verneinte Aussage.",
            examples: [
              { de: "Er kommt nicht heute, sondern morgen.", vi: "Anh ấy không đến hôm nay mà là ngày mai." },
              { de: "Das Problem ist nicht das Geld, sondern die Zeit.", vi: "Vấn đề không phải tiền bạc mà là thời gian." },
            ],
          },
          {
            id: "ad-einerseits",
            label: "einerseits … andererseits …",
            meaning: "một mặt … mặt khác …",
            definition: "Stellt zwei Seiten eines Themas gleichwertig gegenüber.",
            examples: [
              { de: "Einerseits spart man Zeit, andererseits fehlt der persönliche Kontakt.", vi: "Một mặt tiết kiệm thời gian, mặt khác thiếu tiếp xúc trực tiếp." },
              { de: "Einerseits ist das Auto praktisch, andererseits belastet es die Umwelt.", vi: "Một mặt ô tô tiện lợi, mặt khác gây hại môi trường." },
            ],
            note: "Cấu trúc bắt buộc thuộc cho phần cân nhắc ưu - nhược điểm.",
          },
        ],
      },
      {
        id: "temporal",
        label: "Temporal — Zeit",
        meaning: "thời gian",
        children: [
          {
            id: "t-bevor",
            label: "bevor (+ Verb am Ende)",
            meaning: "trước khi",
            definition: "Die Handlung im Hauptsatz passiert zuerst.",
            examples: [
              { de: "Bevor ich nach Deutschland kam, lernte ich zwei Jahre Deutsch.", vi: "Trước khi sang Đức, tôi đã học tiếng Đức hai năm." },
              { de: "Wasch dir die Hände, bevor du isst!", vi: "Rửa tay trước khi ăn nhé!" },
            ],
          },
          {
            id: "t-nachdem",
            label: "nachdem (+ Verb am Ende, Zeitenwechsel!)",
            meaning: "sau khi",
            definition: "Der Nebensatz steht eine Zeitstufe früher: Perfekt/Plusquamperfekt im Nebensatz, Präsens/Präteritum im Hauptsatz.",
            examples: [
              { de: "Nachdem ich gegessen hatte, ging ich spazieren.", vi: "Sau khi ăn xong, tôi đi dạo." },
              { de: "Nachdem er die Prüfung bestanden hat, sucht er einen Job.", vi: "Sau khi đỗ kỳ thi, anh ấy đi tìm việc." },
            ],
            note: "Đây là điểm ngữ pháp B2 hay bị sai: nachdem + Plusquamperfekt → Hauptsatz Präteritum.",
          },
          {
            id: "t-seitdem",
            label: "seit / seitdem (+ Verb am Ende)",
            meaning: "từ khi",
            definition: "Die Handlung begann in der Vergangenheit und dauert an.",
            examples: [
              { de: "Seitdem ich in Deutschland lebe, esse ich weniger Reis.", vi: "Từ khi sống ở Đức, tôi ăn ít cơm hơn." },
              { de: "Seit sie den neuen Job hat, ist sie viel zufriedener.", vi: "Từ khi có việc mới, cô ấy hài lòng hơn nhiều." },
            ],
          },
          {
            id: "t-sobald",
            label: "sobald / solange / bis (+ Verb am Ende)",
            meaning: "ngay khi / chừng nào / cho đến khi",
            definition: "Genaue zeitliche Abgrenzung zweier Handlungen.",
            examples: [
              { de: "Sobald ich zu Hause bin, rufe ich dich an.", vi: "Ngay khi về nhà tôi sẽ gọi cho bạn." },
              { de: "Warte bitte, bis der Zug hält.", vi: "Hãy đợi cho đến khi tàu dừng hẳn." },
            ],
          },
        ],
      },
      {
        id: "modal",
        label: "Modal & Alternativ",
        meaning: "cách thức và thay thế",
        children: [
          {
            id: "m-indem",
            label: "indem (+ Verb am Ende)",
            meaning: "bằng cách",
            definition: "Nennt das Mittel oder die Methode; antwortet auf: Wie? Wodurch?",
            examples: [
              { de: "Man kann Energie sparen, indem man weniger heizt.", vi: "Có thể tiết kiệm năng lượng bằng cách sưởi ít hơn." },
              { de: "Er verbesserte sein Deutsch, indem er täglich Nachrichten hörte.", vi: "Anh ấy cải thiện tiếng Đức bằng cách nghe tin tức mỗi ngày." },
            ],
            note: "Cấu trúc hay nhất để nêu giải pháp trong phần Nói/Viết B2.",
          },
          {
            id: "m-dadurch",
            label: "dadurch, dass …",
            meaning: "nhờ việc, do việc",
            definition: "Wie indem, betont aber stärker die Ursache.",
            examples: [
              { de: "Dadurch, dass sie viel liest, hat sie einen großen Wortschatz.", vi: "Nhờ đọc nhiều, cô ấy có vốn từ lớn." },
              { de: "Dadurch, dass er pünktlich war, machte er einen guten Eindruck.", vi: "Nhờ đúng giờ, anh ấy tạo ấn tượng tốt." },
            ],
          },
          {
            id: "m-ohne-zu",
            label: "ohne … zu + Infinitiv / ohne dass",
            meaning: "mà không",
            definition: "Nennt eine erwartete Handlung, die nicht passiert. 'ohne zu' bei gleichem Subjekt, 'ohne dass' bei verschiedenen.",
            examples: [
              { de: "Er ging weg, ohne sich zu verabschieden.", vi: "Anh ta bỏ đi mà không chào tạm biệt." },
              { de: "Sie half mir, ohne dass ich sie darum gebeten hatte.", vi: "Cô ấy giúp tôi mà tôi không hề nhờ." },
            ],
          },
          {
            id: "m-statt-zu",
            label: "(an)statt … zu + Infinitiv / statt dass",
            meaning: "thay vì",
            definition: "Nennt eine Alternative, die nicht gewählt wurde.",
            examples: [
              { de: "Statt das Auto zu nehmen, fahre ich mit dem Rad.", vi: "Thay vì lấy ô tô, tôi đi xe đạp." },
              { de: "Anstatt zu diskutieren, sollten wir handeln.", vi: "Thay vì tranh luận, chúng ta nên hành động." },
            ],
          },
        ],
      },
      {
        id: "satzstellung",
        label: "Satzstellung: Wo steht das Verb?",
        meaning: "quy tắc vị trí động từ",
        note: "Học thuộc 3 nhóm này là hết sai trật tự từ.",
        children: [
          {
            id: "ss-pos0",
            label: "Position 0: und, oder, aber, denn, sondern",
            meaning: "nhóm 0 — không đổi trật tự",
            definition: "Der Konnektor zählt nicht mit; danach kommt normal Subjekt + Verb.",
            examples: [
              { de: "Ich bleibe zu Hause, denn ich bin krank.", vi: "Tôi ở nhà, vì tôi ốm." },
              { de: "Er lernt viel, aber er hat trotzdem Angst vor der Prüfung.", vi: "Anh ấy học nhiều nhưng vẫn sợ kỳ thi." },
            ],
          },
          {
            id: "ss-pos1",
            label: "Position 1: deshalb, trotzdem, dennoch, jedoch, folglich, sonst",
            meaning: "nhóm 1 — động từ đứng ngay sau",
            definition: "Der Konnektor besetzt Position 1, das konjugierte Verb steht auf Position 2 (Inversion).",
            examples: [
              { de: "Es regnet, deshalb bleiben wir zu Hause.", vi: "Trời mưa nên chúng tôi ở nhà." },
              { de: "Er war krank, trotzdem kam er zur Arbeit.", vi: "Anh ấy ốm, dù vậy vẫn đi làm." },
            ],
          },
          {
            id: "ss-nebensatz",
            label: "Nebensatz: weil, obwohl, damit, dass, wenn, indem …",
            meaning: "mệnh đề phụ — động từ cuối câu",
            definition: "Im Nebensatz steht das konjugierte Verb ganz am Ende. Steht der Nebensatz vorn, folgt direkt das Verb des Hauptsatzes.",
            examples: [
              { de: "Ich komme später, weil ich noch arbeiten muss.", vi: "Tôi đến muộn hơn vì còn phải làm việc." },
              { de: "Weil ich noch arbeiten muss, komme ich später.", vi: "Vì còn phải làm việc nên tôi đến muộn hơn." },
            ],
            note: "Quy tắc vàng: Nebensatz đứng trước thì Hauptsatz bắt đầu ngay bằng động từ.",
          },
        ],
      },
      {
        id: "uebung-konnektoren",
        label: "Übung: Welcher Konnektor?",
        meaning: "Luyện tập: điền liên từ",
        children: [
          { id: "ue-kon-1", label: "Ich lerne Deutsch, ___ ich hier arbeiten möchte.", meaning: "vì (động từ cuối câu)", answer: "weil" },
          { id: "ue-kon-2", label: "Er war müde, ___ arbeitete er weiter.", meaning: "dù vậy (đứng vị trí 1)", answer: "trotzdem" },
          { id: "ue-kon-3", label: "___ er müde war, arbeitete er weiter.", meaning: "mặc dù (động từ cuối câu)", answer: "Obwohl" },
          { id: "ue-kon-4", label: "Ich spare Geld, ___ ich weniger online bestelle.", meaning: "bằng cách", answer: "indem" },
          { id: "ue-kon-5", label: "Ich erkläre es noch einmal, ___ alle es verstehen.", meaning: "để (khác chủ ngữ)", answer: "damit" },
          { id: "ue-kon-6", label: "Es regnete stark, ___ das Spiel abgesagt wurde.", meaning: "khiến cho", answer: "sodass" },
          { id: "ue-kon-7", label: "___ ich gegessen hatte, ging ich spazieren.", meaning: "sau khi", answer: "Nachdem" },
          { id: "ue-kon-8", label: "Beeil dich, ___ verpassen wir den Bus.", meaning: "nếu không thì", answer: "sonst" },
          { id: "ue-kon-9", label: "Er kommt nicht heute, ___ morgen.", meaning: "mà là", answer: "sondern" },
          { id: "ue-kon-10", label: "___ der hohen Kosten wurde das Projekt gestoppt.", meaning: "do (+ Genitiv)", answer: "Aufgrund" },
        ],
      },
    ],
  },
};

export default topic;
