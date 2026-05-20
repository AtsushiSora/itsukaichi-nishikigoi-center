import { ArrowRight, Droplets, HeartHandshake, ShieldCheck, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactBand } from "../components/ContactBand";
import { KoiCard } from "../components/KoiCard";
import { SectionHeading } from "../components/SectionHeading";
import { koiList } from "../data/koi";

const services = [
  {
    title: "養殖・販売",
    description: "品種、体形、池の環境、ご予算を踏まえ、長く楽しめる錦鯉をご提案します。",
    icon: ShieldCheck,
    to: "/about",
  },
  {
    title: "アフターフォロー",
    description: "導入後の餌やり、水質、体調変化まで、専門店として継続的に相談を承ります。",
    icon: HeartHandshake,
    to: "/aftercare",
  },
  {
    title: "池・設備メンテナンス",
    description: "濾過槽、ポンプ、水質、池まわりの点検や改善提案に対応します。",
    icon: Wrench,
    to: "/maintenance",
  },
];

export function HomePage() {
  return (
    <>
      <section className="relative min-h-[82vh] overflow-hidden bg-sumi text-white">
        <img
          src={koiList[0].imageUrl}
          alt="水中を泳ぐ錦鯉"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sumi via-sumi/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-washi to-transparent" />
        <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-center px-5 pb-24 pt-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 border-b border-kin pb-2 text-sm font-semibold tracking-[0.18em] text-kin">
              HIROSHIMA NISHIKIGOI SPECIALIST
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-tight md:text-7xl">
              美しい錦鯉を、
              <br />
              未来へつなぐ。
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-9 text-white/85">
              確かな養殖・販売と、安心のアフターフォローを。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/koi"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-urushi px-6 py-3 font-semibold text-white transition hover:bg-kin hover:text-sumi"
              >
                販売中の錦鯉を見る
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 font-semibold text-white transition hover:border-kin hover:text-kin"
              >
                相談・来店予約
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Stock"
              title="販売中の錦鯉"
              description="掲載価格や状態は仮データです。実際の在庫、商談状況、見学可否はお問い合わせください。"
            />
            <Link
              to="/koi"
              className="inline-flex items-center gap-2 self-start rounded-full border border-urushi px-5 py-3 text-sm font-semibold text-urushi transition hover:bg-urushi hover:text-white"
            >
              一覧を見る
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {koiList.slice(0, 4).map((koi) => (
              <KoiCard key={koi.id} koi={koi} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Service"
            title="錦鯉と池を、長く美しく保つために。"
            description="販売して終わりではなく、飼育環境や季節ごとの管理まで見据えてサポートします。"
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.to}
                className="group rounded-md border border-black/10 bg-washi p-8 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <service.icon className="text-urushi" size={34} />
                <h3 className="mt-8 font-serif text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-8 text-sumi/70">{service.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-urushi">
                  詳しく見る <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div className="relative">
            <img
              src={koiList[2].imageUrl}
              alt="池で泳ぐ錦鯉"
              className="aspect-[4/5] w-full rounded-md object-cover shadow-soft"
            />
            <div className="absolute -bottom-6 -right-4 hidden rounded-md bg-sumi p-6 text-white shadow-soft md:block">
              <Droplets className="text-kin" />
              <p className="mt-3 max-w-[220px] text-sm leading-7 text-white/75">
                水質、餌、池の規模まで、はじめの一歩から相談できます。
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Beginner Guide"
              title="初めての方にも、わかりやすく。"
              description="錦鯉は、品種や価格だけでなく、池の環境、飼育目的、将来の成長まで含めて選ぶことが大切です。五日市錦鯉センターでは、初心者の方にも無理のない導入方法をご案内します。"
            />
            <div className="mt-8 grid gap-4">
              {["池の広さや濾過設備に合う個体選び", "導入前後の水合わせや体調確認", "季節に合わせた餌やり・水質管理"].map((item) => (
                <div key={item} className="border-l-4 border-kin bg-white px-5 py-4 text-sumi/75">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
