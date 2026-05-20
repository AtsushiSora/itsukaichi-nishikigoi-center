import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-24 text-center">
      <h1 className="font-serif text-4xl font-semibold">ページが見つかりません</h1>
      <p className="mt-4 text-sumi/65">URLをご確認ください。</p>
      <Link to="/" className="mt-8 inline-flex rounded-full bg-urushi px-6 py-3 font-semibold text-white">
        ホームへ戻る
      </Link>
    </section>
  );
}
