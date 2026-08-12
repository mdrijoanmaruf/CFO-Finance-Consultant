const principles = [
  {
    no: "01",
    title: "Business First, Finance Second",
    body: "Financial advice that is disconnected from business reality is useless. Every recommendation I make is grounded in how the business actually works — its people, operations, market, and goals. Finance should serve the business, not the other way around.",
  },
  {
    no: "02",
    title: "Outcomes Over Activity",
    body: "A busy finance function that doesn't deliver outcomes is just overhead. I focus relentlessly on what actually moves the needle: better cash flow, stronger controls, sharper governance, and smarter decisions — not reports for the sake of reports.",
  },
  {
    no: "03",
    title: "Simplicity Cuts Through Complexity",
    body: "I have seen organizations paralyzed by complexity they created themselves. My approach is to simplify: clear frameworks, understandable policies, and practical solutions that people at every level of the organization can understand and implement.",
  },
  {
    no: "04",
    title: "Integrated Thinking",
    body: "Financial decisions don't happen in isolation. They intersect with legal, tax, governance, and commercial considerations. My MBA, LLB, CS, and ITP qualifications allow me to see and navigate these intersections — where most advisors see only one dimension.",
  },
];

export default function ProfessionalPhilosophy() {
  return (
    <section className="relative py-16 lg:py-24 bg-transparent overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 85% 50%, rgba(200,169,110,0.05) 0%, transparent 70%)",
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
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-start">
          {/* Left – Section header (sticky on desktop) */}
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
              <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
                My Approach
              </span>
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 leading-tight">
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
                Philosophy
              </span>
            </h2>
            <p className="text-white/55 text-sm leading-relaxed">
              The principles that guide every engagement — from a fractional CFO
              assignment to a one-day governance review. These are not just words;
              they shape the way I work with every client.
            </p>

            {/* Decorative quote */}
            <div className="mt-8 p-6 rounded-2xl bg-white/[0.02] border border-[#c8a96e]/20 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, #c8a96e, transparent)",
                }}
              />
              <p className="text-[#c8a96e]/80 text-3xl font-black leading-none mb-3">"</p>
              <p className="text-white/70 text-sm leading-relaxed italic">
                Finance is not just about numbers. It's about enabling better
                decisions, stronger organizations, and sustainable businesses.
              </p>
              <p className="text-[#c8a96e] text-xs font-semibold tracking-wider uppercase mt-4">
                — MD. Al Amin Bhuiyan
              </p>
            </div>
          </div>

          {/* Right – Principle cards */}
          <div className="flex flex-col gap-5">
            {principles.map((p) => (
              <div
                key={p.no}
                className="group relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-[#c8a96e]/25 p-7 rounded-2xl transition-all duration-500 overflow-hidden hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#c8a96e]/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                {/* Number */}
                <span className="absolute top-5 right-6 text-[11px] font-bold tracking-[0.25em] text-white/12 uppercase select-none">
                  {p.no}
                </span>

                <div className="relative">
                  {/* Gold accent bar */}
                  <div
                    className="w-8 h-0.5 rounded-full mb-4"
                    style={{
                      background:
                        "linear-gradient(90deg, #c8a96e 0%, #a07840 100%)",
                    }}
                  />
                  <h3 className="text-white font-bold text-base mb-3">
                    {p.title}
                  </h3>
                  <p className="text-white/55 text-[14px] leading-relaxed">
                    {p.body}
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
