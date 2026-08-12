import Link from "next/link";
import { FiArrowRight, FiSearch } from "react-icons/fi";

interface Props {
  searchQuery: string;
  onSearchChange: (v: string) => void;
}

export default function InsightsBanner({ searchQuery, onSearchChange }: Props) {
  return (
    <section
      className="relative min-h-[52vh] flex flex-col justify-end overflow-hidden pt-32 lg:pt-40 pb-16"
      aria-label="Insights page banner"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 60%, rgba(200,169,110,0.09) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 0% 50%, rgba(10,30,70,0.55) 0%, transparent 60%)",
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
            Insights
          </span>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
        </div>

        <h1 className="text-white font-bold leading-[1.15] tracking-tight text-3xl sm:text-4xl lg:text-4xl xl:text-5xl max-w-4xl mb-6">
          Finance Intelligence for{" "}
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
            Better Decisions
          </span>
        </h1>

        <p className="text-white/60 text-base sm:text-[17px] leading-relaxed max-w-[620px] mb-10">
          Practical perspectives on corporate finance, governance, treasury, tax, and
          strategic leadership — drawn from 22+ years of real-world CFO and advisory experience.
        </p>

        {/* Search bar */}
        <div className="relative max-w-lg">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5 pointer-events-none" />
          <input
            type="text"
            id="insights-search"
            placeholder="Search articles, topics, or keywords..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-5 py-4 bg-white/[0.04] border border-white/15 text-white placeholder-white/30 rounded-2xl text-sm focus:border-[#c8a96e]/50 focus:bg-white/[0.06] outline-none transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
}
