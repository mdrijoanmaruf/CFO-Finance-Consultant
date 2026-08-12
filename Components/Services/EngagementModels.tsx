import { FiCalendar, FiRepeat, FiUser, FiGrid, FiLayers } from "react-icons/fi";

const models = [
  {
    icon: FiCalendar,
    title: "Advisory Assignment",
    description:
      "Structured, time-bound advisory mandates with clearly defined deliverables — ideal for strategic reviews, assessments, or one-off governance projects.",
  },
  {
    icon: FiRepeat,
    title: "Retainer-Based Advisory",
    description:
      "Ongoing monthly advisory access ensuring continuous strategic input, financial oversight, and expert guidance whenever your leadership team needs it.",
  },
  {
    icon: FiUser,
    title: "Fractional CFO",
    description:
      "Part-time, embedded CFO leadership integrated into your organization — delivering all the strategic firepower of a senior CFO at a fraction of the cost.",
  },
  {
    icon: FiGrid,
    title: "Project-Based Consulting",
    description:
      "Focused, outcome-driven engagements around specific challenges: ERP implementation, process transformation, compliance remediation, or financial restructuring.",
  },
  {
    icon: FiLayers,
    title: "Board / Management Advisory",
    description:
      "High-level advisory delivered directly to the board or senior management — covering governance, financial strategy, and performance reporting at the executive level.",
  },
];

export default function EngagementModels() {
  return (
    <section className="relative py-16 lg:py-24 bg-transparent overflow-hidden">
      {/* Top border accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(200,169,110,0.15) 30%, rgba(200,169,110,0.15) 70%, transparent)",
        }}
        aria-hidden="true"
      />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(200,169,110,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
            <h2 className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-sm">
              How We Engage
            </h2>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Flexible{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #c8a96e 0%, #e8c98e 50%, #c8a96e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Engagement Models
            </span>
          </h3>
          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            Every organization's needs are different. Choose the engagement model
            that best fits your timeline, budget, and the depth of advisory you
            require.
          </p>
        </div>

        {/* Models grid — 3 + 2 layout */}
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {models.slice(0, 3).map((model, index) => {
              const Icon = model.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-[#c8a96e]/25 p-7 rounded-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)]"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
                  <div className="relative flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0a1628]/80 border border-white/10 flex items-center justify-center group-hover:border-[#c8a96e]/50 group-hover:bg-[#c8a96e]/10 transition-all duration-500">
                      <Icon className="w-5 h-5 text-white/50 group-hover:text-[#c8a96e] transition-colors duration-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base mb-2 group-hover:text-white transition-colors">
                        {model.title}
                      </h4>
                      <p className="text-white/55 text-sm leading-relaxed">
                        {model.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto w-full">
            {models.slice(3).map((model, index) => {
              const Icon = model.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-[#c8a96e]/25 p-7 rounded-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
                  <div className="relative flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0a1628]/80 border border-white/10 flex items-center justify-center group-hover:border-[#c8a96e]/50 group-hover:bg-[#c8a96e]/10 transition-all duration-500">
                      <Icon className="w-5 h-5 text-white/50 group-hover:text-[#c8a96e] transition-colors duration-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base mb-2">
                        {model.title}
                      </h4>
                      <p className="text-white/55 text-sm leading-relaxed">
                        {model.description}
                      </p>
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
