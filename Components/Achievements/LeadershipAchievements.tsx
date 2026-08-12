import { FiUsers, FiAward, FiShield } from "react-icons/fi";

const leadershipItems = [
  {
    icon: FiUsers,
    title: "Board-Level Advisory",
    body: "Advised Boards of Directors and senior leadership teams across multiple organizations on financial strategy, business performance, risk, investment decisions, and governance frameworks.",
  },
  {
    icon: FiShield,
    title: "Organizational Governance Reform",
    body: "Spearheaded the design and implementation of corporate governance frameworks, including internal control systems, delegation of authority, and risk management policies — resulting in measurably stronger accountability.",
  },
  {
    icon: FiAward,
    title: "Finance Team Leadership",
    body: "Led and mentored finance, accounts, treasury, and tax teams — building functional capability, standardizing processes, and fostering a culture of financial discipline and professional integrity.",
  },
  {
    icon: FiUsers,
    title: "Cross-Functional Stakeholder Management",
    body: "Managed relationships with banks, external auditors, tax and VAT authorities, regulatory bodies, international development partners, and senior business leadership — bridging complex stakeholder landscapes.",
  },
];

export default function LeadershipAchievements() {
  return (
    <section className="relative py-16 lg:py-24 bg-transparent overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 0% 50%, rgba(200,169,110,0.05) 0%, transparent 70%)",
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
          {/* Left – Section header */}
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
              <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
                Leadership
              </span>
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 leading-tight">
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
                Achievements
              </span>
            </h2>
            <p className="text-white/55 text-sm leading-relaxed">
              Demonstrating financial leadership that goes beyond number-crunching —
              influencing strategy, building teams, governing organizations, and
              managing critical stakeholder relationships at the highest levels.
            </p>

            {/* Quote block */}
            <div className="mt-8 p-6 rounded-2xl bg-white/[0.02] border border-[#c8a96e]/20 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, #c8a96e, transparent)" }}
              />
              <p className="text-[#c8a96e]/80 text-3xl font-black leading-none mb-3">"</p>
              <p className="text-white/70 text-sm leading-relaxed italic">
                True financial leadership means enabling the organization to make better
                decisions — not just accounting for the ones already made.
              </p>
              <p className="text-[#c8a96e] text-xs font-semibold tracking-wider uppercase mt-4">
                — MD. Al Amin Bhuiyan
              </p>
            </div>
          </div>

          {/* Right – Leadership cards */}
          <div className="flex flex-col gap-5">
            {leadershipItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-[#c8a96e]/25 p-7 rounded-2xl transition-all duration-500 overflow-hidden hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c8a96e]/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
                  <div className="relative flex gap-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border border-[#c8a96e]/20"
                      style={{ background: "rgba(200,169,110,0.07)" }}
                    >
                      <Icon className="w-5 h-5 text-[#c8a96e]" />
                    </div>
                    <div>
                      <div
                        className="w-8 h-0.5 rounded-full mb-4"
                        style={{
                          background: "linear-gradient(90deg, #c8a96e 0%, #a07840 100%)",
                        }}
                      />
                      <h3 className="text-white font-bold text-base mb-3">{item.title}</h3>
                      <p className="text-white/55 text-[14px] leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
