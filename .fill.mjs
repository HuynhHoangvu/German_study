import { readdirSync, readFileSync, writeFileSync } from "fs";
const dir = "src/data/topics";
const files = readdirSync(dir).filter(f => f.endsWith(".ts") && f !== "index.ts");
let inline = 0, own = 0;
for (const f of files) {
  const p = `${dir}/${f}`;
  let src = readFileSync(p, "utf8");
  // 1) object written on one line:  label: "a ___ b", meaning: "...", answer: "X"
  src = src.replace(
    /label:\s*"([^"]*___[^"]*)"([^\n]*?),\s*answer:\s*"([^"]*)"/g,
    (m, label, mid, ans) => { inline++; return `label: "${label.replace("___", ans)}"${mid}`; }
  );
  // 2) answer on its own line inside a multi-line object
  src = src.replace(
    /label:\s*"([^"]*___[^"]*)"([\s\S]*?)\n[ \t]*answer:\s*"([^"]*)",[ \t]*\n/g,
    (m, label, between, ans) => {
      if (/\b(id|label):\s*"/.test(between)) return m;
      own++; return `label: "${label.replace("___", ans)}"${between}\n`;
    }
  );
  writeFileSync(p, src);
}
console.log("điền trên cùng dòng:", inline, "| điền nhiều dòng:", own, "| tổng:", inline + own);
