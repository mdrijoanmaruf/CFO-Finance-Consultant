const strengths = [
  {
    no: "01",
    title: "Strategic Financial Leadership",
    description: "Strong commercial and financial acumen with proven analytical and problem-solving capability across diverse business models.",
  },
  {
    no: "02",
    title: "Multidisciplinary Approach",
    description: "Ability to integrate Finance, Law, Tax, Governance, and Commercial considerations into strategic business decisions.",
  },
  {
    no: "03",
    title: "Governance & Risk Orientation",
    description: "Extensive experience in corporate governance, board-level advisory, risk management, and internal control frameworks.",
  },
  {
    no: "04",
    title: "Treasury & Liquidity Management",
    description: "Deep expertise in corporate treasury, working capital optimization, and managing complex financing arrangements.",
  },
  {
    no: "05",
    title: "Stakeholder Management",
    description: "Strong relationships and extensive experience working with banks, auditors, regulators, and government authorities.",
  },
  {
    no: "06",
    title: "Professional Integrity",
    description: "Practical, solution-oriented, and business-focused approach rooted in high professional integrity and ethical standards.",
  },
];

export default function ProfessionalStrengths() {
  return (
    <section className="relative py-16 lg:py-24 bg-transparent overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] h-[700px] opacity-[0.05] pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#c8a96e_0%,transparent_60%)] blur-[120px]" />
      </div>

      {/* Decorative vertical grid lines */}
      <div className="absolute inset-0 flex justify-between px-6 lg:px-10 max-w-[1400px] mx-auto pointer-events-none opacity-20">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
            <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
              What Sets Me Apart
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
              Strengths
            </span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed">
            The qualities that define the way I work and the value I consistently
            deliver to clients and organizations.
          </p>
        </div>

        {/* Strengths grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((s) => (
            <div
              key={s.no}
              className="group relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-[#c8a96e]/25 p-7 rounded-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

              {/* Number */}
              <span className="absolute top-5 right-6 text-[11px] font-bold tracking-[0.25em] text-white/15 uppercase select-none">
                {s.no}
              </span>

              <div className="relative flex flex-col gap-4">
                {/* Gold accent bar */}
                <div
                  className="w-10 h-1 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #c8a96e 0%, #a07840 100%)",
                  }}
                />
                <h3 className="text-white font-bold text-base leading-snug">
                  {s.title}
                </h3>
                <p className="text-white/55 text-[14px] leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
