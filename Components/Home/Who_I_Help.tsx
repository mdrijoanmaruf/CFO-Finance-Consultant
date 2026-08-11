import React from "react";
import {
  FiBriefcase,
  FiGlobe,
  FiUsers,
  FiTrendingUp,
  FiSettings,
  FiTruck,
  FiMonitor,
  FiLayout,
  FiHeart,
  FiShield,
  FiActivity,
  FiUserCheck,
} from "react-icons/fi";

const segments = [
  { name: "SMEs", icon: FiBriefcase },
  { name: "Corporates", icon: FiGlobe },
  { name: "Family-Owned Businesses", icon: FiUsers },
  { name: "Startups", icon: FiTrendingUp },
  { name: "Manufacturing", icon: FiSettings },
  { name: "Trading & Distribution", icon: FiTruck },
  { name: "Tech/IT", icon: FiMonitor },
  { name: "Project-Based Organizations", icon: FiLayout },
  { name: "Donor-Funded Projects", icon: FiHeart },
  { name: "NGOs", icon: FiShield },
  { name: "Restructuring Companies", icon: FiActivity },
  { name: "Boards & Owners", icon: FiUserCheck },
];

export default function WhoIHelp() {
  return (
    <section className="relative pt-10 pb-24 lg:pt-12 lg:pb-32 bg-transparent overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[800px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#c8a96e_0%,transparent_60%)] blur-[120px]" />
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute inset-0 flex justify-between px-6 lg:px-10 max-w-[1400px] mx-auto pointer-events-none opacity-20">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c8a96e]" />
            <h2 className="text-[#c8a96e] font-semibold tracking-[0.2em] uppercase text-sm">
              Who I Help
            </h2>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c8a96e]" />
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Empowering Diverse Organizations
          </h3>
          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            From emerging startups to established corporates, I provide tailored financial leadership and strategic guidance to organizations navigating growth, restructuring, and complex financial landscapes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="group relative bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06] hover:border-[#c8a96e]/30 p-6 rounded-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,169,110,0.08)]"
            >
              {/* Subtle gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c8a96e]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#0a1628]/80 border border-white/10 flex items-center justify-center group-hover:border-[#c8a96e]/50 group-hover:scale-110 group-hover:bg-[#c8a96e]/10 transition-all duration-500 shadow-lg">
                  <segment.icon className="w-6 h-6 text-white/50 group-hover:text-[#c8a96e] transition-colors duration-500" />
                </div>
                <h4 className="text-white/90 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
                  {segment.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
