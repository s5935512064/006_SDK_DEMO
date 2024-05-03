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
import Video from "next-video";

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

const images = [
  {
    src: "/assets/gallery/exterier/DSCF0057-Edit-13.webp",
    thumb: "/assets/gallery/exterier/DSCF0057-Edit-13-thumb.webp",
    width: 1800,
    height: 1200,
    caption: "exterior",
    alt: "",
  },
  {
    src: "/assets/gallery/exterier/DSCF0066-HDR-Edit-14.webp",
    thumb: "/assets/gallery/exterier/DSCF0066-HDR-Edit-14-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "exterior",
    alt: "",
  },
  {
    src: "/assets/gallery/exterier/DSCF0305-17.webp",
    thumb: "/assets/gallery/exterier/DSCF0305-17-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "exterior",
    alt: "",
  },
  {
    src: "/assets/gallery/exterier/DSCF0424-HDR-Edit-1.webp",
    thumb: "/assets/gallery/exterier/DSCF0424-HDR-Edit-1-thumb.webp",
    width: 1842,
    height: 1200,
    caption: "exterior",
    alt: "",
  },
  {
    src: "/assets/gallery/exterier/DSCF1604-HDR-86.webp",
    thumb: "/assets/gallery/exterier/DSCF1604-HDR-86-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "exterior",
    alt: "",
  },

  {
    src: "/assets/gallery/exterier/DSCF1339-HDR-Edit-1.webp",
    thumb: "/assets/gallery/exterier/DSCF1339-HDR-Edit-1-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "exterior",
    alt: "",
  },

  {
    src: "/assets/gallery/exterier/DSCF0329-HDR-Edit-1.webp",
    thumb: "/assets/gallery/exterier/DSCF0329-HDR-Edit-1-thumb.webp",
    width: 1842,
    height: 1200,
    caption: "exterior",
    alt: "",
  },

  {
    src: "/assets/gallery/exterier/DSCF1413-Edit-18-02.webp",
    thumb: "/assets/gallery/exterier/DSCF1413-Edit-18-02-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "exterior",
    alt: "",
  },
  {
    src: "/assets/gallery/exterier/DSCF0327-HDR-27.webp",
    thumb: "/assets/gallery/exterier/DSCF0327-HDR-27-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "exterior",
    alt: "",
  },

  {
    src: "/assets/gallery/exterier/IMG_20201116_161150-Edit-5.webp",
    thumb: "/assets/gallery/exterier/IMG_20201116_161150-Edit-5-thumb.webp",
    width: 1200,
    height: 1200,
    caption: "exterior",
    alt: "",
  },
  {
    src: "/assets/gallery/exterier/DSCF1345-HDR-Edit-3.webp",
    thumb: "/assets/gallery/exterier/DSCF1345-HDR-Edit-3-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "exterior",
    alt: "",
  },
  {
    src: "/assets/gallery/exterier/DSCF0317-HDR-25.webp",
    thumb: "/assets/gallery/exterier/DSCF0317-HDR-25-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "exterior",
    alt: "",
  },
  {
    src: "/assets/gallery/exterier/DSCF1544-Pano-Edit-70.webp",
    thumb: "/assets/gallery/exterier/DSCF1544-Pano-Edit-70-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "exterior",
    alt: "",
  },
  {
    src: "/assets/gallery/exterier/DSCF2623-HDR-Edit-3.webp",
    thumb: "/assets/gallery/exterier/DSCF2623-HDR-Edit-3-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "exterior",
    alt: "",
  },
];

