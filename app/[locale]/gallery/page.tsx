import Image from "next/image";
import SubHero from "@/components/SubHero";
import GalleryDetail from "@/components/detail/GalleryDetail";

export default function Gallery() {
  return (
    <main className="flex flex-col relative bg-[#fefeff] flex-1">
      <SubHero
        imgSrc={"/assets/DSC03955-HDR-109.webp"}
        title={"Gallery"}
        tagline={"Captivating Vistas, Luxurious Living"}
        imgPosition={"center"}
      />
      <GalleryDetail />
    </main>
  );
}
