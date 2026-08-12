import Link from "next/link";
import { FiArrowRight, FiMail, FiPhone } from "react-icons/fi";

export default function InsightsCTA() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Newsletter block */}
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] p-8 lg:p-10">
            <div
              className="absolute top-0 left-0 right-0 h-px pointer-events-none"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(200,169,110,0.4), transparent)",
              }}
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 bg-white/5 border border-[#c8a96e]/20 rounded-full">
                <span className="text-[#c8a96e] text-xs font-bold tracking-[0.15em] uppercase">
                  Stay Informed
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
                Get Finance Insights{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #c8a96e 0%, #e8c98e 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Delivered
                </span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-7">
                Practical perspectives on corporate finance, governance, treasury,
                and strategic leadership — sent directly to your inbox when new
                insights are published.
              </p>
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 bg-white/[0.03] border border-white/15 text-white placeholder-white/30 rounded-xl text-sm focus:border-[#c8a96e]/50 focus:bg-white/[0.05] outline-none transition-all"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold tracking-wide bg-gradient-to-r from-[#c8a96e] to-[#a07840] text-white hover:shadow-[0_0_20px_rgba(200,169,110,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 whitespace-nowrap"
                >
                  Subscribe
                  <FiArrowRight className="w-4 h-4" />
                </button>
              </form>
              <p className="text-white/30 text-xs mt-3">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Discuss a Challenge block */}
          <div className="relative overflow-hidden rounded-3xl border border-[#c8a96e]/20 bg-white/[0.02] p-8 lg:p-10">
            {/* Glow */}
            <div
              className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at top right, rgba(200,169,110,0.10) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute top-0 left-0 right-0 h-px pointer-events-none"
              style={{
                background: "linear-gradient(90deg, #c8a96e, transparent)",
              }}
            />

            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#c8a96e]/20 rounded-tr-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#c8a96e]/20 rounded-bl-3xl pointer-events-none" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 bg-white/5 border border-[#c8a96e]/30 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8a96e] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8a96e]" />
                </span>
                <span className="text-[#c8a96e] text-xs font-bold tracking-[0.15em] uppercase">
                  Available for Advisory
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
                Discuss a{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #c8a96e 0%, #e8c98e 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Finance Challenge
                </span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-7">
                Reading about financial principles is one thing. Getting expert
                advisory tailored to your specific situation is another. Reach out
                to discuss your corporate finance, governance, or strategic challenge.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wide bg-gradient-to-r from-[#c8a96e] to-[#a07840] text-white shadow-lg shadow-[#c8a96e]/20 hover:shadow-[#c8a96e]/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
                >
                  Request a Consultation
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:alamin.hs@gmail.com"
                  className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-[#c8a96e] transition-colors duration-300"
                >
                  <FiMail className="w-4 h-4" />
                  alamin.hs@gmail.com
                </a>
                <span className="hidden sm:block w-px h-4 bg-white/15 self-center" />
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
      </div>
    </section>
  );
}
