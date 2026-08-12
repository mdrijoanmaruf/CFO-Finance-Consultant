import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const expertiseAreas = [
  "CFO & Strategic Finance Advisory",
  "Corporate Finance & Financial Strategy",
  "Treasury & Cash Flow Management",
  "Working Capital Optimization",
  "Budgeting, Forecasting & Cost Control",
  "Financial Planning & Analysis (FP&A)",
  "Corporate Governance & Board Advisory",
  "Internal Control & Risk Management",
  "Tax, VAT & Regulatory Compliance",
  "Banking, Trade Finance & Debt Management",
  "Financial Restructuring & Liquidity Management",
  "Procurement & Contract Management",
  "ERP, MIS & Management Reporting",
  "Business Process Re-engineering",
  "SOP, Policy & Delegation of Authority Development",
  "Financial Due Diligence & Business Review",
  "Donor-Funded Project Financial Management",
  "Company Secretarial & Corporate Compliance",
  "Strategic Business & Management Advisory",
  "ERP & MIS Implementation",
];

export default function AreasOfExpertise() {
  return (
    <section className="relative py-16 lg:py-20 bg-transparent overflow-hidden">
      {/* Decorative vertical grid lines */}
      <div className="absolute inset-0 flex justify-between px-6 lg:px-10 max-w-[1400px] mx-auto pointer-events-none opacity-20">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-16 items-start">
          {/* Left – Header */}
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
              <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
                Capabilities
              </span>
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 leading-tight">
              Areas of{" "}
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
            <p className="text-white/55 text-sm leading-relaxed mb-8">
              A broad and deep capability set — built across two decades of
              practical experience at the intersection of finance, law,
              governance, and business advisory.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 text-sm font-semibold text-[#c8a96e] hover:text-white transition-colors duration-300 group"
            >
              Explore All Services
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Right – Expertise tags grid */}
          <div className="flex flex-wrap gap-3">
            {expertiseAreas.map((area) => (
              <span
                key={area}
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.06] hover:border-[#c8a96e]/30 text-white/65 hover:text-white text-[13px] font-medium transition-all duration-300 cursor-default"
              >
                <span className="text-[#c8a96e]/50 group-hover:text-[#c8a96e] text-[9px] transition-colors duration-300">
                  ✦
                </span>
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
