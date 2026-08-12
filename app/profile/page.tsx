import BgAnimation from "@/Components/Shared/BG-Animation";
import ProfileBanner from "@/Components/Profile/ProfileBanner";
import ProfessionalSummary from "@/Components/Profile/ProfessionalSummary";
import CredentialsAndDownloads from "@/Components/Profile/CredentialsAndDownloads";
import CoreExpertise from "@/Components/Profile/CoreExpertise";
import CareerTimeline from "@/Components/Profile/CareerTimeline";
import OtherExperience from "@/Components/Profile/OtherExperience";
import ProfessionalStrengths from "@/Components/Profile/ProfessionalStrengths";
import ProfileCTA from "@/Components/Profile/ProfileCTA";

export const metadata = {
  title: "Profile & CV | MD. Al Amin Bhuiyan – CFO & Finance Consultant",
  description:
    "Professional profile of MD. Al Amin Bhuiyan — 20+ years CFO-level financial leadership, corporate governance, treasury, tax advisory, and strategic consulting across diverse industries.",
};

export default function ProfilePage() {
  return (
    <main className="relative bg-[#060e1c]">
      <BgAnimation />
      <ProfileBanner />
      <ProfessionalSummary />
      <CredentialsAndDownloads />
      <CoreExpertise />
      <CareerTimeline />
      <OtherExperience />
      <ProfessionalStrengths />
      <ProfileCTA />
    </main>
  );
}
