import { Link } from "react-router-dom";
import type { Koi } from "../data/koi";

const statusClass = {
  販売中: "bg-mizu text-white",
  商談中: "bg-kin text-sumi",
  売約済み: "bg-sumi/70 text-white",
};

export function KoiCard({ koi }: { koi: Koi }) {
  return (
    <article className="overflow-hidden rounded-md border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <Link to={koi.detailUrl} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-sumi/10">
          <img
            src={koi.imageUrl}
            alt={`${koi.variety} ${koi.size}`}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
          <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${statusClass[koi.status]}`}>
            {koi.status}
          </span>
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-2xl font-semibold">{koi.variety}</h3>
            <p className="mt-1 text-sm text-sumi/60">
              {koi.size} / {koi.age} / {koi.sex}
            </p>
          </div>
          <p className="shrink-0 text-sm font-semibold text-urushi">{koi.price}</p>
        </div>
        <p className="mt-4 line-clamp-2 text-sm leading-7 text-sumi/70">{koi.comment}</p>
        <Link
          to={koi.detailUrl}
          className="mt-5 inline-flex items-center justify-center rounded-full border border-urushi px-4 py-2 text-sm font-semibold text-urushi transition hover:bg-urushi hover:text-white"
        >
          詳細を見る
        </Link>
      </div>
    </article>
  );
}
