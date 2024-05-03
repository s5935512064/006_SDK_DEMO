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

const DetailSection: FC<Props> = (): JSX.Element => {
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
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10 flex flex-col items-center  w-full">
          <div className="mx-auto w-full my-16 md:my-32 xl:my-50 grid grid-cols-1 md:grid-cols-2 gap-7  md:divide-x-1 ">
            <div className=" flex flex-col gap-2 md:pr-7">
              <h1 className="font-Heleness text-4xl md:text-5xl font-medium text-[#02102a]">
                Get in Touch
              </h1>

              <p className="text-[#02102a] text-sm md:text-base ">
                The Residences at Sindhorn Kempinski Hotel Bangkok is located in
                Langsuan, a prime area in Bangkok surrounded by many embassies.
                The residences is an oasis in itself, set in a green residential
                extension of Lumpini Park. Close proximity to the park provides
                a uniquely luxurious dimension, offering guests a refreshing
                respite from the city and an immersive relaxing experience
                designed with comfort and well-being in mind.
              </p>

              <p className="text-[#02102a] text-sm md:text-base">
                The residences is easily accessible by car, taxis, the BTS
                Skytrain, MRT and other public transportation including
                tuk-tuks, the three-wheeled open-sided taxi that has long been a
                symbol of Bangkok.
              </p>

              <div className="cursor-pointer  w-full h-fit  relative flex gap-3 md:gap-6  items-center mt-4">
                <div className="w-12 h-12 rounded-md relative overflow-hidden  bg-[#02102a] flex-shrink-0 justify-center items-center flex">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 96 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M48 8C32.52 8 20 20.52 20 36C20 57 48 88 48 88C48 88 76 57 76 36C76 20.52 63.48 8 48 8ZM48 46C42.48 46 38 41.52 38 36C38 30.48 42.48 26 48 26C53.52 26 58 30.48 58 36C58 41.52 53.52 46 48 46Z"
                      fill="#FFF"
                    />
                  </svg>
                </div>

                <div className="px-2 ">
                  <p className=" text-left text-sm md:text-base">
                    The Residences at Sindhorn Kempinski Building, 88 Soi
                    Tonson, Lumpini, Pathumwan, Bangkok 10330
                  </p>
                </div>
              </div>

              <a
                href="tel:+6622538916"
                className=" cursor-pointer  w-full h-fit   relative flex gap-3 md:gap-6 items-center "
              >
                <div className="w-12 h-12 rounded-md relative overflow-hidden  bg-[#02102a] flex-shrink-0 justify-center items-center flex">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 96 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.48 43.16C32.24 54.48 41.52 63.72 52.84 69.52L61.64 60.72C62.72 59.64 64.32 59.28 65.72 59.76C70.2 61.24 75.04 62.04 80 62.04C82.2 62.04 84 63.84 84 66.04V80C84 82.2 82.2 84 80 84C42.44 84 12 53.56 12 16C12 13.8 13.8 12 16 12H30C32.2 12 34 13.8 34 16C34 21 34.8 25.8 36.28 30.28C36.72 31.68 36.4 33.24 35.28 34.36L26.48 43.16Z"
                      fill="#FFF"
                    />
                  </svg>
                </div>

                <div className="px-2 ">
                  <p className="text-left text-sm md:text-base">
                    +66 (2)-253-8916
                  </p>
                </div>
              </a>

              <a
                href="tel:+6622538916"
                className=" cursor-pointer  w-full h-fit   relative flex gap-3 md:gap-6  items-center "
              >
                <div className="w-12 h-12 rounded-md relative overflow-hidden  bg-[#02102a] flex-shrink-0 justify-center items-center flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#fff"
                    className="w-8 h-8 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>

                <div className="px-2 ">
                  <p className="text-left text-sm md:text-base">
                    sales@siamsindhorn.com
                  </p>
                </div>
              </a>

              <div className="w-full min-h-[450px] relative mt-4">
                <iframe
                  title="The Residences at Sindhorn Kempinski Hotel Bangkok"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.7109099444433!2d100.5409525757636!3d13.73594429765907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed9a7ecb2ad%3A0x30c6a65f0f9ed6ab!2sThe%20Residences%20at%20Sindhorn%20Kempinski%20Hotel%20Bangkok!5e0!3m2!1sen!2sus!4v1713864220304!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className=" flex flex-col items-center gap-2 md:pl-7 ">
              <h1 className="font-Heleness text-4xl md:text-5xl font-medium text-[#02102a]">
                Sale Inquiries
              </h1>
              <p className="text-[#02102a] text-sm md:text-base text-center">
                For resale and rental opportunities or for more information
                about our new developments, please send us a query.
              </p>

              <form action="" className="flex flex-col gap-2 mt-2 max-w-sm">
                <label htmlFor="fName" className="text-[#02102a] text-sm gap-1">
                  First Name
                  <input
                    type="text"
                    id="fName"
                    required
                    className="w-full px-2  py-1 border border-[#02102a] bg-transparent focus:ring-0 focus:outline-none"
                  />
                </label>

                <label htmlFor="lName" className="text-[#02102a] text-sm gap-1">
                  Last Name
                  <input
                    type="text"
                    id="lName"
                    required
                    className="w-full px-2  py-1 border border-[#02102a] bg-transparent focus:ring-0 focus:outline-none"
                  />
                </label>

                <label htmlFor="email" className="text-[#02102a] text-sm gap-1">
                  Email
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-2  py-1 border border-[#02102a] bg-transparent focus:ring-0 focus:outline-none"
                  />
                </label>

                <label htmlFor="phone" className="text-[#02102a] text-sm gap-1">
                  Phone
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-2  py-1 border border-[#02102a] bg-transparent focus:ring-0 focus:outline-none"
                  />
                </label>

                <label htmlFor="unit" className="text-[#02102a] text-sm gap-1">
                  Type Unit
                  <input
                    type="tel"
                    id="unit"
                    required
                    className="w-full px-2  py-1 border border-[#02102a] bg-transparent focus:ring-0 focus:outline-none"
                  />
                </label>

                <label htmlFor="price" className="text-[#02102a] text-sm gap-1">
                  Price
                  <input
                    type="tel"
                    id="price"
                    required
                    className="w-full px-2  py-1 border border-[#02102a] bg-transparent focus:ring-0 focus:outline-none"
                  />
                </label>

                <label
                  htmlFor="message"
                  className="text-[#02102a] text-sm gap-1"
                >
                  Message
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-2  py-1 border border-[#02102a] bg-transparent focus:ring-0 focus:outline-none"
                  />
                </label>

                <div className="text-[#02102a] text-sm flex items-start text-left mt-2 ">
                  <label htmlFor="policyCheck">
                    <input
                      id="policyCheck"
                      type="checkbox"
                      className="mr-2  accent-[#d9cdc0] -mt-2"
                    />
                    I have read the
                    <Link2 href="https://siamsindhorn.com/privacy">
                      <span className="text-[#d9cdc0] px-1">
                        Privacy Policy
                      </span>
                    </Link2>
                    , and hereby give my consent for Siam Sindhorn Co., Ltd. and
                    its group companies (&quot;Company&quot;) to collect, use,
                    or disclose my Personal Data.
                  </label>
                </div>

                <button
                  type="submit"
                  className="text-[#02102a] w-full px-4 py-2 border border-[#02102a] mt-4 hover:bg-[#d9cdc0] hover:border-transparent transition duration-200 hover:text-[#02102a]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default DetailSection;
