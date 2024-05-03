"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Link, animateScroll as scroll, scroller } from "react-scroll";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const HeroHeader: FC<Props> = (): JSX.Element => {
  return (
    <>
      <div className="relative h-[85vh] md:h-screen flex flex-col items-center overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover object-top scale-125 text-"
          autoPlay
          loop
          muted
        >
          <source
            src="https://eiffelbakery.com/video/SDK-WALKTHROUGH.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

        <div className="absolute flex-1 inset-0 flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 xl:px-10">
          <h1 className="text-5xl md:text-7xl text-white text-center font-Heleness drop-shadow-md">
            Luxury Living Redefined
          </h1>
          <h2 className="text-base md:text-xl text-white mt-2 md:mt-4 text-center">
            Discover an elevated standard of living at The Residences at
            Sindhorn Kempinski Hotel Bangkok
          </h2>
        </div>

        <div className="absolute w-28 h-fit bottom-[10%] !z-10 cursor-pointer hover:scale-110 transition duration-300">
          <Link
            href="#"
            role="link"
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1000}
          >
            <button
              type="button"
              className="arrow-exp text-white  h-full outline-none text-base md:text-lg"
            >
              SCROLL
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroHeader;
