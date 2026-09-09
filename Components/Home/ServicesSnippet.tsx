import Link from "next/link";
import {
  FiTrendingUp,
  FiShield,
  FiSettings,
  FiDollarSign,
  FiArrowRight,
} from "react-icons/fi";

const services = [
  {
    id: "01",
    icon: FiTrendingUp,
    title: "CFO & Strategic Finance Advisory",
    description: "Institutional-grade financial strategy and CFO-level leadership without the overhead of a full-time executive.",
  },
  {
    id: "02",
    icon: FiShield,
    title: "Corporate Governance & Board Advisory",
    description: "Structuring robust governance frameworks and delivering board-level financial intelligence to ensure accountability.",
  },
  {
    id: "03",
    icon: FiSettings,
    title: "Financial Management & Improvement",
    description: "Assessing, redesigning, and elevating your finance function to match the ambition of your organization.",
  },
  {
    id: "04",
    icon: FiDollarSign,
    title: "Treasury, Banking & Financing",
    description: "Comprehensive treasury and banking advisory to ensure your organization maintains optimal liquidity.",
  },
];

export default function ServicesSnippet() {
  return (
    <section className="relative py-16 lg:py-24 bg-transparent overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
            <h2 className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
              Services
            </h2>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
          </div>
          <h3 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
            Comprehensive Advisory{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #c8a96e 0%, #e8c98e 50%, #c8a96e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Across 7 Pillars
            </span>
          </h3>
          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
            Each service area is built on deep industry knowledge and decades of
            applied experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-[#c8a96e]/25 p-6 sm:p-8 rounded-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
                <span className="absolute top-5 right-6 text-[11px] font-bold tracking-[0.25em] text-white/10 uppercase select-none">
                  {service.id}
                </span>

                <div className="relative flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0a1628]/80 border border-white/10 flex items-center justify-center group-hover:border-[#c8a96e]/50 group-hover:bg-[#c8a96e]/10 transition-all duration-500 shadow-lg shrink-0">
                    <Icon className="w-5 h-5 text-white/50 group-hover:text-[#c8a96e] transition-colors duration-500" />
                  </div>

                  <h4 className="text-white font-bold text-lg leading-snug group-hover:text-white transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase bg-white/[0.05] border border-white/10 text-white hover:bg-white/[0.1] hover:border-[#c8a96e]/30 transition-all duration-300 group"
          >
            View All Services
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
