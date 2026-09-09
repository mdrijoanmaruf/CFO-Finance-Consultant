import BgAnimation from "@/Components/Shared/BG-Animation";
import AchievementsBanner from "@/Components/Achievements/AchievementsBanner";
import AchievementsIntro from "@/Components/Achievements/AchievementsIntro";
import CareerHighlights from "@/Components/Achievements/CareerHighlights";
import MajorContributions from "@/Components/Achievements/MajorContributions";
import SelectedProjects from "@/Components/Achievements/SelectedProjects";
import LeadershipAchievements from "@/Components/Achievements/LeadershipAchievements";
import AwardsRecognition from "@/Components/Achievements/AwardsRecognition";
import ProfessionalCertifications from "@/Components/Achievements/ProfessionalCertifications";
import PublicationsAndPresentations from "@/Components/Achievements/PublicationsAndPresentations";
import SpeakingEngagements from "@/Components/Achievements/SpeakingEngagements";
import AchievementsCTA from "@/Components/Achievements/AchievementsCTA";

export const metadata = {
  title: "Career Achievements | MD. Al Amin Bhuiyan CFO",
  description:
    "Explore the career achievements, leadership milestones, professional certifications, publications, and speaking engagements of MD. Al Amin Bhuiyan — a multidisciplinary CFO and finance consultant with 22+ years of demonstrated impact.",
  keywords: [
    "CFO career highlights",
    "Corporate finance milestones",
    "Finance leadership achievements",
    "MD Al Amin Bhuiyan portfolio",
    "Finance professional certifications Bangladesh",
  ],
  alternates: {
    canonical: "https://al-amin-pi.vercel.app/achievements",
  },
};

export default function AchievementsPage() {
  return (
    <main className="relative bg-[#060e1c]">
      <BgAnimation />
      <AchievementsBanner />
      <AchievementsIntro />
      <CareerHighlights />
      <MajorContributions />
      <SelectedProjects />
      <LeadershipAchievements />
      <AwardsRecognition />
      <ProfessionalCertifications />
      <PublicationsAndPresentations />
      <SpeakingEngagements />
      <AchievementsCTA />
    </main>
  );
}
