import { ContactBand } from "../components/ContactBand";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { koiList } from "../data/koi";

export function AftercarePage() {
  return (
    <>
      <PageHero
        title="アフターフォロー"
        description="購入後の不安や季節ごとの管理もご相談ください。飼育を続ける中での小さな変化に寄り添います。"
        imageUrl={koiList[4].imageUrl}
      />
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Aftercare"
            title="販売後も、状態を見ながら支えます。"
            description="餌の量、水温、水質、病気の兆候、混泳の注意点など、写真や来店相談を通じて現実的な対応をご案内します。"
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["導入直後の確認", "水合わせ後の様子、餌を始める時期、観察ポイントを確認します。"],
              ["体調変化の相談", "食欲低下、泳ぎ方、傷、肌の状態などを写真や状況から伺います。"],
              ["季節管理", "春先、梅雨、夏場、冬場など、水温変化に合わせた管理を提案します。"],
            ].map(([title, text]) => (
              <article key={title} className="rounded-md bg-washi p-7">
                <h3 className="font-serif text-2xl font-semibold">{title}</h3>
                <p className="mt-4 leading-8 text-sumi/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
