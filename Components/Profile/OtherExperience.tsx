import { FiExternalLink } from "react-icons/fi";

const otherExperience = [
  {
    area: "Corporate Finance & Treasury",
    description: "Extensive experience in corporate finance, treasury operations, banking, and cash flow management.",
  },
  {
    area: "Audit, Control & Compliance",
    description: "Deep expertise in internal audit, internal control, regulatory affairs, and corporate law compliance.",
  },
  {
    area: "Taxation & VAT",
    description: "Authorized Income Tax Practitioner handling corporate taxation, VAT compliance, and tax planning.",
  },
  {
    area: "Budgeting & Financial Planning",
    description: "Specialized in budgeting, cost management, and comprehensive financial planning & analysis (FP&A).",
  },
  {
    area: "Corporate Governance & Advisory",
    description: "Chartered Secretary providing board-level advisory, governance frameworks, and business advisory.",
  },
  {
    area: "Project Finance",
    description: "Hands-on experience in managing project finance and donor-funded development project accounts.",
  },
];

export default function OtherExperience() {
  return (
    <section className="relative py-16 lg:py-20 bg-transparent overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-16 items-start">
          {/* Left sticky label */}
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
              <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
                Additional Experience
              </span>
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
              Other Professional{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #c8a96e 0%, #e8c98e 50%, #c8a96e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Experience
              </span>
            </h2>
            <p className="text-white/55 text-sm leading-relaxed">
              Beyond the formal career journey, a range of cross-functional
              experiences have shaped a well-rounded advisory capability.
            </p>
          </div>

          {/* Right: experience items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {otherExperience.map((exp, i) => (
              <div
                key={i}
                className="group relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-[#c8a96e]/25 p-6 rounded-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
                <div className="relative">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0a1628]/80 border border-white/10 flex items-center justify-center group-hover:border-[#c8a96e]/40 transition-colors duration-500 shrink-0 mt-0.5">
                      <FiExternalLink className="w-3.5 h-3.5 text-white/40 group-hover:text-[#c8a96e] transition-colors duration-500" />
                    </div>
                    <h3 className="text-white font-bold text-sm leading-snug">
                      {exp.area}
                    </h3>
                  </div>
                  <p className="text-white/50 text-[13px] leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
