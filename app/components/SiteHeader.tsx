"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "首页", href: "/" },
  { label: "关于我们", href: "/about" },
  { label: "人鸡契约", href: "/contract" },
  { label: "找院子", href: "/yards" },
  { label: "供养手记", href: "/journal" },
  { label: "母爱蛋", href: "/#shop" },
  { label: "加入我们", href: "/join" },
  { label: "写封信", href: "/letter" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const solidHeader = scrolled || !isHome;

  const headerClass = solidHeader
    ? "border-brown/6 bg-rice/90 text-brown backdrop-blur-sm"
    : "border-transparent bg-transparent text-white";

  const linkClass = solidHeader
    ? "text-brown/60 hover:text-brown/85"
    : "text-white/70 hover:text-white/90";

  const brandClass = solidHeader ? "text-brown/90" : "text-white/95";

  const menuButtonClass = solidHeader
    ? "text-brown/80 hover:bg-brown/[0.04]"
    : "text-white/90 hover:bg-white/[0.06]";

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full border-b transition-[background-color,border-color] duration-700 ${headerClass}`}
      >
        <div className="mx-auto flex h-[3.75rem] w-[88%] max-w-6xl items-center justify-between gap-4">
          <Link
            href="/"
            className={`shrink-0 text-[15px] font-medium tracking-[0.08em] transition-colors duration-500 ${brandClass}`}
          >
            人鸡互养
          </Link>

          <nav
            className="hidden items-center gap-4 xl:gap-6 xl:flex"
            aria-label="主导航"
          >
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap text-[12px] font-normal tracking-wide transition-colors duration-500 xl:text-[13px] ${linkClass} ${
                  pathname === item.href ||
                  (item.href !== "/" && pathname === item.href.split("#")[0])
                    ? solidHeader
                      ? "!text-brown/90"
                      : "!text-white"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className={`inline-flex h-9 w-9 shrink-0 items-center justify-center transition-colors duration-500 xl:hidden ${menuButtonClass}`}
          >
            <span className="sr-only">菜单</span>
            {menuOpen ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                aria-hidden
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                aria-hidden
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-x-0 bottom-0 z-40 top-[3.75rem] bg-rice/98 backdrop-blur-sm xl:hidden">
          <nav
            className="mx-auto flex w-[88%] max-w-6xl flex-col py-8"
            aria-label="移动端导航"
          >
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-brown/[0.06] py-4 text-[15px] font-normal tracking-wide text-brown/75 transition-colors duration-500 hover:text-brown"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
