"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Profile", href: "/profile" },
  { label: "Insights", href: "/insights" },
  { label: "Achievements", href: "/achievements" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#060e1c] border-b border-white/8 shadow-2xl shadow-black/40">
        <nav className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[76px]">
          {/* Logo / Name */}
          <Link
            href="/"
            className="flex flex-col leading-tight group shrink-0"
            aria-label="MD. AL AMIN BHUIYAN - Home"
          >
            <span className="text-white font-bold text-[15px] tracking-widest uppercase group-hover:text-[#c8a96e] transition-colors duration-300">
              MD. Al Amin Bhuiyan
            </span>
            <span className="text-[#c8a96e] text-[10px] tracking-[0.25em] uppercase font-medium">
              CFO &amp; Finance Consultant
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-3 py-2 text-[13px] tracking-wide font-medium transition-colors duration-250 group ${
                      isActive
                        ? "text-[#c8a96e]"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {/* Underline indicator */}
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-[1.5px] bg-[#c8a96e] rounded-full transition-transform duration-300 origin-center ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA Button + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              id="navbar-cta-btn"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-wider uppercase transition-all duration-300 bg-gradient-to-r from-[#c8a96e] to-[#a07840] text-white shadow-lg shadow-[#c8a96e]/20 hover:shadow-[#c8a96e]/40 hover:scale-[1.03] active:scale-[0.98]"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Request a Consultation
            </Link>

            {/* Hamburger — visible below xl */}
            <button
              id="navbar-hamburger"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((v) => !v)}
              className="xl:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-200 gap-[5px]"
            >
              <span
                className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 ${
                  mobileOpen ? "w-6 rotate-45 translate-y-[6.5px]" : "w-6"
                }`}
              />
              <span
                className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 ${
                  mobileOpen ? "w-0 opacity-0" : "w-4"
                }`}
              />
              <span
                className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 ${
                  mobileOpen ? "w-6 -rotate-45 -translate-y-[6.5px]" : "w-6"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        aria-hidden={!mobileOpen}
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm xl:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Drawer */}
      <aside
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 bottom-0 z-50 w-[300px] bg-[#0a1628] border-l border-white/10 xl:hidden flex flex-col shadow-2xl transition-transform duration-400 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-[76px] border-b border-white/10 shrink-0">
          <span className="text-white font-bold text-sm tracking-widest uppercase">
            Navigation
          </span>
          <button
            aria-label="Close navigation menu"
            onClick={() => setMobileOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-200 text-white/70 hover:text-white"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer links */}
        <ul className="flex flex-col flex-1 overflow-y-auto py-4 px-4 gap-1">
          {navLinks.map((link, i) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  id={`mobile-nav-link-${i}`}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? "bg-[#c8a96e]/15 text-[#c8a96e] border border-[#c8a96e]/20"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span
                    className={`w-1 h-1 rounded-full shrink-0 ${
                      isActive ? "bg-[#c8a96e]" : "bg-white/20"
                    }`}
                  />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Drawer CTA */}
        <div className="px-5 pb-8 pt-4 border-t border-white/10 shrink-0">
          <Link
            href="/contact"
            id="mobile-nav-cta-btn"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-[#c8a96e] to-[#a07840] text-white shadow-lg shadow-[#c8a96e]/20 hover:shadow-[#c8a96e]/40 transition-all duration-300"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Request a Consultation
          </Link>
          <p className="text-center text-white/30 text-[11px] mt-4 tracking-wide">
            CFO &amp; Corporate Finance Consultant
          </p>
        </div>
      </aside>

    </>
  );
}
