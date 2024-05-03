"use client";

import React, { FC, useEffect, useState, useRef, Fragment } from "react";
import { Tab, Transition } from "@headlessui/react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Gallery, ThumbnailImageProps } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import Image from "next/image";
import Fancybox from "../FancyboxWrap";
import Masonry from "react-masonry-css";
import { Link, animateScroll as scroll, scroller } from "react-scroll";
import Link2 from "next/link";
import RoomComponent from "@components/RoomGalComponent";
import FloorPlan from "@components/FloorPlan";

import "react-image-lightbox/style.css";

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

const tabs = [
  { name: "ROOM TYPE", content: [] },
  { name: "FLOOR PLAN", content: [] },
  { name: "FACT SHEET", content: [] },
];

const project_detail = [
  {
    title: "PROJECT",
    desc: "The Residences at Sindhorn Kempinski Hotel Bangkok",
  },
  { title: "DEVELOPER", desc: "Siam Sindhorn Co., Ltd." },
  { title: "ADDRESS", desc: "Sarasin Road, Lumpini, Bangkok" },
  { title: "PRODUCT TYPE", desc: "Leasehold residential condominium" },
  {
    title: "OWNERSHIP STRUCTURE",
    desc: "30-year leasehold, plus option to renew for another 30 years",
  },
  { title: "TOTAL LAND AREA", desc: "3-3-57 Rai" },
  { title: "TOWER HEIGHT", desc: "33 stories" },
  { title: "UNIT SIZE", desc: "50 sq.m. to 500 sq.m." },
  { title: "TOTAL NUMBER OF UNITS", desc: "231 units" },
  { title: "TYPE OF UNITS", desc: "Studio, 1-4 bedrooms and Penthouse" },
  {
    title: "CEILING HEIGHT",
    desc: "Up to 3.0 m. in primary spaces (living/dining/bedrooms)",
  },
  { title: "CEILING HEIGHT", desc: "495 car parking spaces" },
  // {title:"FACILITIES" , desc : "Siam Sindhorn Co., Ltd."},
];

const development_team = [
  { title: "DEVELOPER", desc: "Siam Sindhorn Co., Ltd." },
  { title: "CONTRACTOR", desc: "Thai Obayashi Corp., Ltd." },
  { title: "ARCHITECT", desc: "Architects and Associates Co., Ltd." },
  { title: "INTERIOR ARCHITECT", desc: "August Design Consultant Co., Ltd." },
  { title: "LANDSCAPE ARCHITECT", desc: "P Landscape Co., Ltd." },
  { title: "LIGHTING DESIGNER", desc: "DJCoalition Co., Ltd." },
  { title: "LANDSCAPE LIGHTING DESIGNER", desc: "APLD Co., Ltd." },
  { title: "STRUCTURAL ENGINEER", desc: "PSAA Consulting Engineers Co., Ltd." },
  {
    title: "CIVIL ENGINEER",
    desc: "Metric Consulting Engineers & Architects Co., Ltd.",
  },
  { title: "M&E ENGINEER", desc: "MITR Technical Consultant Co., Ltd." },
  { title: "FACADE DESIGN CONSULTANT", desc: "Facade Associates Co., Ltd." },
  {
    title: "WIND AND EARTHQUAKE SPECIALIST",
    desc: "Professor Dr. Pennung Warnitchai",
  },
  {
    title: "LEED ENVIRONMENTAL DESIGN CONSULTANT",
    desc: "SCG Green Building Solution",
  },
];

