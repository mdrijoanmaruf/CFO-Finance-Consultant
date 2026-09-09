import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function ContactSnippet() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background elements */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(10,22,40,0.6))",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] opacity-[0.08] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, #c8a96e 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Elevate Your{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #c8a96e 0%, #e8c98e 50%, #c8a96e 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Financial Strategy?
          </span>
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Let's discuss how customized financial advisory, rigorous governance, and strategic planning can drive sustainable growth for your organization.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-[#c8a96e] to-[#a07840] text-white shadow-lg shadow-[#c8a96e]/20 hover:shadow-[#c8a96e]/45 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Request a Consultation
            <FiArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="mailto:alamin.hs@gmail.com"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase bg-white/[0.05] border border-white/10 text-white hover:bg-white/[0.1] hover:border-[#c8a96e]/30 transition-all duration-300"
          >
            Email Directly
          </a>
        </div>
      </div>
    </section>
  );
}
