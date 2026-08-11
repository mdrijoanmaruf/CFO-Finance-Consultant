import Link from "next/link";
import { FiHome, FiMail } from "react-icons/fi";
import BgAnimation from "@/Components/Shared/BG-Animation";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030812] flex items-center justify-center relative overflow-hidden px-6">
      {/* Background Animation */}
      <BgAnimation />
      
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#c8a96e]/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Glassmorphic 404 Card */}
      <div className="relative z-10 bg-[#060e1c]/40 backdrop-blur-md border border-white/10 p-10 md:p-16 rounded-[2.5rem] shadow-2xl max-w-2xl w-full text-center flex flex-col items-center">
        
        {/* Glowing 404 Text */}
        <div className="relative mb-6 group">
          <h1 className="text-8xl md:text-[9rem] font-black tracking-tighter bg-gradient-to-tr from-[#c8a96e] via-[#e2c792] to-[#a07840] bg-clip-text text-transparent drop-shadow-2xl">
            404
          </h1>
          <div className="absolute -inset-8 bg-[#c8a96e]/10 blur-2xl rounded-full -z-10 animate-pulse duration-3000" />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide">
          Page Not Found
        </h2>
        
        <p className="text-white/50 text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed">
          Oops! The page you are looking for seems to have vanished into the digital void. It might have been moved or deleted.
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#c8a96e] to-[#a07840] text-white rounded-xl font-semibold text-sm tracking-wide hover:shadow-[0_0_20px_rgba(200,169,110,0.4)] transition-all duration-300 w-full sm:w-auto hover:-translate-y-0.5"
          >
            <FiHome className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 w-full sm:w-auto backdrop-blur-sm hover:-translate-y-0.5"
          >
            <FiMail className="w-4 h-4" />
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
