import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const defaultCsvPath = path.join(projectRoot, "docs/inventory-csv-template.csv");
const defaultJsonPath = path.join(projectRoot, "src/data/koi-inventory.json");
const requiredHeaders = [
  "id",
  "variety",
  "size",
  "age",
  "sex",
  "price",
  "status",
  "comment",
  "mainImage",
  "galleryImages",
  "handover",
  "videoUrl",
];

const args = process.argv.slice(2);
const shouldWrite = args.includes("--write");
const shouldShowHelp = args.includes("--help") || args.includes("-h");
const positionalArgs = args.filter((arg) => !arg.startsWith("--"));

const isUrl = (value) => /^https?:\/\//i.test(value);
const csvInput = positionalArgs[0] ?? defaultCsvPath;
const csvPath = isUrl(csvInput) ? csvInput : path.resolve(projectRoot, csvInput);
const jsonPath = path.resolve(projectRoot, positionalArgs[1] ?? defaultJsonPath);

if (shouldShowHelp) {
  console.log(`CSVから在庫JSONを生成します。

使い方:
  npm run inventory:from-csv
  npm run inventory:from-csv -- docs/inventory-csv-template.csv
  npm run inventory:from-csv -- "https://docs.google.com/spreadsheets/d/e/.../pub?output=csv"
  npm run inventory:from-csv -- docs/inventory-csv-template.csv src/data/koi-inventory.json --write

注意:
  --write を付けない場合はJSONを画面に表示するだけです。
  galleryImages は koi-001-main.png|koi-001-side.png のように | で区切ります。
  画像はファイル名、または https:// から始まる画像URLを使えます。`);
  process.exit(0);
}

const parseCsv = (source) => {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    const nextChar = source[index + 1];

    if (inQuotes && char === "\"" && nextChar === "\"") {
      field += "\"";
      index += 1;
      continue;
    }

    if (char === "\"") {
      inQuotes = !inQuotes;
      continue;
    }

    if (!inQuotes && char === ",") {
      row.push(field);
      field = "";
      continue;
    }

    if (!inQuotes && (char === "\n" || char === "\r")) {
      if (char === "\r" && nextChar === "\n") {
        index += 1;
      }
      row.push(field);
      if (row.some((value) => value.trim() !== "")) {
        rows.push(row);
      }
      row = [];
      field = "";
      continue;
    }

    field += char;
  }

  row.push(field);
  if (row.some((value) => value.trim() !== "")) {
    rows.push(row);
  }

  return rows;
};

const normalizeCell = (value) => value.trim();
const headerAliases = {
  galleryImage: "galleryImages",
};

const normalizeHeader = (header) => headerAliases[normalizeCell(header)] ?? normalizeCell(header);

const normalizeStatus = (status) => {
  const normalizedStatus = {
    売切: "売り切れ",
    売切れ: "売り切れ",
    売約: "売約済み",
    売約済: "売約済み",
  };

  return normalizedStatus[status] ?? status;
};

const toRecord = (row, headers, rowNumber) => {
  const values = Object.fromEntries(headers.map((header, index) => [header, normalizeCell(row[index] ?? "")]));
  const galleryImages = values.galleryImages
    ? values.galleryImages.split("|").map((image) => image.trim()).filter(Boolean)
    : values.mainImage
      ? [values.mainImage]
      : [];

  const record = {
    id: values.id,
    variety: values.variety,
    size: values.size,
    age: values.age,
    sex: values.sex,
    price: values.price,
    status: normalizeStatus(values.status),
    comment: values.comment,
    mainImage: values.mainImage,
    galleryImages,
    handover: values.handover,
  };

  if (values.videoUrl) {
    record.videoUrl = values.videoUrl;
  }

  if (!record.id) {
    throw new Error(`${rowNumber}行目: id が空です。`);
  }

  return record;
};

const readCsvSource = async (source) => {
  if (isUrl(source)) {
    const response = await fetch(source);

    if (!response.ok) {
      throw new Error(`CSV URLを読み込めません: ${source} (${response.status})`);
    }

    return response.text();
  }

  if (!fs.existsSync(source)) {
    throw new Error(`CSVファイルが見つかりません: ${source}`);
  }

  return fs.readFileSync(source, "utf8");
};

const rows = parseCsv(await readCsvSource(csvPath));
if (rows.length < 2) {
  throw new Error("CSVにはヘッダー行と1件以上の在庫データが必要です。");
}

const headers = rows[0].map(normalizeHeader);
const missingHeaders = requiredHeaders.filter((header) => !headers.includes(header));
if (missingHeaders.length > 0) {
  throw new Error(`CSVヘッダーが不足しています: ${missingHeaders.join(", ")}`);
}

const inventory = rows.slice(1).map((row, index) => toRecord(row, headers, index + 2));
const json = `${JSON.stringify(inventory, null, 2)}\n`;

if (shouldWrite) {
  fs.mkdirSync(path.dirname(jsonPath), { recursive: true });
  fs.writeFileSync(jsonPath, json);
  console.log(`在庫JSONを書き出しました: ${jsonPath}`);
  console.log(`${inventory.length}件`);
} else {
  console.log(json);
  console.error(`プレビューのみ: ${inventory.length}件`);
  console.error("書き込む場合は --write を付けてください。");
}
