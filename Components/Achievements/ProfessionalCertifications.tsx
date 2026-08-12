const certifications = [
  {
    abbr: "MBA",
    full: "Master of Business Administration",
    discipline: "Finance",
    description:
      "Advanced academic foundation in corporate finance, financial strategy, business economics, and management decision-making — the analytical bedrock of all financial advisory work.",
  },
  {
    abbr: "LLB",
    full: "Bachelor of Laws",
    discipline: "Law",
    description:
      "Comprehensive legal qualification enabling direct integration of corporate law, contract law, regulatory compliance, and commercial legal considerations into financial and governance advisory.",
  },
  {
    abbr: "CS",
    full: "Chartered Secretary",
    discipline: "Corporate Governance & Secretarial Practice",
    description:
      "Professional qualification in company secretarial practice, corporate governance, board advisory, regulatory compliance, and shareholder relations — essential for boardroom-level advisory.",
  },
  {
    abbr: "ITP",
    full: "Income Tax Practitioner",
    discipline: "Taxation",
    description:
      "Accredited tax practitioner qualification authorizing professional engagement in income tax advisory, planning, compliance, and representation before tax authorities in Bangladesh.",
  },
];

export default function ProfessionalCertifications() {
  return (
    <section className="relative py-16 lg:py-24 bg-transparent overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 100% 50%, rgba(200,169,110,0.05) 0%, transparent 70%)",
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
              Qualifications
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
              Certifications
            </span>
          </h2>
          <p className="text-white/55 text-sm leading-relaxed max-w-2xl">
            A rare combination of four distinct professional qualifications spanning
            finance, law, governance, and taxation — enabling truly multidisciplinary advisory.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.abbr}
              className="group relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-[#c8a96e]/25 p-7 rounded-2xl transition-all duration-500 overflow-hidden hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
              <div className="relative flex gap-6">
                {/* Abbreviation badge */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border border-[#c8a96e]/25 shadow-lg"
                  style={{ background: "rgba(200,169,110,0.08)" }}
                >
                  <span
                    className="font-black text-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, #c8a96e 0%, #e8c98e 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {cert.abbr}
                  </span>
                </div>

                <div className="flex-1">
                  <div
                    className="w-8 h-0.5 rounded-full mb-3"
                    style={{
                      background: "linear-gradient(90deg, #c8a96e 0%, #a07840 100%)",
                    }}
                  />
                  <h3 className="text-white font-bold text-base mb-0.5 leading-snug">
                    {cert.full}
                  </h3>
                  <p className="text-[#c8a96e]/70 text-xs font-semibold tracking-wider uppercase mb-3">
                    {cert.discipline}
                  </p>
                  <p className="text-white/55 text-[14px] leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Combined value proposition banner */}
        <div className="mt-10 relative overflow-hidden rounded-2xl border border-[#c8a96e]/20 bg-white/[0.02] p-8 text-center">
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #c8a96e, transparent)" }}
          />
          <p className="text-[#c8a96e] text-xs font-bold tracking-[0.25em] uppercase mb-3">
            Unique Value Proposition
          </p>
          <p className="text-white font-bold text-xl sm:text-2xl">
            Finance + Law + Governance + Tax
          </p>
          <p className="text-white/55 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">
            The integration of these four disciplines into a single advisory capability
            is what sets this practice apart — allowing every engagement to be approached
            from financial, legal, governance, and tax perspectives simultaneously.
          </p>
        </div>
      </div>
    </section>
  );
}
