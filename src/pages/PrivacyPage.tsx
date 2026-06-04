import { PageHero } from "../components/PageHero";
import { siteInfo } from "../data/site";

export function PrivacyPage() {
  return (
    <>
      <PageHero title="プライバシーポリシー" description="お問い合わせ・来店相談・アフターフォローに伴う個人情報の取り扱いについて定めます。" />
      <LegalContent
        items={[
          [
            "取得する情報",
            "当サイトでは、お問い合わせフォーム、電話、LINE相談、来店予約等を通じて、お名前、電話番号、メールアドレス、ご相談内容、購入を検討されている錦鯉の情報等を取得する場合があります。",
          ],
          [
            "利用目的",
            "取得した情報は、お問い合わせへの回答、来店予約の調整、錦鯉の販売相談、アフターフォロー、池・設備メンテナンスの相談対応、必要な連絡のために利用します。",
          ],
          [
            "第三者提供",
            "法令に基づく場合、または配送・メンテナンス等で業務上必要な範囲で委託先に共有する場合を除き、ご本人の同意なく第三者へ提供しません。",
          ],
          [
            "安全管理",
            "取得した情報は漏えい、滅失、毀損等を防ぐため、必要かつ適切な範囲で管理します。不要となった情報は、確認のうえ適切な方法で削除します。",
          ],
          [
            "Cookie・アクセス解析",
            "現時点では広告配信、AdSense、アフィリエイト目的のCookieは使用していません。アクセス解析等を導入する場合は、利用目的と使用するサービスを本ページに追記します。",
          ],
          [
            "開示・訂正・削除等",
            "ご本人から個人情報の開示、訂正、利用停止、削除等のご希望があった場合は、本人確認のうえ、法令に従い適切に対応します。",
          ],
          [
            "お問い合わせ窓口",
            `個人情報の取り扱いに関するお問い合わせは、${siteInfo.name}（TEL ${siteInfo.phone}）またはお問い合わせフォームよりご連絡ください。`,
          ],
          [
            "改定",
            "本ポリシーは、法令変更や運用内容の変更に応じて改定する場合があります。改定後の内容は当サイトに掲載した時点で適用されます。",
          ],
        ]}
      />
    </>
  );
}

function LegalContent({ items }: { items: string[][] }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="rounded-md bg-white p-6 shadow-soft md:p-10">
          {items.map(([title, text]) => (
            <section key={title} className="border-b border-black/10 py-6 last:border-0">
              <h2 className="font-serif text-2xl font-semibold">{title}</h2>
              <p className="mt-3 leading-8 text-sumi/70">{text}</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
