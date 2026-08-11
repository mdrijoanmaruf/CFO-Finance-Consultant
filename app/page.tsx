"use client";

import BgAnimation from "@/Components/Shared/BG-Animation";
import Hero from "@/Components/Home/Hero";
import WhoIHelp from "@/Components/Home/Who_I_Help";

export default function Home() {
  return (
    <main className="relative bg-[#060e1c]">
      <BgAnimation />
      <Hero />
      <WhoIHelp />
    </main>
  );
}
