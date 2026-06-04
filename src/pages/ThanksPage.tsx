import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { koiList } from "../data/koi";
import { siteInfo } from "../data/site";

export function ThanksPage() {
  return (
    <>
      <PageHero
        title="お問い合わせを受け付けました"
        description="内容を確認のうえ、担当者よりご連絡いたします。お急ぎの場合はお電話でもお問い合わせください。"
        imageUrl={koiList[0].imageUrl}
      />
      <section className="py-14 md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <CheckCircle2 className="mx-auto text-urushi" size={48} strokeWidth={1.6} />
          <h2 className="mt-6 font-serif text-3xl font-semibold md:text-4xl">
            送信ありがとうございました。
          </h2>
          <p className="mt-5 text-base leading-8 text-sumi/70">
            在庫状況、来店予約、飼育相談、池・設備メンテナンスの内容を確認し、順次ご連絡いたします。
            お急ぎの場合は {siteInfo.phone} までお電話ください。
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/koi"
              className="rounded-full border border-urushi px-6 py-3 font-semibold text-urushi transition hover:bg-urushi hover:text-white"
            >
              販売中の錦鯉を見る
            </Link>
            <Link
              to="/"
              className="rounded-full bg-urushi px-6 py-3 font-semibold text-white transition hover:bg-sumi"
            >
              トップへ戻る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
