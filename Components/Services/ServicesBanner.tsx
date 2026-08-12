import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function ServicesBanner() {
  return (
    <section
      className="relative min-h-[52vh] flex flex-col justify-end overflow-hidden pt-[76px] pb-16"
      aria-label="Services page banner"
    >
      {/* Radial glow matching hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 60%, rgba(200,169,110,0.08) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 0% 50%, rgba(10,30,70,0.55) 0%, transparent 60%)",
        }}
      />

      {/* Gold accent line under navbar */}
      <div
        className="absolute top-[76px] left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(200,169,110,0.3) 30%, rgba(200,169,110,0.3) 70%, transparent)",
        }}
        aria-hidden="true"
      />

      {/* Decorative vertical grid lines */}
      <div className="absolute inset-0 flex justify-between px-6 lg:px-10 max-w-[1400px] mx-auto pointer-events-none opacity-20">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 w-full z-10">
        {/* Eyebrow label */}
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
          <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-sm">
            Consulting Services
          </span>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
        </div>

        <h1 className="text-white font-bold leading-[1.15] tracking-tight text-3xl sm:text-4xl lg:text-[52px] xl:text-[58px] max-w-4xl mb-6">
          Expert Financial{" "}
          <span
            className="inline-block"
            style={{
              background:
                "linear-gradient(90deg, #c8a96e 0%, #e8c98e 50%, #c8a96e 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Leadership
          </span>{" "}
          &amp; Advisory
        </h1>

        <p className="text-white/60 text-base sm:text-[17px] leading-relaxed max-w-[600px] mb-10">
          Strategic, hands-on financial guidance for businesses, boards, and
          institutions — tailored to your unique challenges and growth ambitions.
        </p>

        <div className="flex flex-row gap-3 flex-wrap">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-[#c8a96e] to-[#a07840] text-white shadow-lg shadow-[#c8a96e]/25 hover:shadow-[#c8a96e]/45 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            Request a Consultation
            <FiArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase border border-white/15 text-white/80 hover:border-[#c8a96e]/50 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
