import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const inventoryPath = path.join(projectRoot, "src/data/koi-inventory.json");
const statuses = ["販売中", "商談中", "売約済み"];

const inventory = JSON.parse(fs.readFileSync(inventoryPath, "utf8"));

if (!Array.isArray(inventory)) {
  throw new Error("在庫データは配列にしてください。");
}

const statusCounts = Object.fromEntries(statuses.map((status) => [status, 0]));

inventory.forEach((record) => {
  statusCounts[record.status] = (statusCounts[record.status] ?? 0) + 1;
});

console.log("在庫サマリー");
console.log(`合計: ${inventory.length}件`);
statuses.forEach((status) => {
  console.log(`${status}: ${statusCounts[status]}件`);
});

console.log("\n掲載データ");
inventory.forEach((record) => {
  console.log(`${record.id} / ${record.status} / ${record.variety} / ${record.size} / ${record.price}`);
});
