import { ContactBand } from "../components/ContactBand";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { koiList } from "../data/koi";

export function MaintenancePage() {
  return (
    <>
      <PageHero
        title="池・設備メンテナンス"
        description="池、水質、濾過設備、ポンプまわりの状態を確認し、錦鯉が健康に泳げる環境づくりを支援します。"
        imageUrl={koiList[5].imageUrl}
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1fr] lg:items-start lg:px-8">
          <SectionHeading
            eyebrow="Maintenance"
            title="池の状態に合わせた、無理のない改善を。"
            description="濾過不足、水質悪化、ポンプの劣化、餌やり量の見直しなど、問題の原因を切り分けながら対応します。"
          />
          <div className="rounded-md bg-sumi p-8 text-white">
            <h3 className="font-serif text-2xl font-semibold">対応例</h3>
            <ul className="mt-6 grid gap-4 text-white/75">
              <li>濾過槽・ポンプ・配管の点検</li>
              <li>池の水質確認と改善提案</li>
              <li>飼育数と水量のバランス確認</li>
              <li>季節ごとの清掃・水替え相談</li>
              <li>新規池づくり、設備追加の相談</li>
            </ul>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
