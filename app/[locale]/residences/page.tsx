import SubHero from "@/components/SubHero";
import dynamic from "next/dynamic";

const ResidencesDetail = dynamic(
  () => import("@/components/detail/ResidencesDetail")
);

export default function Residences() {
  return (
    <main className="flex flex-col relative bg-[#fefeff] flex-1">
      <SubHero
        imgSrc={"/assets/DSC06808-101.webp"}
        title={"Residences"}
        tagline={"Experience Comfort, Style, and Sophistication"}
        imgPosition={"center"}
      />
      <ResidencesDetail />
    </main>
  );
}
