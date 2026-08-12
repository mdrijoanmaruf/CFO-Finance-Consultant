const publications = [
  {
    type: "Professional Writing",
    title: "Financial Management in Donor-Funded Development Projects",
    description:
      "Practical insights into designing and maintaining financial management systems compliant with international donor requirements — drawing on direct consulting experience with development sector organizations.",
  },
  {
    type: "Advisory Papers",
    title: "Corporate Governance Frameworks for SMEs and Family-Owned Businesses",
    description:
      "Exploration of practical governance tools — delegation of authority, internal controls, and board advisory structures — tailored to the realities of emerging and family-owned enterprises in Bangladesh.",
  },
  {
    type: "Thought Leadership",
    title: "The CFO as Business Partner: Beyond Financial Reporting",
    description:
      "An articulation of the evolved CFO role — from financial steward to strategic business partner — drawing on direct experience advising Boards and senior management on business decisions.",
  },
  {
    type: "Technical Analysis",
    title: "Integrated Tax, VAT & Regulatory Compliance for Corporate Finance Professionals",
    description:
      "A practitioner's perspective on navigating the intersection of income tax, VAT, and corporate law compliance — integrating all three disciplines into a unified compliance management approach.",
  },
];

export default function PublicationsAndPresentations() {
  return (
    <section className="relative py-16 lg:py-24 bg-transparent overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,169,110,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
            <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
              Publications
            </span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
            Publications &{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #c8a96e 0%, #e8c98e 50%, #c8a96e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Presentations
            </span>
          </h2>
          <p className="text-white/55 text-sm leading-relaxed max-w-2xl mx-auto">
            Written contributions and presentations that reflect the depth of professional
            knowledge and a commitment to sharing practical insights with the wider
            finance and governance community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {publications.map((p) => (
            <div
              key={p.title}
              className="group relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-[#c8a96e]/25 p-7 rounded-2xl transition-all duration-500 overflow-hidden hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
              <div className="relative">
                <span
                  className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-5 border border-[#c8a96e]/20"
                  style={{ color: "#c8a96e", background: "rgba(200,169,110,0.07)" }}
                >
                  {p.type}
                </span>
                <div
                  className="w-8 h-0.5 rounded-full mb-4"
                  style={{
                    background: "linear-gradient(90deg, #c8a96e 0%, #a07840 100%)",
                  }}
                />
                <h3 className="text-white font-bold text-base mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-white/55 text-[14px] leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
