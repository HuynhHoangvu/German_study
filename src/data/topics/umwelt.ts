import { Topic } from "@/types/topic";

const topic: Topic = {
  slug: "umwelt",
  title: "Umwelt",
  titleVi: "Môi trường",
  description: "Umweltprobleme, Klimawandel und Umweltschutz",
  color: "#1f9d55",
  level: "B2",
  root: {
    id: "root",
    label: "Umwelt",
    meaning: "môi trường",
    children: [
      {
        id: "probleme",
        label: "Umweltprobleme",
        meaning: "vấn đề môi trường",
        children: [
          { id: "klimawandel", label: "der Klimawandel", meaning: "biến đổi khí hậu", synonyms: ["die globale Erwärmung", "die Erderwärmung"], note: "Zusammensetzung aus Klima + Wandel; oft in Kollokationen wie 'den Klimawandel eindämmen/bekämpfen'." },
          { id: "luftverschmutzung", label: "die ___", meaning: "ô nhiễm không khí", answer: "Luftverschmutzung" },
          { id: "plastikmuell", label: "die Plastikvermüllung", meaning: "tình trạng ô nhiễm rác thải nhựa", synonyms: ["die Vermüllung der Meere"] },
          { id: "abholzung", label: "die Abholzung", meaning: "phá rừng", synonyms: ["die Rodung", "die Entwaldung"] },
          { id: "artensterben", label: "das Artensterben", meaning: "tuyệt chủng loài", note: "Zusammensetzung aus Art (loài) + Sterben (sự chết đi); häufig als 'das sechste Massenaussterben' bezeichnet." },
        ],
      },
      {
        id: "ursachen",
        label: "Ursachen",
        meaning: "nguyên nhân",
        children: [
          { id: "industrie", label: "die Industrieemissionen", meaning: "khí thải công nghiệp", synonyms: ["die Schadstoffbelastung"] },
          { id: "konsum", label: "der übermäßige Ressourcenverbrauch", meaning: "tiêu dùng/tiêu thụ tài nguyên quá mức", synonyms: ["die Wegwerfmentalität"] },
          { id: "fossile", label: "die Abhängigkeit von fossilen Brennstoffen", meaning: "sự phụ thuộc vào nhiên liệu hóa thạch", note: "Nomen + Präposition: abhängig sein von + Dat." },
        ],
      },
      {
        id: "folgen",
        label: "Folgen",
        meaning: "hậu quả",
        children: [
          { id: "naturkatastrophen", label: "die ___", meaning: "thảm họa thiên nhiên", answer: "Naturkatastrophen" },
          { id: "meeresspiegel", label: "der kontinuierlich steigende Meeresspiegel", meaning: "mực nước biển không ngừng dâng cao" },
          { id: "duerre", label: "die anhaltende Dürre", meaning: "hạn hán kéo dài", synonyms: ["die Wasserknappheit"] },
        ],
      },
      {
        id: "loesungen",
        label: "Lösungen",
        meaning: "giải pháp",
        children: [
          { id: "erneuerbar", label: "auf erneuerbare Energien umsteigen", meaning: "chuyển sang sử dụng năng lượng tái tạo", synonyms: ["Solar-, Windenergie"], note: "umsteigen auf + Akk. (chuyển đổi sang); trennbares Verb: steigt ... um, umgestiegen." },
          { id: "recycling", label: "das Recycling konsequent umsetzen", meaning: "thực hiện tái chế một cách triệt để" },
          { id: "oepnv2", label: "auf den öffentlichen Nahverkehr umsteigen", meaning: "chuyển sang dùng phương tiện công cộng" },
          { id: "reduzieren", label: "den Ressourcenverbrauch ___", meaning: "giảm mức tiêu thụ tài nguyên", answer: "reduzieren" },
        ],
      },
      {
        id: "trends",
        label: "Aktuelle Trend-Themen",
        meaning: "các chủ đề xu hướng (dùng cho phần Nói/Viết Teil 1)",
        children: [
          {
            id: "trend-plastik",
            label: "Plastikverpackungen und Umweltsteuer",
            meaning: "bao bì nhựa và thuế môi trường",
            children: [
              {
                id: "trend-plastik-vorteile", label: "Vorteile", meaning: "ưu điểm",
                children: [
                  { id: "tp-v1", label: "die Umweltsteuer setzt einen finanziellen Anreiz zur Vermeidung von Plastik", meaning: "thuế môi trường tạo động lực tài chính để hạn chế dùng nhựa" },
                  { id: "tp-v2", label: "die Einnahmen können in den Umweltschutz reinvestiert werden", meaning: "nguồn thu có thể được tái đầu tư vào bảo vệ môi trường" },
                  { id: "tp-v3", label: "das Umweltbewusstsein der Verbraucher wird geschärft", meaning: "ý thức bảo vệ môi trường của người tiêu dùng được nâng cao" },
                ],
              },
              {
                id: "trend-plastik-nachteile", label: "Nachteile", meaning: "nhược điểm",
                children: [
                  { id: "tp-n1", label: "die Mehrkosten werden oft an die Verbraucher weitergegeben", meaning: "chi phí tăng thêm thường bị chuyển sang cho người tiêu dùng" },
                  { id: "tp-n2", label: "einkommensschwache Haushalte werden überproportional belastet", meaning: "các hộ gia đình thu nhập thấp bị ảnh hưởng nặng nề hơn" },
                  { id: "tp-n3", label: "Unternehmen weichen teils auf andere, ebenso schädliche Verpackungen aus", meaning: "doanh nghiệp đôi khi chuyển sang loại bao bì khác cũng gây hại không kém" },
                ],
              },
              {
                id: "trend-plastik-alt", label: "Alternativen / Möglichkeiten", meaning: "giải pháp thay thế",
                children: [
                  { id: "tp-a1", label: "biologisch abbaubare Verpackungen verwenden", meaning: "sử dụng bao bì có thể phân hủy sinh học" },
                  { id: "tp-a2", label: "ein Pfandsystem für Mehrwegverpackungen einführen", meaning: "áp dụng hệ thống đặt cọc cho bao bì tái sử dụng" },
                ],
              },
              {
                id: "trend-plastik-vn", label: "Situation in Vietnam", meaning: "tình hình ở Việt Nam",
                children: [
                  { id: "tp-vn1", label: "Plastiktüten werden im Alltag trotz Verbotsversuchen weiterhin stark genutzt", meaning: "túi ni-lông vẫn được dùng nhiều trong đời sống dù đã có nỗ lực cấm" },
                  { id: "tp-vn2", label: "in Supermärkten setzt sich langsam eine Umweltgebühr auf Plastiktüten durch", meaning: "các siêu thị dần áp dụng phí môi trường cho túi ni-lông" },
                ],
              },
            ],
          },
          {
            id: "trend-secondhand",
            label: "Second-Hand-Artikel kaufen",
            meaning: "mua đồ cũ",
            children: [
              {
                id: "trend-secondhand-vorteile", label: "Vorteile", meaning: "ưu điểm",
                children: [
                  { id: "ts-v1", label: "Ressourcen und Rohstoffe werden geschont", meaning: "tài nguyên và nguyên liệu thô được tiết kiệm" },
                  { id: "ts-v2", label: "deutlich günstiger als Neuware", meaning: "rẻ hơn đáng kể so với hàng mới" },
                  { id: "ts-v3", label: "der Lebenszyklus von Produkten wird verlängert", meaning: "kéo dài vòng đời sản phẩm" },
                ],
              },
              {
                id: "trend-secondhand-nachteile", label: "Nachteile", meaning: "nhược điểm",
                children: [
                  { id: "ts-n1", label: "eingeschränkte Qualitäts- und Garantiesicherheit", meaning: "khó đảm bảo chất lượng và bảo hành" },
                  { id: "ts-n2", label: "begrenzte Auswahl an Größen und Modellen", meaning: "lựa chọn về kích cỡ và mẫu mã hạn chế" },
                ],
              },
              {
                id: "trend-secondhand-alt", label: "Alternativen / Möglichkeiten", meaning: "giải pháp thay thế",
                children: [
                  { id: "ts-a1", label: "Kleidertauschbörsen und Flohmärkte nutzen", meaning: "sử dụng chợ trao đổi quần áo và chợ đồ cũ" },
                  { id: "ts-a2", label: "Online-Plattformen für gebrauchte Waren nutzen", meaning: "sử dụng nền tảng trực tuyến để mua bán đồ cũ" },
                ],
              },
              {
                id: "trend-secondhand-vn", label: "Situation in Vietnam", meaning: "tình hình ở Việt Nam",
                children: [
                  { id: "ts-vn1", label: "der Second-Hand-Markt für Kleidung (\"đồ si\") wird bei jungen Leuten immer beliebter", meaning: "thị trường đồ si (quần áo cũ) ngày càng phổ biến trong giới trẻ" },
                  { id: "ts-vn2", label: "Second-Hand-Elektronik gilt bei vielen noch als weniger vertrauenswürdig", meaning: "đồ điện tử cũ vẫn bị nhiều người coi là kém tin cậy" },
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
              { id: "wa-ressource", label: "die Ressourcenknappheit", meaning: "sự khan hiếm tài nguyên" },
              { id: "wa-emission", label: "die Treibhausgasemission", meaning: "khí thải nhà kính" },
              { id: "wa-umweltschutz", label: "der Umweltschutz", meaning: "bảo vệ môi trường" },
              { id: "wa-oekosystem", label: "das Ökosystem", meaning: "hệ sinh thái" },
              { id: "wa-nachhaltigkeit", label: "die Nachhaltigkeit", meaning: "tính bền vững" },
            ],
          },
          {
            id: "wortarten-phrasen",
            label: "Nominalphrasen",
            meaning: "cụm danh từ",
            children: [
              { id: "wa-die-umwelt-schuetzen", label: "die Umwelt schützen", meaning: "bảo vệ môi trường" },
              { id: "wa-ressourcen-schonen", label: "Ressourcen schonen", meaning: "tiết kiệm tài nguyên" },
              { id: "wa-den-co2-ausstoss-verringern", label: "den CO2-Ausstoß verringern", meaning: "giảm lượng khí thải CO2" },
            ],
          },
          {
            id: "wortarten-verben",
            label: "Verben",
            meaning: "động từ",
            children: [
              { id: "wa-verschmutzen", label: "verschmutzen", meaning: "làm ô nhiễm" },
              { id: "wa-schuetzen", label: "schützen vor + Dat.", meaning: "bảo vệ khỏi" },
              { id: "wa-verschwenden", label: "verschwenden", meaning: "lãng phí" },
              { id: "wa-eindaemmen", label: "eindämmen", meaning: "kiềm chế, hạn chế (thiệt hại)", note: "trennbares Verb: dämmt ein, hat eingedämmt; häufig mit 'die Folgen/den Schaden eindämmen'." },
            ],
          },
          {
            id: "wortarten-adjektive",
            label: "Adjektive + Präpositionen",
            meaning: "tính từ kèm giới từ",
            children: [
              { id: "wa-schaedlich", label: "schädlich für + Akk.", meaning: "có hại cho" },
              { id: "wa-verantwortlich-umwelt", label: "verantwortlich für + Akk.", meaning: "chịu trách nhiệm về" },
              { id: "wa-reich-an-umwelt", label: "reich an + Dat.", meaning: "giàu (tài nguyên gì)" },
            ],
          },
        ],
      },
    ],
  },
};

export default topic;
