import Image from "next/image";

const stats = [
  { value: "22+", label: "Years of Experience" },
  { value: "MBA", label: "Finance Qualification" },
  { value: "CS", label: "Chartered Secretary" },
  { value: "ITP", label: "Tax Practitioner" },
];

export default function AboutIntro() {
  return (
    <section className="relative py-16 lg:py-20 bg-transparent overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left – Introduction text */}
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
              <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
                Introduction
              </span>
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
            </div>

            <h2 className="text-white font-bold leading-tight text-2xl sm:text-3xl mb-6">
              Finance + Law + Governance +{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #c8a96e 0%, #e8c98e 50%, #c8a96e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Tax
              </span>
            </h2>

            <div className="space-y-4 text-white/65 text-base leading-relaxed">
              <p>
                I am MD. Al Amin Bhuiyan — an accomplished finance executive and
                consultant with over 22 years of progressive experience in
                corporate finance, financial management, corporate governance,
                secretarial practice, taxation, legal compliance, and strategic
                business advisory.
              </p>
              <p>
                Currently serving as Chief Financial Officer (CFO) of a leading
                IT distribution company in Bangladesh — Global Brand PLC — with
                an annual turnover of approximately BDT 1,200 Crore. This
                role brings together the full breadth of my expertise: financial
                strategy, treasury management, board advisory, governance, and
                regulatory compliance.
              </p>
              <p>
                I hold an MBA in Finance, LLB, Chartered Secretary (CS), and
                Income Tax Practitioner (ITP) qualification — a rare combination
                that allows me to integrate financial, legal, governance, and tax
                perspectives into every advisory engagement. This multidisciplinary
                foundation is what sets my practice apart.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 text-center hover:border-[#c8a96e]/20 transition-colors duration-300"
                >
                  <p
                    className="text-2xl font-black mb-1"
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

          {/* Right – Photo */}
          <div className="flex justify-center lg:justify-end lg:pt-4">
            <div className="relative">
              {/* Gold glow */}
              <div
                className="absolute -inset-6 rounded-3xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(200,169,110,0.12) 0%, transparent 70%)",
                }}
              />
              {/* Gold gradient border */}
              <div
                className="absolute -inset-[3px] rounded-3xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(200,169,110,0.4) 0%, transparent 50%, rgba(200,169,110,0.25) 100%)",
                }}
              />
              <div className="relative w-[280px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10">
                <Image
                  src="/al-amin.jpg"
                  alt="MD. Al Amin Bhuiyan – CFO & Corporate Finance Consultant"
                  fill
                  className="object-cover object-top"
                  sizes="280px"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(6,14,28,0.9) 0%, transparent 100%)",
                  }}
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-sm tracking-wide">
                    MD. Al Amin Bhuiyan
                  </p>
                  <p className="text-[#c8a96e] text-[10px] tracking-widest uppercase mt-0.5">
                    CFO | Finance Consultant
                  </p>
                </div>
              </div>
              {/* Experience badge */}
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
