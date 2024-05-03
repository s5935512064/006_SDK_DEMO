import HeroHeader from "@/components/HeroHeader";

import dynamic from "next/dynamic";
const HomeSection = dynamic(() => import("@/components/HomeSection"));

export default function Home() {
  return (
    <main className="flex flex-col relative bg-[#fefeff] flex-1">
      <HeroHeader />
      <HomeSection />
    </main>
  );
}
