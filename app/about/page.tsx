import BgAnimation from "@/Components/Shared/BG-Animation";
import AboutBanner from "@/Components/About/AboutBanner";
import AboutIntro from "@/Components/About/AboutIntro";
import ProfessionalPhilosophy from "@/Components/About/ProfessionalPhilosophy";
import LeadershipApproach from "@/Components/About/LeadershipApproach";
import AreasOfExpertise from "@/Components/About/AreasOfExpertise";
import IntegrityStatement from "@/Components/About/IntegrityStatement";
import InterestsTeaser from "@/Components/About/InterestsTeaser";
import AboutCTA from "@/Components/About/AboutCTA";

export const metadata = {
  title: "About | MD. Al Amin Bhuiyan – CFO & Corporate Governance Expert",
  description:
    "Learn about MD. Al Amin Bhuiyan — a multidisciplinary finance professional with 22+ years of experience in corporate finance, governance, treasury, tax advisory, and strategic business leadership in Bangladesh.",
  keywords: [
    "CFO consultant Bangladesh",
    "Corporate governance expert",
    "MD Al Amin Bhuiyan biography",
    "Finance executive Bangladesh",
    "Fractional CFO",
  ],
  alternates: {
    canonical: "https://al-amin-pi.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <main className="relative bg-[#060e1c]">
      <BgAnimation />
      <AboutBanner />
      <AboutIntro />
      <ProfessionalPhilosophy />
      <LeadershipApproach />
      <AreasOfExpertise />
      <IntegrityStatement />
      <InterestsTeaser />
      <AboutCTA />
    </main>
  );
}
