"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Link, animateScroll as scroll, scroller } from "react-scroll";
import Link2 from "next/link";
import { motion } from "framer-motion";
import ImageSlide from "./ImageSlide";

const variants = {
  itemInitial: { opacity: 0, x: 0, y: 20 },
  itemAnimate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
  exit: { opacity: 0, x: 0, y: 0 },
};

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const overviewImage = [
  { src: "/assets/3W2A0424_edit-106.webp", alt: "overview-01" },
  { src: "/assets/gallery/amenities/DSCF0677-HDR-18.webp", alt: "overview-02" },
  { src: "/assets/gallery/THOUGHTFUL-LIVING-01.webp", alt: "overview-03" },
];

const oasisBangkokImage = [
  { src: "/assets/3W2A8753.webp", alt: "oasis-01" },
  {
    src: "/assets/image_highlight/DSCF1544-Pano-Edit-70.webp",
    alt: "oasis-02",
  },
  {
    src: "/assets/image_highlight/DSCF0066-HDR-Edit-14.webp",
    alt: "oasis-03",
  },
];

const living_kempinski = [
  {
    src: "/assets/image_highlight/DSCF0249-5.webp",
    alt: "kempinski-01",
  },
  {
    src: "/assets/image_highlight/DSCF0239-3.webp",
    alt: "kempinski-02",
  },
  {
    src: "/assets/image_highlight/DSCF0269-9.webp",
    alt: "kempinski-03",
  },
];

