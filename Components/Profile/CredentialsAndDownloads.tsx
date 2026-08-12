import { FiDownload, FiAward, FiBook, FiShield, FiFileText } from "react-icons/fi";

const credentials = [
  {
    icon: FiBook,
    abbr: "MBA",
    title: "Master of Business Administration",
    field: "Finance",
    note: "Specialization in Corporate Finance & Strategy",
  },
  {
    icon: FiShield,
    abbr: "LLB",
    title: "Bachelor of Laws",
    field: "LLB (Hon's)",
    note: "Legal foundation for corporate & regulatory practice",
  },
  {
    icon: FiAward,
    abbr: "CS",
    title: "Chartered Secretary",
    field: "Corporate Governance",
    note: "Governance, compliance & board secretarial practice",
  },
  {
    icon: FiFileText,
    abbr: "ITP",
    title: "Income Tax Practitioner",
    field: "Tax Advisory",
    note: "Authorized practitioner – NBR, Bangladesh",
  },
];

export default function CredentialsAndDownloads() {
  return (
    <section id="cv-downloads" className="relative py-16 lg:py-20 bg-transparent overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] opacity-[0.05] pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#c8a96e_0%,transparent_60%)] blur-[100px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
            <span className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-xs">
              Academic & Professional Credentials
            </span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
            Qualifications &amp;{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #c8a96e 0%, #e8c98e 50%, #c8a96e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Certifications
            </span>
          </h2>
        </div>

        {/* Credential cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {credentials.map((cred, i) => {
            const Icon = cred.icon;
            return (
              <div
                key={i}
                className="group relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-[#c8a96e]/30 p-6 rounded-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)]"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                <div className="relative flex flex-col gap-4">
                  {/* Icon + Abbr */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#0a1628]/80 border border-white/10 flex items-center justify-center group-hover:border-[#c8a96e]/50 group-hover:bg-[#c8a96e]/10 transition-all duration-500">
                      <Icon className="w-5 h-5 text-white/50 group-hover:text-[#c8a96e] transition-colors duration-500" />
                    </div>
                    <span
                      className="text-2xl font-black tracking-tight"
                      style={{
                        background:
                          "linear-gradient(90deg, #c8a96e 0%, #e8c98e 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {cred.abbr}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-sm mb-0.5 leading-snug">
                      {cred.title}
                    </h3>
                    <p className="text-[#c8a96e]/80 text-[11px] font-semibold tracking-wider uppercase mb-2">
                      {cred.field}
                    </p>
                    <p className="text-white/45 text-[12px] leading-relaxed">
                      {cred.note}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Download Buttons */}
        <div className="relative overflow-hidden rounded-2xl border border-[#c8a96e]/20 bg-white/[0.02] p-8 sm:p-10">
          {/* Inner glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at top, rgba(200,169,110,0.08) 0%, transparent 70%)",
            }}
          />
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-lg mb-1">
                Download Official Documents
              </h3>
              <p className="text-white/50 text-sm">
                Access the Executive CV or Consultancy Profile brochure
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-[#c8a96e] to-[#a07840] text-white shadow-lg shadow-[#c8a96e]/20 hover:shadow-[#c8a96e]/40 hover:scale-[1.02] transition-all duration-300"
              >
                <FiDownload className="w-4 h-4" />
                Executive CV
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold tracking-wider uppercase border border-[#c8a96e]/40 text-[#c8a96e] hover:bg-[#c8a96e]/10 hover:border-[#c8a96e]/60 transition-all duration-300"
              >
                <FiDownload className="w-4 h-4" />
                Consultancy Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
