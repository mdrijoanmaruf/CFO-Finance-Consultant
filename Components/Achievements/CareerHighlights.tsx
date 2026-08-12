import { FiTrendingUp } from "react-icons/fi";

const highlights = [
  {
    no: "01",
    title: "CFO of a BDT 1,200 Crore Enterprise",
    org: "Global Brand PLC, Bangladesh",
    body: "Successfully led the complete financial management and governance functions of one of Bangladesh's leading IT distribution companies. Responsible for financial strategy, treasury, banking, tax, VAT, budgeting, and board-level advisory.",
  },
  {
    no: "02",
    title: "Financial Discipline & Internal Control Reform",
    org: "Global Brand PLC",
    body: "Strengthened financial discipline, management reporting, and internal control processes across the organization — enabling more rigorous decision-making and enhanced governance at every level.",
  },
  {
    no: "03",
    title: "Banking & Liquidity Management",
    org: "Corporate Finance",
    body: "Played a key role in banking negotiations, liquidity management, financing arrangements, and working capital planning — maintaining strong banking relationships and ensuring financial resilience.",
  },
  {
    no: "04",
    title: "Financial Management Consultancy",
    org: "Donor-Funded Development Project",
    body: "Delivered financial management consulting services to an internationally donor-funded project — designing financial systems, monitoring budgets, preparing donor-compliant reports, and supporting audit readiness.",
  },
  {
    no: "05",
    title: "Policy, SOP & Governance Framework Development",
    org: "Corporate Advisory",
    body: "Supported the development and implementation of financial policies, standard operating procedures (SOPs), delegation of authority frameworks, and management control mechanisms across corporate environments.",
  },
  {
    no: "06",
    title: "Senior Finance Leadership",
    org: "Leading Electrical & Electronics Conglomerate",
    body: "Held a senior finance management role within a major industrial business group, covering financial accounting, budget management, inventory, banking, tax, VAT compliance, and internal control coordination.",
  },
];

export default function CareerHighlights() {
  return (
    <section className="relative py-16 lg:py-24 bg-transparent overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 15% 50%, rgba(200,169,110,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Decorative vertical grid lines */}
      <div className="absolute inset-0 flex justify-between px-6 lg:px-10 max-w-[1400px] mx-auto pointer-events-none opacity-20">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-start">
          {/* Left – Section header */}
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
              <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
                Career Highlights
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
            <p className="text-white/55 text-sm leading-relaxed">
              A curated record of pivotal career milestones and the measurable
              impact delivered through each major professional engagement.
            </p>

            <div
              className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-[#c8a96e]/20 bg-white/[0.02]"
              style={{ background: "rgba(200,169,110,0.03)" }}
            >
              <FiTrendingUp className="w-5 h-5 text-[#c8a96e]" />
              <span className="text-white/70 text-sm font-medium">
                22+ Years of Progressive Growth
              </span>
            </div>
          </div>

          {/* Right – Highlight cards */}
          <div className="flex flex-col gap-5">
            {highlights.map((h) => (
              <div
                key={h.no}
                className="group relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-[#c8a96e]/25 p-7 rounded-2xl transition-all duration-500 overflow-hidden hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#c8a96e]/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                {/* Number */}
                <span className="absolute top-5 right-6 text-[11px] font-bold tracking-[0.25em] text-white/10 uppercase select-none">
                  {h.no}
                </span>

                <div className="relative">
                  {/* Gold accent bar */}
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
