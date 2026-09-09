import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[76px]"
      aria-label="Hero section"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 60% 40%, rgba(200,169,110,0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 10% 50%, rgba(10,30,70,0.6) 0%, transparent 50%)",
        }}
      />

      {/* Horizontal rule accent top */}
      <div
        className="absolute top-[76px] left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(200,169,110,0.3) 30%, rgba(200,169,110,0.3) 70%, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 w-full pt-12 pb-8 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-12">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 sm:gap-12 xl:gap-20 items-center">
          {/* ── Left: Text content ── */}
          <div className="flex flex-col gap-7">

            {/* Main headline */}
            <div>
              <h1 className="text-white font-bold leading-[1.15] tracking-tight text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px]">
                MD. Al Amin{" "}
                <span
                  className="inline-block"
                  style={{
                    background:
                      "linear-gradient(90deg, #c8a96e 0%, #e8c98e 50%, #c8a96e 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Bhuiyan
                </span>
              </h1>
              <p className="mt-3 text-white/40 text-sm sm:text-base tracking-[0.15em] uppercase font-medium">
                CFO &nbsp;|&nbsp; Corporate Finance &amp; Governance Consultant
              </p>
            </div>

            {/* Positioning statement */}
            <p className="text-white/65 text-base sm:text-[17px] leading-relaxed max-w-[520px]">
              Delivering{" "}
              <span className="text-white/90 font-medium">
                CFO-level strategic thinking
              </span>
              , financial governance, and operational excellence for businesses,
              boards, and institutions — with 20+ years of hands-on leadership
              across diverse industries.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 max-w-[540px] py-4 border-t border-b border-white/5 my-2">
              {[
                "20+ Years Experience",
                "CFO-Level Perspective",
                "Business + Finance Understanding",
                "Governance & Control Focus",
                "Practical, Not Theoretical",
                "Confidential & Professional",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <span className="text-[#c8a96e] text-sm shrink-0">✦</span>
                  <span className="text-white/80 text-[13px] font-medium tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-row gap-2 sm:gap-3 mt-1 w-full">
              <Link
                href="/profile"
                id="hero-cta-profile"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-2 sm:px-7 py-3 sm:py-3.5 rounded-full text-[10px] sm:text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-[#c8a96e] to-[#a07840] text-white shadow-lg shadow-[#c8a96e]/25 hover:shadow-[#c8a96e]/45 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 whitespace-nowrap"
              >
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 hidden sm:block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                View Profile
              </Link>

              <Link
                href="/contact"
                id="hero-cta-primary"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-2 sm:px-7 py-3 sm:py-3.5 rounded-full text-[10px] sm:text-sm font-semibold tracking-wider uppercase border border-white/15 text-white/80 hover:border-[#c8a96e]/50 hover:text-white hover:bg-white/5 transition-all duration-300 whitespace-nowrap"
              >
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 hidden sm:block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span className="sm:hidden">Consultation</span>
                <span className="hidden sm:inline">Request a Consultation</span>
              </Link>
            </div>
          </div>

          {/* ── Right: Photo ── */}
          <div className="flex items-center justify-center w-full">
            <div className="relative">
              {/* Gold glow behind image */}
              <div
                className="absolute -inset-4 rounded-3xl pointer-events-none"
                aria-hidden="true"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(200,169,110,0.15) 0%, transparent 70%)",
                }}
              />

              {/* Gold accent border frame */}
              <div
                className="absolute -inset-[3px] rounded-3xl pointer-events-none"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(200,169,110,0.5) 0%, transparent 50%, rgba(200,169,110,0.3) 100%)",
                  borderRadius: "24px",
                }}
              />

              {/* Image container */}
              <div className="relative w-[320px] xl:w-[360px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10">
                <Image
                  src="/al-amin.jpg"
                  alt="MD. Al Amin Bhuiyan - Expert Corporate Finance Consultant and Fractional CFO in Bangladesh"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1280px) 320px, 360px"
                />
                {/* Bottom overlay for text badge */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(6,14,28,0.85) 0%, transparent 100%)",
                  }}
                />
                {/* Name badge inside image */}
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white font-bold text-base tracking-wide">
                    MD. Al Amin Bhuiyan
                  </p>
                  <p className="text-[#c8a96e] text-xs tracking-widest uppercase mt-0.5">
                    CFO | Finance Consultant
                  </p>
                </div>
              </div>

              {/* Floating badge — experience */}
              <div
                className="absolute -top-4 -right-4 px-4 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase text-white shadow-lg border border-[#c8a96e]/30"
                style={{
                  background: "linear-gradient(135deg, #c8a96e 0%, #a07840 100%)",
                }}
              >
                20+ Yrs
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
