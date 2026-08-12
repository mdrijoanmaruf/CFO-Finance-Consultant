import Image from "next/image";

export default function ProfessionalSummary() {
  return (
    <section className="relative py-16 lg:py-20 bg-transparent overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-start">
          {/* Left – Summary text */}
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
              <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
                Professional Summary
              </span>
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
            </div>

            <h2 className="text-white font-bold leading-tight text-2xl sm:text-3xl mb-6">
              A Seasoned Financial Leader &amp;{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #c8a96e 0%, #e8c98e 50%, #c8a96e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Strategic Advisor
              </span>
            </h2>

            <div className="space-y-4 text-white/65 text-base leading-relaxed">
              <p>
                Accomplished finance executive and consultant with over 22 years of progressive
                experience in corporate finance, financial management, corporate governance, secretarial practice, taxation, legal compliance and strategic business advisory. Currently serving as Chief Financial Officer (CFO) of a leading IT distribution company in Bangladesh.
              </p>
              <p>
                Combines strong academic qualifications—MBA in Finance, LLB, Chartered Secretary (CS), and Income Tax Practitioner (ITP)—with extensive hands-on experience in financial leadership, donor-funded projects, large conglomerates, and corporate advisory assignments.
              </p>
              <p>
                Proven ability to work with boards of directors, shareholders, banks, auditors, government agencies, development partners, and senior management to improve financial performance, governance, internal controls, and business sustainability.
              </p>
            </div>

            {/* Key highlights strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 max-w-[560px] py-6 border-t border-b border-white/[0.06] mt-8">
              {[
                "22+ Years of Progressive Experience",
                "Current CFO of IT Distribution Co.",
                "Finance + Law + Governance + Tax",
                "Corporate Governance & Compliance",
                "Treasury, Tax & VAT Expert",
                "MBA, LLB, CS, ITP Qualified",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <span className="text-[#c8a96e] text-sm shrink-0">✦</span>
                  <span className="text-white/80 text-[13px] font-medium tracking-wide">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Gold glow */}
              <div
                className="absolute -inset-4 rounded-3xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(200,169,110,0.15) 0%, transparent 70%)",
                }}
              />
              {/* Gold border frame */}
              <div
                className="absolute -inset-[3px] rounded-3xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(200,169,110,0.5) 0%, transparent 50%, rgba(200,169,110,0.3) 100%)",
                }}
              />
              <div className="relative w-[260px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10">
                <Image
                  src="/al-amin.jpg"
                  alt="MD. Al Amin Bhuiyan – CFO & Corporate Finance Consultant"
                  fill
                  className="object-cover object-top"
                  sizes="260px"
                />
                {/* Bottom overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(6,14,28,0.85) 0%, transparent 100%)",
                  }}
                />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white font-bold text-sm tracking-wide">
                    MD. Al Amin Bhuiyan
                  </p>
                  <p className="text-[#c8a96e] text-[10px] tracking-widest uppercase mt-0.5">
                    CFO | Finance Consultant
                  </p>
                </div>
              </div>
              {/* Floating badge */}
              <div
                className="absolute -top-4 -right-4 px-4 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase text-white shadow-lg border border-[#c8a96e]/30"
                style={{
                  background: "linear-gradient(135deg, #c8a96e 0%, #a07840 100%)",
                }}
              >
                22+ Yrs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
