import Image from "next/image";
import SubHero from "@/components/SubHero";
import DetailSection from "@/components/detail/ContactInquiries";

export default function Contact() {
  return (
    <main className="flex flex-col relative bg-[#fefeff] flex-1">
      <SubHero
        imgSrc={"/assets/DSCF0269-9.webp"}
        title={"Contact Us"}
        tagline={"Your Gateway to Exclusive Living Starts Here."}
        imgPosition={"center"}
      />
      {/* <div className="w-full h-full overflow-hidden">
        <div className="w-1/3 absolute top-0 right-0 h-full bg-[url('/assets/manifesto.png')] bg-right bg-contain bg-no-repeat bg-fixed z-[50] opacity-30 "></div>
      </div> */}
      <DetailSection />
    </main>
  );
}
