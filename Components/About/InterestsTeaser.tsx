import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const interests = [
  {
    emoji: "📖",
    title: "Reading & Research",
    description: "Financial literature, governance frameworks, and economic analysis.",
  },
  {
    emoji: "🌍",
    title: "Travel",
    description: "Exploring diverse cultures and economic environments around the world.",
  },
  {
    emoji: "🎓",
    title: "Professional Development",
    description: "Continuous learning in finance, law, and governance domains.",
  },
  {
    emoji: "🤝",
    title: "Mentoring",
    description: "Guiding the next generation of finance professionals and leaders.",
  },
];

export default function InterestsTeaser() {
  return (
    <section className="relative py-16 lg:py-20 bg-transparent overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-center">
          {/* Left – Interests grid */}
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
              <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
                Beyond the Office
              </span>
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 leading-tight">
              Personal{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #c8a96e 0%, #e8c98e 50%, #c8a96e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Interests
              </span>
            </h2>
            <p className="text-white/55 text-sm leading-relaxed mb-8 max-w-lg">
              Outside of professional practice, a set of interests that fuel
              curiosity, perspective, and continuous growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((item) => (
                <div
                  key={item.title}
                  className="group flex items-start gap-4 bg-white/[0.02] border border-white/[0.06] hover:border-[#c8a96e]/25 hover:bg-white/[0.04] p-5 rounded-2xl transition-all duration-300"
                >
                  <span className="text-2xl shrink-0 mt-0.5">{item.emoji}</span>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-[13px] leading-snug">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – CTA card */}
          <div className="relative overflow-hidden rounded-3xl border border-[#c8a96e]/20 bg-white/[0.02] p-8 text-center">
            {/* Glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse at top, rgba(200,169,110,0.12) 0%, transparent 70%)",
              }}
            />
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#c8a96e]/20 rounded-tl-3xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#c8a96e]/20 rounded-tr-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#c8a96e]/20 rounded-bl-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#c8a96e]/20 rounded-br-3xl pointer-events-none" />

            <div className="relative">
              <p className="text-[#c8a96e] text-4xl font-black leading-none mb-4">"</p>
              <p className="text-white/70 text-sm leading-relaxed italic mb-6">
                A well-rounded perspective — drawn from reading, travel, and
                continuous learning — makes for a better advisor.
              </p>
              <Link
                href="/interests"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#c8a96e] hover:text-white transition-colors duration-300 group"
              >
                Explore My Interests
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