const room_comp = [
  {
    id: 1,
    side: "right",
    type: "1B",
    title: "ONE PLUS ONE BEDROOM",
    size: "98 SQ.M",
    bedroom: "1 Bedrooms",
    bathroom: "1 Bathrooms",
    detail: [
      "The spacious 1-plus-1-bedroom units offer opulence combined with extreme ease of living. Savor the extravagance of life right in the middle of the metropolis.",
      "The outstanding architecture of the Bangkok cityscape will delight you during the day and thrill you throughout the night.",
    ],
    soldout: false,
  },
  {
    id: 2,
    side: "left",
    type: "2B",
    title: "TWO BEDROOM",
    size: "139 sq.m | 143 sq.m | 158 sq.m",
    bedroom: "2 Bedrooms",
    bathroom: "2 Bathrooms",
    detail: [
      "Covering an extensive area, these 2-bedroom units are the secret to endless happiness.",
      "The expansive living and dining rooms, the lavish imported kitchen, and the elegant bedrooms and bathrooms create an ambience of rarified stylishness.",
    ],
    soldout: false,
  },
  {
    id: 3,
    side: "right",
    type: "3B",
    title: "THREE BEDROOM",
    size: "215 sq.m | 243 sq.m | 339 sq.m",
    bedroom: "3 Bedrooms",
    bathroom: "3 bathrooms",
    detail: [
      "Spanning a substantial expanse with 3 delightful bedrooms, you will absorb the natural beauty of every sunrise with your eyes and your heart.",
      "The distinctive master bedroom, featuring a supremely wide and long balcony, will delight you with exceptional vistas of the Big Mango.",
    ],
    soldout: false,
  },
  {
    id: 4,
    side: "left",
    type: "4B",
    title: "FOUR BEDROOM",
    size: "356 sq.m",
    bedroom: "4 Bedrooms",
    bathroom: "4 Bathrooms",
    detail: [
      "These exquisite and unprecedentedly large 4-bedroom units mix the finest in urban living with the beauty of nature.",
      "All the bedrooms, including the deluxe master suite, will bring you closer to the fabulous flora and fauna of Lumpini Park. The supremely spacious balcony will enable the enjoyment of 2 distinctively different cityscapes.",
    ],
    soldout: false,
  },
  {
    id: 5,
    side: "right",
    type: "PH",
    title: "PENTHOUSE",
    size: "487 sq.m | 510 sq.m",
    bedroom: "4 Bedrooms",
    bathroom: "4 bathrooms",
    detail: [
      "Celebrate the ultimate in sumptuousness. Enjoy life in the unique and elite 4-bedroom penthouse on the 34th floor, right at the summit of the building. You will feel like you are living on top of the world surrounded by panoramic city views and sprawling green spaces.",
    ],
    soldout: false,
  },
];

