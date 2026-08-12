import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function AboutBanner() {
  return (
    <section
      className="relative min-h-[52vh] flex flex-col justify-end overflow-hidden pt-32 lg:pt-40 pb-16"
      aria-label="About page banner"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 60%, rgba(200,169,110,0.08) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 0% 50%, rgba(10,30,70,0.55) 0%, transparent 60%)",
        }}
      />

      {/* Decorative vertical grid lines */}
      <div className="absolute inset-0 flex justify-between px-6 lg:px-10 max-w-[1400px] mx-auto pointer-events-none opacity-20">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 w-full z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
          <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
            About
          </span>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
        </div>

        <h1 className="text-white font-bold leading-[1.15] tracking-tight text-3xl sm:text-4xl lg:text-4xl xl:text-5xl max-w-4xl mb-6">
          The Person Behind the{" "}
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
            Advisory
          </span>
        </h1>

        <p className="text-white/60 text-base sm:text-[17px] leading-relaxed max-w-[620px] mb-10">
          A multidisciplinary finance professional bridging financial performance,
          corporate governance, regulatory compliance, and strategic business
          decision-making — built over 22+ years of real-world leadership.
        </p>

        <div className="flex flex-row gap-3 flex-wrap">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-[#c8a96e] to-[#a07840] text-white shadow-lg shadow-[#c8a96e]/25 hover:shadow-[#c8a96e]/45 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            Engage Me as an Advisor
            <FiArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/profile"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase border border-white/15 text-white/80 hover:border-[#c8a96e]/50 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            View Profile & CV
          </Link>
        </div>
      </div>
    </section>
  );
}
