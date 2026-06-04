# 公開前品質チェック

公開前に確認する項目です。2026-06-04時点では、下記を確認済みです。

## 表示確認

- [x] PC幅でトップページが表示される
- [x] スマホ幅でトップページが表示される
- [x] スマホ幅で横スクロールが発生しない
- [x] ヘッダーのスマホメニューが開閉できる
- [x] 画像が読み込まれる
- [x] 表示内に `undefined` や `NaN` が出ていない

## 主要ページ

- [x] `/`
- [x] `/koi`
- [x] `/koi/koi-001`
- [x] `/about`
- [x] `/aftercare`
- [x] `/maintenance`
- [x] `/cases`
- [x] `/faq`
- [x] `/contact`
- [x] `/privacy`
- [x] `/commerce`

## データ・ビルド確認

- [x] `npm run validate:inventory`
- [x] `npm run inventory:summary`
- [x] `npm run check`
- [x] `GITHUB_PAGES=true npm run build`

## 問い合わせフォーム

- [x] フォームが表示される
- [x] Netlify Forms用のhidden formがある
- [x] `form-name` が `contact` で一致している
- [x] 錦鯉詳細から問い合わせへ遷移した場合、対象IDがhidden項目に入る

## 公開後に再確認する項目

- [ ] GitHub Pagesのトップページ
- [ ] GitHub Pagesの在庫一覧
- [ ] GitHub Pagesの問い合わせページ
- [ ] Netlifyへ公開した場合のフォーム送信テスト
