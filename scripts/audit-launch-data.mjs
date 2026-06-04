import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const checks = [
  {
    label: "仮・差し替え文言",
    pattern: /(仮データ|仮事例|公開前|正式な責任者名)/,
    paths: ["src/pages", "src/data"],
  },
  {
    label: "仮メールアドレス",
    pattern: /example\.jp/,
    paths: ["src/data/site.ts"],
  },
  {
    label: "営業時間・定休日の未確定文言",
    pattern: /(来店前にお電話でご確認ください|定休日はお問い合わせください)/,
    paths: ["src/data/site.ts"],
  },
];

const ignoredDirectories = new Set(["node_modules", "dist", ".git"]);
const allowedExtensions = new Set([".ts", ".tsx", ".js", ".mjs", ".json", ".md", ".html", ".toml"]);

const walk = (target) => {
  const fullPath = path.join(projectRoot, target);
  if (!fs.existsSync(fullPath)) {
    return [];
  }

  const stat = fs.statSync(fullPath);
  if (stat.isFile()) {
    return [fullPath];
  }

  const entries = fs.readdirSync(fullPath, { withFileTypes: true });
  return entries.flatMap((entry) => {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) {
      return [];
    }

    const entryPath = path.join(fullPath, entry.name);
    if (entry.isDirectory()) {
      return walk(path.relative(projectRoot, entryPath));
    }

    return allowedExtensions.has(path.extname(entry.name)) ? [entryPath] : [];
  });
};

const results = checks.flatMap((check) => {
  const files = [...new Set(check.paths.flatMap(walk))];

  return files.flatMap((filePath) => {
    const relativePath = path.relative(projectRoot, filePath);
    const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);

    return lines.flatMap((line, index) => {
      if (!check.pattern.test(line)) {
        return [];
      }

      return {
        label: check.label,
        path: relativePath,
        line: index + 1,
        text: line.trim(),
      };
    });
  });
});

if (results.length === 0) {
  console.log("公開前データ監査: 未確定項目は見つかりませんでした。");
} else {
  console.log(`公開前データ監査: ${results.length}件の確認項目があります。`);
  results.forEach((result) => {
    console.log(`- [${result.label}] ${result.path}:${result.line} ${result.text}`);
  });
  console.log("\n実公開前に上記を確認し、必要に応じて実情報へ差し替えてください。");
}