const images_interior = [
  {
    src: "/assets/gallery/interior/DSC06808-101.webp",
    thumb: "/assets/gallery/interior/thumb/DSC06808-101-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "interior",
    alt: "",
  },

  {
    src: "/assets/gallery/interior/DSC06815-HDR-103.webp",
    thumb: "/assets/gallery/interior/thumb/DSC06815-HDR-103-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "interior",
    alt: "",
  },
  {
    src: "/assets/gallery/interior/DSC07026-112.webp",
    thumb: "/assets/gallery/interior/thumb/DSC07026-112-thumb.webp",
    width: 1200,
    height: 1800,
    caption: "interior",
    alt: "",
  },
  {
    src: "/assets/gallery/interior/DSC06822-HDR-Pano-104.webp",
    thumb: "/assets/gallery/interior/thumb/DSC06822-HDR-Pano-104-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "interior",
    alt: "",
  },
  {
    src: "/assets/gallery/interior/DSC07038-117.webp",
    thumb: "/assets/gallery/interior/thumb/DSC07038-117-thumb.webp",
    width: 1200,
    height: 1800,
    caption: "interior",
    alt: "",
  },

  {
    src: "/assets/gallery/interior/DSC06876-HDR-Pano-106.webp",
    thumb: "/assets/gallery/interior/thumb/DSC06876-HDR-Pano-106-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "interior",
    alt: "",
  },
  {
    src: "/assets/gallery/interior/DSC06980-Pano-109.webp",
    thumb: "/assets/gallery/interior/thumb/DSC06980-Pano-109-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "interior",
    alt: "",
  },
  {
    src: "/assets/gallery/interior/DSC07045-120.webp",
    thumb: "/assets/gallery/interior/thumb/DSC07045-120-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "interior",
    alt: "",
  },
  {
    src: "/assets/gallery/interior/DSCF1716-Edit-105.webp",
    thumb: "/assets/gallery/interior/thumb/DSCF1716-Edit-105-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "interior",
    alt: "",
  },
  {
    src: "/assets/gallery/interior/DSCF1773-Edit-121.webp",
    thumb: "/assets/gallery/interior/thumb/DSCF1773-Edit-121-thumb.webp",
    width: 1200,
    height: 1800,
    caption: "interior",
    alt: "",
  },
  {
    src: "/assets/gallery/interior/DSCF1726-Edit-106.webp",
    thumb: "/assets/gallery/interior/thumb/DSCF1726-Edit-106-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "interior",
    alt: "",
  },
  {
    src: "/assets/gallery/interior/DSCF1801-134.webp",
    thumb: "/assets/gallery/interior/thumb/DSCF1801-134-thumb.webp",
    width: 1200,
    height: 1800,
    caption: "interior",
    alt: "",
  },
  {
    src: "/assets/gallery/interior/DSCF1734-Edit-108.webp",
    thumb: "/assets/gallery/interior/thumb/DSCF1734-Edit-108-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "interior",
    alt: "",
  },

  {
    src: "/assets/gallery/interior/DSCF1743-109.webp",
    thumb: "/assets/gallery/interior/thumb/DSCF1743-109-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "interior",
    alt: "",
  },
  {
    src: "/assets/gallery/interior/DSCF1761-Edit-118.webp",
    thumb: "/assets/gallery/interior/thumb/DSCF1761-Edit-118-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "interior",
    alt: "",
  },
  {
    src: "/assets/gallery/interior/DSCF1800-133.webp",
    thumb: "/assets/gallery/interior/thumb/DSCF1800-133-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "interior",
    alt: "",
  },
  {
    src: "/assets/gallery/interior/DSC03949-HDR-108.webp",
    thumb: "/assets/gallery/interior/thumb/DSC03949-HDR-108-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "interior",
    alt: "",
  },

  {
    src: "/assets/gallery/interior/DSC03928-HDR-102.webp",
    thumb: "/assets/gallery/interior/thumb/DSC03928-HDR-102-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "interior",
    alt: "",
  },
  {
    src: "/assets/gallery/interior/DSC03955-HDR-109-002.webp",
    thumb: "/assets/gallery/interior/thumb/DSC03955-HDR-109-002-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "interior",
    alt: "",
  },
  {
    src: "/assets/gallery/interior/DSC03922-HDR-101.webp",
    thumb: "/assets/gallery/interior/thumb/DSC03922-HDR-101-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "interior",
    alt: "",
  },
  {
    src: "/assets/gallery/interior/DSC03940-HDR-105.webp",
    thumb: "/assets/gallery/interior/thumb/DSC03940-HDR-105-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "interior",
    alt: "",
  },
  {
    src: "/assets/gallery/interior/DSC03958-HDR-110.webp",
    thumb: "/assets/gallery/interior/thumb/DSC03958-HDR-110-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "interior",
    alt: "",
  },
  {
    src: "/assets/gallery/interior/DSC03931-HDR-103.webp",
    thumb: "/assets/gallery/interior/thumb/DSC03931-HDR-103-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "interior",
    alt: "",
  },

  {
    src: "/assets/gallery/interior/DSC03968-116.webp",
    thumb: "/assets/gallery/interior/thumb/DSC03968-116-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "interior",
    alt: "",
  },
];

