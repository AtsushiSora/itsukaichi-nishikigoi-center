import { PageHero } from "../components/PageHero";
import { commerceNotice, commerceRows } from "../data/legal";

export function CommercePage() {
  return (
    <>
      <PageHero title="特定商取引法に基づく表記" description="店頭販売・個別相談を前提とした表示です。通販対応を開始する場合は、販売条件に合わせて更新します。" />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="mb-6 rounded-md border border-[#d8c9ab] bg-washi p-5 text-sm leading-7 text-sumi/70">
            {commerceNotice}
          </div>
          <div className="overflow-hidden rounded-md bg-white shadow-soft">
            {commerceRows.map(([label, value]) => (
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
