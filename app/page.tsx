"use client";

import BgAnimation from "@/Components/Shared/BG-Animation";
import Hero from "@/Components/Home/Hero";
import WhoIHelp from "@/Components/Home/Who_I_Help";
import AboutSnippet from "@/Components/Home/AboutSnippet";
import ServicesSnippet from "@/Components/Home/ServicesSnippet";
import AchievementsSnippet from "@/Components/Home/AchievementsSnippet";
import InsightsSnippet from "@/Components/Home/InsightsSnippet";
import ContactSnippet from "@/Components/Home/ContactSnippet";

export default function Home() {
  return (
    <main className="relative bg-[#060e1c]">
      <BgAnimation />
      <Hero />
      <AboutSnippet />
      <WhoIHelp />
      <ServicesSnippet />
      <AchievementsSnippet />
      <InsightsSnippet />
      <ContactSnippet />
    </main>
  );
}
