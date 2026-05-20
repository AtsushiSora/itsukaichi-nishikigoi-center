import { KoiCard } from "../components/KoiCard";
import { PageHero } from "../components/PageHero";
import { koiList } from "../data/koi";

export function KoiListPage() {
  return (
    <>
      <PageHero
        title="販売中の錦鯉"
        description="掲載情報は仮データです。実際の在庫状況、商談状況、価格、見学予約はお問い合わせください。"
        imageUrl={koiList[1].imageUrl}
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-serif text-3xl font-semibold">在庫一覧</h2>
              <p className="mt-2 text-sm text-sumi/60">
                将来的にはこの一覧をiPad撮影・管理画面から更新できるよう拡張できます。
              </p>
            </div>
            <p className="text-sm text-sumi/60">表示件数: {koiList.length}件</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {koiList.map((koi) => (
              <KoiCard key={koi.id} koi={koi} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
