import BgAnimation from "@/Components/Shared/BG-Animation";
import ServicesBanner from "@/Components/Services/ServicesBanner";
import ServicesIntro from "@/Components/Services/ServicesIntro";
import ServicesList from "@/Components/Services/ServicesList";
import EngagementModels from "@/Components/Services/EngagementModels";
import ServicesCTA from "@/Components/Services/ServicesCTA";

export const metadata = {
  title: "Consulting Services | MD. Al Amin Bhuiyan – CFO & Finance Consultant",
  description:
    "Explore our full range of financial advisory and consulting services — from Fractional CFO and Corporate Governance to Treasury, Tax, and Donor-Funded Project Advisory.",
};

export default function ServicesPage() {
  return (
    <main className="relative bg-[#060e1c]">
      <BgAnimation />
      <ServicesBanner />
      <ServicesIntro />
      <ServicesList />
      <EngagementModels />
      <ServicesCTA />
    </main>
  );
}
