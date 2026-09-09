import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const highlights = [
  {
    no: "01",
    title: "CFO of a BDT 1,200 Crore Enterprise",
    org: "Global Brand PLC, Bangladesh",
    body: "Successfully led the complete financial management and governance functions of one of Bangladesh's leading IT distribution companies.",
  },
  {
    no: "02",
    title: "Financial Discipline & Internal Control Reform",
    org: "Global Brand PLC",
    body: "Strengthened financial discipline, management reporting, and internal control processes across the organization.",
  },
  {
    no: "03",
    title: "Banking & Liquidity Management",
    org: "Corporate Finance",
    body: "Played a key role in banking negotiations, liquidity management, financing arrangements, and working capital planning.",
  },
];

export default function AchievementsSnippet() {
  return (
    <section className="relative py-16 lg:py-24 bg-transparent overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
              <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
                Achievements
              </span>
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 leading-tight">
              Key Roles &{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #c8a96e 0%, #e8c98e 50%, #c8a96e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Contributions
              </span>
            </h2>
            <p className="text-white/55 text-sm leading-relaxed mb-8">
              A curated record of pivotal career milestones and the measurable
              impact delivered through each major professional engagement.
            </p>
            <Link
              href="/achievements"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase bg-white/[0.05] border border-white/10 text-white hover:bg-white/[0.1] hover:border-[#c8a96e]/30 transition-all duration-300 group"
            >
              Explore Achievements
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            {highlights.map((h) => (
              <div
                key={h.no}
                className="group relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-[#c8a96e]/25 p-7 rounded-2xl transition-all duration-500 overflow-hidden hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#c8a96e]/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
                <span className="absolute top-5 right-6 text-[11px] font-bold tracking-[0.25em] text-white/10 uppercase select-none">
                  {h.no}
                </span>

                <div className="relative">
                  <div
                    className="w-8 h-0.5 rounded-full mb-4"
                    style={{
                      background:
                        "linear-gradient(90deg, #c8a96e 0%, #a07840 100%)",
                    }}
                  />
                  <h3 className="text-white font-bold text-base mb-1">{h.title}</h3>
                  <p className="text-[#c8a96e]/70 text-xs font-semibold tracking-wider uppercase mb-3">
                    {h.org}
                  </p>
                  <p className="text-white/55 text-[14px] leading-relaxed">{h.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
