import { FiBriefcase } from "react-icons/fi";

const timeline = [
  {
    period: "Current",
    role: "Chief Financial Officer (CFO)",
    type: "Global Brand PLC",
    description:
      "Lead the overall financial management and governance functions of a large-scale IT distribution business with approximately BDT 1,200 Crore annual turnover, providing strategic financial advice to the Board.",
    highlights: [
      "Banking negotiations & liquidity management",
      "Financial strategy & risk assessment",
      "MIS & management reporting",
      "Governance frameworks & SOPs",
    ],
    current: true,
  },
  {
    period: "Mid Career",
    role: "Financial Management Consultant",
    type: "Donor-Funded Development Project",
    description:
      "Provided financial management consulting services to a development project funded by international development partners.",
    highlights: [
      "Designed financial management systems",
      "Donor compliance & reporting",
      "Internal controls & budget monitoring",
      "Project audits & capacity building",
    ],
    current: false,
  },
  {
    period: "Early Senior Career",
    role: "Manager - Accounts & Finance",
    type: "Leading Electrical & Electronics Conglomerate",
    description:
      "Held a senior finance management position within a major electrical and electronics business group, overseeing financial reporting, treasury operations, and tax compliance.",
    highlights: [
      "Financial & management reporting",
      "Treasury & banking operations",
      "Tax & VAT compliance",
      "Inventory & working capital management",
    ],
    current: false,
  },
];

export default function CareerTimeline() {
  return (
    <section className="relative py-16 lg:py-24 bg-transparent overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 10% 50%, rgba(200,169,110,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        {/* Section header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
            <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
              Career Journey
            </span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            Professional{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #c8a96e 0%, #e8c98e 50%, #c8a96e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Journey
            </span>
          </h2>
          <p className="text-white/60 text-base max-w-2xl leading-relaxed">
            A 20+ year progression from foundational finance roles to CFO-level
            leadership and independent advisory practice.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[22px] lg:left-1/2 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(200,169,110,0.3) 10%, rgba(200,169,110,0.3) 90%, transparent)",
            }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-0">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex items-start gap-0 ${
                    isLeft
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Desktop: left/right content */}
                  <div
                    className={`hidden lg:block lg:w-[calc(50%-40px)] pb-12 ${
                      isLeft ? "text-right pr-10" : "text-left pl-10"
                    }`}
                  >
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-white/5 border border-white/10 text-white/40 mb-3">
                      {item.period}
                    </span>
                    <h3 className="text-white font-bold text-lg mb-0.5">
                      {item.role}
                    </h3>
                    <p className="text-[#c8a96e]/80 text-xs font-semibold tracking-wider uppercase mb-3">
                      {item.type}
                    </p>
                    <p className="text-white/55 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <ul
                      className={`flex flex-col gap-1.5 ${
                        isLeft ? "items-end" : "items-start"
                      }`}
                    >
                      {item.highlights.map((h) => (
                        <li
                          key={h}
                          className={`flex items-center gap-2 text-[12px] text-white/50 ${
                            isLeft ? "flex-row-reverse" : ""
                          }`}
                        >
                          <span className="text-[#c8a96e]/60 text-[9px] shrink-0">
                            ✦
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Center dot */}
                  <div className="relative flex items-start justify-center w-11 lg:w-20 shrink-0 pt-1">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center border shadow-lg z-10 transition-colors ${
                        item.current
                          ? "bg-gradient-to-br from-[#c8a96e] to-[#a07840] border-[#c8a96e]/50 shadow-[#c8a96e]/20"
                          : "bg-[#0a1628] border-white/10 hover:border-[#c8a96e]/40"
                      }`}
                    >
                      <FiBriefcase
                        className={`w-4 h-4 ${
                          item.current ? "text-white" : "text-white/40"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Mobile / Right side content */}
                  <div
                    className={`flex-1 pb-12 pl-4 lg:pl-0 ${
                      isLeft
                        ? "lg:pl-10 lg:text-left"
                        : "lg:pr-10 lg:text-right lg:w-[calc(50%-40px)] lg:flex-none"
                    }`}
                  >
                    {/* Mobile period label */}
                    <span className="lg:hidden inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-white/5 border border-white/10 text-white/40 mb-3">
                      {item.period}
                    </span>

                    {/* Mobile content — mirrors desktop for non-left */}
                    <div className="lg:hidden">
                      <h3 className="text-white font-bold text-base mb-0.5">
                        {item.role}
                      </h3>
                      <p className="text-[#c8a96e]/80 text-[10px] font-semibold tracking-wider uppercase mb-3">
                        {item.type}
                      </p>
                      <p className="text-white/55 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <ul className="flex flex-col gap-1.5">
                        {item.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-center gap-2 text-[12px] text-white/50"
                          >
                            <span className="text-[#c8a96e]/60 text-[9px] shrink-0">
                              ✦
                            </span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Desktop — only shows for right-side items */}
                    {!isLeft && (
                      <div className="hidden lg:block">
                        <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-white/5 border border-white/10 text-white/40 mb-3">
                          {item.period}
                        </span>
                        <h3 className="text-white font-bold text-lg mb-0.5">
                          {item.role}
                        </h3>
                        <p className="text-[#c8a96e]/80 text-xs font-semibold tracking-wider uppercase mb-3">
                          {item.type}
                        </p>
                        <p className="text-white/55 text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>
                        <ul className="flex flex-col gap-1.5">
                          {item.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-center gap-2 text-[12px] text-white/50"
                            >
                              <span className="text-[#c8a96e]/60 text-[9px] shrink-0">
                                ✦
                              </span>
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
