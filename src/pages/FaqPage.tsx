import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { koiList } from "../data/koi";

const faqSections = [
  {
    title: "初めて購入する方へ",
    items: [
      {
        question: "初めてでも錦鯉を飼えますか？",
        answer:
          "池の大きさ、水量、濾過設備、飼育経験に合わせて無理のない一尾をご提案します。初めての方は、事前に池の写真や設備状況をお知らせいただくと相談がスムーズです。",
      },
      {
        question: "どの品種を選べばよいかわかりません。",
        answer:
          "見た目の好みだけでなく、体形、サイズ、性格、池での見え方、将来の成長も含めてご案内します。迷われる場合は、複数の個体を比較しながらご相談ください。",
      },
      {
        question: "来店前に予約は必要ですか？",
        answer:
          "在庫状況や対応可能な時間が変わるため、来店前のお電話またはお問い合わせをおすすめしています。気になる錦鯉の管理IDがある場合はあわせてお知らせください。",
      },
    ],
  },
  {
    title: "飼育方法について",
    items: [
      {
        question: "餌はどのくらい与えればよいですか？",
        answer:
          "水温、季節、錦鯉のサイズ、池の状態によって量を調整します。食べ残しは水質悪化につながるため、短時間で食べきれる量を目安にしてください。",
      },
      {
        question: "冬場も餌を与えますか？",
        answer:
          "水温が低い時期は錦鯉の消化能力が落ちます。水温や個体の状態を見ながら給餌量を減らす、または控える必要があります。",
      },
      {
        question: "体調が悪そうなときはどうすればよいですか？",
        answer:
          "泳ぎ方、食欲、体表の変化、水質、直近の水替えや投薬履歴を確認します。早めに写真や動画を添えてご相談ください。",
      },
    ],
  },
  {
    title: "池・水質・設備について",
    items: [
      {
        question: "錦鯉を飼うにはどのくらいの池が必要ですか？",
        answer:
          "飼育できる数やサイズは、水量、濾過能力、酸素供給、日当たり、管理頻度によって変わります。池の環境を確認したうえでご提案します。",
      },
      {
        question: "濾過槽やポンプの相談もできますか？",
        answer:
          "はい。濾過槽、ポンプ、水流、エアレーション、水質管理など、池・設備メンテナンスの相談に対応します。",
      },
      {
        question: "水が濁る原因は何ですか？",
        answer:
          "給餌量、濾過能力不足、日照、底の汚れ、水替え頻度、魚の数など複数の要因があります。状況を確認しながら原因を切り分けます。",
      },
    ],
  },
  {
    title: "購入後の相談について",
    items: [
      {
        question: "購入後も相談できますか？",
        answer:
          "はい。餌やり、水合わせ、池への導入、水質、体調変化など、購入後のアフターフォローも承ります。",
      },
      {
        question: "池に入れるときの注意点はありますか？",
        answer:
          "水温差や水質差が大きい場合、錦鯉に負担がかかります。導入前の水合わせや観察方法について、受け渡し時にご案内します。",
      },
      {
        question: "他店で購入した錦鯉や池の相談もできますか？",
        answer:
          "内容により対応可能です。池の状態、設備、錦鯉の様子がわかる写真や動画をご用意ください。",
      },
    ],
  },
  {
    title: "配送・受け渡しについて",
    items: [
      {
        question: "配送はできますか？",
        answer:
          "現時点では店頭確認または個別相談を前提としています。配送が必要な場合は、生体の状態、距離、時期、梱包方法を確認したうえでご相談します。",
      },
      {
        question: "支払い方法は何がありますか？",
        answer:
          "現時点では店頭または個別相談での対応を前提としています。正式な支払い方法は購入前にご確認ください。",
      },
      {
        question: "売約済みの個体と同じような錦鯉を探せますか？",
        answer:
          "品種、サイズ、価格帯、雰囲気をお聞きし、近い条件の個体をご案内できる場合があります。売約済み個体の管理IDをお知らせください。",
      },
    ],
  },
];

export function FaqPage() {
  return (
    <>
      <PageHero
        title="よくある質問"
        description="初めての購入、飼育方法、池の管理、購入後の相談、受け渡しについてよくある質問をまとめました。"
        imageUrl={koiList[2].imageUrl}
      />
      <section className="py-14 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[280px_1fr] lg:px-8">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-md border border-[#d8c9ab] bg-washi p-5">
              <p className="font-serif text-xl font-semibold">質問カテゴリ</p>
              <div className="mt-4 grid gap-2 text-sm">
                {faqSections.map((section) => (
                  <a key={section.title} href={`#${section.title}`} className="text-sumi/70 hover:text-urushi">
                    {section.title}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="grid gap-8">
            {faqSections.map((section) => (
              <section key={section.title} id={section.title} className="scroll-mt-28">
                <h2 className="font-serif text-3xl font-semibold">{section.title}</h2>
                <div className="mt-5 overflow-hidden rounded-md border border-black/10 bg-white shadow-[0_12px_34px_rgba(18,18,18,0.07)]">
                  {section.items.map((item) => (
                    <details key={item.question} className="group border-b border-black/10 last:border-0">
                      <summary className="cursor-pointer list-none px-5 py-5 font-semibold transition hover:bg-washi">
                        <span className="grid grid-cols-[24px_1fr_20px] items-center gap-3">
                          <span className="font-serif text-urushi">Q</span>
                          <span>{item.question}</span>
                          <span className="text-xl leading-none text-urushi transition group-open:rotate-45">+</span>
                        </span>
                      </summary>
                      <div className="px-5 pb-5 text-sm leading-7 text-sumi/70">
                        <span className="mr-2 font-serif font-semibold text-kin">A</span>
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}

            <div className="rounded-md bg-sumi p-6 text-white md:p-8">
              <h2 className="font-serif text-2xl font-semibold">解決しない場合はご相談ください</h2>
              <p className="mt-3 text-sm leading-7 text-white/75">
                錦鯉や池の状態は環境によって異なります。写真や動画、池の設備状況を添えてご相談いただくと、より具体的にご案内できます。
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex rounded-full bg-urushi px-6 py-3 font-semibold text-white transition hover:bg-kin hover:text-sumi"
              >
                お問い合わせへ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
