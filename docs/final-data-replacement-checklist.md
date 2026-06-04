# 実データ差し替えチェックリスト

公開直前に、仮情報や確認待ちの情報を実データへ差し替えるためのチェックリストです。

## 店舗情報

編集場所:

```text
src/data/site.ts
```

確認項目:

- [ ] 電話番号
- [ ] 郵便番号
- [ ] 住所
- [ ] 営業時間
- [ ] 定休日
- [ ] メールアドレス
- [ ] LINE相談の表記
- [ ] GoogleマップURL
- [ ] Googleマップ埋め込みURL

## 錦鯉在庫

編集場所:

```text
src/data/koi-inventory.json
public/images/live/inventory/
```

確認項目:

- [ ] 品種
- [ ] サイズ
- [ ] 年齢
- [ ] 性別
- [ ] 価格
- [ ] 状態: `販売中` / `商談中` / `売約済み`
- [ ] コメント
- [ ] 受け渡し説明
- [ ] メイン画像
- [ ] ギャラリー画像

確認コマンド:

```bash
npm run validate:inventory
npm run inventory:summary
```

## 写真

編集場所:

```text
public/images/live/site/
public/images/live/services/
public/images/live/inventory/
```

確認項目:

- [ ] トップの錦鯉写真
- [ ] 初めての方向け写真
- [ ] 養殖・販売の写真
- [ ] アフターフォローの写真
- [ ] 池・設備メンテナンスの写真
- [ ] 販売中の錦鯉写真

## ホームのお知らせ

編集場所:

```text
src/data/home-message.ts
```

確認項目:

- [ ] 見出し
- [ ] 本文
- [ ] ボタン文言
- [ ] リンク先

## 事例紹介

編集場所:

```text
src/data/cases.ts
```

確認項目:

- [ ] 仮事例を実際の相談内容へ差し替える
- [ ] 掲載許可を得た写真だけを使う
- [ ] 個人情報や個人宅が特定される内容を避ける
- [ ] 作業内容と対応結果が実態に合っている

## 特定商取引法に基づく表記

編集場所:

```text
src/data/legal.ts
```

確認項目:

- [ ] 運営責任者名
- [ ] 支払い方法
- [ ] 支払い時期
- [ ] 受け渡し方法
- [ ] 配送対応の有無
- [ ] 返品・交換条件
- [ ] 通販対応を行う場合の送料・配送条件

## Netlify / 独自ドメイン

編集場所:

```text
Netlify環境変数
```

設定例:

```text
VITE_SITE_BASE_URL=https://itsukaichi-nishikigoi.co.jp
```

確認項目:

- [ ] `VITE_SITE_BASE_URL` を実際の公開URLにする
- [ ] フォーム送信後に `/thanks` が表示される
- [ ] Netlify Formsに問い合わせが記録される
- [ ] 通知先メールをNetlify管理画面で設定する

## 監査コマンド

仮情報や確認待ち文言の残りを一覧化します。

```bash
npm run audit:launch
```

このコマンドは公開を止めるものではありません。実公開前の確認リストとして使います。
