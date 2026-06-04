# 五日市錦鯉センター 国内向けサイト

Vite + React + Tailwind CSSで作成した、五日市錦鯉センターの国内向けホームページです。

公開URL:

```text
https://atsushisora.github.io/itsukaichi-nishikigoi-center/
```

## 起動方法

```bash
npm install
npm run dev
```

## 確認コマンド

```bash
npm run validate:inventory
npm run inventory:summary
npm run check
```

## 在庫更新

在庫データは下記で管理します。

```text
src/data/koi-inventory.json
```

CSVから更新する場合:

```bash
npm run inventory:from-csv -- docs/inventory-csv-template.csv src/data/koi-inventory.json --write
npm run validate:inventory
```

詳しい手順:

- [管理者向け更新手順](./docs/admin-update-workflow.md)
- [在庫データ編集ガイド](./docs/inventory-data-guide.md)
- [写真差し替えチェックリスト](./docs/photo-replacement-checklist.md)
- [Netlify公開ガイド](./docs/netlify-deploy-guide.md)

## 画像の置き場所

```text
public/images/live/site/
public/images/live/inventory/
public/images/live/services/
```

## 公開

GitHub Pagesで公開します。`main` ブランチへpushすると、GitHub Actionsで在庫検証とビルドが実行されます。

問い合わせフォームを実際に受け付ける場合は、Netlify公開を使います。Netlifyでは `VITE_SITE_BASE_URL` に公開URLまたは独自ドメインを設定してください。
