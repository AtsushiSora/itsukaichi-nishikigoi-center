import { ContactBand } from "../components/ContactBand";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { koiList } from "../data/koi";

export function AboutPage() {
  return (
    <>
      <PageHero
        title="養殖・販売について"
        description="健康状態、体形、品種の特徴、飼育環境を確認しながら、長く楽しめる錦鯉選びをお手伝いします。"
        imageUrl={koiList[3].imageUrl}
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionHeading
            eyebrow="Breeding & Sales"
            title="専門店として、状態を見極めてご案内します。"
            description="品評会向けの個体から、庭池でゆっくり楽しむ一尾まで、目的に合わせた選び方をご提案します。価格だけで判断せず、体形、色、将来性、池との相性を丁寧に説明します。"
          />
          <div className="grid gap-4">
            {[
              ["個体確認", "サイズ、年齢、性別、健康状態、泳ぎ方を確認します。"],
              ["環境確認", "池の大きさ、水量、濾過能力、既存の鯉との相性を伺います。"],
              ["導入提案", "水合わせ、移動方法、導入後の観察ポイントまでご案内します。"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-md border border-black/10 bg-white p-6">
                <h3 className="font-serif text-2xl font-semibold">{title}</h3>
                <p className="mt-3 leading-8 text-sumi/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
