import { FiShield, FiEyeOff, FiAward } from "react-icons/fi";

const pillars = [
  {
    icon: FiShield,
    title: "Professional Integrity",
    body: "Every engagement is conducted with absolute professional integrity. I provide honest, objective advice — even when it is not what the client wants to hear. The interests of the client organization always come first.",
  },
  {
    icon: FiEyeOff,
    title: "Strict Confidentiality",
    body: "All information shared by clients — financial data, business challenges, governance issues, or strategic plans — is treated as strictly confidential. This is not just a professional obligation; it is a personal commitment. I never disclose client information without explicit permission.",
  },
  {
    icon: FiAward,
    title: "Professional Independence",
    body: "My advisory is free of conflicts of interest. I do not accept referral fees, hidden commissions, or any arrangement that could compromise the independence of my advice. Clients can be confident that my recommendations serve only their interests.",
  },
];

export default function IntegrityStatement() {
  return (
    <section className="relative py-16 lg:py-20 bg-transparent overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] opacity-[0.05] pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#c8a96e_0%,transparent_60%)] blur-[100px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
            <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
              My Commitment
            </span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            Confidentiality, Integrity &amp;{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #c8a96e 0%, #e8c98e 50%, #c8a96e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Independence
            </span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed">
            These three principles form the non-negotiable foundation of every
            engagement. They are not just professional standards — they are the
            personal commitments that define how I work.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-[#c8a96e]/25 p-8 rounded-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)] text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
                <div className="relative flex flex-col items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#0a1628]/80 border border-white/10 flex items-center justify-center group-hover:border-[#c8a96e]/50 group-hover:bg-[#c8a96e]/10 transition-all duration-500">
                    <Icon className="w-6 h-6 text-white/50 group-hover:text-[#c8a96e] transition-colors duration-500" />
                  </div>
                  <h3 className="text-white font-bold text-base">{pillar.title}</h3>
                  <p className="text-white/55 text-[14px] leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emphasis strip */}
        <div className="relative overflow-hidden rounded-2xl border border-[#c8a96e]/15 bg-[#c8a96e]/[0.04] px-8 py-6 text-center">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[100px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at top, rgba(200,169,110,0.1) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <p className="relative text-white/75 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            <span className="text-[#c8a96e] font-semibold">
              High Professional Integrity and Ethical Standards
            </span>{" "}
            — a principle drawn directly from my professional practice and
            affirmed by two decades of trusted advisory relationships with
            boards, shareholders, banks, auditors, and government bodies.
          </p>
        </div>
      </div>
    </section>
  );
}
