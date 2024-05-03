"use client";

import React, { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Footer: FC<Props> = (): JSX.Element => {
  const [year, setYear] = useState<any>(moment().year());

  return (
    <>
      <footer
        className={classNames(
          "w-full h-fit  flex flex-col justify-center items-center relative -mt-1"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10  w-full flex flex-col gap-2 justify-between  items-center text-primary">
          <div
            className={classNames(
              "w-full flex  flex-col gap-2 lg:gap-3 lg:flex-row justify-between lg:justify-between items-center border-t py-4 "
            )}
          >
            <div className="w-fit right-5 md:right-10 flex flex-col lg:flex-row md:flex-col md:justify-between items-center gap-2 lg:gap-3 text-sm md:text-base  lg:divide-x  lg:justify-start ">
              <div className="flex flex-col lg:flex-row items-center gap-1 md:gap-2">
                <p className="text-sm md:text-base text-[#02102a]">
                  More channels to contact us
                </p>
                <div className="flex items-center gap-[5px] mt-1 ">
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

                  {/* <Link legacyBehavior href="https://lin.ee/mIrbWUY">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="line_osp"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="33"
                        height="33"
                        viewBox="0 0 32.84 32.84"
                        className="cursor-pointer text-[#02102a] hover:bg-[#02102a] hover:text-white  rounded-full duration-200 transition-all"
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
                          width="33.492"
                          height="33.499"
                          viewBox="0 0 33.492 33.499"
                        >
                          <path
                            id="Path_548022"
                            data-name="Path 548022"
                            d="M213.915,65.158a.356.356,0,0,1-.288-.113.785.785,0,0,1-.054-.6v-.019l.157-.912a2.076,2.076,0,0,0-.034-.966c-.118-.293-.577-.448-.941-.526-5.171-.685-8.921-4.277-8.921-8.54,0-4.773,4.786-8.657,10.669-8.657s10.666,3.884,10.666,8.657a7.749,7.749,0,0,1-2.286,5.328,34.211,34.211,0,0,1-8.38,6.192,1.622,1.622,0,0,1-.588.151m4.7-13.978a.206.206,0,0,0-.2.2v4.651a.206.206,0,0,0,.2.206h3a.2.2,0,0,0,.2-.2v-.756a.2.2,0,0,0-.2-.2h-2.037v-.784h2.037a.2.2,0,0,0,.2-.2v-.757a.2.2,0,0,0-.2-.2h-2.037v-.784h2.037a.205.205,0,0,0,.2-.2v-.756a.206.206,0,0,0-.2-.2h-3Zm-4.19,2.1h0l2.129,2.876a.247.247,0,0,0,.052.05l.016.008.015.007h.032a.177.177,0,0,0,.056.008h.752a.206.206,0,0,0,.206-.2V51.367a.206.206,0,0,0-.206-.2h-.755a.2.2,0,0,0-.2.2v2.764l-2.131-2.876-.015-.022-.014-.014-.015-.014-.017-.009h-.852a.2.2,0,0,0-.2.2v4.654a.2.2,0,0,0,.2.2h.757a.2.2,0,0,0,.2-.2V53.291Zm-2.852-2.1a.2.2,0,0,0-.2.2v4.654a.2.2,0,0,0,.2.2h.757a.2.2,0,0,0,.2-.2V51.384a.2.2,0,0,0-.2-.2Zm-4.043,0a.2.2,0,0,0-.2.2v4.651a.2.2,0,0,0,.2.206h3a.2.2,0,0,0,.2-.2v-.756a.2.2,0,0,0-.2-.2h-2.037V51.384a.206.206,0,0,0-.206-.2Z"
                            transform="translate(-197.758 -38.248)"
                            fill="currentColor"
                          />
                        </svg>
                      </svg>
                    </a>
                  </Link>
                  <Link
                    legacyBehavior
                    href="https://www.linkedin.com/company/sindhorn-building/"
                    className=""
                  >
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Linkedin"
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
                          id="Layer_1"
                          viewBox="0 -30 65 120"
                          width="26"
                          height="22"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="_x31_0.Linkedin">
                            <path d="m90 90v-29.3c0-14.4-3.1-25.4-19.9-25.4-8.1 0-13.5 4.4-15.7 8.6h-.2v-7.3h-15.9v53.4h16.6v-26.5c0-7 1.3-13.7 9.9-13.7 8.5 0 8.6 7.9 8.6 14.1v26h16.6z" />
                            <path d="m11.3 36.6h16.6v53.4h-16.6z" />
                            <path d="m19.6 10c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.7 9.6 9.7 9.6-4.4 9.6-9.7-4.3-9.6-9.6-9.6z" />
                          </g>
                        </svg>
                      </svg>
                    </a>
                  </Link> */}
                </div>
              </div>

              <div className="flex items-center gap-3 divide-x">
                <div className="flex items-center justify-center lg:pl-3">
                  <Link
                    legacyBehavior
                    href={"https://siamsindhorn.com/privacy"}
                  >
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="goto_privacy"
                      className="hover:scale-105 duration-300  transition-all cursor-pointer outline-none border-none text-sm md:text-base hover:font-medium"
                    >
                      Privacy
                    </a>
                  </Link>
                </div>

                <div className="flex items-center justify-center">
                  <button
                    type="button"
                    data-cc="c-settings"
                    className="pl-3 hover:scale-105 duration-300 cursor-pointer outline-none border-none transition-all text-sm md:text-base hover:font-medium"
                  >
                    Cookies
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center h-full lg:gap-3 lg:divide-x w-fit flex-col lg:flex-row">
              <Link legacyBehavior href={"https://siamsindhorn.com/"}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="goto_website"
                  className="h-8 w-28 relative translate-y-[2px] hidden lg:block"
                >
                  <Image
                    src={"/assets/logo-ssd.webp"}
                    alt="logo"
                    priority
                    width="0"
                    height="0"
                    sizes="100vw"
                    unoptimized={true}
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                    className="w-full h-full"
                  />
                </a>
              </Link>

              <Link
                legacyBehavior
                href={"https://www.kempinski.com/en/sindhorn-hotel"}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="goto_website"
                  className="h-8 w-28 relative translate-y-[2px] hidden lg:block pl-3"
                >
                  <Image
                    src={"/assets/All Logo_SSD-16.webp"}
                    alt="logo SDK"
                    priority
                    width="0"
                    height="0"
                    sizes="100vw"
                    unoptimized={true}
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                    className="w-full h-full"
                  />
                </a>
              </Link>

              <p className="text-center text-sm md:text-base pl-3">
                Copyright © 2024 {year != "2024" && -year}{" "}
                <Link legacyBehavior href={"https://siamsindhorn.com/"}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Siam Sindhorn Co., Ltd. "
                    className="font-medium cursor-pointer mr-1 italic "
                  >
                    Siam Sindhorn Co., Ltd.
                  </a>
                </Link>
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
