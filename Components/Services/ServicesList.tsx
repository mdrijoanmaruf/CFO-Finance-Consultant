import {
  FiTrendingUp,
  FiShield,
  FiSettings,
  FiDollarSign,
  FiClipboard,
  FiPackage,
  FiGlobe,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";
import Link from "next/link";

const services = [
  {
    id: "01",
    icon: FiTrendingUp,
    title: "CFO & Strategic Finance Advisory",
    tagline: "Fractional & Outsourced CFO Leadership",
    description:
      "Institutional-grade financial strategy and CFO-level leadership without the overhead of a full-time executive. Ideal for SMEs, corporates, and fast-scaling organizations.",
    capabilities: [
      "Fractional / Outsourced CFO",
      "Financial Strategy & Business Planning",
      "Budgeting & Forecasting",
      "Management Reporting",
      "Profitability Analysis",
      "Working-Capital Optimization",
      "Financial Performance Improvement",
    ],
  },
  {
    id: "02",
    icon: FiShield,
    title: "Corporate Governance & Board Advisory",
    tagline: "Governance Frameworks & Board-Level Support",
    description:
      "Structuring robust governance frameworks and delivering board-level financial intelligence to ensure accountability, compliance, and strategic alignment.",
    capabilities: [
      "Governance Framework Design",
      "Board Reporting & Financial Advisory",
      "Delegation of Authority (DoA)",
      "Internal Control Framework",
      "Policy Development",
      "Risk Management",
      "Governance Improvement Programs",
    ],
  },
  {
    id: "03",
    icon: FiSettings,
    title: "Financial Management & Process Improvement",
    tagline: "Finance Function Transformation",
    description:
      "Assessing, redesigning, and elevating your finance function — from SOPs and MIS to ERP enablement and team restructuring — to match the ambition of your organization.",
    capabilities: [
      "Finance Function Assessment",
      "SOP Development",
      "Internal Control Improvement",
      "MIS Development",
      "ERP / Process Improvement",
      "Cost-Control Systems",
      "KPI Development & Finance Team Restructuring",
    ],
  },
  {
    id: "04",
    icon: FiDollarSign,
    title: "Treasury, Banking & Financing",
    tagline: "Cash Flow, Liquidity & Capital Strategy",
    description:
      "Comprehensive treasury and banking advisory to ensure your organization maintains optimal liquidity, manages financing costs, and builds strong banking relationships.",
    capabilities: [
      "Cash-Flow Management",
      "Liquidity Planning",
      "Banking Relationship Management",
      "Loan Structuring",
      "Financing Strategy",
      "Working-Capital Financing",
      "Foreign Exchange Exposure & Interest Cost Management",
    ],
  },
  {
    id: "05",
    icon: FiClipboard,
    title: "Tax, VAT & Regulatory Compliance",
    tagline: "Compliance Risk & Advisory",
    description:
      "Navigating the complex regulatory landscape with proactive tax planning, VAT advisory, and compliance risk management to keep your business fully protected.",
    capabilities: [
      "Tax Planning",
      "VAT Advisory",
      "Regulatory Compliance",
      "AIT Management",
      "Tax / VAT Process Review",
      "Compliance Risk Assessment",
    ],
  },
  {
    id: "06",
    icon: FiPackage,
    title: "Procurement & Contract Advisory",
    tagline: "Commercial Risk & Vendor Management",
    description:
      "Strengthening procurement processes, evaluating contracts for commercial risk, and implementing controls that protect your organization's interests.",
    capabilities: [
      "Procurement Process Review",
      "Tender Evaluation",
      "Contract Review",
      "Commercial Risk Assessment",
      "Vendor Management",
      "Procurement Controls",
      "Contract Management",
    ],
  },
  {
    id: "07",
    icon: FiGlobe,
    title: "Donor-Funded Project Advisory",
    tagline: "NGO & Development Sector Finance",
    description:
      "Specialized financial management advisory for donor-funded projects — ensuring compliance, accurate reporting, and strong internal controls throughout the project lifecycle.",
    capabilities: [
      "Financial Management",
      "Budget Management",
      "Donor Compliance",
      "Financial Reporting",
      "Internal Control",
      "Procurement Compliance",
      "Project Financial Monitoring",
    ],
  },
];

export default function ServicesList() {
  return (
    <section
      id="services"
      className="relative py-16 lg:py-24 bg-transparent overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[900px] opacity-[0.06] pointer-events-none"
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
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
            <h2 className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
              Service Areas
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
          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            Each service area is built on deep industry knowledge and decades of
            applied experience — designed to create measurable impact for your
            organization.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            // Make the last card span full width on xl when count is odd
            const isLast = index === services.length - 1;
            const isOdd = services.length % 3 !== 0;
            return (
              <div
                key={service.id}
                className={`group relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-[#c8a96e]/25 p-7 sm:p-8 rounded-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)] ${
                  isLast && isOdd ? "xl:col-span-3 max-w-xl xl:mx-auto" : ""
                }`}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                {/* Service number */}
                <span className="absolute top-6 right-7 text-[11px] font-bold tracking-[0.25em] text-white/15 uppercase select-none">
                  {service.id}
                </span>

                <div className="relative flex flex-col gap-5">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#0a1628]/80 border border-white/10 flex items-center justify-center group-hover:border-[#c8a96e]/50 group-hover:bg-[#c8a96e]/10 transition-all duration-500 shadow-lg shrink-0">
                    <Icon className="w-6 h-6 text-white/50 group-hover:text-[#c8a96e] transition-colors duration-500" />
                  </div>

                  {/* Title & tagline */}
                  <div>
                    <h4 className="text-white font-bold text-lg leading-snug mb-1 group-hover:text-white transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-[#c8a96e]/80 text-xs font-semibold tracking-wider uppercase">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-white/55 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-white/[0.06] group-hover:bg-[#c8a96e]/20 transition-colors duration-500" />

                  {/* Capabilities */}
                  <ul className="flex flex-col gap-2">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2.5">
                        <FiCheck className="w-3.5 h-3.5 text-[#c8a96e] mt-0.5 shrink-0" />
                        <span className="text-white/65 text-[13px] leading-snug">
                          {cap}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA link */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-[#c8a96e] text-sm font-semibold mt-2 group/cta hover:gap-3 transition-all duration-300 w-fit"
                  >
                    Enquire about this service
                    <FiArrowRight className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
