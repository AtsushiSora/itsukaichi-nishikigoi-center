import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { koiList } from "../data/koi";
import { siteInfo } from "../data/site";

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const initialKoiId = searchParams.get("koi") ?? "";
  const selectedKoi = useMemo(
    () => koiList.find((koi) => koi.id === initialKoiId),
    [initialKoiId],
  );
  const [consultationType, setConsultationType] = useState(
    selectedKoi ? "錦鯉の購入相談" : "来店予約",
  );
  const [message, setMessage] = useState(
    selectedKoi
      ? `${selectedKoi.variety}（${selectedKoi.id} / ${selectedKoi.size}）について相談したいです。`
      : "",
  );

  return (
    <>
      <PageHero
        title="お問い合わせ・アクセス"
        description="在庫確認、来店予約、飼育相談、池や設備のメンテナンス相談はこちらからご連絡ください。"
        imageUrl={koiList[0].imageUrl}
      />
      <section className="py-14 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Phone, title: "電話", value: siteInfo.phone },
                { icon: MessageCircle, title: "LINE相談", value: siteInfo.lineLabel },
                { icon: Mail, title: "メール", value: siteInfo.email },
                { icon: MapPin, title: "住所", value: `〒${siteInfo.postalCode} ${siteInfo.address}` },
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
                className="h-56 w-full sm:aspect-[4/3] sm:h-auto"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex flex-col items-start justify-between gap-3 p-4 text-sm sm:flex-row sm:items-center">
                <span className="text-sumi/65">ご来店前にお電話で在庫状況と受付時間をご確認ください。</span>
                <a href={siteInfo.mapUrl} className="shrink-0 font-semibold text-urushi">
                  地図を開く
                </a>
              </div>
            </div>
          </div>

          <form
            name="contact"
            method="POST"
            action={`${import.meta.env.BASE_URL}thanks`}
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="rounded-md bg-white p-5 shadow-soft md:p-8"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="subject" value="五日市錦鯉センター お問い合わせ" />
            <input type="hidden" name="koiId" value={selectedKoi?.id ?? ""} />
            <input type="hidden" name="koiVariety" value={selectedKoi?.variety ?? ""} />
            <p className="hidden">
              <label>
                入力しないでください
                <input name="bot-field" />
              </label>
            </p>
            <h2 className="font-serif text-3xl font-semibold">問い合わせフォーム</h2>
            <p className="mt-3 text-sm leading-7 text-sumi/60">
              Netlifyで公開すると送信内容を管理画面で確認できます。GitHub Pagesでは表示確認用です。
            </p>
            {selectedKoi && (
              <div className="mt-6 grid grid-cols-[88px_1fr] gap-4 rounded-md border border-[#d8c9ab] bg-washi p-4">
                <img
                  src={selectedKoi.imageUrl}
                  alt={`${selectedKoi.variety} ${selectedKoi.size}`}
                  className="aspect-square rounded-sm object-cover"
                />
                <div>
                  <p className="text-xs font-semibold tracking-[0.16em] text-urushi">相談中の錦鯉</p>
                  <p className="mt-1 font-serif text-xl font-semibold">{selectedKoi.variety}</p>
                  <p className="mt-1 text-sm text-sumi/65">
                    {selectedKoi.id} / {selectedKoi.size} / {selectedKoi.status}
                  </p>
                </div>
              </div>
            )}
            <div className="mt-8 grid gap-5">
              <label className="grid gap-2 text-sm font-semibold">
                お名前
                <input
                  name="name"
                  required
                  className="rounded-md border border-black/15 px-4 py-3 font-normal outline-none focus:border-urushi"
                  placeholder="山田 太郎"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                電話番号・メールアドレス
                <input
                  name="contact"
                  required
                  className="rounded-md border border-black/15 px-4 py-3 font-normal outline-none focus:border-urushi"
                  placeholder="090-0000-0000 / example@mail.com"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                ご相談内容
                <select
                  name="consultationType"
                  value={consultationType}
                  onChange={(event) => setConsultationType(event.target.value)}
                  className="rounded-md border border-black/15 px-4 py-3 font-normal outline-none focus:border-urushi"
                >
                  <option>錦鯉の購入相談</option>
                  <option>来店予約</option>
                  <option>アフターフォロー</option>
                  <option>池・設備メンテナンス</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                詳細
                <textarea
                  name="message"
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="min-h-36 rounded-md border border-black/15 px-4 py-3 font-normal outline-none focus:border-urushi"
                  placeholder="気になる錦鯉のID、池の状況、来店希望日などをご記入ください。"
                />
              </label>
              <button type="submit" className="rounded-full bg-urushi px-6 py-3 font-semibold text-white transition hover:bg-sumi">
                問い合わせを送信する
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