const ResidencesDetail: FC<Props> = (): JSX.Element => {
  const ref = useRef(null);
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

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
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10 flex flex-col items-center  w-full">
          <div className="mx-auto w-full my-16 md:my-32 xl:my-50">
            <div className=" flex flex-col gap-2 ">
              <h1 className="font-Heleness text-4xl md:text-5xl font-medium text-[#02102a]">
                Experience Meticulously Designed Luxury Living
              </h1>
              <p className="text-[#02102a] text-sm md:text-base md:mt-3">
                every detail is meticulously considered to deliver a blend of
                elegance and functionality. From the interior design to the room
                layout, our living spaces are crafted to evoke a sense of luxury
                and comfort. Amidst the bustle of modern life, our residences
                offer a serene retreat where you can unwind and indulge in the
                ultimate luxury living experience.
              </p>
            </div>

            <Tab.Group>
              <Tab.List className="sticky top-16 md:top-0 flex flex-col md:flex-row gap-4 justify-evenly md:relative my-5 md:my-10 bg-white z-20 py-2 md:py-0">
                {tabs.map((item, index) => (
                  <Link
                    key={index}
                    href="#"
                    role="link"
                    activeClass="active"
                    to="gallery-section"
                    spy={true}
                    smooth={true}
                    offset={-250}
                    duration={1000}
                    className="w-full"
                  >
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? "effect-underline2 "
                            : "effect-underline text-opacity-70 hover:text-opacity-100",
                          "py-1 md:py-2.5 leading-5 font-Heleness text-2xl transition-all duration-300  w-full relative text-[#02102a] hover:text-[#02102a] uppercase outline-none focus:ring-0 "
                        )
                      }
                    >
                      {item.name}
                    </Tab>
                  </Link>
                ))}
              </Tab.List>

              <Tab.Panels id="gallery-section">
                <Tab.Panel className="mt-16 outline-none focus:right-0">
                  {room_comp.map((item, index) => {
                    if (item.side == "right") {
                      return (
                        <div
                          key={index}
                          className="mx-auto w-full mb-16 lg:mb-32 xl:mb-50 "
                        >
                          <div className="w-full grid grid-cols-1  lg:grid-cols-5 gap-7">
                            <div className="w-full h-fit  relative shadow-md  overflow-hidden lg:col-span-3">
                              <RoomComponent typeRoom={item.type} />
                            </div>

                            <div className="flex flex-col gap-2 items-start justify-center lg:pl-7  lg:col-span-2">
                              <h1 className="font-Heleness text-4xl md:text-5xl font-medium text-[#02102a]">
                                {item.title}
                              </h1>

                              <div className="flex flex-wrap  gap-4 divide-x-1 text-sm mb-4">
                                <div className="flex items-center gap-1  ">
                                  <svg
                                    width="28"
                                    height="28"
                                    className="stroke-current shrink-0"
                                    fill="none"
                                    viewBox="0 0 40 40"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M12.1296 7.5v20.3704H32.5M12.1296 7.5l4.6297 4.6296M12.1296 7.5 7.5 12.1296m25 15.7408-4.6296-4.6297M32.5 27.8704 27.8704 32.5"></path>
                                  </svg>
                                  <p>{item.size}</p>
                                </div>

                                <div className="flex items-center gap-1   pl-4">
                                  <svg
                                    width="28"
                                    height="28"
                                    className="stroke-current shrink-0"
                                    fill="none"
                                    viewBox="0 0 41 40"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M37.4602 21.7705v7.7302H3.53955v-7.7302H37.4602Z"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M6.53174 11.667v10.4762H34.4682V11.667H6.53174Z"
                                      strokeLinecap="round"
                                    ></path>
                                    <path
                                      d="M10.0237 18.6514h8.7301v3.492h-8.7301v-3.492ZM22.2458 18.6514h8.7302v3.492h-8.7302v-3.492Z"
                                      strokeLinecap="round"
                                    ></path>
                                  </svg>
                                  <p> {item.bedroom}</p>
                                </div>
                                <div className="flex items-center gap-1   pl-4">
                                  <div className="w-6 h-6 shrink-0 relative">
                                    <Image
                                      src="/assets/bathtub_863927.svg"
                                      alt="bathroom"
                                      sizes="100vw"
                                      width={0}
                                      height={0}
                                      style={{
                                        objectFit: "contain",
                                        objectPosition: "center",
                                      }}
                                      className="w-full h-full"
                                    />
                                  </div>
                                  <p> {item.bathroom}</p>
                                </div>
                              </div>

                              {item.detail.map((item, index) => (
                                <div
                                  key={index}
                                  className="text-[#02102a] text-sm md:text-base"
                                >
                                  <p>{item}</p>
                                </div>
                              ))}

                              {item.soldout ? (
                                <button
                                  type="button"
                                  disabled={true}
                                  className="px-7 py-3 border bg-transparent border-[#d9cdc0] mt-4 hover:bg-[#d9cdc0] text-[#02102a] transition-all duration-200 font-medium disabled:grayscale w-full lg:w-fit text-center"
                                >
                                  SOLD OUT
                                </button>
                              ) : (
                                <Link2
                                  href="/contact"
                                  className="px-7 py-3 border bg-transparent border-[#d9cdc0] mt-4 hover:bg-[#d9cdc0] text-[#02102a] transition-all duration-200 font-medium w-full lg:w-fit text-center"
                                >
                                  REGISTER
                                </Link2>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div
                          key={index}
                          className="mx-auto w-full mb-16 lg:mb-32 xl:mb-50 "
                        >
                          <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-7">
                            <div className="flex flex-col gap-2 items-start justify-center lg:col-span-2 lg:pr-7 order-2 lg:order-1">
                              <h1 className="font-Heleness text-4xl md:text-5xl font-medium text-[#02102a]">
                                {item.title}
                              </h1>

                              <div className="flex flex-wrap   gap-4 divide-x-1 text-sm mb-4">
                                <div className="flex items-center gap-1  ">
                                  <svg
                                    width="28"
                                    height="28"
                                    className="stroke-current shrink-0"
                                    fill="none"
                                    viewBox="0 0 40 40"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M12.1296 7.5v20.3704H32.5M12.1296 7.5l4.6297 4.6296M12.1296 7.5 7.5 12.1296m25 15.7408-4.6296-4.6297M32.5 27.8704 27.8704 32.5"></path>
                                  </svg>
                                  <p>{item.size}</p>
                                </div>

                                <div className="flex items-center gap-1   pl-4">
                                  <svg
                                    width="28"
                                    height="28"
                                    className="stroke-current shrink-0"
                                    fill="none"
                                    viewBox="0 0 41 40"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M37.4602 21.7705v7.7302H3.53955v-7.7302H37.4602Z"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M6.53174 11.667v10.4762H34.4682V11.667H6.53174Z"
                                      strokeLinecap="round"
                                    ></path>
                                    <path
                                      d="M10.0237 18.6514h8.7301v3.492h-8.7301v-3.492ZM22.2458 18.6514h8.7302v3.492h-8.7302v-3.492Z"
                                      strokeLinecap="round"
                                    ></path>
                                  </svg>
                                  <p>{item.bedroom}</p>
                                </div>
                                <div className="flex items-center gap-1   pl-4">
                                  <div className="w-6 h-6 shrink-0 relative">
                                    <Image
                                      src="/assets/bathtub_863927.svg"
                                      alt="bathroom"
                                      sizes="100vw"
                                      width={0}
                                      height={0}
                                      style={{
                                        objectFit: "contain",
                                        objectPosition: "center",
                                      }}
                                      className="w-full h-full"
                                    />
                                  </div>
                                  <p>{item.bathroom}</p>
                                </div>
                              </div>

                              {item.detail.map((item, index) => (
                                <div
                                  key={index}
                                  className="text-[#02102a] text-sm md:text-base"
                                >
                                  <p>{item}</p>
                                </div>
                              ))}

                              {item.soldout ? (
                                <button
                                  type="button"
                                  disabled={true}
                                  className="px-7 py-3 border bg-transparent border-[#d9cdc0] mt-4 hover:bg-[#d9cdc0] text-[#02102a] transition-all duration-200 font-medium disabled:grayscale w-full lg:w-fit text-center"
                                >
                                  SOLD OUT
                                </button>
                              ) : (
                                <Link2
                                  href="/contact"
                                  className="px-7 py-3 border bg-transparent border-[#d9cdc0] mt-4 hover:bg-[#d9cdc0] text-[#02102a] transition-all duration-200 font-medium w-full lg:w-fit text-center"
                                >
                                  REGISTER
                                </Link2>
                              )}
                            </div>

                            <div className="w-full  h-fit  relative shadow-md overflow-hidden lg:col-span-3 order-1 lg:order-2">
                              <RoomComponent typeRoom={item.type} />
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </Tab.Panel>

                <Tab.Panel className={"outline-none focus:right-0"}>
                  <div className="mx-auto w-full mb-16 md:mb-32 xl:mb-50 mt-14">
                    <FloorPlan />
                  </div>
                </Tab.Panel>

                <Tab.Panel className={"outline-none focus:right-0"}>
                  <div className="mx-auto w-full mb-16 md:mb-32 xl:mb-50 relative flex flex-col gap-7">
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7 ">
                      <h1 className="py-2 sticky top-[195px] md:top-0 md:relative md:py-0 font-Heleness text-2xl md:text-3xl font-medium text-[#02102a] bg-white w-full">
                        PROJECT INFO
                      </h1>

                      <div className=" md:col-span-2 flex flex-col gap-2 divide-y-1 -mt-2">
                        {project_detail.map((item, index) => (
                          <div key={index} className="pt-2">
                            <p className="font-medium text-sm uppercase text-[#02102a]">
                              {item.title}
                            </p>
                            <p className="text-[#02102a] text-sm md:text-base">
                              {item.desc}
                            </p>
                          </div>
                        ))}

                        <div className="pt-2">
                          <p className="font-medium text-sm uppercase text-[#02102a]">
                            FACILITIES
                          </p>

                          <ul className="list-disc list-inside text-[#02102a] text-sm md:text-base">
                            <li>Double-volume residence lobby</li>
                            <li>30th Floor residence lounge</li>
                            <li>
                              30th Floor swimming pool with saltwater
                              chlorination system
                            </li>
                            <li>Fully-equipped fitness room</li>
                            <li>
                              Changing rooms and locker rooms with sauna and
                              steam rooms
                            </li>
                            <li>Landscaped garden</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7 ">
                      <h1 className="py-2 sticky top-[195px] md:top-0 md:relative md:py-0 font-Heleness text-2xl md:text-3xl font-medium text-[#02102a] bg-white w-full">
                        DEVELOPMENT TEAM
                      </h1>

                      <div className="md:col-span-2 flex flex-col gap-2 divide-y-1 -mt-2">
                        {development_team.map((item, index) => (
                          <div key={index} className="md:pt-2">
                            <p className="font-medium text-sm uppercase text-[#02102a]">
                              {item.title}
                            </p>
                            <p className="text-[#02102a] text-sm md:text-base">
                              {item.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ResidencesDetail;
