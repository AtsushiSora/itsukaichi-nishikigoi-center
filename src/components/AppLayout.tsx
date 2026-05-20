import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { siteInfo } from "../data/site";

const navItems = [
  { label: "ホーム", to: "/" },
  { label: "販売中の錦鯉", to: "/koi" },
  { label: "養殖・販売について", to: "/about" },
  { label: "アフターフォロー", to: "/aftercare" },
  { label: "メンテナンス", to: "/maintenance" },
  { label: "お問い合わせ", to: "/contact" },
];

export function AppLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-washi text-sumi">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-washi/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid h-11 w-11 place-items-center rounded-full border border-kin bg-sumi text-lg font-semibold text-kin">
              鯉
            </span>
            <span>
              <span className="block font-serif text-xl font-semibold tracking-normal">
                {siteInfo.name}
              </span>
              <span className="block text-xs text-sumi/60">広島の錦鯉専門店</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm transition hover:text-urushi ${
                    isActive ? "font-semibold text-urushi" : "text-sumi/75"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <a
            href={`tel:${siteInfo.phone}`}
            className="hidden items-center gap-2 rounded-full bg-urushi px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-sumi xl:flex"
          >
            <Phone size={16} />
            {siteInfo.phone}
          </a>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="メニュー"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-black/10 bg-washi px-5 py-4 lg:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-3 text-sm ${
                      isActive ? "bg-urushi text-white" : "bg-white text-sumi"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-sumi text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
          <div>
            <p className="font-serif text-2xl font-semibold">{siteInfo.name}</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
              養殖・販売から池の管理まで、錦鯉と長く付き合うための相談先として丁寧に対応します。
            </p>
          </div>
          <div className="text-sm leading-7 text-white/75">
            <p>電話: {siteInfo.phone}</p>
            <p>住所: {siteInfo.address}</p>
            <p>営業時間: {siteInfo.hours}</p>
          </div>
          <div className="grid content-start gap-2 text-sm">
            <Link to="/privacy" className="text-white/75 hover:text-kin">
              プライバシーポリシー
            </Link>
            <Link to="/commerce" className="text-white/75 hover:text-kin">
              特定商取引法に基づく表記
            </Link>
          </div>
        </div>
        <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
