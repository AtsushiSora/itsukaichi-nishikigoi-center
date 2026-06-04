import { ArrowRight, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { caseStudies } from "../data/cases";
import { koiList } from "../data/koi";

const categories = Array.from(new Set(caseStudies.map((caseStudy) => caseStudy.category)));

export function CasesPage() {
  return (
    <>
      <PageHero
        title="事例紹介"
        description="池のメンテナンス、錦鯉の導入相談、購入後のアフターフォローなど、相談内容の例をご紹介します。"
        imageUrl={koiList[3].imageUrl}
      />

      <section className="py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
            <aside className="lg:pt-2">
              <div className="rounded-md border border-[#d8c9ab] bg-washi p-6">
                <p className="text-sm font-semibold tracking-[0.16em] text-urushi">CASE STUDY</p>
                <h2 className="mt-3 font-serif text-3xl font-semibold">相談内容のイメージ</h2>
                <p className="mt-4 text-sm leading-7 text-sumi/70">
                  現在は仮事例です。実際の写真やお客様の許可を得た内容に差し替えることで、事例ページとして運用できます。
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <a
                      key={category}
                      href={`#${category}`}
                      className="rounded-full border border-[#cdbd9d] bg-white px-3 py-1.5 text-xs font-semibold text-sumi transition hover:border-urushi hover:text-urushi"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            <div className="grid gap-8">
              {caseStudies.map((caseStudy) => (
                <article
                  key={caseStudy.id}
                  id={caseStudy.category}
                  className="scroll-mt-28 overflow-hidden rounded-md border border-black/10 bg-white shadow-[0_16px_45px_rgba(18,18,18,0.08)]"
                >
                  <div className="grid md:grid-cols-[0.92fr_1.08fr]">
                    <div className="relative min-h-64 overflow-hidden bg-mizu/10">
                      <img
                        src={caseStudy.imageUrl}
                        alt=""
                        className="h-full w-full object-cover transition duration-700 hover:scale-105"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-semibold text-urushi shadow-sm">
                        {caseStudy.category}
                      </span>
                    </div>
                    <div className="p-6 md:p-8">
                      <p className="text-xs font-semibold tracking-[0.16em] text-kin">{caseStudy.id}</p>
                      <h3 className="mt-2 font-serif text-2xl font-semibold md:text-3xl">{caseStudy.title}</h3>
                      <p className="mt-4 leading-8 text-sumi/70">{caseStudy.summary}</p>

                      <dl className="mt-6 grid gap-4">
                        {[
                          ["相談内容", caseStudy.challenge],
                          ["対応", caseStudy.response],
                          ["結果", caseStudy.result],
                        ].map(([label, text]) => (
                          <div key={label} className="grid gap-2 border-t border-black/10 pt-4 md:grid-cols-[92px_1fr]">
                            <dt className="inline-flex items-center gap-2 text-sm font-semibold text-urushi">
                              <BadgeCheck size={16} />
                              {label}
                            </dt>
                            <dd className="text-sm leading-7 text-sumi/70">{text}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-md bg-sumi p-6 text-white md:p-8">
            <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="font-serif text-2xl font-semibold">池や錦鯉の状態に合わせてご相談ください</h2>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  写真、動画、池の大きさ、濾過設備、気になる症状を添えていただくと、状況を整理しやすくなります。
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-urushi px-6 py-3 font-semibold text-white transition hover:bg-kin hover:text-sumi"
              >
                相談する
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
