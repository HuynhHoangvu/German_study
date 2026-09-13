import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "redemittel",
  title: "Redemittel B2 (Sprechen & Schreiben)",
  titleVi: "Mẫu câu thi Nói & Viết B2",
  description: "Mẫu câu cho Präsentation, Diskussion, Forumsbeitrag và thư trang trọng",
  color: "#9d174d",
  level: "B2",
  category: "grammatik",
  root: {
    id: "root",
    label: "Redemittel B2",
    meaning: "mẫu câu chuẩn cho kỳ thi B2",
    note: "Học thuộc 3-4 mẫu cho mỗi chức năng là đủ dùng cả bài thi — đừng học quá nhiều mẫu giống nhau.",
    children: [
      {
        id: "sprechen-teil1",
        label: "Sprechen Teil 1 — Präsentation",
        meaning: "phần Nói 1: trình bày chủ đề",
        note: "Trình tự chuẩn: giới thiệu → kinh nghiệm → ưu điểm → nhược điểm → tình hình ở Việt Nam → kết luận.",
        children: [
          {
            id: "s1-einleitung",
            label: "In meiner Präsentation geht es um …",
            meaning: "Bài trình bày của tôi nói về …",
            definition: "Standardeinstieg, um das Thema zu nennen.",
            examples: [
              { de: "In meiner Präsentation geht es um das Thema Home-Office.", vi: "Bài trình bày của tôi nói về chủ đề làm việc tại nhà." },
              { de: "Ich möchte heute über das Thema Ehrenamt sprechen.", vi: "Hôm nay tôi muốn nói về chủ đề hoạt động tình nguyện." },
            ],
          },
          {
            id: "s1-gliederung",
            label: "Zuerst … , danach … , zum Schluss …",
            meaning: "Trước hết …, sau đó …, cuối cùng …",
            definition: "Gliederung ankündigen, damit die Prüfer der Struktur folgen können.",
            examples: [
              { de: "Zuerst berichte ich über meine eigenen Erfahrungen, danach nenne ich Vor- und Nachteile.", vi: "Trước hết tôi kể về trải nghiệm của mình, sau đó nêu ưu và nhược điểm." },
              { de: "Zum Schluss sage ich meine eigene Meinung dazu.", vi: "Cuối cùng tôi nêu ý kiến riêng của mình." },
            ],
          },
          {
            id: "s1-erfahrung",
            label: "Aus eigener Erfahrung kann ich sagen, dass …",
            meaning: "Từ kinh nghiệm bản thân tôi có thể nói rằng …",
            definition: "Persönlichen Bezug herstellen — wird in Teil 1 ausdrücklich erwartet.",
            examples: [
              { de: "Aus eigener Erfahrung kann ich sagen, dass Home-Office viel Disziplin verlangt.", vi: "Từ kinh nghiệm bản thân, tôi thấy làm việc tại nhà đòi hỏi nhiều kỷ luật." },
              { de: "Ich selbst habe damit gute Erfahrungen gemacht.", vi: "Bản thân tôi đã có trải nghiệm tốt với điều đó." },
            ],
          },
          {
            id: "s1-vorteile",
            label: "Ein großer Vorteil ist, dass … / Dafür spricht, dass …",
            meaning: "Một ưu điểm lớn là … / Điều ủng hộ là …",
            definition: "Vorteile nennen und mit einem Beispiel belegen.",
            examples: [
              { de: "Ein großer Vorteil ist, dass man den Arbeitsweg spart.", vi: "Một ưu điểm lớn là tiết kiệm thời gian đi lại." },
              { de: "Dafür spricht auch, dass man flexibler planen kann.", vi: "Điều ủng hộ nữa là có thể sắp xếp linh hoạt hơn." },
            ],
          },
          {
            id: "s1-nachteile",
            label: "Andererseits darf man nicht vergessen, dass …",
            meaning: "Mặt khác không nên quên rằng …",
            definition: "Überleitung zu den Nachteilen, ohne abrupt zu wirken.",
            examples: [
              { de: "Andererseits darf man nicht vergessen, dass der Kontakt zu Kollegen fehlt.", vi: "Mặt khác không nên quên rằng ta thiếu tiếp xúc với đồng nghiệp." },
              { de: "Ein Nachteil besteht darin, dass Beruf und Privatleben verschwimmen.", vi: "Một nhược điểm là công việc và đời tư bị lẫn lộn." },
            ],
          },
          {
            id: "s1-heimatland",
            label: "In meinem Heimatland Vietnam ist es so, dass …",
            meaning: "Ở quê hương tôi, Việt Nam, thì …",
            definition: "Der Vergleich mit dem Heimatland ist ein fester Bestandteil von Teil 1.",
            examples: [
              { de: "In meinem Heimatland Vietnam ist es so, dass Home-Office vor allem in der IT-Branche verbreitet ist.", vi: "Ở Việt Nam, làm việc tại nhà phổ biến nhất trong ngành IT." },
              { de: "Im Vergleich zu Deutschland spielt das bei uns eine kleinere Rolle.", vi: "So với Đức, điều đó ở nước tôi ít quan trọng hơn." },
            ],
          },
          {
            id: "s1-abschluss",
            label: "Zusammenfassend lässt sich sagen, dass …",
            meaning: "Tóm lại có thể nói rằng …",
            definition: "Fazit ziehen und die Präsentation sauber abschließen.",
            examples: [
              { de: "Zusammenfassend lässt sich sagen, dass die Vorteile für mich überwiegen.", vi: "Tóm lại, với tôi ưu điểm vẫn nhiều hơn." },
              { de: "Vielen Dank für Ihre Aufmerksamkeit. Haben Sie noch Fragen?", vi: "Cảm ơn quý vị đã lắng nghe. Quý vị còn câu hỏi nào không ạ?" },
            ],
          },
        ],
      },
      {
        id: "sprechen-teil2",
        label: "Sprechen Teil 2 — Diskussion",
        meaning: "phần Nói 2: thảo luận, lên kế hoạch chung",
        note: "Nhớ: phải tương tác với bạn cùng thi, không độc thoại.",
        children: [
          {
            id: "s2-vorschlag",
            label: "Ich schlage vor, dass … / Wie wäre es, wenn …",
            meaning: "Tôi đề xuất là … / Hay là mình …",
            definition: "Einen Vorschlag machen (Grundfunktion der gemeinsamen Planung).",
            examples: [
              { de: "Ich schlage vor, dass wir zuerst den Termin festlegen.", vi: "Tôi đề xuất trước hết chúng ta chốt ngày." },
              { de: "Wie wäre es, wenn wir das Treffen am Samstag machen?", vi: "Hay là mình gặp nhau vào thứ Bảy nhé?" },
            ],
          },
          {
            id: "s2-zustimmen",
            label: "Da bin ich ganz Ihrer Meinung. / Das sehe ich genauso.",
            meaning: "Tôi hoàn toàn đồng ý. / Tôi cũng thấy vậy.",
            definition: "Zustimmung ausdrücken und dann eigene Begründung ergänzen.",
            examples: [
              { de: "Da bin ich ganz Ihrer Meinung, denn so sparen wir Zeit.", vi: "Tôi hoàn toàn đồng ý, vì như vậy chúng ta tiết kiệm thời gian." },
              { de: "Das sehe ich genauso, das wäre die beste Lösung.", vi: "Tôi cũng nghĩ vậy, đó sẽ là giải pháp tốt nhất." },
            ],
          },
          {
            id: "s2-widersprechen",
            label: "Das sehe ich etwas anders, weil …",
            meaning: "Tôi thấy hơi khác, bởi vì …",
            definition: "Höflich widersprechen — nie direkt Nein sagen.",
            examples: [
              { de: "Das sehe ich etwas anders, weil viele Kollegen am Wochenende arbeiten.", vi: "Tôi thấy hơi khác, vì nhiều đồng nghiệp làm việc cuối tuần." },
              { de: "Da muss ich Ihnen leider widersprechen.", vi: "Rất tiếc tôi phải phản đối ý đó." },
            ],
          },
          {
            id: "s2-einwand",
            label: "Das Problem dabei ist, dass … / Bedenken Sie aber, dass …",
            meaning: "Vấn đề ở đây là … / Nhưng xin cân nhắc rằng …",
            definition: "Einen sachlichen Einwand formulieren.",
            examples: [
              { de: "Das Problem dabei ist, dass die Kosten zu hoch wären.", vi: "Vấn đề ở đây là chi phí sẽ quá cao." },
              { de: "Bedenken Sie aber, dass nicht alle mit dem Auto kommen können.", vi: "Nhưng xin cân nhắc rằng không phải ai cũng đi ô tô được." },
            ],
          },
          {
            id: "s2-kompromiss",
            label: "Können wir uns darauf einigen, dass … ?",
            meaning: "Chúng ta thống nhất là … được không?",
            definition: "Kompromiss suchen und die Diskussion zum Ergebnis führen.",
            examples: [
              { de: "Können wir uns darauf einigen, dass wir um 15 Uhr anfangen?", vi: "Chúng ta thống nhất bắt đầu lúc 15 giờ được không?" },
              { de: "Wir könnten einen Kompromiss finden: die Hälfte online, die Hälfte vor Ort.", vi: "Chúng ta có thể thỏa hiệp: một nửa trực tuyến, một nửa trực tiếp." },
            ],
          },
          {
            id: "s2-nachfragen",
            label: "Was meinen Sie dazu? / Wie sehen Sie das?",
            meaning: "Anh/chị nghĩ sao về điều đó?",
            definition: "Den Partner einbeziehen — bringt in Teil 2 wichtige Punkte.",
            examples: [
              { de: "Ich finde die Idee gut. Was meinen Sie dazu?", vi: "Tôi thấy ý này hay. Anh/chị nghĩ sao?" },
              { de: "Wie sehen Sie das, wäre der Samstag für Sie möglich?", vi: "Anh/chị thấy sao, thứ Bảy có được không?" },
            ],
          },
        ],
      },
      {
        id: "meinung",
        label: "Meinung & Argumentation",
        meaning: "nêu ý kiến và lập luận",
        note: "Công thức ăn điểm: Ý kiến → Lý do → Ví dụ → Kết luận nhỏ.",
        children: [
          {
            id: "arg-meinung",
            label: "Meiner Meinung nach … / Ich bin der Ansicht, dass …",
            meaning: "Theo ý tôi … / Tôi cho rằng …",
            definition: "Eigene Position klar markieren.",
            examples: [
              { de: "Meiner Meinung nach sollte der Nahverkehr kostenlos sein.", vi: "Theo tôi, giao thông công cộng nên miễn phí." },
              { de: "Ich bin der Ansicht, dass hier dringend etwas passieren muss.", vi: "Tôi cho rằng ở đây cần hành động khẩn trương." },
            ],
          },
          {
            id: "arg-begruenden",
            label: "Das liegt vor allem daran, dass …",
            meaning: "Điều đó chủ yếu là do …",
            definition: "Die eigene Meinung begründen.",
            examples: [
              { de: "Das liegt vor allem daran, dass viele Familien sich kein Auto leisten können.", vi: "Điều đó chủ yếu do nhiều gia đình không kham nổi ô tô." },
              { de: "Der Hauptgrund dafür ist der hohe Zeitdruck im Alltag.", vi: "Lý do chính là áp lực thời gian trong đời sống hằng ngày." },
            ],
          },
          {
            id: "arg-beispiel",
            label: "Ein gutes Beispiel dafür ist … / Nehmen wir zum Beispiel …",
            meaning: "Một ví dụ điển hình là … / Lấy ví dụ …",
            definition: "Argumente mit Beispielen belegen — Prüfungskriterium in Teil 1 und im Schreiben.",
            examples: [
              { de: "Ein gutes Beispiel dafür ist die Situation in Großstädten wie Hanoi.", vi: "Một ví dụ điển hình là tình hình ở các đô thị lớn như Hà Nội." },
              { de: "Nehmen wir zum Beispiel die Preise für Lebensmittel.", vi: "Lấy ví dụ giá thực phẩm." },
            ],
          },
          {
            id: "arg-gegenargument",
            label: "Natürlich könnte man einwenden, dass … Trotzdem …",
            meaning: "Tất nhiên có thể phản biện rằng … Tuy vậy …",
            definition: "Gegenargument nennen und entkräften — zeigt echtes B2-Niveau.",
            examples: [
              { de: "Natürlich könnte man einwenden, dass das teuer ist. Trotzdem lohnt es sich langfristig.", vi: "Tất nhiên có thể phản biện rằng việc đó tốn kém. Tuy vậy về lâu dài vẫn đáng." },
              { de: "Zwar kostet die Maßnahme viel, aber sie schützt die Umwelt.", vi: "Tuy biện pháp này tốn kém nhưng nó bảo vệ môi trường." },
            ],
          },
          {
            id: "arg-fazit",
            label: "Alles in allem … / Aus diesen Gründen bin ich der Meinung, dass …",
            meaning: "Nhìn chung … / Vì những lý do đó tôi cho rằng …",
            definition: "Schlussfolgerung ziehen.",
            examples: [
              { de: "Alles in allem überwiegen für mich die Vorteile.", vi: "Nhìn chung, với tôi ưu điểm vẫn nhiều hơn." },
              { de: "Aus diesen Gründen bin ich der Meinung, dass man handeln muss.", vi: "Vì những lý do đó tôi cho rằng cần phải hành động." },
            ],
          },
        ],
      },
      {
        id: "schreiben-forum",
        label: "Schreiben — Forumsbeitrag",
        meaning: "phần Viết: bài đăng diễn đàn",
        note: "Bố cục: mở bài (bắt vào chủ đề) → ý kiến + lý do → ví dụ/kinh nghiệm → kết luận.",
        children: [
          {
            id: "fo-einleitung",
            label: "Ich habe den Artikel über … mit großem Interesse gelesen.",
            meaning: "Tôi đã đọc bài viết về … với sự quan tâm lớn.",
            definition: "Bezug auf den Anlass des Beitrags nehmen.",
            examples: [
              { de: "Ich habe den Artikel über die 4-Tage-Woche mit großem Interesse gelesen.", vi: "Tôi đã đọc bài về tuần làm việc 4 ngày với sự quan tâm lớn." },
              { de: "Das Thema betrifft mich persönlich sehr.", vi: "Chủ đề này liên quan trực tiếp đến tôi." },
            ],
          },
          {
            id: "fo-position",
            label: "Ich stimme dem Autor teilweise zu, allerdings …",
            meaning: "Tôi đồng ý một phần với tác giả, tuy nhiên …",
            definition: "Differenzierte Position statt einfachem Ja/Nein.",
            examples: [
              { de: "Ich stimme dem Autor teilweise zu, allerdings halte ich seine Kritik für zu einseitig.", vi: "Tôi đồng ý một phần, nhưng thấy phê phán của tác giả quá một chiều." },
              { de: "In diesem Punkt kann ich dem Autor nicht zustimmen.", vi: "Ở điểm này tôi không thể đồng tình với tác giả." },
            ],
          },
          {
            id: "fo-erfahrung",
            label: "In meinem Fall war es so, dass …",
            meaning: "Trong trường hợp của tôi thì …",
            definition: "Eigene Erfahrung als Beleg einbringen.",
            examples: [
              { de: "In meinem Fall war es so, dass ich durch Homeoffice produktiver wurde.", vi: "Trong trường hợp của tôi, làm việc tại nhà giúp tôi năng suất hơn." },
              { de: "Bei uns in Vietnam ist die Lage etwas anders.", vi: "Ở Việt Nam chúng tôi tình hình hơi khác." },
            ],
          },
          {
            id: "fo-schluss",
            label: "Abschließend möchte ich betonen, dass …",
            meaning: "Cuối cùng tôi muốn nhấn mạnh rằng …",
            definition: "Beitrag mit klarer Aussage beenden.",
            examples: [
              { de: "Abschließend möchte ich betonen, dass jeder selbst entscheiden sollte.", vi: "Cuối cùng tôi muốn nhấn mạnh rằng mỗi người nên tự quyết định." },
              { de: "Ich hoffe, dass sich in Zukunft etwas ändert.", vi: "Tôi hy vọng trong tương lai sẽ có thay đổi." },
            ],
          },
        ],
      },
      {
        id: "schreiben-formell",
        label: "Schreiben — formelle E-Mail & Beschwerde",
        meaning: "phần Viết: thư trang trọng & khiếu nại",
        note: "Luôn dùng 'Sie'. Không viết tắt, không dùng khẩu ngữ.",
        children: [
          {
            id: "fm-anrede",
            label: "Sehr geehrte Damen und Herren, / Sehr geehrte Frau …,",
            meaning: "Kính gửi quý ông/quý bà, …",
            definition: "Formelle Anrede; nach dem Komma klein weiterschreiben.",
            examples: [
              { de: "Sehr geehrte Damen und Herren, hiermit wende ich mich an Sie …", vi: "Kính gửi quý vị, tôi xin liên hệ với quý vị …" },
              { de: "Sehr geehrter Herr Müller, vielen Dank für Ihre Nachricht.", vi: "Kính gửi ông Müller, cảm ơn ông vì tin nhắn." },
            ],
          },
          {
            id: "fm-anlass",
            label: "Ich schreibe Ihnen, weil … / Hiermit möchte ich mich über … beschweren.",
            meaning: "Tôi viết thư vì … / Tôi xin khiếu nại về …",
            definition: "Anliegen sofort im ersten Absatz nennen.",
            examples: [
              { de: "Ich schreibe Ihnen, weil ich seit drei Wochen keine Antwort erhalten habe.", vi: "Tôi viết thư vì đã ba tuần chưa nhận được phản hồi." },
              { de: "Hiermit möchte ich mich über die laute Baustelle beschweren.", vi: "Tôi xin khiếu nại về công trường ồn ào." },
            ],
          },
          {
            id: "fm-bitte",
            label: "Ich wäre Ihnen sehr dankbar, wenn Sie … könnten.",
            meaning: "Tôi rất biết ơn nếu quý vị có thể …",
            definition: "Höfliche Bitte im Konjunktiv II — Pflichtformel in der Prüfung.",
            examples: [
              { de: "Ich wäre Ihnen sehr dankbar, wenn Sie mir bis Freitag antworten könnten.", vi: "Tôi rất biết ơn nếu quý vị phản hồi trước thứ Sáu." },
              { de: "Könnten Sie mir bitte mitteilen, wie es weitergeht?", vi: "Quý vị có thể cho tôi biết các bước tiếp theo không ạ?" },
            ],
          },
          {
            id: "fm-forderung",
            label: "Ich bitte Sie daher, … / Ich erwarte eine Lösung bis …",
            meaning: "Vì vậy tôi đề nghị … / Tôi mong có giải pháp trước …",
            definition: "Konkrete Forderung mit Frist formulieren (typisch für Beschwerdebriefe).",
            examples: [
              { de: "Ich bitte Sie daher, den Betrag bis zum 30. Juni zu erstatten.", vi: "Vì vậy tôi đề nghị hoàn tiền trước ngày 30 tháng 6." },
              { de: "Sollte sich nichts ändern, werde ich weitere Schritte prüfen.", vi: "Nếu không có gì thay đổi, tôi sẽ cân nhắc các bước tiếp theo." },
            ],
          },
          {
            id: "fm-gruss",
            label: "Mit freundlichen Grüßen",
            meaning: "Trân trọng",
            definition: "Standard-Grußformel; danach kein Komma, dann der Name.",
            examples: [
              { de: "Mit freundlichen Grüßen, Huynh Hoang Vu", vi: "Trân trọng, Huỳnh Hoàng Vũ" },
              { de: "Vielen Dank im Voraus für Ihre Bemühungen.", vi: "Xin cảm ơn trước vì sự hỗ trợ của quý vị." },
            ],
          },
        ],
      },
      {
        id: "zusammenfassen",
        label: "Zusammenfassen & Grafik beschreiben",
        meaning: "tóm tắt văn bản & mô tả biểu đồ",
        children: [
          {
            id: "zu-text",
            label: "In dem Text geht es um … / Der Autor vertritt die Ansicht, dass …",
            meaning: "Văn bản nói về … / Tác giả cho rằng …",
            definition: "Textinhalt neutral wiedergeben.",
            examples: [
              { de: "In dem Text geht es um die Folgen des demografischen Wandels.", vi: "Văn bản nói về hệ quả của biến đổi nhân khẩu." },
              { de: "Der Autor vertritt die Ansicht, dass mehr investiert werden muss.", vi: "Tác giả cho rằng cần đầu tư nhiều hơn." },
            ],
          },
          {
            id: "zu-grafik",
            label: "Die Grafik zeigt … / Auffällig ist, dass …",
            meaning: "Biểu đồ cho thấy … / Điều đáng chú ý là …",
            definition: "Grafiken und Statistiken beschreiben.",
            examples: [
              { de: "Die Grafik zeigt die Entwicklung der Mietpreise zwischen 2015 und 2025.", vi: "Biểu đồ cho thấy diễn biến giá thuê nhà từ 2015 đến 2025." },
              { de: "Auffällig ist, dass die Zahl seit 2020 stark gestiegen ist.", vi: "Điều đáng chú ý là con số tăng mạnh từ năm 2020." },
            ],
          },
          {
            id: "zu-entwicklung",
            label: "Wortschatz: zunehmen, abnehmen, sich verdoppeln, stagnieren",
            meaning: "từ mô tả xu hướng",
            definition: "Verben für die Beschreibung von Entwicklungen in Grafiken.",
            examples: [
              { de: "Die Zahl der Studierenden hat sich in zehn Jahren fast verdoppelt.", vi: "Số sinh viên gần như tăng gấp đôi trong mười năm." },
              { de: "Seit 2022 stagniert der Anteil bei etwa 30 Prozent.", vi: "Từ năm 2022, tỷ lệ này chững lại ở khoảng 30 phần trăm." },
            ],
          },
        ],
      },
      {
        id: "uebung-redemittel",
        label: "Übung: Redemittel ergänzen",
        meaning: "Luyện tập: điền mẫu câu",
        children: [
          { id: "ue-rm-1", label: "In meiner Präsentation ___ es um das Thema Umwelt.", meaning: "mở đầu bài trình bày", answer: "geht" },
          { id: "ue-rm-2", label: "Meiner ___ nach sollte der Nahverkehr billiger sein.", meaning: "theo ý tôi", answer: "Meinung" },
          { id: "ue-rm-3", label: "Zusammenfassend ___ sich sagen, dass die Vorteile überwiegen.", meaning: "tóm lại có thể nói", answer: "lässt" },
          { id: "ue-rm-4", label: "Sehr ___ Damen und Herren,", meaning: "lời chào thư trang trọng", answer: "geehrte" },
          { id: "ue-rm-5", label: "Ich wäre Ihnen sehr ___, wenn Sie mir antworten könnten.", meaning: "biết ơn", answer: "dankbar" },
          { id: "ue-rm-6", label: "Mit freundlichen ___", meaning: "lời chào cuối thư", answer: "Grüßen" },
          { id: "ue-rm-7", label: "Das ___ ich etwas anders, weil …", meaning: "phản đối lịch sự", answer: "sehe" },
          { id: "ue-rm-8", label: "Ein gutes ___ dafür ist die Situation in Hanoi.", meaning: "ví dụ điển hình", answer: "Beispiel" },
          { id: "ue-rm-9", label: "Können wir uns darauf ___, dass wir um 15 Uhr anfangen?", meaning: "thống nhất", answer: "einigen" },
          { id: "ue-rm-10", label: "Die Grafik ___ die Entwicklung der Mietpreise.", meaning: "biểu đồ cho thấy", answer: "zeigt" },
        ],
      },
    ],
  },
};

export default topic;
