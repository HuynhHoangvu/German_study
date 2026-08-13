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
