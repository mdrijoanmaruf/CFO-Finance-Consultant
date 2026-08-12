const contributions = [
  {
    icon: "💼",
    title: "Strategic Financial Leadership",
    body: "Led full-spectrum finance functions including financial strategy, treasury, tax, VAT, budgeting, and board-level reporting for enterprises with over BDT 1,200 Crore in annual turnover.",
  },
  {
    icon: "🏛️",
    title: "Corporate Governance & Board Advisory",
    body: "Advised Boards of Directors and senior management on governance frameworks, delegation of authority, internal controls, and risk management — enabling more accountable and transparent organizational leadership.",
  },
  {
    icon: "🏦",
    title: "Banking & Trade Finance Management",
    body: "Managed complex banking relationships, working capital facilities, trade finance arrangements, and foreign currency exposure — ensuring financial resilience and optimal liquidity positioning.",
  },
  {
    icon: "📊",
    title: "MIS & Management Reporting",
    body: "Developed and improved management information systems (MIS) and reporting frameworks that enabled timely, data-driven decision-making at senior and board levels.",
  },
  {
    icon: "🌍",
    title: "Donor-Funded Project Financial Management",
    body: "Designed and strengthened financial management systems for internationally funded development projects — ensuring donor compliance, audit readiness, and capacity building of project finance personnel.",
  },
  {
    icon: "⚖️",
    title: "Tax, VAT & Regulatory Compliance",
    body: "Ensured end-to-end tax and VAT compliance, liaised with regulators, tax authorities, and external auditors — minimizing fiscal risks and maintaining full statutory adherence.",
  },
];

export default function MajorContributions() {
  return (
    <section className="relative py-16 lg:py-24 bg-transparent overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 85% 50%, rgba(200,169,110,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
            <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
              Professional Contributions
            </span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
            Major{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #c8a96e 0%, #e8c98e 50%, #c8a96e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Professional Contributions
            </span>
          </h2>
          <p className="text-white/55 text-sm leading-relaxed max-w-2xl mx-auto">
            Core domains where I have delivered sustained, measurable value across
            organizations, boards, and advisory mandates over the course of my career.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {contributions.map((c) => (
            <div
              key={c.title}
              className="group relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-[#c8a96e]/25 p-7 rounded-2xl transition-all duration-500 overflow-hidden hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
              <div className="relative">
                <span className="text-3xl mb-5 block">{c.icon}</span>
                <div
                  className="w-8 h-0.5 rounded-full mb-4"
                  style={{
                    background: "linear-gradient(90deg, #c8a96e 0%, #a07840 100%)",
                  }}
                />
                <h3 className="text-white font-bold text-base mb-3">{c.title}</h3>
                <p className="text-white/55 text-[14px] leading-relaxed">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
