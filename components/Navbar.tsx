"use client";

import React, { FC, useEffect, useState, useRef, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { Transition, Dialog } from "@headlessui/react";
import { usePathname } from "next/navigation";
import Hamburger from "hamburger-react";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const menu = [
  { label: "Home", side: "left", active: "/en", slug: "/" },
  {
    label: "Overview",
    side: "left",
    active: "/en/overview",
    slug: "/overview",
  },
  {
    label: "Residences",
    side: "left",
    active: "/en/residences",
    slug: "/residences",
  },
  { label: "Gallery", side: "right", active: "/en/gallery", slug: "/gallery" },
  {
    label: "Investment",
    side: "right",
    active: "/en/investment",
    slug: "/investment",
  },
  {
    label: "Contact Us",
    side: "right",
    active: "/en/contact",
    slug: "/contact",
  },
];

const Navbar: FC<Props> = (): JSX.Element => {
  const [navbarOffset, setNavbarOffset] = useState(false);
  const [navbarOffset2, setNavbarOffset2] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  const segments = pathname.split("/");

  function closeModal() {
    setOpen(false);
  }

  function toggleNavbar() {
    setOpen(!isOpen);
  }

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      if (prevScrollpos == 0) setNavbarOffset(false);
      else setNavbarOffset(true);
    };
  }, []);

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos >= currentScrollPos) {
        setNavbarOffset2(true);
      } else {
        setNavbarOffset2(false);
      }

      if (window.pageYOffset >= 20) {
        setNavbarOffset(true);
      } else {
        setNavbarOffset(false);
      }
      prevScrollpos = currentScrollPos;
    };
  });

  return (
    <>
      <header
        id="navbar"
        className={classNames(
          navbarOffset
            ? "bg-[#fefeff]  h-fit shadow-sm"
            : "bg-gradient-to-b from-[#02102a]/30 h-fit p-3",
          navbarOffset2 ? "top-0" : "top-0",
          "fixed inset-0 w-full !z-50 flex items-center"
        )}
      >
        <div className="absolute md:hidden left-3 lg:left-7 w-fit h-full  flex gap-2 items-center ">
          <Hamburger
            label="menu"
            rounded
            color={navbarOffset ? "#02102a" : "#fff"}
            size={20}
            toggled={isOpen}
            toggle={toggleNavbar}
          />
        </div>

        <div className="max-w-[1440px] mx-auto flex justify-center md:justify-between items-center w-full">
          {/* Left Menu Items */}
          <ul className="hidden md:flex space-x-4 justify-evenly w-full">
            {menu
              .filter((p) => p.side == "left")
              .map((item, index) => (
                <li key={index} className="relative">
                  <Link
                    href={item.slug}
                    className={classNames(
                      item.active == pathname
                        ? "effect-underline2"
                        : "effect-underline text-opacity-70",
                      navbarOffset
                        ? "text-[#02102a] hover:text-[#02102a]"
                        : "text-white hover:text-white ",
                      " transition duration-300 text-lg uppercase hover:text-opacity-100"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>

          {/* Logo (Centered) */}
          <Link
            href={"/"}
            className={classNames(
              navbarOffset ? "w-16" : "w-24 md:w-28",
              "flex-shrink-0 flex items-center justify-center relative translate-y-1"
            )}
          >
            <Image
              src={
                navbarOffset
                  ? "/assets/logo-TREE.svg"
                  : "/assets/logo-w-resize.webp"
              }
              alt="logo"
              sizes="100vw"
              width={0}
              height={0}
              style={{ objectFit: "contain", objectPosition: "center" }}
              className="w-full h-full"
            />
          </Link>

          {/* right Menu Items */}
          <ul className="hidden md:flex space-x-4 justify-evenly w-full ">
            {menu
              .filter((p) => p.side == "right")
              .map((item, index) => (
                <li key={index} className="relative">
                  <Link
                    href={item.slug}
                    className={classNames(
                      item.active == pathname
                        ? "effect-underline2"
                        : "effect-underline text-opacity-70",
                      navbarOffset
                        ? "text-[#02102a] hover:text-[#02102a]"
                        : "text-white hover:text-white ",
                      " transition duration-300 text-lg uppercase   hover:text-opacity-100"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 z-50" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="fixed  inset-0 overflow-hidden ">
                <div className="flex min-h-full items-center text-center ">
                  <Dialog.Panel className="bg-white w-full max-w-[350px] min-h-screen h-full transform overflow-y-visible  shadow-xl transition-all relative">
                    <div className="bg-[url('/assets/manifesto.webp')] bg-cover bg-[center_right_-50%] bg-no-repeat w-full h-full absolute opacity-15 top-0 !z-[0] "></div>
                    <div className="p-4  py-6 flex flex-col absolute gap-4 z-10">
                      <div className="absolute right-4">
                        <button
                          type="button"
                          onClick={closeModal}
                          className="w-8 h-8 lg:w-9 lg:h-9 rounded-full border   flex items-center justify-center text-black "
                        >
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                          <span className="sr-only">close</span>
                        </button>
                      </div>

                      <div className="w-fit h-16 relative ml-3">
                        <Image
                          src={"/assets/logo-color.webp"}
                          alt="logo"
                          width="0"
                          height="0"
                          sizes="100vw"
                          style={{
                            objectFit: "contain",
                            objectPosition: "left",
                          }}
                          className="w-full h-full"
                        />
                      </div>

                      <div className="divide-y divide-gray-100 w-full flex flex-col flex-1 ">
                        {menu.map((item, index) => (
                          <Link
                            href={item.slug}
                            key={index}
                            onClick={closeModal}
                            className={classNames(
                              item.active == pathname
                                ? "bg-[#d9cdc0] !text-white font-semibold  "
                                : "",
                              "group text-[#02102a] flex w-full items-center rounded-full px-4 py-2 text-sm duration-300 hover:bg-[#d9cdc0] hover:text-white uppercase"
                            )}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>

                      <div className="flex flex-col items-start w-full px-4 py-2 gap-2">
                        <h1 className="font-semibold text-[#d9cdc0] text-sm md:text-base">
                          Contact
                        </h1>
                        <div className="flex flex-col items-start">
                          <p className="text-[#02102a] text-sm md:text-base">
                            +66 (2)-253-8916
                          </p>
                          <p className="text-[#02102a] text-sm md:text-base">
                            sales@siamsindhorn.com
                          </p>
                        </div>

                        <h1 className="font-semibold text-[#d9cdc0] text-sm md:text-base mt-4">
                          Address
                        </h1>
                        <div className="flex flex-col items-start">
                          <p className="text-[#02102a] text-sm md:text-base text-left">
                            The Residences at Sindhorn Kempinski Building, 88
                            Soi Tonson, Lumpini, Pathumwan, Bangkok 10330
                          </p>
                        </div>

                        <h1 className="font-semibold text-[#d9cdc0] text-sm md:text-base mt-4">
                          More channels to contact us
                        </h1>
                        <div className="flex items-center justify-start gap-[5px] mt-1 ">
                          <Link
                            legacyBehavior
                            href="https://www.facebook.com/Sindhornvillage"
                            className=""
                          >
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="facebook_osp"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="33"
                                height="33"
                                viewBox="0 0 32.84 32.84"
                                className="cursor-pointer text-[#02102a] hover:bg-[#02102a] hover:text-white rounded-full duration-200 transition-all"
                              >
                                <circle
                                  id="Ellipse_9"
                                  data-name="Ellipse 9"
                                  cx="15.67"
                                  cy="15.67"
                                  r="15.67"
                                  transform="translate(0.75 0.75)"
                                  fill="none"
                                  stroke="#02102a"
                                  strokeWidth="1.5"
                                />
                                <path
                                  id="Path_548020"
                                  data-name="Path 548020"
                                  d="M89.224,61.228h-2.91v-6.2H84.86V52.647h1.454V51.209c0-1.947.821-3.106,3.153-3.106h1.941v2.388H90.2c-.909,0-.969.334-.969.956v1.194h2.194l-.255,2.389H89.224Z"
                                  transform="translate(-71.834 -38.578)"
                                  fill="currentColor"
                                />
                              </svg>
                            </a>
                          </Link>

                          <Link
                            legacyBehavior
                            href="https://www.instagram.com/sindhornvillage"
                          >
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="instagram_sdb"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="33"
                                height="33"
                                viewBox="0 0 32.84 32.84"
                                className="cursor-pointer text-[#02102a] hover:bg-[#02102a] hover:text-white rounded-full duration-200 transition-all"
                              >
                                <circle
                                  id="Ellipse_9"
                                  data-name="Ellipse 9"
                                  cx="15.67"
                                  cy="15.67"
                                  r="15.67"
                                  transform="translate(0.75 0.75)"
                                  fill="none"
                                  stroke="#02102a"
                                  strokeWidth="1.5"
                                />

                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="26"
                                  height="24"
                                  viewBox="0 0 32.84 32.84"
                                >
                                  <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                    fill="currentColor"
                                    transform="translate(9 10)"
                                  />
                                </svg>
                              </svg>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition>
      </header>
    </>
  );
};

export default Navbar;
