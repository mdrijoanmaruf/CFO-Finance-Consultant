import BgAnimation from "@/Components/Shared/BG-Animation";
import InsightsShell from "@/Components/Insights/InsightsShell";

export const metadata = {
  title: "Insights & Articles | Corporate Finance & Governance",
  description:
    "Practical perspectives on corporate finance, governance, treasury, tax, and strategic leadership — drawn from 22+ years of real-world CFO and advisory experience by MD. Al Amin Bhuiyan.",
  keywords: [
    "CFO insights",
    "Corporate finance blog",
    "Corporate governance articles",
    "Treasury management perspectives",
    "Business leadership insights Bangladesh",
  ],
  alternates: {
    canonical: "https://al-amin-pi.vercel.app/insights",
  },
};

export default function InsightsPage() {
  return (
    <main className="relative bg-[#060e1c]">
      <BgAnimation />
      <InsightsShell />
    </main>
  );
}
