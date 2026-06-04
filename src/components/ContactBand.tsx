import { CalendarDays, MessageCircle, Phone, Store } from "lucide-react";
import { Link } from "react-router-dom";
import { siteInfo } from "../data/site";

export function ContactBand() {
  const items = [
    { icon: Phone, label: "電話相談", value: siteInfo.phone },
    { icon: MessageCircle, label: "LINE相談", value: siteInfo.lineLabel },
    { icon: Store, label: "来店相談", value: "事前予約がおすすめです" },
    { icon: CalendarDays, label: "来店受付", value: siteInfo.hours },
  ];

  return (
    <section className="bg-sumi py-16 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-kin">Contact</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold md:text-5xl">
              気になる一尾、池の管理までご相談ください。
            </h2>
            <p className="mt-5 leading-8 text-white/70">
              写真での事前相談、来店予約、池の状態確認など、内容に合わせてご案内します。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <div key={item.label} className="rounded-md border border-white/10 bg-white/5 p-5">
                <item.icon className="text-kin" size={24} />
                <p className="mt-4 text-sm text-white/60">{item.label}</p>
                <p className="mt-1 font-semibold">{item.value}</p>
              </div>
            ))}
            <Link
              to="/contact"
              className="rounded-md bg-urushi px-6 py-5 text-center font-semibold text-white transition hover:bg-kin hover:text-sumi sm:col-span-2"
            >
              問い合わせフォームへ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
