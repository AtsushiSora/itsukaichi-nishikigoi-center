import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Koi } from "../data/koi";

type KoiCardProps = {
  koi: Koi;
  showInquiry?: boolean;
};

export function KoiCard({ koi, showInquiry = true }: KoiCardProps) {
  return (
    <article className="overflow-hidden rounded-md border border-[#d9d1c3] bg-white shadow-[0_4px_18px_rgba(18,18,18,0.08)] transition hover:-translate-y-0.5 hover:shadow-soft">
      <div className="grid grid-cols-[48%_52%] gap-0 p-1.5 pb-0">
        <Link to={koi.detailUrl} className="block overflow-hidden bg-mizu/10">
          <img
            src={koi.imageUrl}
            alt={`${koi.variety} ${koi.size}`}
            className="aspect-[4/5] h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        </Link>
        <div className="px-4 py-3">
          <div className="space-y-2 text-sm">
            <div className="border-b border-black/10 pb-2">
              <p className="text-xs text-sumi/55">品種</p>
              <h3 className="font-serif text-lg font-semibold leading-tight">{koi.variety}</h3>
            </div>
            <div className="border-b border-black/10 pb-2">
              <p className="text-xs text-sumi/55">サイズ</p>
              <p className="font-semibold">{koi.size}</p>
            </div>
            <div className="border-b border-black/10 pb-2">
              <p className="text-xs text-sumi/55">価格</p>
              <p className="font-semibold">{koi.price.replace("税込 ", "")}</p>
            </div>
            <div>
              <p className="text-xs text-sumi/55">状態</p>
              <p className="font-semibold">{koi.status}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-1.5 pt-0">
        {showInquiry ? (
          <div className="grid grid-cols-[1.15fr_0.85fr]">
            <Link
              to={koi.detailUrl}
              className="inline-flex items-center justify-center gap-2 bg-urushi px-3 py-2.5 font-serif text-base font-semibold text-white transition hover:bg-sumi"
            >
              詳細を見る
              <ArrowRight size={17} />
            </Link>
            <Link
              to={`/contact?koi=${koi.id}`}
              className="inline-flex items-center justify-center border border-l-0 border-urushi px-3 py-2.5 text-sm font-semibold text-urushi transition hover:bg-urushi hover:text-white"
            >
              問い合わせ
            </Link>
          </div>
        ) : (
          <Link
            to={koi.detailUrl}
            className="inline-flex w-full items-center justify-center gap-3 bg-urushi px-4 py-2.5 font-serif text-base font-semibold text-white transition hover:bg-sumi"
          >
            詳細を見る
            <ArrowRight size={17} />
          </Link>
        )}
      </div>
    </article>
  );
}
