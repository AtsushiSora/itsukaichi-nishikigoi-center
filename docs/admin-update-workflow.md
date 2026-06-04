# 管理者向け更新手順

五日市錦鯉センターのサイトを更新するための運用手順です。写真、在庫、公開確認をこの順番で進めます。

## 1. 写真を用意する

販売中の錦鯉写真は下記に置きます。

```text
public/images/live/inventory/
```

ファイル名は管理IDに合わせます。

```text
koi-007-main.png
koi-007-side.png
koi-007-detail.png
```

写真の目安は [photo-replacement-checklist.md](./photo-replacement-checklist.md) を確認してください。

## 2. CSVを編集する

ひな形は下記です。

```text
docs/inventory-csv-template.csv
```

Googleスプレッドシートで管理する場合は、この列名に合わせます。

```text
id,variety,size,age,sex,price,status,comment,mainImage,galleryImages,handover,videoUrl
```

`galleryImages` は `|` で区切ります。

```text
koi-007-main.png|koi-007-side.png|koi-007-detail.png
```

価格のように半角カンマを含む項目は引用符で囲みます。

```text
"税込 88,000円"
```

## 3. CSVからJSONへ変換する

まずはプレビューで確認します。

```bash
npm run inventory:from-csv -- docs/inventory-csv-template.csv
```

内容に問題がなければ、在庫JSONへ書き込みます。

```bash
npm run inventory:from-csv -- docs/inventory-csv-template.csv src/data/koi-inventory.json --write
```

## 4. 在庫データを確認する

必須項目、ID重複、状態の表記、画像ファイルの有無を確認します。

```bash
npm run validate:inventory
```

在庫件数と状態別件数を確認します。

```bash
npm run inventory:summary
```

## 5. サイト表示を確認する

ローカルで起動します。

```bash
npm run dev
```

確認するページです。

- `/`
- `/koi`
- `/koi/koi-001`
- `/contact`

新しく追加した錦鯉がある場合は、その詳細ページも確認します。

```text
/koi/koi-007
```

## 6. ホームのお知らせを更新する

ホームに表示する「お店からのお知らせ」は下記で編集します。

```text
src/data/home-message.ts
```

文章、ボタン名、リンク先を変更できます。

## 7. 公開前チェック

下記を実行します。

```bash
npm run audit:launch
npm run check
GITHUB_PAGES=true npm run build
```

公開後はGitHub PagesのURLで表示確認します。

```text
https://atsushisora.github.io/itsukaichi-nishikigoi-center/
```

## 更新時の注意

- 実在情報の変更は [site.ts](../src/data/site.ts) を更新します。
- ホームのお知らせは [home-message.ts](../src/data/home-message.ts) を更新します。
- 在庫情報の本体は [koi-inventory.json](../src/data/koi-inventory.json) です。
- CSVで管理する場合は、CSVからJSONへ変換してから公開します。
- 写真を差し替えたら、スマホ表示で画像の見切れを確認します。
- 実公開前の確認項目は [final-data-replacement-checklist.md](./final-data-replacement-checklist.md) を確認します。
