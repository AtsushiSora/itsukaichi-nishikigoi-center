import {
  ArrowRight,
  HeartHandshake,
  Home,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import { KoiCard } from "../components/KoiCard";
import { koiList } from "../data/koi";
import { siteInfo } from "../data/site";

const services = [
  {
    title: "養殖・販売",
    description: "品種、体形、池の環境、ご予算を踏まえ、長く楽しめる錦鯉をご提案します。",
    icon: ShieldCheck,
    image: koiList[0].imageUrl,
    to: "/about",
  },
  {
    title: "アフターフォロー",
    description: "導入後の餌やり、水質、体調変化まで、専門店として継続的に相談を承ります。",
    icon: HeartHandshake,
    image: koiList[1].imageUrl,
    to: "/aftercare",
  },
  {
    title: "池・設備メンテナンス",
    description: "濾過槽、ポンプ、水質、池まわりの点検や改善提案に対応します。",
    icon: Wrench,
    image: koiList[5].imageUrl,
    to: "/maintenance",
  },
];

export function HomePage() {
  return (
    <>
      <section className="relative min-h-[320px] overflow-hidden bg-sumi text-white md:min-h-[360px]">
        <img
          src={koiList[2].imageUrl}
          alt="水中を泳ぐ錦鯉"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sumi via-sumi/70 to-sumi/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_48%,transparent_0,rgba(18,18,18,0.12)_32%,rgba(18,18,18,0.72)_100%)]" />
        <div className="relative mx-auto flex min-h-[320px] max-w-[1380px] items-center px-5 py-12 md:min-h-[360px] lg:px-8">
          <div className="max-w-[560px]">
            <h1 className="font-serif text-4xl font-semibold leading-[1.32] md:text-[46px]">
              美しい錦鯉を、
              <br />
              未来へつなぐ。
            </h1>
            <p className="mt-5 border-b border-kin pb-4 font-serif text-xl font-semibold leading-8 text-white/95">
              確かな養殖・販売と、安心のアフターフォローを。
            </p>
            <p className="mt-6 max-w-md text-sm leading-8 text-white/85">
              五日市錦鯉センターは、丁寧な養殖と確かな目利きで、皆さまの錦鯉ライフをトータルに支えます。
            </p>
          </div>
          <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
            <p className="vertical-label font-serif text-2xl font-semibold leading-relaxed text-kin">
              品質本位
            </p>
            <span className="border border-urushi px-2 py-1 font-serif text-sm text-urushi">
              錦鯉
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 md:py-10">
        <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
          <div className="mb-6 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <span className="h-px bg-transparent" />
            <div className="text-center">
              <h2 className="font-serif text-3xl font-semibold">販売中の錦鯉</h2>
              <span className="mx-auto mt-2 block h-0.5 w-16 bg-urushi" />
            </div>
            <Link
              to="/koi"
              className="hidden justify-self-end rounded-md border border-[#8f7e65] px-5 py-2 text-sm font-semibold text-sumi transition hover:bg-urushi hover:text-white md:inline-flex"
            >
              一覧を見る
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {koiList.slice(0, 4).map((koi) => (
              <KoiCard key={koi.id} koi={koi} showInquiry={false} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-8">
        <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
          <div className="mb-5 text-center">
            <h2 className="font-serif text-3xl font-semibold">私たちのサービス</h2>
            <span className="mx-auto mt-2 block h-0.5 w-16 bg-kin" />
          </div>
          <div className="grid gap-7 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.to}
                className="group grid min-h-[122px] grid-cols-[48px_minmax(0,1fr)_108px] items-center gap-4 rounded-md border border-[#d8c9ab] bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-soft max-lg:grid-cols-[52px_1fr]"
              >
                <service.icon className="text-kin" size={40} strokeWidth={1.7} />
                <div className="min-w-0">
                  <h3 className="font-serif text-lg font-semibold leading-6">{service.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-sumi/70">{service.description}</p>
                </div>
                <img
                  src={service.image}
                  alt=""
                  className="h-24 w-full rounded-sm object-cover max-lg:hidden"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="brush-panel py-0 text-white">
        <div className="mx-auto grid max-w-[1380px] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[210px] overflow-hidden px-5 py-9 lg:px-8">
            <img
              src={koiList[2].imageUrl}
              alt="池で泳ぐ錦鯉"
              className="absolute inset-0 h-full w-full object-cover opacity-35"
            />
            <div className="relative ml-auto max-w-2xl">
              <h2 className="font-serif text-2xl font-semibold md:text-3xl">
                はじめての方も、安心してご相談ください。
              </h2>
              <p className="mt-4 text-sm leading-8 text-white/82">
                錦鯉は一匹一匹が個性を持つ生き物です。五日市錦鯉センターでは、初心者の方から愛好家の方まで、経験豊富なスタッフが丁寧にサポートいたします。
              </p>
            </div>
          </div>
          <div className="bg-white px-5 py-8 text-sumi lg:px-8">
            <div className="rounded-md border border-[#d8c9ab] bg-white p-6 shadow-soft">
              <div className="border-b border-black/10 pb-4 text-center">
                <h2 className="font-serif text-2xl font-semibold">お問い合わせ</h2>
                <p className="mt-1 text-sm text-sumi/65">ご相談・ご質問などお気軽にご連絡ください。</p>
              </div>
              <div className="mt-5 grid gap-5 md:grid-cols-3">
                <a href={`tel:${siteInfo.phone}`} className="text-center">
                  <Phone className="mx-auto text-sumi" size={30} />
                  <p className="mt-2 text-xs text-sumi/60">お電話でのお問い合わせ</p>
                  <p className="mt-1 text-xl font-semibold">{siteInfo.phone}</p>
                  <p className="mt-1 text-xs text-sumi/60">{siteInfo.hours}</p>
                </a>
                <Link to="/contact" className="border-y border-black/10 py-4 text-center md:border-x md:border-y-0 md:py-0">
                  <span className="mx-auto grid h-9 w-9 place-items-center rounded-md bg-[#09b900] text-xs font-bold text-white">
                    LINE
                  </span>
                  <p className="mt-2 font-semibold">LINEで相談する</p>
                  <p className="mt-1 text-xs leading-5 text-sumi/60">友だち追加でお気軽にご相談</p>
                </Link>
                <Link to="/contact" className="text-center">
                  <Home className="mx-auto text-kin" size={34} />
                  <p className="mt-2 font-semibold">来店相談のご予約</p>
                  <p className="mt-1 text-xs leading-5 text-sumi/60">ご来店前にご予約いただけます</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
