import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { KoiCard } from "../components/KoiCard";
import { PageHero } from "../components/PageHero";
import { koiList, type KoiStatus } from "../data/koi";

type SortKey = "recommended" | "priceAsc" | "priceDesc" | "sizeDesc";

const statusFilters: Array<"すべて" | KoiStatus> = ["すべて", "販売中", "商談中", "売約済み"];

const priceNumber = (price: string) => Number(price.replace(/[^\d]/g, ""));
const sizeNumber = (size: string) => Number(size.replace(/[^\d]/g, ""));

export function KoiListPage() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"すべて" | KoiStatus>("すべて");
  const [sortKey, setSortKey] = useState<SortKey>("recommended");

  const filteredKoi = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return [...koiList]
      .filter((koi) => {
        const matchesStatus = status === "すべて" || koi.status === status;
        const matchesQuery =
          normalizedQuery.length === 0 ||
          [koi.id, koi.variety, koi.size, koi.age, koi.sex, koi.comment]
            .join(" ")
            .toLowerCase()
            .includes(normalizedQuery);

        return matchesStatus && matchesQuery;
      })
      .sort((a, b) => {
        if (sortKey === "priceAsc") return priceNumber(a.price) - priceNumber(b.price);
        if (sortKey === "priceDesc") return priceNumber(b.price) - priceNumber(a.price);
        if (sortKey === "sizeDesc") return sizeNumber(b.size) - sizeNumber(a.size);
        return koiList.findIndex((koi) => koi.id === a.id) - koiList.findIndex((koi) => koi.id === b.id);
      });
  }, [query, sortKey, status]);

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
            <p className="text-sm text-sumi/60">
              表示件数: {filteredKoi.length} / {koiList.length}件
            </p>
          </div>

          <div className="mb-8 grid gap-4 rounded-md border border-[#d8c9ab] bg-washi p-4 md:grid-cols-[1.2fr_1fr_1fr] md:items-end">
            <label className="grid gap-2 text-sm font-semibold">
              <span className="inline-flex items-center gap-2">
                <Search size={16} className="text-urushi" />
                キーワード検索
              </span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="rounded-md border border-black/15 bg-white px-4 py-3 font-normal outline-none transition focus:border-urushi focus:ring-2 focus:ring-urushi/10"
                placeholder="品種・サイズ・管理IDで検索"
              />
            </label>

            <div className="grid gap-2 text-sm font-semibold">
              <span className="inline-flex items-center gap-2">
                <SlidersHorizontal size={16} className="text-urushi" />
                状態
              </span>
              <div className="grid grid-cols-2 gap-2">
                {statusFilters.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setStatus(item)}
                    className={`rounded-md border px-3 py-2 text-sm transition ${
                      status === item
                        ? "border-urushi bg-urushi text-white"
                        : "border-black/10 bg-white text-sumi hover:border-urushi"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <label className="grid gap-2 text-sm font-semibold">
              並び替え
              <select
                value={sortKey}
                onChange={(event) => setSortKey(event.target.value as SortKey)}
                className="rounded-md border border-black/15 bg-white px-4 py-3 font-normal outline-none transition focus:border-urushi focus:ring-2 focus:ring-urushi/10"
              >
                <option value="recommended">おすすめ順</option>
                <option value="priceAsc">価格が安い順</option>
                <option value="priceDesc">価格が高い順</option>
                <option value="sizeDesc">サイズが大きい順</option>
              </select>
            </label>
          </div>

          {filteredKoi.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredKoi.map((koi) => (
                <KoiCard key={koi.id} koi={koi} />
              ))}
            </div>
          ) : (
            <div className="rounded-md border border-dashed border-black/20 bg-white px-6 py-14 text-center">
              <p className="font-serif text-2xl font-semibold">条件に合う錦鯉が見つかりません</p>
              <p className="mt-3 text-sm text-sumi/60">検索語や状態を変更して再度お試しください。</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
