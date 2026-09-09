import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const stats = [
  { value: "22+", label: "Years of Experience" },
  { value: "MBA", label: "Finance Qualification" },
  { value: "CS", label: "Chartered Secretary" },
  { value: "ITP", label: "Tax Practitioner" },
];

export default function AboutSnippet() {
  return (
    <section className="relative py-16 lg:py-20 bg-transparent overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-12 lg:gap-20 items-center">
          {/* Left – Introduction text */}
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
              <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
                About Me
              </span>
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
            </div>

            <h2 className="text-white font-bold leading-tight text-2xl sm:text-3xl lg:text-4xl mb-6">
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

            <div className="space-y-4 text-white/65 text-base leading-relaxed mb-10 max-w-2xl">
              <p>
                I am MD. Al Amin Bhuiyan — an accomplished finance executive and
                consultant with over 22 years of progressive experience in
                corporate finance, financial management, corporate governance,
                secretarial practice, taxation, legal compliance, and strategic
                business advisory.
              </p>
              <p>
                I hold an MBA in Finance, LLB, Chartered Secretary (CS), and
                Income Tax Practitioner (ITP) qualification — a rare combination
                that allows me to integrate financial, legal, governance, and tax
                perspectives into every advisory engagement.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase bg-white/[0.05] border border-white/10 text-white hover:bg-white/[0.1] hover:border-[#c8a96e]/30 transition-all duration-300 group"
            >
              Know More About Me
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right – Stats Grid */}
          <div className="relative">
            {/* Background glow for the stats area */}
            <div
              className="absolute -inset-10 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(200,169,110,0.08) 0%, transparent 70%)",
              }}
            />
            
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:border-[#c8a96e]/30 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1 hover:shadow-lg shadow-black/50 aspect-square"
                >
                  <p
                    className="text-3xl sm:text-4xl font-black mb-3"
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
                  <p className="text-white/60 text-xs sm:text-[11px] tracking-widest uppercase font-semibold">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
