export default function ServicesIntro() {
  const stats = [
    { value: "20+", label: "Years of Experience" },
    { value: "7", label: "Service Pillars" },
    { value: "100+", label: "Engagements Delivered" },
    { value: "15+", label: "Industries Served" },
  ];

  return (
    <section className="relative py-16 lg:py-20 bg-transparent overflow-hidden">
      {/* Subtle horizontal divider accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(200,169,110,0.15) 30%, rgba(200,169,110,0.15) 70%, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left – Statement */}
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
              <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-sm">
                Our Approach
              </span>
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
            </div>

            <h2 className="text-white font-bold leading-tight text-2xl sm:text-3xl lg:text-4xl mb-5">
              CFO-Level Thinking.{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #c8a96e 0%, #e8c98e 50%, #c8a96e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Practical Results.
              </span>
            </h2>

            <p className="text-white/60 text-base sm:text-[17px] leading-relaxed mb-6">
              With over two decades of hands-on leadership across finance,
              governance, and corporate advisory, I bring institutional-grade
              expertise directly to your business — without the overhead of a
              full-time executive hire.
            </p>
            <p className="text-white/60 text-base leading-relaxed">
              Every engagement is built around your specific context — whether
              you need a fractional CFO, a governance framework, a treasury
              strategy, or end-to-end financial transformation. I work alongside
              your team to deliver outcomes that stick.
            </p>
          </div>

          {/* Right – Stats grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-[#c8a96e]/25 p-6 sm:p-8 rounded-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
                <div className="relative">
                  <p
                    className="text-3xl sm:text-4xl font-bold mb-2"
                    style={{
                      background:
                        "linear-gradient(90deg, #c8a96e 0%, #e8c98e 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-white/50 text-sm font-medium tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(200,169,110,0.12) 30%, rgba(200,169,110,0.12) 70%, transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
