# スプレッドシート在庫管理ガイド

錦鯉の追加、変更、削除、状態変更、写真管理をGoogleスプレッドシートで行うための手順です。

## 管理できること

- 新しい錦鯉の追加
- 既存の錦鯉情報の変更
- 在庫からの削除
- `販売中` / `商談中` / `売約済み` / `売り切れ` の状態管理
- 写真のファイル名または画像URLの管理
- スプレッドシートからサイト用JSONへの変換

## 列名

スプレッドシートの1行目は、この列名にしてください。

```text
id,variety,size,age,sex,price,status,comment,mainImage,galleryImages,handover,videoUrl
```

| 列名 | 内容 |
|---|---|
| `id` | 管理ID。例: `koi-001` |
| `variety` | 品種 |
| `size` | サイズ。例: `53cm` |
| `age` | 年齢。例: `2歳` |
| `sex` | 性別 |
| `price` | 価格。例: `税込 148,000円` |
| `status` | `販売中` / `商談中` / `売約済み` / `売り切れ` |
| `comment` | 説明文 |
| `mainImage` | 一覧・メイン写真 |
| `galleryImages` | 詳細ページの写真。複数は `|` 区切り |
| `handover` | 受け渡し説明 |
| `videoUrl` | 動画URL。空でも可 |

## 追加・変更・削除

### 追加

スプレッドシートに新しい行を追加します。

```text
koi-007,紅白,42cm,2歳,メス,"税込 88,000円",販売中,白地と緋のまとまりがよい一尾です。,koi-007-main.png,koi-007-main.png|koi-007-side.png,店頭で状態をご確認いただき、受け渡し方法をご相談ください。,
```

### 変更

既存行の値を変更します。価格、状態、コメント、写真URLなどを直接編集できます。

### 削除

スプレッドシートから行を削除します。次回取り込み時に、サイト側の在庫JSONからも消えます。

### 状態変更

`status` に次のいずれかを入れます。

```text
販売中
商談中
売約済み
売り切れ
```

`売切`、`売切れ`、`売約`、`売約済` は取り込み時に自動で整えます。

## 写真の管理

写真は2つの方法で管理できます。

### 方法1: ファイル名で管理する

写真を下記フォルダに置きます。

```text
public/images/live/inventory/
```

スプレッドシートにはファイル名だけを書きます。

```text
koi-007-main.png
```

複数写真は `|` で区切ります。

```text
koi-007-main.png|koi-007-side.png|koi-007-detail.png
```

### 方法2: 画像URLで管理する

スプレッドシートに `https://` から始まる画像URLを入れます。

```text
https://example.com/images/koi-007-main.jpg
```

Google Driveの共有URLも入力できます。サイト側で表示用URLへ変換します。

```text
https://drive.google.com/file/d/FILE_ID/view?usp=sharing
```

ただし、公開サイトで表示するには画像が外部から閲覧できる共有設定になっている必要があります。

## Googleスプレッドシートから取り込む

Googleスプレッドシートで、CSVとして公開またはダウンロードできるURLを用意します。

例:

```text
https://docs.google.com/spreadsheets/d/e/xxxxxxxx/pub?output=csv
```

まずプレビューします。

```bash
npm run inventory:from-sheet -- "https://docs.google.com/spreadsheets/d/e/xxxxxxxx/pub?output=csv"
```

問題なければ在庫JSONへ書き込みます。

```bash
npm run inventory:from-sheet -- "https://docs.google.com/spreadsheets/d/e/xxxxxxxx/pub?output=csv" src/data/koi-inventory.json --write
```

その後、確認します。

```bash
npm run validate:inventory
npm run inventory:summary
npm run check
```

## 注意点

- `id` は重複しないようにしてください。
- 価格に半角カンマが入る場合、CSVでは `"税込 88,000円"` のように引用符で囲まれます。GoogleスプレッドシートからCSV出力すれば通常は自動で処理されます。
- 写真URLは、ブラウザで直接開いて画像が見えるものを使ってください。
- 非公開のGoogle Drive画像は公開サイトでは表示できません。
