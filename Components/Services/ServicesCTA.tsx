import Link from "next/link";
import { FiArrowRight, FiMail, FiPhone } from "react-icons/fi";

export default function ServicesCTA() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">


      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        <div className="relative overflow-hidden rounded-3xl border border-[#c8a96e]/20 bg-white/[0.02] p-8 sm:p-12 lg:p-16 text-center">
          {/* Background glow inside the card */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at top, rgba(200,169,110,0.12) 0%, transparent 70%)",
            }}
          />

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#c8a96e]/20 rounded-tl-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#c8a96e]/20 rounded-tr-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#c8a96e]/20 rounded-bl-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#c8a96e]/20 rounded-br-3xl pointer-events-none" />

          <div className="relative">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white/5 border border-[#c8a96e]/30 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8a96e] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8a96e]" />
              </span>
              <span className="text-[#c8a96e] text-xs font-bold tracking-[0.2em] uppercase">
                Available for Engagements
              </span>
            </div>

            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
              Ready to Transform{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #c8a96e 0%, #e8c98e 50%, #c8a96e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Your Finances?
              </span>
            </h2>

            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Let's discuss your specific challenges and goals. Schedule a confidential
              consultation and discover how expert CFO-level advisory can unlock
              sustainable growth for your organization.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-[#c8a96e] to-[#a07840] text-white shadow-lg shadow-[#c8a96e]/25 hover:shadow-[#c8a96e]/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 min-w-[220px]"
              >
                Request a Consultation
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Divider */}
            <div className="h-px w-48 bg-white/10 mx-auto mb-8" />

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:alamin.hs@gmail.com"
                className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-[#c8a96e] transition-colors duration-300"
              >
                <FiMail className="w-4 h-4" />
                alamin.hs@gmail.com
              </a>
              <span className="hidden sm:block w-px h-4 bg-white/15" />
              <a
                href="tel:01911089774"
                className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-[#c8a96e] transition-colors duration-300"
              >
                <FiPhone className="w-4 h-4" />
                01911089774
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
