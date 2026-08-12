import BgAnimation from "@/Components/Shared/BG-Animation";
import InsightsShell from "@/Components/Insights/InsightsShell";

export const metadata = {
  title: "Insights | MD. Al Amin Bhuiyan – CFO & Finance Consultant",
  description:
    "Practical perspectives on corporate finance, governance, treasury, tax, and strategic leadership — drawn from 22+ years of real-world CFO and advisory experience by MD. Al Amin Bhuiyan.",
};

export default function InsightsPage() {
  return (
    <main className="relative bg-[#060e1c]">
      <BgAnimation />
      <InsightsShell />
    </main>
  );
}
