import { ArrowLeft, MessageCircle, Phone } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { ContactBand } from "../components/ContactBand";
import { getKoiById } from "../data/koi";
import { siteInfo } from "../data/site";

export function KoiDetailPage() {
  const { id } = useParams();
  const koi = getKoiById(id);

  if (!koi) {
    return (
      <section className="mx-auto max-w-4xl px-5 py-24 text-center">
        <h1 className="font-serif text-4xl font-semibold">錦鯉が見つかりません</h1>
        <Link to="/koi" className="mt-8 inline-flex text-urushi">
          一覧へ戻る
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="bg-white py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Link to="/koi" className="mb-8 inline-flex items-center gap-2 text-sm text-sumi/65 hover:text-urushi">
            <ArrowLeft size={16} />
            一覧へ戻る
          </Link>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="overflow-hidden rounded-md bg-sumi/10 shadow-soft">
              <img src={koi.imageUrl} alt={`${koi.variety} ${koi.size}`} className="aspect-[4/3] w-full object-cover" />
            </div>
            <div className="rounded-md border border-black/10 bg-washi p-6 md:p-8">
              <p className="text-sm font-semibold tracking-[0.18em] text-urushi">{koi.status}</p>
              <h1 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">{koi.variety}</h1>
              <p className="mt-5 text-2xl font-semibold text-urushi">{koi.price}</p>
              <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-black/10 py-6 text-sm">
                <div>
                  <dt className="text-sumi/50">サイズ</dt>
                  <dd className="mt-1 font-semibold">{koi.size}</dd>
                </div>
                <div>
                  <dt className="text-sumi/50">年齢</dt>
                  <dd className="mt-1 font-semibold">{koi.age}</dd>
                </div>
                <div>
                  <dt className="text-sumi/50">性別</dt>
                  <dd className="mt-1 font-semibold">{koi.sex}</dd>
                </div>
                <div>
                  <dt className="text-sumi/50">管理ID</dt>
                  <dd className="mt-1 font-semibold">{koi.id}</dd>
                </div>
              </dl>
              <p className="mt-6 leading-8 text-sumi/75">{koi.comment}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href={`tel:${siteInfo.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-urushi px-5 py-3 font-semibold text-white transition hover:bg-sumi"
                >
                  <Phone size={18} />
                  電話で相談
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-urushi px-5 py-3 font-semibold text-urushi transition hover:bg-urushi hover:text-white"
                >
                  <MessageCircle size={18} />
                  問い合わせ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
