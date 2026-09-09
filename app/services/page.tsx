import BgAnimation from "@/Components/Shared/BG-Animation";
import ServicesBanner from "@/Components/Services/ServicesBanner";
import ServicesIntro from "@/Components/Services/ServicesIntro";
import ServicesList from "@/Components/Services/ServicesList";
import EngagementModels from "@/Components/Services/EngagementModels";
import ServicesCTA from "@/Components/Services/ServicesCTA";

export const metadata = {
  title: "Consulting Services | Fractional CFO & Financial Advisory",
  description:
    "Explore our full range of financial advisory and consulting services — from Fractional CFO and Corporate Governance to Treasury, Tax, and Donor-Funded Project Advisory in Bangladesh.",
  keywords: [
    "Fractional CFO services",
    "Financial management consulting",
    "Tax advisory Bangladesh",
    "Corporate finance consultant",
    "Treasury management services",
    "Donor-funded project advisory",
  ],
  alternates: {
    canonical: "https://al-amin-pi.vercel.app/services",
  },
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
