"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Link, animateScroll as scroll, scroller } from "react-scroll";
import Link2 from "next/link";
import { motion } from "framer-motion";
interface Props {}

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

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const AboutDetail: FC<Props> = (): JSX.Element => {
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
        <div className="max-w-[1440px] mx-auto  flex flex-col items-center  w-full">
          <div className="px-4 md:px-6 lg:px-8 xl:px-10 mx-auto w-full my-16 md:my-32 xl:my-50 ">
            <div className=" flex flex-col gap-2 ">
              <h1 className="font-Heleness text-4xl md:text-5xl font-medium text-[#02102a]">
                The Residences at Sindhorn Kempinski Hotel Bangkok
              </h1>

              <p className="text-[#02102a] text-sm md:text-base mt-3">
                One of Kempinski&apos;s branded residences, offers its residents
                the service standard of the five-starred chain and tranquility
                that is akin to the staying experience at a luxury hotel. Each
                of the floors of the 33-story-high building houses a maximum of
                only 10 units with 3 underground parking floors. The 231 units
                range from 52-square-meters studio room types to the
                510-square-meters penthouses.
              </p>

              <p className="text-[#02102a] text-sm md:text-base ">
                The excellence of Kempinski&apos;s standard is evident in every
                detail of the building, encompassing the layout design,
                functionality, facilities, and, most importantly, the services
                provided. The lobby seamlessly connects with the park outside
                and the project&apos;s expansive private garden. Featuring high
                ceilings and expansive glass windows, the space offers a sense
                of openness that immediately relaxes anyone who enters.
              </p>

              <div className="w-full flex justify-center items-center relative my-7">
                <Image
                  src={"/assets/DRAFT.webp"}
                  alt="SDK"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="w-full h-full "
                />
              </div>

              <p className="text-[#02102a] text-sm md:text-base ">
                The interiors of all living units are designed to be incredibly
                spacious and private, ensuring residents enjoy comfort and
                exclusivity. The common areas and facilities on the 30th floor
                include a meeting room, a lounge, a fitness room, a spa, a
                garden, and an infinity-edge pool where water meets sky against
                the panoramic skyline of Bangkok.
              </p>
            </div>
          </div>

          <div className="lg:px-8 xl:px-10 mx-auto w-full mb-16 md:mb-32 xl:mb-50 flex flex-col gap-2">
            <div className="w-full h-full relative overflow-hidden group ">
              <div className="bg-black/30 absolute w-full h-full flex items-center justify-center flex-col p-4 md:p-10 z-10">
                <h1 className="font-Heleness text-4xl md:text-5xl font-medium text-white drop-shadow-sm">
                  Thoughtful Living
                </h1>

                <p className="text-white text-sm md:text-base mt-3 max-w-screen-md text-center">
                  Envision a leafy garden destination, a quiet enclave amidst
                  the energy of one of Asia&apos;s greatest cities, where your
                  complete well-being is the purpose of every aspect, and where
                  leisure and business intertwine. Tucked into Sindhorn Village,
                  a new residential extension of the huge and evergreen Lumphini
                  Park, The Residences at Sindhorn Kempinski Hotel Bangkok is
                  crafted for your life desires.
                </p>
              </div>
              <Image
                src={"/assets/3W2A0303_edit-108.webp"}
                alt="Thoughtful Living"
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="100vw"
                width={0}
                height={0}
                className="w-full !h-full shadow-md min-h-[500px] group-hover:scale-105 transition-all duration-500"
              />
            </div>

            <div className=" grid grid-cols-2 gap-2">
              <div className="w-full relative ">
                <Image
                  src={"/assets/DSCF0310-22.webp"}
                  alt="SDK_garden"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="w-full h-full"
                />
              </div>

              <div className="grid grid-cols-1 grid-rows-2 h-full justify-items-start gap-2">
                <div className="w-full relative ">
                  <Image
                    src={"/assets/DSCF2133-3.webp"}
                    alt="SDK_garden"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-full h-full"
                  />
                </div>

                <div className="w-full relative ">
                  <Image
                    src={"/assets/gallery/exterier/DSCF1544-Pano-Edit-70.webp"}
                    alt="SDK_garden"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-full h-full "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 md:px-6 lg:px-8 xl:px-10 mx-auto w-full mb-16 md:mb-32 xl:mb-50 grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="flex flex-col gap-2 justify-center md:pr-7">
              <h1
                className="font-Heleness text-4xl md:text-5xl font-medium text-[#02102a] 
"
              >
                Living The Kempinski Way
              </h1>
              <p className="text-[#02102a] text-sm md:text-base md:mt-3">
                For more than 125 years, Kempinski has been welcoming guests to
                spectacular destinations in the most stunning style. Together
                we&apos;ve explored the world and discovered new places,
                possibilities and horizons. The very epitome of luxury, our
                brand is passionate about creating and crafting rich, meaningful
                and memorable experiences for every guest.
              </p>

              <h1 className="text-[#02102a] text-lg mt-3 font-medium ">
                For your comfort and wellbeing
              </h1>

              <p className="text-[#02102a] text-sm md:text-base">
                we are dedicated to delivering a beautiful performance and to
                creating moments when luxury is felt. During changing times, our
                promise to let you experience the warm-hearted and renowned
                Kempinski service remains the same. Our top priority is to
                ensure your well-being, safety and comfort and make you feel
                confident about exploring our wonderful world.
              </p>

              <h1 className="text-[#02102a] text-lg mt-3 font-medium ">
                Kempinski White Glove Services
              </h1>

              <p className="text-[#02102a] text-sm md:text-base">
                White glove has always been a symbol of luxurious service and
                elegance. Guided by global health and safety recommendations, we
                have implemented White Glove Services in our hotels worldwide.
                This initiative influences your guest journey throughout your
                entire stay, in line with local and national legislation.
              </p>

              <p className="text-[#02102a] text-sm md:text-base mt-2">
                Enhanced cleaning and disinfection procedures have been
                implemented in guest rooms, lifts, public areas, and
                back-of-house areas. For your convenience and comfort,
                sanitising stations are available in all public areas of our
                hotels, and we have a full suite of policies and procedures that
                can be reactivated as required.
              </p>
            </div>

            <div className="w-full  relative ">
              <Image
                src={"/assets/kempinski_brand.webp"}
                alt="SDK"
                style={{ objectFit: "contain", objectPosition: "center" }}
                sizes="100vw"
                width={0}
                height={0}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutDetail;
