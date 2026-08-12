import {
  FiTrendingUp,
  FiShield,
  FiSettings,
  FiDollarSign,
  FiClipboard,
  FiPackage,
  FiGlobe,
  FiBarChart2,
  FiUsers,
  FiLayers,
} from "react-icons/fi";

const expertiseAreas = [
  {
    icon: FiTrendingUp,
    title: "Strategic Financial Management",
    items: [
      "Financial strategy & business planning",
      "Budgeting, forecasting & scenario analysis",
      "Profitability analysis & cost optimization",
      "Financial performance improvement",
    ],
  },
  {
    icon: FiShield,
    title: "Corporate Governance & Compliance",
    items: [
      "Governance framework design",
      "Board advisory & reporting",
      "Regulatory & statutory compliance",
      "Internal control frameworks",
    ],
  },
  {
    icon: FiDollarSign,
    title: "Treasury & Banking",
    items: [
      "Cash flow & liquidity management",
      "Banking relationship management",
      "Loan structuring & financing strategy",
      "Foreign exchange & interest cost management",
    ],
  },
  {
    icon: FiClipboard,
    title: "Tax & Regulatory Advisory",
    items: [
      "Corporate tax planning",
      "VAT advisory & compliance",
      "AIT management",
      "Compliance risk assessment",
    ],
  },
  {
    icon: FiSettings,
    title: "Process & Systems Improvement",
    items: [
      "Finance function assessment & restructuring",
      "SOP & policy development",
      "ERP & MIS implementation",
      "KPI design & performance dashboards",
    ],
  },
  {
    icon: FiPackage,
    title: "Procurement & Contract Advisory",
    items: [
      "Procurement process review",
      "Tender evaluation & contract management",
      "Commercial risk assessment",
      "Vendor management systems",
    ],
  },
  {
    icon: FiGlobe,
    title: "Donor-Funded Project Finance",
    items: [
      "Financial management for NGO/development projects",
      "Donor compliance & reporting",
      "Budget management",
      "Project financial monitoring",
    ],
  },
  {
    icon: FiBarChart2,
    title: "Financial Reporting & MIS",
    items: [
      "Management reporting systems",
      "Board-level financial dashboards",
      "Financial statement analysis",
      "Working capital reporting",
    ],
  },
  {
    icon: FiUsers,
    title: "Finance Team Leadership",
    items: [
      "Finance team restructuring & mentoring",
      "Capacity building & training",
      "Performance management",
      "Succession planning for finance functions",
    ],
  },
  {
    icon: FiLayers,
    title: "Fractional CFO Services",
    items: [
      "Part-time embedded CFO leadership",
      "Strategic financial oversight",
      "Investor & stakeholder reporting",
      "Board-level representation",
    ],
  },
];

export default function CoreExpertise() {
  return (
    <section className="relative py-16 lg:py-24 bg-transparent overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[800px] opacity-[0.05] pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#c8a96e_0%,transparent_60%)] blur-[120px]" />
      </div>

      {/* Decorative vertical grid lines */}
      <div className="absolute inset-0 flex justify-between px-6 lg:px-10 max-w-[1400px] mx-auto pointer-events-none opacity-20">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
            <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
              Areas of Expertise
            </span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            Core{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #c8a96e 0%, #e8c98e 50%, #c8a96e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Expertise
            </span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed">
            A decade-spanning mastery across 10 financial disciplines — each
            area built from real-world practice, not theory.
          </p>
        </div>

        {/* Expertise grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {expertiseAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <div
                key={i}
                className="group relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-[#c8a96e]/25 p-6 rounded-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                <div className="relative flex flex-col gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0a1628]/80 border border-white/10 flex items-center justify-center group-hover:border-[#c8a96e]/50 group-hover:bg-[#c8a96e]/10 transition-all duration-500">
                    <Icon className="w-5 h-5 text-white/50 group-hover:text-[#c8a96e] transition-colors duration-500" />
                  </div>
                  <h3 className="text-white font-bold text-sm leading-snug">
                    {area.title}
                  </h3>
                  <ul className="flex flex-col gap-1.5">
                    {area.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[12px] text-white/50 leading-snug"
                      >
                        <span className="text-[#c8a96e]/60 mt-0.5 shrink-0 text-[9px]">
                          ✦
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
