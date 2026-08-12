const approaches = [
  {
    icon: "⬡",
    title: "Collaborative, Not Prescriptive",
    body: "I work alongside your leadership team — not above it. The best outcomes emerge from a genuine partnership where I understand your business deeply before offering solutions. I listen first, then advise.",
  },
  {
    icon: "⬡",
    title: "Board-Ready Communication",
    body: "I translate complex financial analysis into clear, concise, and compelling narratives for boards, owners, and senior management. Financial insight is only valuable when it can be understood and acted upon.",
  },
  {
    icon: "⬡",
    title: "Implementation-Oriented",
    body: "I don't just present recommendations and leave. I stay engaged to ensure that what we plan actually gets implemented — that policies are embedded, systems are running, and the team can sustain the change independently.",
  },
  {
    icon: "⬡",
    title: "Stakeholder-Aware",
    body: "Every business has a complex web of stakeholders: banks, auditors, regulators, shareholders, and management. My 22+ years have been spent navigating these relationships — I understand how to manage expectations and build confidence across all of them.",
  },
  {
    icon: "⬡",
    title: "Risk-Conscious",
    body: "Every financial decision carries risk. My approach is always to surface the risks clearly, quantify them where possible, and ensure that leadership makes informed decisions — not decisions made in the dark.",
  },
  {
    icon: "⬡",
    title: "Long-Term Perspective",
    body: "Short-term wins matter, but I advise with the long term in mind. Governance frameworks, financial processes, and control systems are built to last — creating sustainable value for the organization beyond the engagement.",
  },
];

export default function LeadershipApproach() {
  return (
    <section className="relative py-16 lg:py-24 bg-transparent overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] h-[700px] opacity-[0.05] pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#c8a96e_0%,transparent_60%)] blur-[120px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
            <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
              How I Work
            </span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            Leadership{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #c8a96e 0%, #e8c98e 50%, #c8a96e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Approach
            </span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed">
            The way I engage with clients, leadership teams, and organizations —
            shaped by 22+ years of working at the intersection of finance,
            governance, and strategic business leadership.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {approaches.map((a, i) => (
            <div
              key={i}
              className="group relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-[#c8a96e]/25 p-7 rounded-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
              <div className="relative flex flex-col gap-4">
                {/* Accent bar */}
                <div
                  className="w-10 h-1 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #c8a96e 0%, #a07840 100%)",
                  }}
                />
                <h3 className="text-white font-bold text-base leading-snug">
                  {a.title}
                </h3>
                <p className="text-white/55 text-[14px] leading-relaxed">
                  {a.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
