"use client";
import React, { FC, useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Transition, Dialog } from "@headlessui/react";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Inquiries: FC<Props> = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={classNames(
          isOpen ? "min-w-[300px] bg-black/30 " : "w-fit",
          "fixed inset-0 z-50 transition-all duration-300 ease-in-out"
        )}
      >
        <div
          className={classNames(
            isOpen ? "translate-x-0" : "-translate-x-5",
            "flex items-center relative"
          )}
        >
          <div
            className={classNames(
              isOpen ? "w-1/4 min-w-72" : "",
              "h-screen bg-[url('/assets/background.jpg')] bg-cover bg-no-repeat bg-center  overflow-x-hidden overflow-y-scroll relative z-10"
            )}
          >
            <div className="flex flex-col p-10 !z-10 absolute">
              <h1 className="font-Heleness text-5xl font-medium text-white">
                Sale Inquiries
              </h1>
              <p className="text-slate-300 text-sm  ">
                For resale and rental opportunities or for more information
                about our new developments, please send us a query.
              </p>

              <form action="" className="flex flex-col gap-2 mt-2">
                <label htmlFor="fName" className="text-white text-sm gap-1">
                  First Name
                  <input
                    type="text"
                    id="fName"
                    required
                    className="w-full px-2  py-1 border border-white bg-transparent focus:ring-0 focus:outline-none"
                  />
                </label>

                <label htmlFor="lName" className="text-white text-sm gap-1">
                  Last Name
                  <input
                    type="text"
                    id="lName"
                    required
                    className="w-full px-2  py-1 border border-white bg-transparent focus:ring-0 focus:outline-none"
                  />
                </label>

                <label htmlFor="email" className="text-white text-sm gap-1">
                  Email
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-2  py-1 border border-white bg-transparent focus:ring-0 focus:outline-none"
                  />
                </label>

                <label htmlFor="phone" className="text-white text-sm gap-1">
                  Phone
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-2  py-1 border border-white bg-transparent focus:ring-0 focus:outline-none"
                  />
                </label>

                <label htmlFor="unit" className="text-white text-sm gap-1">
                  Type Unit
                  <input
                    type="tel"
                    id="unit"
                    required
                    className="w-full px-2  py-1 border border-white bg-transparent focus:ring-0 focus:outline-none"
                  />
                </label>

                <label htmlFor="price" className="text-white text-sm gap-1">
                  Price
                  <input
                    type="tel"
                    id="price"
                    required
                    className="w-full px-2  py-1 border border-white bg-transparent focus:ring-0 focus:outline-none"
                  />
                </label>

                <label htmlFor="message" className="text-white text-sm gap-1">
                  Message
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-2  py-1 border border-white bg-transparent focus:ring-0 focus:outline-none"
                  />
                </label>

                <div className="text-white text-sm flex items-start text-left mt-2 ">
                  <input
                    id="policy"
                    type="checkbox"
                    className="mr-2  accent-[#d9cdc0] w-8 h-8 -mt-2"
                  />

                  <label htmlFor="policy">
                    I have read the
                    <Link href="https://siamsindhorn.com/privacy">
                      <span className="text-[#d9cdc0] px-1">
                        Privacy Policy
                      </span>
                    </Link>
                    , and hereby give my consent for Siam Sindhorn Co., Ltd. and
                    its group companies (&quot;Company&quot;) to collect, use,
                    or disclose my Personal Data.
                  </label>
                </div>

                <button
                  type="submit"
                  className="text-white w-full px-4 py-2 border mt-4 hover:bg-[#d9cdc0] hover:border-transparent transition duration-200 hover:text-[#02102a]"
                >
                  Submit
                </button>
              </form>
            </div>

            <div className="bg-[url('/assets/Artwork8.png')] bg-cover bg-[center_right_-150%] bg-no-repeat w-full h-full absolute opacity-30 top-0 !z-[0] "></div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="transform rotate-90 px-6 py-1 bg-[#02102a] text-white -translate-x-10 h-16  flex items-center justify-start hover:-translate-x-9 shadow outline-none focus:ring-0 rounded-lg transition-all"
          >
            <p className=" tracking-wider text-center font-Heleness">
              INQUIRIES
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Inquiries;
