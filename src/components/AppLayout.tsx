import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { siteInfo } from "../data/site";
import { KoiSeal } from "./KoiSeal";

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
    <div className="min-h-screen bg-white text-sumi">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1380px] items-center justify-between px-5 py-3 lg:px-8">
          <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <span>
              <span className="block font-serif text-2xl font-semibold leading-none md:text-3xl">
                {siteInfo.name}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative py-5 text-sm font-semibold transition after:absolute after:inset-x-0 after:bottom-2 after:h-0.5 after:origin-center after:scale-x-0 after:bg-urushi after:transition hover:text-urushi hover:after:scale-x-100 ${
                    isActive ? "text-sumi after:scale-x-100" : "text-sumi/75"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

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
          <nav className="border-t border-black/10 bg-white px-5 py-4 lg:hidden">
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

      <footer className="bg-[linear-gradient(135deg,#121212,#1b2224)] text-white">
        <div className="mx-auto grid max-w-[1380px] gap-8 px-5 py-8 md:grid-cols-[1fr_1.2fr_1fr] md:items-center lg:px-8">
          <div className="flex items-center gap-3">
            <KoiSeal variant="dark" sizeClass="h-12 w-12" />
            <p className="font-serif text-2xl font-semibold">{siteInfo.name}</p>
          </div>
          <div className="text-sm leading-7 text-white/75 md:text-center">
            <p>〒{siteInfo.postalCode} {siteInfo.address}</p>
            <p>TEL {siteInfo.phone}　{siteInfo.hours}</p>
          </div>
          <div className="grid content-start gap-2 text-sm md:justify-end md:text-right">
            <Link to="/privacy" className="text-white/75 hover:text-kin">
              プライバシーポリシー
            </Link>
            <Link to="/commerce" className="text-white/75 hover:text-kin">
              特定商取引法に基づく表記
            </Link>
          </div>
        </div>
        <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
