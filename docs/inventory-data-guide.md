# 在庫データ編集ガイド

販売中の錦鯉データは、下記のJSONファイルで管理します。

```text
src/data/koi-inventory.json
```

## 編集する項目

```json
{
  "id": "koi-001",
  "variety": "昭和三色",
  "size": "53cm",
  "age": "2歳",
  "sex": "メス",
  "price": "税込 148,000円",
  "status": "販売中",
  "comment": "力強い墨と鮮やかな緋が映える、存在感のある昭和三色です。",
  "mainImage": "koi-001-main.png",
  "galleryImages": ["koi-001-main.png", "koi-003-main.png", "koi-002-main.png"],
  "handover": "店頭で状態をご確認いただいたうえで、受け渡し方法を個別にご相談ください。"
}
```

## 状態に使える値

`status` は次の3つだけを使います。

```text
販売中
商談中
売約済み
```

## 画像の置き場所

画像ファイルは下記フォルダへ置きます。

```text
public/images/live/inventory/
```

JSONにはファイル名だけを書きます。

```json
"mainImage": "koi-001-main.png"
```

サイト上では自動的に次のURLへ変換されます。

```text
/images/live/inventory/koi-001-main.png
```

## 新しい錦鯉を追加する手順

1. `public/images/live/inventory/` に写真を追加する
2. `src/data/koi-inventory.json` の最後に新しいデータを追加する
3. `id` は重複しないようにする
4. `status` は `販売中` / `商談中` / `売約済み` のいずれかにする
5. ローカルで表示確認する

## 将来の拡張

このJSONは、将来的に次の仕組みに置き換えやすい構成です。

- Googleスプレッドシート連携
- CMS連携
- 管理画面
- iPadからの写真アップロード
- API経由の在庫更新
