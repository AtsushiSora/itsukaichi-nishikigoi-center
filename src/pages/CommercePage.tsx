import { PageHero } from "../components/PageHero";
import { siteInfo } from "../data/site";

export function CommercePage() {
  const rows = [
    ["販売業者", siteInfo.name],
    ["運営責任者", "公開前に正式な責任者名へ差し替えてください"],
    ["所在地", `〒${siteInfo.postalCode} ${siteInfo.address}`],
    ["電話番号", siteInfo.phone],
    ["メールアドレス", siteInfo.email],
    ["営業時間・定休日", `${siteInfo.hours}。${siteInfo.closedDays}`],
    ["販売価格", "各錦鯉の詳細ページに税込価格を表示します。掲載価格は在庫状況、状態、商談状況により変更となる場合があります。"],
    ["商品代金以外の必要料金", "店頭受け渡し以外の対応を行う場合、配送費、梱包費、振込手数料、設置・メンテナンス費等が発生する場合があります。事前に個別見積もりでご案内します。"],
    ["お支払い方法", "現時点では店頭または個別相談での対応を前提としています。振込等に対応する場合は、ご相談時にご案内します。"],
    ["お支払い時期", "お支払い方法、受け渡し方法、商談内容に応じて個別にご案内します。"],
    ["引き渡し時期", "店頭で状態をご確認いただいたうえでの受け渡し、または個別相談のうえ決定します。生体の状態や天候、移動条件により調整する場合があります。"],
    ["返品・交換", "錦鯉は生体のため、原則としてお客様都合による返品・交換はお受けできません。受け渡し時の状態確認をお願いします。状態不良等がある場合は速やかにご相談ください。"],
    ["通販について", "現在、このサイト上でのカート決済・自動注文受付は行っていません。通信販売や配送対応を開始する場合は、送料、支払方法、引渡時期、返品条件、最終確認画面等を整備したうえで本ページを更新します。"],
    ["申込みの有効期限", "在庫は生体のため変動します。商談中・売約済みとなる場合がありますので、購入を希望される場合は事前にお問い合わせください。"],
  ];

  return (
    <>
      <PageHero title="特定商取引法に基づく表記" description="店頭販売・個別相談を前提とした表示です。通販対応を開始する場合は、販売条件に合わせて更新します。" />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="mb-6 rounded-md border border-[#d8c9ab] bg-washi p-5 text-sm leading-7 text-sumi/70">
            本ページは、公開前に実際の運用内容、責任者名、支払方法、配送対応の有無を確認したうえで最終確定してください。
          </div>
          <div className="overflow-hidden rounded-md bg-white shadow-soft">
            {rows.map(([label, value]) => (
              <div key={label} className="grid border-b border-black/10 last:border-0 md:grid-cols-[220px_1fr]">
                <div className="bg-washi px-5 py-4 text-sm font-semibold">{label}</div>
                <div className="break-words px-5 py-4 leading-7 text-sumi/75">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
