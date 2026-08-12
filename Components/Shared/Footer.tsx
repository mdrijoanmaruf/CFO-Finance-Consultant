"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Profile", href: "/profile" },
  { label: "Insights", href: "/insights" },
  { label: "Achievements", href: "/achievements" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Cookie Notice", href: "/cookie-notice" },
];

const services = [
  { label: "CFO & Strategic Finance Advisory", href: "/services#cfo-advisory" },
  { label: "Corporate Governance & Board Advisory", href: "/services#governance" },
  { label: "Financial Management & Process Improvement", href: "/services#financial-management" },
  { label: "Treasury, Banking & Financing", href: "/services#treasury" },
  { label: "Tax, VAT & Regulatory Compliance", href: "/services#tax-vat" },
  { label: "Procurement & Contract Advisory", href: "/services#procurement" },
  { label: "Donor-Funded Project Advisory", href: "/services#donor-funded" },
];

export default function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  if (pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="bg-[#060e1c] border-t border-white/8 text-white/70">
      {/* Main footer body */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        {/* Brand / About column */}
        <div className="lg:col-span-1 flex flex-col gap-5">
          <div>
            <p className="text-white font-bold text-base tracking-widest uppercase leading-snug">
              MD. Al Amin Bhuiyan
            </p>
            <p className="text-[#c8a96e] text-[10px] tracking-[0.25em] uppercase font-medium mt-0.5">
              CFO &amp; Finance Consultant
            </p>
          </div>

          <p className="text-sm leading-relaxed text-white/50 max-w-[260px]">
            20+ years of CFO-level expertise in corporate finance, governance,
            treasury, and strategic advisory — delivering practical results for
            businesses, boards, and institutions.
          </p>

          {/* Contact details */}
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a
                href="mailto:alamin.hs@gmail.com"
                id="footer-email-link"
                className="flex items-center gap-2.5 text-white/60 hover:text-[#c8a96e] transition-colors duration-200 group"
              >
                <span className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-[#c8a96e]/10 flex items-center justify-center transition-colors duration-200 shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                alamin.hs@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:01911089774"
                id="footer-phone-link"
                className="flex items-center gap-2.5 text-white/60 hover:text-[#c8a96e] transition-colors duration-200 group"
              >
                <span className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-[#c8a96e]/10 flex items-center justify-center transition-colors duration-200 shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                01911089774
              </a>
            </li>
          </ul>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/md-al-amin-bhuiyan-b8517933/"
            id="footer-linkedin-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect on LinkedIn"
            className="inline-flex items-center gap-2.5 text-sm text-white/60 hover:text-[#c8a96e] transition-colors duration-200 group w-fit"
          >
            <span className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-[#0077b5]/20 flex items-center justify-center transition-colors duration-200 shrink-0">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </span>
            Connect on LinkedIn
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5">
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/55 hover:text-[#c8a96e] transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#c8a96e]/40 group-hover:bg-[#c8a96e] transition-colors duration-200 shrink-0" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            Services
          </h3>
          <ul className="flex flex-col gap-2.5">
            {services.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="text-sm text-white/55 hover:text-[#c8a96e] transition-colors duration-200 flex items-start gap-2 group leading-snug"
                >
                  <span className="w-1 h-1 rounded-full bg-[#c8a96e]/40 group-hover:bg-[#c8a96e] transition-colors duration-200 shrink-0 mt-[7px]" />
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* More Links */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              More
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Testimonials", href: "/testimonials" },
                { label: "My Interests", href: "/interests" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-[#c8a96e] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#c8a96e]/40 group-hover:bg-[#c8a96e] transition-colors duration-200 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Credentials badge */}
          <div className="rounded-xl bg-white/4 border border-white/8 p-5">
            <p className="text-[#c8a96e] text-[10px] tracking-[0.2em] uppercase font-semibold mb-3">
              Credentials
            </p>
            <ul className="flex flex-col gap-1.5">
              {["MBA – Finance", "LLB", "Company Secretary (CS)", "Income Tax Practitioner (ITP)"].map(
                (cred) => (
                  <li key={cred} className="flex items-center gap-2 text-xs text-white/55">
                    <span className="text-[#c8a96e] text-[10px]">✦</span>
                    {cred}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <p className="text-xs text-white/35 text-center sm:text-left">
            &copy; {year} MD. Al Amin Bhuiyan. All rights reserved.
          </p>
          <p className="text-[11px] text-white/35 text-center sm:text-left">
            Developed by{" "}
            <a
              href="https://rijoan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-[#c8a96e] transition-colors"
            >
              Md Rijoan Maruf
            </a>
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {legalLinks.map((link, i) => (
            <li key={link.href} className="flex items-center gap-5">
              {i > 0 && (
                <span className="w-px h-3 bg-white/15 hidden sm:block" aria-hidden="true" />
              )}
              <Link
                href={link.href}
                className="text-[11px] text-white/35 hover:text-[#c8a96e] transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
