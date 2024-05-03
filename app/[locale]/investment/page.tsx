import Image from "next/image";
import SubHero from "@/components/SubHero";
import InvestmentDetail from "@/components/detail/InvestmentDetail";

export default function Investment() {
  return (
    <main className="flex flex-col relative bg-[#fefeff] flex-1">
      <SubHero
        imgSrc={"/assets/DSCF0273-HDR-Edit-6.webp"}
        title={"Investment"}
        tagline={
          "Experience Unrivaled Luxury: Discover Your Key to Bangkok's Elite Living"
        }
        imgPosition={"center"}
      />
      <InvestmentDetail />
    </main>
  );
}
