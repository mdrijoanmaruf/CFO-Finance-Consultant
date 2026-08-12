const projects = [
  {
    category: "Corporate Finance",
    title: "Enterprise CFO Leadership — BDT 1,200 Crore IT Distribution Company",
    description:
      "Led all financial management and governance functions for Global Brand PLC — one of Bangladesh's largest IT distribution enterprises — covering strategy, treasury, banking, tax, VAT, and board advisory.",
    impact: ["Financial discipline strengthened", "MIS improved", "Working capital optimized"],
  },
  {
    category: "Governance & Controls",
    title: "Internal Control & Policy Reform",
    description:
      "Drove the overhaul of internal control systems, financial policies, SOPs, and delegation of authority frameworks — improving accountability, transparency, and risk management across the enterprise.",
    impact: ["Control frameworks established", "SOPs implemented", "Governance gaps closed"],
  },
  {
    category: "Development Finance",
    title: "Donor-Funded Project Financial System Design",
    description:
      "Provided financial management consultancy to an international development project — designing systems, monitoring budgets, preparing donor-compliant financial reports, and coordinating audits.",
    impact: ["Donor compliance ensured", "Audit readiness achieved", "Finance team capacity built"],
  },
  {
    category: "Treasury & Banking",
    title: "Banking Negotiation & Liquidity Management",
    description:
      "Played a central role in banking negotiations, working capital facility management, trade finance arrangements, and foreign currency risk mitigation — maintaining financial resilience in a high-turnover business.",
    impact: ["Liquidity secured", "Banking relationships strengthened", "Forex risk managed"],
  },
  {
    category: "MIS & Reporting",
    title: "Management Information System Development",
    description:
      "Developed and implemented robust MIS and management reporting frameworks to enable timely, reliable, and decision-relevant financial intelligence for senior management and boards.",
    impact: ["Real-time reporting enabled", "Decision quality improved", "Reporting gaps eliminated"],
  },
  {
    category: "Advisory",
    title: "Strategic Business & Commercial Advisory",
    description:
      "Provided financial input into business expansion, investment, procurement, and commercial decisions — integrating financial analysis, risk assessment, and governance perspective into strategic choices.",
    impact: ["Strategic risks mitigated", "Investment decisions supported", "Commercial terms reviewed"],
  },
];

export default function SelectedProjects() {
  return (
    <section className="relative py-16 lg:py-24 bg-transparent overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(200,169,110,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        {/* Section header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
            <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
              Selected Projects
            </span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
            Engagements &{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #c8a96e 0%, #e8c98e 50%, #c8a96e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Initiatives
            </span>
          </h2>
          <p className="text-white/55 text-sm leading-relaxed max-w-2xl">
            Illustrative projects and advisory initiatives that reflect the breadth
            and depth of financial, governance, and strategic work delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-[#c8a96e]/25 p-7 rounded-2xl transition-all duration-500 overflow-hidden hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
              <div className="relative">
                {/* Category badge */}
                <span
                  className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-4 border border-[#c8a96e]/25"
                  style={{ color: "#c8a96e", background: "rgba(200,169,110,0.07)" }}
                >
                  {p.category}
                </span>

                <h3 className="text-white font-bold text-base mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-white/55 text-[14px] leading-relaxed mb-5">
                  {p.description}
                </p>

                {/* Impact pills */}
                <div className="flex flex-wrap gap-2">
                  {p.impact.map((i) => (
                    <span
                      key={i}
                      className="text-[11px] text-white/50 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
