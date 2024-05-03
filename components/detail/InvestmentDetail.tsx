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

const InvestmentDetail: FC<Props> = (): JSX.Element => {
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
          <div className="mx-auto w-full my-16 md:my-32 xl:my-50 ">
            <div className="px-4 md:px-6 lg:px-8 xl:px-10 flex flex-col gap-2">
              <h1 className="font-Heleness text-4xl md:text-5xl font-medium text-[#02102a]">
                Discover Luxury Living in the Heart of Bangkok
              </h1>
              <p className="text-[#02102a] text-sm md:text-base ">
                Welcome to a world of unparalleled luxury and sophistication at
                our exclusive residential development in the heart of Bangkok.
                Designed for discerning investors seeking exceptional living
                experiences, this property represents a unique opportunity to
                own a piece of Bangkok&apos;s elite lifestyle.
              </p>
              <div className="flex flex-col justify-center items-center my-5 md:my-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7 md:my-7">
                  <div className="flex items-start gap-2">
                    <p className="font-Heleness text-6xl">1</p>
                    <p className="text-[#02102a] text-sm md:text-base ">
                      Spacious and meticulously designed residences with
                      breathtaking views
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <p className="font-Heleness text-6xl">2</p>
                    <p className="text-[#02102a] text-sm md:text-base">
                      Exclusive access to world-class facilities including a
                      spa, fitness center, and rooftop pool
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <p className="font-Heleness text-6xl">3</p>
                    <p className="text-[#02102a] text-sm md:text-base">
                      Impeccable concierge services and 24/7 security for peace
                      of mind
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:px-8 xl:px-10">
              <div className="w-full relative  overflow-hidden  group ">
                <Image
                  src={"/assets/fc-sdk-remove-logo.webp"}
                  alt="SDK"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="w-full !h-full min-h-[500px] shadow-md group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="px-4 md:px-6 lg:px-8 xl:px-10 mx-auto w-full mb-16 md:mb-32 xl:mb-50 ">
            <h1 className="font-Heleness text-4xl md:text-5xl font-medium text-[#02102a]">
              Unlocking Investment Potential
            </h1>
            <p className="text-[#02102a] text-sm md:text-base">
              Investing in our luxury real estate property presents a compelling
              opportunity for capital appreciation:
            </p>

            <div className="my-7 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7 md:divide-x-1 text-[#02102a] ">
              <div className="flex gap-2 flex-col  items-center justify-center md:px-7">
                <div className="w-14 md:w-16 h-14 md:h-16 relative shrink-0 ">
                  <Image
                    src={"/assets/location_3037821.svg"}
                    alt="performance-logo"
                    sizes="100vw"
                    width={0}
                    height={0}
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="w-full h-full text-red-500"
                  />
                </div>
                <div>
                  <p className="font-medium text-center text-lg ">
                    Prime Location
                  </p>
                  <p className="text-center text-sm">
                    Located in the heart of Bangkok&apos;s prestigious district,
                    our property is poised for significant value appreciation
                    over time.
                  </p>
                </div>
              </div>

              <div className="flex gap-2 flex-col  items-center justify-center md:px-7">
                <div className="w-14 md:w-16 h-14 md:h-16 relative shrink-0 ">
                  <Image
                    src={"/assets/trending_10320590.svg"}
                    alt="performance-logo"
                    sizes="100vw"
                    width={0}
                    height={0}
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="w-full h-full text-red-500"
                  />
                </div>

                <div>
                  <p className="font-medium text-center text-lg ">
                    Market Trends
                  </p>
                  <p className="text-center text-sm">
                    Benefit from a thriving real estate market with steady
                    demand and limited supply in this sought-after neighborhood.
                  </p>
                </div>
              </div>

              <div className="flex gap-2 flex-col  items-center justify-center md:px-7">
                <div className="w-14 md:w-16 h-14 md:h-16 relative shrink-0 ">
                  <Image
                    src={"/assets/performance_1013386.svg"}
                    alt="performance-logo"
                    sizes="100vw"
                    width={0}
                    height={0}
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="w-full h-full text-red-500"
                  />
                </div>
                <div>
                  <p className="font-medium text-center text-lg ">
                    Historical Performance
                  </p>
                  <p className="text-center text-sm">
                    Historical data indicates consistent and robust price
                    growth, offering potential for attractive returns on
                    investment.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col  my-7 md:my-10">
              <h1 className="font-Heleness text-4xl md:text-5xl font-medium text-[#02102a]">
                Rental Yield
              </h1>
              <p className="text-[#02102a] text-sm md:text-base">
                Our property offers excellent potential for rental yield, making
                it an attractive investment choice:
              </p>

              <div className="my-7 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7 md:divide-x-1 text-[#02102a] ">
                <div className="flex gap-2 flex-col  items-center justify-center md:px-7">
                  <div className="w-14 md:w-16 h-14 md:h-16 relative shrink-0 ">
                    <Image
                      src={"/assets/demand_8553757.svg"}
                      alt="performance-logo"
                      sizes="100vw"
                      width={0}
                      height={0}
                      style={{ objectFit: "contain", objectPosition: "center" }}
                      className="w-full h-full text-red-500"
                    />
                  </div>

                  <div>
                    <p className="font-medium text-center text-lg ">
                      High Demand
                    </p>
                    <p className="text-center text-sm">
                      Enjoy strong rental demand from affluent tenants seeking
                      premium accommodations in a prime location.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 flex-col  items-center justify-center md:px-7 ">
                  <div className="w-14 md:w-16 h-14 md:h-16 relative shrink-0 ">
                    <Image
                      src={"/assets/survey-results_10930801.svg"}
                      alt="performance-logo"
                      sizes="100vw"
                      width={0}
                      height={0}
                      style={{ objectFit: "contain", objectPosition: "center" }}
                      className="w-full h-full text-red-500"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-center text-lg ">
                      Competitive Rental Rates
                    </p>
                    <p className="text-center text-sm">
                      Command competitive rental rates due to the
                      property&apos;s luxury facilities, location, and quality
                      of living.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 flex-col  items-center justify-center md:px-7">
                  <div className="w-14 md:w-16 h-14 md:h-16 relative shrink-0 ">
                    <Image
                      src={"/assets/revenue_11771890.svg"}
                      alt="performance-logo"
                      sizes="100vw"
                      width={0}
                      height={0}
                      style={{ objectFit: "contain", objectPosition: "center" }}
                      className="w-full h-full text-red-500"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-center text-lg ">
                      Stable Income Stream
                    </p>
                    <p className="text-center text-sm">
                      Generate a steady income stream through rental returns,
                      enhancing the overall investment portfolio.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col ">
              <p className="text-[#02102a] text-sm md:text-base">
                <span className="font-medium">Projected Returns:</span> Based on
                market analysis and historical performance, our property is
                projected to deliver above-average returns compared to
                conventional investment options.
              </p>

              <p className="text-[#02102a] text-sm md:text-base">
                <span className="font-medium">Diversification Benefits:</span>{" "}
                Real estate investments offer diversification benefits,
                providing stability and long-term growth potential within a
                well-rounded investment portfolio.
              </p>
            </div>
          </div>

          <div className="lg:px-8 xl:px-10 mx-auto w-full mb-16 md:mb-32 xl:mb-50 ">
            <div className="w-full h-full relative overflow-hidden group ">
              <div className="w-full h-full md:h-1/3 flex items-center justify-center md:justify-end flex-col bg-gradient-to-t from-black/70 bottom-0 absolute p-4 md:p-10 z-10">
                <h1 className="text-center font-Heleness text-4xl md:text-5xl font-medium text-white drop-shadow-sm">
                  Your Investment Journey Begins Here
                </h1>

                <p className="text-white text-sm md:text-base mt-3 max-w-screen-md text-center">
                  Invest in a property that promises not only luxury living but
                  also strong financial performance. Contact us today to learn
                  more about price appreciation, rental yield projections, and
                  how you can capitalize on this exclusive investment
                  opportunity.
                </p>

                <Link2
                  href="/investment"
                  type="button"
                  className="px-7 py-3 border bg-transparent border-[#d9cdc0] mt-4 hover:bg-[#d9cdc0] text-white hover:text-[#02102a] transition-all duration-200 font-medium text-sm md:text-base w-full md:w-fit text-center"
                >
                  REGISTER
                </Link2>
              </div>
              <Image
                src={"/assets/koh220302-053.webp"}
                alt="investment"
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

export default InvestmentDetail;
