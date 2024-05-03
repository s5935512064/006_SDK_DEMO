import SubHero from "@/components/SubHero";
import dynamic from "next/dynamic";

const AboutDetail = dynamic(() => import("@/components/detail/AboutDetail"));

export default function Overview() {
  return (
    <main className="flex flex-col relative bg-[#fefeff] flex-1">
      <SubHero
        imgSrc={"/assets/3W2A0494-Pano_edit5-107.webp"}
        title={"Overview"}
        tagline={"Where Every Detail Reflects Timeless Elegance"}
        imgPosition={"bottom"}
      />
      <AboutDetail />
    </main>
  );
}
