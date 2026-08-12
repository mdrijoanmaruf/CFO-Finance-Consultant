import { FiAward } from "react-icons/fi";

const awards = [
  {
    title: "22+ Years of Progressive Career Excellence",
    description:
      "Built an unbroken track record of progressive career advancement across corporate, conglomerate, development, and consulting environments — consistently taking on greater responsibility and delivering greater impact.",
    type: "Career Achievement",
  },
  {
    title: "Trusted CFO of a National Enterprise",
    description:
      "Earned the trust of the Board of Directors and senior leadership of Global Brand PLC to serve as Chief Financial Officer — responsible for the complete financial management of a BDT 1,200 Crore enterprise.",
    type: "Leadership Recognition",
  },
  {
    title: "Multi-Sector Advisory Mandate",
    description:
      "Recognized across multiple sectors — IT, electronics manufacturing, development finance — for the ability to deliver credible financial, governance, and strategic advisory in complex and varied organizational contexts.",
    type: "Cross-Sector Recognition",
  },
  {
    title: "Multidisciplinary Professional Qualifications",
    description:
      "Achieved four distinct professional qualifications — MBA (Finance), LLB, Chartered Secretary (CS), and Income Tax Practitioner (ITP) — a rare combination that signals exceptional professional commitment and intellectual discipline.",
    type: "Academic Achievement",
  },
];

export default function AwardsRecognition() {
  return (
    <section className="relative py-16 lg:py-24 bg-transparent overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(200,169,110,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
            <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
              Awards & Recognition
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
              Recognition
            </span>
          </h2>
          <p className="text-white/55 text-sm leading-relaxed max-w-2xl mx-auto">
            Recognition earned through sustained professional excellence, integrity,
            and a commitment to delivering real impact across every engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {awards.map((a) => (
            <div
              key={a.title}
              className="group relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-[#c8a96e]/25 p-7 rounded-2xl transition-all duration-500 overflow-hidden hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-[#c8a96e]/20"
                    style={{ background: "rgba(200,169,110,0.07)" }}
                  >
                    <FiAward className="w-5 h-5 text-[#c8a96e]" />
                  </div>
                  <span
                    className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-[#c8a96e]/20 mt-1"
                    style={{ color: "#c8a96e", background: "rgba(200,169,110,0.06)" }}
                  >
                    {a.type}
                  </span>
                </div>
                <div
                  className="w-8 h-0.5 rounded-full mb-4"
                  style={{
                    background: "linear-gradient(90deg, #c8a96e 0%, #a07840 100%)",
                  }}
                />
                <h3 className="text-white font-bold text-base mb-3 leading-snug">
                  {a.title}
                </h3>
                <p className="text-white/55 text-[14px] leading-relaxed">{a.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
