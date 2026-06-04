import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const inventoryPath = path.join(projectRoot, "src/data/koi-inventory.json");
const imageDir = path.join(projectRoot, "public/images/live/inventory");
const allowedStatuses = new Set(["販売中", "商談中", "売約済み", "売り切れ"]);
const allowedImageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp"]);
const requiredStringFields = [
  "id",
  "variety",
  "size",
  "age",
  "sex",
  "price",
  "status",
  "comment",
  "mainImage",
  "handover",
];

const errors = [];
const warnings = [];

const addError = (message) => errors.push(`- ${message}`);
const addWarning = (message) => warnings.push(`- ${message}`);

const isPlainObject = (value) =>
  value !== null && typeof value === "object" && !Array.isArray(value);

const readInventory = () => {
  try {
    return JSON.parse(fs.readFileSync(inventoryPath, "utf8"));
  } catch (error) {
    addError(`JSONを読み込めません: ${inventoryPath} (${error.message})`);
    return undefined;
  }
};

const isAbsoluteUrl = (source) => /^https?:\/\//i.test(source);

const validateImageSource = (fileName, label, fieldName) => {
  if (typeof fileName !== "string" || fileName.trim() === "") {
    addError(`${label}: ${fieldName} は空でない文字列にしてください。`);
    return;
  }

  if (isAbsoluteUrl(fileName)) {
    if (fileName.includes("drive.google.com/file/d/")) {
      addWarning(`${label}: ${fieldName} はGoogle Drive共有URLです。サイト側で表示用URLに変換します。`);
    }
    return;
  }

  if (path.basename(fileName) !== fileName) {
    addError(`${label}: ${fieldName} はファイル名だけを書いてください (${fileName})。`);
    return;
  }

  const extension = path.extname(fileName).toLowerCase();
  if (!allowedImageExtensions.has(extension)) {
    addError(`${label}: ${fieldName} は png/jpg/jpeg/webp の画像にしてください (${fileName})。`);
  }

  const imagePath = path.join(imageDir, fileName);
  if (!fs.existsSync(imagePath)) {
    addError(`${label}: 画像ファイルが見つかりません (${imagePath})。`);
  }
};

const inventory = readInventory();

if (!Array.isArray(inventory)) {
  addError("在庫データは配列にしてください。");
} else {
  const seenIds = new Set();

  inventory.forEach((record, index) => {
    const fallbackLabel = `${index + 1}件目`;
    const label = isPlainObject(record) && record.id ? record.id : fallbackLabel;

    if (!isPlainObject(record)) {
      addError(`${fallbackLabel}: 各在庫データはオブジェクトにしてください。`);
      return;
    }

    requiredStringFields.forEach((fieldName) => {
      if (typeof record[fieldName] !== "string" || record[fieldName].trim() === "") {
        addError(`${label}: ${fieldName} は必須です。`);
      }
    });

    if (typeof record.id === "string") {
      if (!/^[a-z0-9][a-z0-9-]*$/.test(record.id)) {
        addError(`${label}: id は半角英数字とハイフンだけにしてください。`);
      }
      if (seenIds.has(record.id)) {
        addError(`${label}: id が重複しています。`);
      }
      seenIds.add(record.id);
    }

    if (typeof record.status === "string" && !allowedStatuses.has(record.status)) {
      addError(`${label}: status は「販売中」「商談中」「売約済み」「売り切れ」のいずれかにしてください。`);
    }

    validateImageSource(record.mainImage, label, "mainImage");

    if (!Array.isArray(record.galleryImages) || record.galleryImages.length === 0) {
      addError(`${label}: galleryImages は1枚以上の配列にしてください。`);
    } else {
      record.galleryImages.forEach((fileName, imageIndex) => {
        validateImageSource(fileName, label, `galleryImages[${imageIndex}]`);
      });

      if (typeof record.mainImage === "string" && !record.galleryImages.includes(record.mainImage)) {
        addWarning(`${label}: mainImage も galleryImages に入れておくと詳細ページで見せやすくなります。`);
      }
    }

    if (record.videoUrl !== undefined && typeof record.videoUrl !== "string") {
      addError(`${label}: videoUrl を使う場合は文字列にしてください。`);
    }
  });
}

if (warnings.length > 0) {
  console.log("在庫データ検証: 警告");
  console.log(warnings.join("\n"));
}

if (errors.length > 0) {
  console.error("在庫データ検証: エラー");
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`在庫データ検証: OK (${Array.isArray(inventory) ? inventory.length : 0}件)`);
}