const images_amenities = [
  {
    src: "/assets/gallery/amenities/DSCF0268-HDR-Edit-18.webp",
    thumb: "/assets/gallery/amenities/thumb/DSCF0268-HDR-Edit-18-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "amenities",
    alt: "",
  },

  {
    src: "/assets/gallery/amenities/DSCF0288-HDR-Edit-21.webp",
    thumb: "/assets/gallery/amenities/thumb/DSCF0288-HDR-Edit-21-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "amenities",
    alt: "",
  },
  {
    src: "/assets/gallery/amenities/V-DSCF0682-HDR-19.webp",
    thumb: "/assets/gallery/amenities/thumb/V-DSCF0682-HDR-19-thumb.webp",
    width: 1200,
    height: 1800,
    caption: "amenities",
    alt: "",
  },
  {
    src: "/assets/gallery/amenities/DSCF0677-HDR-18.webp",
    thumb: "/assets/gallery/amenities/thumb/DSCF0677-HDR-18-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "amenities",
    alt: "",
  },
  {
    src: "/assets/gallery/amenities/V-DSCF0254-6.webp",
    thumb: "/assets/gallery/amenities/thumb/V-DSCF0254-6-thumb.webp",
    width: 1200,
    height: 1800,
    caption: "amenities",
    alt: "",
  },

  {
    src: "/assets/gallery/amenities/MPH_5823-HDR-Pano (1).webp",
    thumb: "/assets/gallery/amenities/thumb/MPH_5823-HDR-Pano (1)-thumb.webp",
    width: 1200,
    height: 1800,
    caption: "amenities",
    alt: "",
  },

  {
    src: "/assets/gallery/amenities/DSCF0621-HDR-4.webp",
    thumb: "/assets/gallery/amenities/thumb/DSCF0621-HDR-4-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "amenities",
    alt: "",
  },
  {
    src: "/assets/gallery/amenities/DSCF0284-12.webp",
    thumb: "/assets/gallery/amenities/thumb/DSCF0284-12-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "amenities",
    alt: "",
  },

  {
    src: "/assets/gallery/amenities/MPH_5799-HDR-Pano-2-4.webp",
    thumb: "/assets/gallery/amenities/thumb/MPH_5799-HDR-Pano-2-4-thumb.webp",
    width: 1200,
    height: 1800,
    caption: "amenities",
    alt: "",
  },

  {
    src: "/assets/gallery/amenities/V-DSCF0672-14.webp",
    thumb: "/assets/gallery/amenities/thumb/V-DSCF0672-14-thumb.webp",
    width: 1200,
    height: 1800,
    caption: "amenities",
    alt: "",
  },
  {
    src: "/assets/gallery/amenities/DSCF0257-HDR-Edit-15.webp",
    thumb: "/assets/gallery/amenities/thumb/DSCF0257-HDR-Edit-15-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "amenities",
    alt: "",
  },
  {
    src: "/assets/gallery/amenities/DSCF0264-8.webp",
    thumb: "/assets/gallery/amenities/thumb/DSCF0264-8-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "amenities",
    alt: "",
  },
  {
    src: "/assets/gallery/amenities/DSCF0714-36.webp",
    thumb: "/assets/gallery/amenities/thumb/DSCF0714-36-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "amenities",
    alt: "",
  },
  {
    src: "/assets/gallery/amenities/DSCF0717-Edit-37.webp",
    thumb: "/assets/gallery/amenities/thumb/DSCF0717-Edit-37-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "amenities",
    alt: "",
  },

  {
    src: "/assets/gallery/amenities/SINDHORN WELLNESS by Resense - Sindhorn Kempinski Hotel.webp",
    thumb:
      "/assets/gallery/amenities/thumb/SINDHORN WELLNESS by Resense - Sindhorn Kempinski Hotel-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "amenities",
    alt: "",
  },

  {
    src: "/assets/gallery/amenities/DSCF0636-HDR-7.webp",
    thumb: "/assets/gallery/amenities/thumb/DSCF0636-HDR-7-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "amenities",
    alt: "",
  },

  {
    src: "/assets/gallery/amenities/8.1.webp",
    thumb: "/assets/gallery/amenities/thumb/8.1-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "amenities",
    alt: "",
  },

  {
    src: "/assets/gallery/amenities/DSCF0960-HDR-64.webp",
    thumb: "/assets/gallery/amenities/thumb/DSCF0960-HDR-64-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "amenities",
    alt: "",
  },
  {
    src: "/assets/gallery/amenities/DSCF0965-HDR-Edit-65.webp",
    thumb: "/assets/gallery/amenities/thumb/DSCF0965-HDR-Edit-65-thumb.webp",
    width: 1920,
    height: 1080,
    caption: "amenities",
    alt: "",
  },

  {
    src: "/assets/gallery/amenities/V-DSCF0705-32.webp",
    thumb: "/assets/gallery/amenities/thumb/V-DSCF0705-32-thumb.webp",
    width: 1200,
    height: 1800,
    caption: "amenities",
    alt: "",
  },
];

