# Netlify公開ガイド

Netlifyで公開する場合の設定メモです。GitHub Pagesとは別に、問い合わせフォームを実際に受け付けたい場合はNetlify公開を使います。

## 基本設定

Netlifyのサイト作成時に、下記を設定します。

```text
Build command: npm run build
Publish directory: dist
```

`netlify.toml` にも同じ設定を入れています。

## フォーム

問い合わせフォームはNetlify Forms用に設定済みです。

- React側のフォーム名: `contact`
- 静的検出用ファイル: `public/__forms.html`
- 送信後ページ: `/thanks`
- honeypot項目: `bot-field`

Netlify管理画面でFormsが有効になっていることを確認してください。送信テスト後、NetlifyのForms画面に投稿が表示されれば動作しています。

## canonical URL

独自ドメインやNetlifyのURLで公開する場合は、環境変数を設定します。

```text
VITE_SITE_BASE_URL=https://example.com
```

末尾の `/` は付けなくて構いません。

例:

```text
VITE_SITE_BASE_URL=https://itsukaichi-nishikigoi.co.jp
```

この値はcanonical URL、OG URL、JSON-LDのURLに使われます。

## SPAリダイレクト

React Routerの直接アクセスに対応するため、`netlify.toml` に下記を設定済みです。

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

これにより、`/koi/koi-001` や `/contact` を直接開いてもサイトが表示されます。

## 公開前チェック

```bash
npm run validate:inventory
npm run check
```

Netlifyに公開した後は、下記を確認します。

- トップページが表示される
- `/koi` が表示される
- `/koi/koi-001` を直接開ける
- `/contact` からフォーム送信できる
- 送信後に `/thanks` が表示される
- Netlify管理画面のFormsに投稿が入る
