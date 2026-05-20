import { PageHero } from "../components/PageHero";
import { siteInfo } from "../data/site";

export function CommercePage() {
  const rows = [
    ["販売業者", "五日市錦鯉センター"],
    ["運営責任者", "代表者名（仮）"],
    ["所在地", siteInfo.address],
    ["電話番号", siteInfo.phone],
    ["メールアドレス", siteInfo.email],
    ["販売価格", "各商品ページに税込価格を表示します。"],
    ["商品代金以外の必要料金", "配送費、振込手数料等が発生する場合があります。"],
    ["引き渡し時期", "店頭受け渡しまたは個別相談のうえ決定します。"],
    ["返品・交換", "生体のため、原則として返品・交換はお受けできません。状態不良等は速やかにご相談ください。"],
  ];

  return (
    <>
      <PageHero title="特定商取引法に基づく表記" description="通販機能を追加する前提の仮表記です。公開前に実際の販売条件へ差し替えてください。" />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="overflow-hidden rounded-md bg-white shadow-soft">
            {rows.map(([label, value]) => (
              <div key={label} className="grid border-b border-black/10 last:border-0 md:grid-cols-[220px_1fr]">
                <div className="bg-washi px-5 py-4 text-sm font-semibold">{label}</div>
                <div className="px-5 py-4 leading-7 text-sumi/75">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