const tabs = [
  { name: "INTERIOR", content: images_interior },
  { name: "EXTERIOR", content: images },
  { name: "Facilities", content: images_amenities },
  { name: "Video", content: [] },
];

const GalleryDetail: FC<Props> = (): JSX.Element => {
  const ref = useRef(null);
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 2,
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
        <div
          id="gallery-section"
          className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10 flex flex-col items-center relative w-full"
        >
          <div className="mx-auto w-full my-16 md:my-32 xl:my-50 ">
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
                    offset={50}
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

              <Tab.Panels className="my-10">
                {tabs
                  .filter((p) => p.name != "Video")
                  .map((item, index) => (
                    <Tab.Panel key={index}>
                      <Fancybox
                        options={{
                          Carousel: {
                            infinite: false,
                          },
                        }}
                      >
                        <Masonry
                          breakpointCols={breakpointColumnsObj}
                          className="masonry-grid relative -translate-x-2"
                          columnClassName="masonry-grid_column pl-2 md:pl-4"
                        >
                          {item.content.map((item, index) => (
                            <a
                              key={index}
                              aria-label={item.alt}
                              data-fancybox={item.caption}
                              href={item.src}
                              className="relative masonry-grid_item loading bussiness_card "
                            >
                              <div className="gallery-image mb-2 md:mb-4 image overflow-hidden">
                                <Image
                                  alt={item.alt}
                                  src={item.thumb}
                                  priority
                                  title={item.caption || ""}
                                  style={{
                                    objectFit: "contain",
                                    objectPosition: "center",
                                  }}
                                  sizes="100vw"
                                  width={0}
                                  height={0}
                                  className="w-full h-full "
                                />
                              </div>
                            </a>
                          ))}
                        </Masonry>
                      </Fancybox>
                    </Tab.Panel>
                  ))}

                <Tab.Panel>
                  <div className="w-full relative flex flex-col gap-7">
                    <Video src={"/assets/SDK-WALKTHROUGH.mp4"} />
                    <Video src={"/assets/STAY-CLASSY.mp4"} />
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

export default GalleryDetail;
