import { PageHero } from "../components/PageHero";

export function PrivacyPage() {
  return (
    <>
      <PageHero title="プライバシーポリシー" description="個人情報の取り扱いに関する仮文章です。公開前に実際の運用に合わせて確認してください。" />
      <LegalContent
        items={[
          ["個人情報の利用目的", "お問い合わせ、来店予約、販売・アフターフォロー、メンテナンス対応のために利用します。"],
          ["第三者提供", "法令に基づく場合を除き、ご本人の同意なく第三者へ提供しません。"],
          ["安全管理", "取得した情報は適切に管理し、不要になった情報は速やかに削除します。"],
          ["お問い合わせ窓口", "個人情報に関するお問い合わせは、お問い合わせページよりご連絡ください。"],
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
