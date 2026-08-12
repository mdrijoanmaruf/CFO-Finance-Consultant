const engagements = [
  {
    type: "Seminar",
    icon: "🎓",
    title: "Financial Management Best Practices for Development Organizations",
    audience: "NGO Finance Professionals & Development Sector Leaders",
    description:
      "Delivered professional seminars on financial management, donor compliance, internal controls, and audit readiness for development sector finance practitioners.",
  },
  {
    type: "Workshop",
    icon: "🛠️",
    title: "Corporate Governance & Internal Control Workshop",
    audience: "Corporate Finance Teams & Board Members",
    description:
      "Facilitated practical workshops on governance framework design, delegation of authority, and internal control systems — equipping corporate teams to build more accountable organizations.",
  },
  {
    type: "Training",
    icon: "📚",
    title: "Finance Team Capacity Building",
    audience: "Finance & Accounts Professionals",
    description:
      "Conducted professional training for finance and accounts teams — covering financial reporting, MIS, budgeting, tax, VAT compliance, and management controls.",
  },
  {
    type: "Panel Discussion",
    icon: "🎙️",
    title: "CFO Leadership in a Changing Business Environment",
    audience: "Finance Executives & Business Leaders",
    description:
      "Participated in panel discussions exploring the evolving role of CFOs as strategic business partners — addressing governance, risk, and the integration of finance with business strategy.",
  },
  {
    type: "Presentation",
    icon: "📊",
    title: "Tax, VAT & Regulatory Compliance for Corporate Finance",
    audience: "Corporate Finance Professionals & Tax Practitioners",
    description:
      "Delivered presentations on navigating Bangladesh's income tax, VAT, and corporate law compliance landscape — integrating practical experience with technical regulatory knowledge.",
  },
  {
    type: "Advisory Session",
    icon: "💡",
    title: "Board Advisory & Corporate Governance Briefings",
    audience: "Boards of Directors & Senior Management",
    description:
      "Provided structured advisory briefings to boards and senior management teams on financial performance, governance risks, strategic options, and management controls.",
  },
];

export default function SpeakingEngagements() {
  return (
    <section className="relative py-16 lg:py-24 bg-transparent overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 85% 30%, rgba(200,169,110,0.05) 0%, transparent 70%)",
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
        {/* Section header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
            <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
              Speaking & Engagements
            </span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
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
              Engagements
            </span>
          </h2>
          <p className="text-white/55 text-sm leading-relaxed max-w-2xl">
            Seminars, workshops, training sessions, panel discussions, presentations,
            and advisory briefings — sharing professional knowledge and engaging with
            the wider finance and governance community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {engagements.map((e) => (
            <div
              key={e.title}
              className="group relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-[#c8a96e]/25 p-7 rounded-2xl transition-all duration-500 overflow-hidden hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{e.icon}</span>
                  <span
                    className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border border-[#c8a96e]/20"
                    style={{ color: "#c8a96e", background: "rgba(200,169,110,0.07)" }}
                  >
                    {e.type}
                  </span>
                </div>
                <div
                  className="w-8 h-0.5 rounded-full mb-4"
                  style={{
                    background: "linear-gradient(90deg, #c8a96e 0%, #a07840 100%)",
                  }}
                />
                <h3 className="text-white font-bold text-base mb-2 leading-snug">{e.title}</h3>
                <p className="text-[#c8a96e]/60 text-xs tracking-wide mb-3">{e.audience}</p>
                <p className="text-white/55 text-[14px] leading-relaxed">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
