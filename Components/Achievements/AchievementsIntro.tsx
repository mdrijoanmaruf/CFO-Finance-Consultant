const stats = [
  { value: "22+", label: "Years Experience" },
  { value: "BDT 1,200Cr", label: "Turnover Managed" },
  { value: "4", label: "Professional Qualifications" },
  { value: "7+", label: "Advisory Domains" },
];

export default function AchievementsIntro() {
  return (
    <section className="relative py-16 lg:py-20 bg-transparent overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
          <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
            Career at a Glance
          </span>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <h2 className="text-white font-bold leading-tight text-2xl sm:text-3xl mb-6">
              A Track Record Built on{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #c8a96e 0%, #e8c98e 50%, #c8a96e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Real Results
              </span>
            </h2>
            <div className="space-y-4 text-white/65 text-base leading-relaxed">
              <p>
                Over more than two decades, I have delivered measurable impact across
                corporate finance, governance, treasury, taxation, and strategic
                business advisory. My work spans large conglomerates, donor-funded
                development projects, and independent consulting mandates.
              </p>
              <p>
                As CFO of Global Brand PLC — a leading IT distribution business with
                an annual turnover of approximately BDT 1,200 Crore — I have
                strengthened financial discipline, improved governance frameworks,
                and played a decisive role in banking negotiations and liquidity management.
              </p>
              <p>
                The qualifications I hold — MBA (Finance), LLB, Chartered Secretary (CS),
                and Income Tax Practitioner (ITP) — are not just academic credentials.
                They represent a multidisciplinary capability that I bring to every
                engagement, integrating finance, law, governance, and tax into a
                unified advisory perspective.
              </p>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 text-center hover:border-[#c8a96e]/20 hover:bg-white/[0.04] transition-all duration-300"
              >
                <p
                  className="text-2xl sm:text-3xl font-black mb-2"
                  style={{
                    background:
                      "linear-gradient(90deg, #c8a96e 0%, #e8c98e 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.value}
                </p>
                <p className="text-white/50 text-[11px] tracking-wider uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
