import { ArrowLeft, MessageCircle, Phone, PlayCircle } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContactBand } from "../components/ContactBand";
import { getKoiById } from "../data/koi";
import { siteInfo } from "../data/site";

export function KoiDetailPage() {
  const { id } = useParams();
  const koi = getKoiById(id);
  const galleryImages = useMemo(() => koi?.galleryImages ?? [], [koi]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const mainImage = selectedImage ?? koi.imageUrl;

  return (
    <>
      <section className="bg-white py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Link to="/koi" className="mb-8 inline-flex items-center gap-2 text-sm text-sumi/65 hover:text-urushi">
            <ArrowLeft size={16} />
            一覧へ戻る
          </Link>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <div className="overflow-hidden rounded-md bg-sumi/10 shadow-soft">
                <img
                  src={mainImage}
                  alt={`${koi.variety} ${koi.size}`}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {galleryImages.map((image) => (
                  <button
                    type="button"
                    key={image}
                    onClick={() => setSelectedImage(image)}
                    className={`overflow-hidden rounded-md border bg-white p-1 transition ${
                      mainImage === image ? "border-urushi" : "border-black/10 hover:border-kin"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${koi.variety}の写真`}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </button>
                ))}
              </div>
              <div className="mt-6 overflow-hidden rounded-md border border-black/10 bg-sumi text-white">
                {koi.videoUrl ? (
                  <video controls src={koi.videoUrl} className="aspect-video w-full" />
                ) : (
                  <div className="grid aspect-video place-items-center p-8 text-center">
                    <div>
                      <PlayCircle className="mx-auto text-kin" size={44} />
                      <p className="mt-4 font-serif text-2xl font-semibold">動画は準備中です</p>
                      <p className="mt-2 text-sm leading-7 text-white/65">
                        将来的にiPadで撮影した泳ぎの動画をここに掲載できます。
                      </p>
                    </div>
                  </div>
                )}
              </div>
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
              <div className="mt-6 rounded-md border border-[#d8c9ab] bg-white p-5">
                <h2 className="font-serif text-xl font-semibold">受け渡し方法</h2>
                <p className="mt-3 text-sm leading-7 text-sumi/70">{koi.handover}</p>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href={`tel:${siteInfo.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-urushi px-5 py-3 font-semibold text-white transition hover:bg-sumi"
                >
                  <Phone size={18} />
                  電話で相談
                </a>
                <Link
                  to={`/contact?koi=${koi.id}`}
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
