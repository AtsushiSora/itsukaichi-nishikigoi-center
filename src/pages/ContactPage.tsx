import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { koiList } from "../data/koi";
import { siteInfo } from "../data/site";

export function ContactPage() {
  return (
    <>
      <PageHero
        title="お問い合わせ・アクセス"
        description="在庫確認、来店予約、飼育相談、池や設備のメンテナンス相談はこちらからご連絡ください。"
        imageUrl={koiList[0].imageUrl}
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Phone, title: "電話", value: siteInfo.phone },
                { icon: MessageCircle, title: "LINE相談", value: siteInfo.lineLabel },
                { icon: Mail, title: "メール", value: siteInfo.email },
                { icon: MapPin, title: "住所", value: siteInfo.address },
              ].map((item) => (
                <div key={item.title} className="rounded-md border border-black/10 bg-white p-6">
                  <item.icon className="text-urushi" size={24} />
                  <p className="mt-4 text-sm text-sumi/50">{item.title}</p>
                  <p className="mt-1 font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="overflow-hidden rounded-md border border-black/10 bg-white shadow-sm">
              <iframe
                title="五日市錦鯉センター 周辺地図"
                src={siteInfo.mapEmbedUrl}
                className="aspect-[4/3] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex items-center justify-between gap-4 p-4 text-sm">
                <span className="text-sumi/65">住所は仮データです。公開前に差し替えてください。</span>
                <a href={siteInfo.mapUrl} className="shrink-0 font-semibold text-urushi">
                  地図を開く
                </a>
              </div>
            </div>
          </div>

          <form className="rounded-md bg-white p-6 shadow-soft md:p-8">
            <h2 className="font-serif text-3xl font-semibold">問い合わせフォーム</h2>
            <p className="mt-3 text-sm leading-7 text-sumi/60">
              現時点では仮フォームです。Netlify Formsや外部フォームに差し替えできます。
            </p>
            <div className="mt-8 grid gap-5">
              <label className="grid gap-2 text-sm font-semibold">
                お名前
                <input className="rounded-md border border-black/15 px-4 py-3 font-normal outline-none focus:border-urushi" placeholder="山田 太郎" />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                電話番号・メールアドレス
                <input className="rounded-md border border-black/15 px-4 py-3 font-normal outline-none focus:border-urushi" placeholder="090-0000-0000 / example@mail.com" />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                ご相談内容
                <select className="rounded-md border border-black/15 px-4 py-3 font-normal outline-none focus:border-urushi">
                  <option>錦鯉の購入相談</option>
                  <option>来店予約</option>
                  <option>アフターフォロー</option>
                  <option>池・設備メンテナンス</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                詳細
                <textarea className="min-h-36 rounded-md border border-black/15 px-4 py-3 font-normal outline-none focus:border-urushi" placeholder="気になる錦鯉のID、池の状況、来店希望日などをご記入ください。" />
              </label>
              <button type="button" className="rounded-full bg-urushi px-6 py-3 font-semibold text-white transition hover:bg-sumi">
                送信内容を確認する
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