const HomeSection: FC<Props> = (): JSX.Element => {
  const ref = useRef(null);

  return (
    <>
      <motion.div
        ref={ref}
        variants={variants}
        initial="itemInitial"
        animate="itemAnimate"
        exit="exit"
        className="w-full relative flex flex-col items-center "
      >
        <div className=" max-w-[1440px] mx-auto  flex flex-col items-center  w-full">
          <div className=" px-4 md:px-6 lg:px-8 xl:px-10 mx-auto w-full my-16 md:my-32 xl:my-50 flex items-center justify-center">
            <div id="section1" className="max-w-screen-lg flex flex-col gap-2">
              <h1 className="font-Heleness text-4xl md:text-5xl font-medium text-[#02102a] md:text-center">
                The Residences at Sindhorn Kempinski Hotel
              </h1>
              <p className="text-[#02102a] text-sm md:text-base md:text-center">
                The Residences at Sindhorn Kempinski Hotel Bangkok represents
                the pinnacle of luxury living in Bangkok. Nestled in the heart
                of the city, offers prestigious condominiums and apartments
                designed for discerning individuals seeking elegance,
                sophistication, and convenience. With world-class facilities,
                breathtaking views, and a prime location near Lumpini Park,
                epitomizes urban luxury redefined.
              </p>
            </div>
          </div>

          <div className=" px-4 md:px-6 lg:px-8 xl:px-10 mx-auto w-full mb-16 md:mb-32 xl:mb-50">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7">
              <div className="w-full min-h-[350px] relative overflow-hidden shadow-md">
                <ImageSlide
                  sectionID={"Experience Ultimate Sophistication"}
                  image={overviewImage}
                />
              </div>

              <div className="flex flex-col gap-2 md:items-end justify-center ">
                <h1 className="font-Heleness text-4xl md:text-5xl font-medium text-[#02102a] md:text-right ">
                  Experience Ultimate Sophistication
                </h1>
                <p className="text-[#02102a] text-sm md:text-base md:text-right">
                  Experience a new standard of luxury living, where every detail
                  is meticulously crafted to elevate your lifestyle. From
                  spacious residences designed for comfort to exclusive
                  facilities that cater to your every need, indulge in
                  unparalleled luxury like never before.
                </p>

                <Link2
                  href={"/overview"}
                  className="px-7 py-3 border bg-transparent border-[#d9cdc0] mt-4 hover:bg-[#d9cdc0] text-[#02102a] transition-all duration-200 font-medium text-sm md:text-base text-center"
                >
                  DISCOVER MORE
                </Link2>
              </div>
            </div>
          </div>

          <div className="lg:px-8 xl:px-10 mx-auto w-full mb-16 md:mb-32 xl:mb-50">
            <div className="w-full h-full relative overflow-hidden group ">
              <div className="bg-black/30 absolute w-full h-full flex items-center justify-center flex-col p-4 md:p-10 z-10">
                <h1 className="font-Heleness text-4xl md:text-5xl font-medium text-white drop-shadow-sm ">
                  Rooms & Suites
                </h1>

                <p className="text-white text-sm md:text-base mt-2 max-w-screen-md text-center">
                  Our spacious rooms and suites offer a slice of heaven. Immerse
                  yourself in sophistication and comfort, with breathtaking
                  views of Bangkok&apos;s vibrant cityscape
                </p>

                <Link2
                  href={"/residences"}
                  className="px-7 py-3 border bg-transparent border-[#d9cdc0] mt-4 hover:bg-[#d9cdc0] text-white hover:text-[#02102a] transition-all duration-200 font-medium text-sm md:text-base"
                >
                  DISCOVER MORE
                </Link2>
              </div>
              <Image
                src={"/assets/MPH_5702-Pano_edit-103.webp"}
                alt="SDK"
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="100vw"
                width={0}
                height={0}
                className="w-full !h-full shadow-md min-h-[500px] group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>

          <div className=" px-4 md:px-6 lg:px-8 xl:px-10 mx-auto w-full mb-16 md:mb-32 xl:mb-50">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7">
              <div className="flex flex-col gap-2 md:items-start justify-center md:pr-7">
                <h1 className="font-Heleness text-4xl md:text-5xl font-medium text-[#02102a] ">
                  Urban Oasis in the Heart of Bangkok
                </h1>
                <p className="text-[#02102a] text-sm md:text-base ">
                  Nestled within Sindhorn Village,we offers the perfect blend of
                  urban convenience and tranquility. Explore the vibrant
                  neighborhood with easy access to shopping, dining, and
                  cultural attractions, all just steps away from your doorstep.
                </p>

                <button
                  type="button"
                  className="px-7 py-3 border bg-transparent border-[#d9cdc0] mt-4 hover:bg-[#d9cdc0] text-[#02102a] transition-all duration-200 font-medium text-sm md:text-base"
                >
                  DISCOVER MORE
                </button>
              </div>
              <div className="w-full min-h-[350px] relative overflow-hidden shadow-md">
                <ImageSlide
                  sectionID={"Urban Oasis in the Heart of Bangkok"}
                  image={oasisBangkokImage}
                />
              </div>
            </div>
          </div>

          <div className=" px-4 md:px-6 lg:px-8 xl:px-10 mx-auto w-full mb-16 md:mb-32 xl:mb-50">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7 ">
              <div className="w-full min-h-[350px] relative overflow-hidden shadow-md order-2 md:order-1">
                <ImageSlide
                  sectionID={"Living The Kempinski Way"}
                  image={living_kempinski}
                />
              </div>

              <div className="flex flex-col gap-2 md:items-end justify-center md:pl-7 order-1 md:order-2">
                <h1 className="font-Heleness text-4xl md:text-5xl font-medium text-[#02102a] md:text-right">
                  Living The Kempinski Way
                </h1>

                <p className="text-[#02102a] text-sm md:text-base md:text-right">
                  As part of the esteemed Kempinski brand, The Residences at
                  Sindhorn Kempinski Hotel Bangkok embodies a legacy of elegance
                  and hospitality spanning over 125 years. Enjoy the renowned
                  Kempinski service and experience unparalleled luxury infused
                  with Kempinski&apos;s timeless charm.
                </p>

                <Link2
                  href={"/overview"}
                  className="px-7 py-3 border bg-transparent border-[#d9cdc0] mt-4 hover:bg-[#d9cdc0] text-[#02102a] transition-all duration-200 font-medium text-sm md:text-base text-center"
                >
                  DISCOVER MORE
                </Link2>
              </div>
            </div>
          </div>

          <div className=" lg:px-8 xl:px-10 mx-auto w-full mb-16 md:mb-32 xl:mb-50 ">
            <div className="w-full h-full relative overflow-hidden group ">
              <div className="bg-black/30 absolute w-full h-full flex items-center justify-center flex-col p-4 md:p-10 z-10">
                <h1 className="font-Heleness text-4xl md:text-5xl font-medium text-white drop-shadow-sm">
                  Invest in Upscale Living
                </h1>

                <p className="text-white text-sm md:text-base mt-3 max-w-screen-md text-center">
                  Discover a unique chance to invest in upscale real estate in
                  the heart of Bangkok, offering a blend of luxury living and
                  exceptional returns.
                </p>

                <Link2
                  href="/investment"
                  type="button"
                  className="px-7 py-3 border bg-transparent border-[#d9cdc0] mt-4 hover:bg-[#d9cdc0] text-white hover:text-[#02102a] transition-all duration-200 font-medium text-sm md:text-base"
                >
                  REGISTER
                </Link2>
              </div>
              <Image
                src={"/assets/3W2A8353-114.webp"}
                alt="SDK"
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="100vw"
                width={0}
                height={0}
                className="w-full !h-full shadow-md min-h-[500px] group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HomeSection;
