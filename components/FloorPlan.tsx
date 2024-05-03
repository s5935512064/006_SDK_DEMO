"use client";

import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import Fancybox from "./FancyboxWrap";

interface Props {}
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const rom_plan = [
  {
    floorId: 5,
    roomId: "34th",
    image: [
      {
        src: "/assets/plan/Floor-34.webp",
        alt: "31thPlan",
        scal: false,
        position: "center",
        label: "34",
        prefix: "th",
        label2: null,
        prefix2: null,
      },
    ],
  },
  {
    floorId: 5,
    roomId: "ph",
    image: [
      {
        src: "/assets/plan/penthouse.webp",
        alt: "penthousePlan",
        scal: true,
        position: "top",
        label: "PH",
        prefix: "",
        label2: null,
        prefix2: null,
      },
    ],
  },
  {
    floorId: 4,
    roomId: "33th",
    image: [
      {
        src: "/assets/plan/Floor-31.webp",
        alt: "4thPlan",
        scal: true,
        position: "top",
        label: "31",
        prefix: "st",
        label2: "33",
        prefix2: "rd",
      },
    ],
  },
  {
    floorId: 4,
    roomId: "3B",
    image: [
      {
        src: "/assets/plan/3b-31f.webp",
        alt: "3b-31f",
        scal: true,
        position: "top",
        label: "3B",
        prefix: "",
        label2: null,
        prefix2: null,
      },
    ],
  },
  {
    floorId: 4,
    roomId: "3C",
    image: [
      {
        src: "/assets/plan/3c-31f.webp",
        alt: "3c-31f",
        scal: true,
        position: "top",
        label: "3C",
        prefix: "",
        label2: null,
        prefix2: null,
      },
    ],
  },
  {
    floorId: 3,
    roomId: "29th",
    image: [
      {
        src: "/assets/plan/Floor-27.webp",
        alt: "Floor-27",
        scal: true,
        position: "top",
        label: "27",
        prefix: "th",
        label2: "29",
        prefix2: "th",
      },
    ],
  },
  {
    floorId: 3,
    roomId: "4A",
    image: [
      {
        src: "/assets/plan/4a-29f.webp",
        alt: "4a-29f",
        scal: true,
        position: "top",
        label: "4A",
        prefix: "",
        label2: null,
        prefix2: null,
      },
    ],
  },
  {
    floorId: 2,
    roomId: "26th",
    image: [
      {
        src: "/assets/plan/Floor-14.webp",
        alt: "Floor-14",
        scal: true,
        position: "top",
        label: "14",
        prefix: "th",
        label2: "26",
        prefix2: "th",
      },
    ],
  },
  {
    floorId: 2,
    roomId: "3A",
    image: [
      {
        src: "/assets/plan/3a-29f.webp",
        alt: "3a-29f",
        scal: true,
        position: "top",
        label: "3A",
        prefix: "",
        label2: null,
        prefix2: null,
      },
    ],
  },
  {
    floorId: 2,
    roomId: "2C",
    image: [
      {
        src: "/assets/plan/2c-29f.webp",
        alt: "2c-29f",
        scal: true,
        position: "top",
        label: "2C",
        prefix: "",
        label2: null,
        prefix2: null,
      },
    ],
  },
  {
    floorId: 1,
    roomId: "12nd",
    image: [
      {
        src: "/assets/plan/Floor-03.webp",
        alt: "Floor-03",
        scal: true,
        position: "top",
        label: "3",
        prefix: "rd",
        label2: "12",
        prefix2: "nd",
      },
    ],
  },
  {
    floorId: 1,
    roomId: "2A",
    image: [
      {
        src: "/assets/plan/2a-3f.webp",
        alt: "2a-3f",
        scal: true,
        position: "top",
        label: "2A",
        prefix: "",
        label2: null,
        prefix2: null,
      },
    ],
  },
  {
    floorId: 1,
    roomId: "2B",
    image: [
      {
        src: "/assets/plan/2b-3f.webp",
        alt: "2b-3f",
        scal: true,
        position: "top",
        label: "2B",
        prefix: "",
        label2: null,
        prefix2: null,
      },
    ],
  },
  {
    floorId: 1,
    roomId: "1A",
    image: [
      {
        src: "/assets/plan/1a-3f.webp",
        alt: "1a-3f",
        scal: true,
        position: "top",
        label: "ST",
        prefix: "",
        label2: null,
        prefix2: null,
      },
    ],
  },
  {
    floorId: 1,
    roomId: "11A",
    image: [
      {
        src: "/assets/plan/11a-3f.webp",
        alt: "11a-3f",
        scal: true,
        position: "top",
        label: "1+1A",
        prefix: "",
        label2: null,
        prefix2: null,
      },
    ],
  },
];

const FloorPlan: FC<Props> = (): JSX.Element => {
  const [floor, setFloor] = useState(0);
  const [roomType, setRoomtype] = useState("");

  return (
    <>
      <div
        className={classNames(
          floor == 0 ? "" : "",
          "w-full h-fit relative flex flex-col-reverse lg:flex-row justify-center items-center  transition-all duration-200"
        )}
      >
        <div
          className={classNames(
            floor == 0 ? "" : "",
            "max-w-7xl w-full relative flex justify-center items-center  transition-all duration-300  overflow-hidden "
          )}
        >
          <div className="absolute right-0 scale-75 md:scale-90 md:right-[10%] -translate-y-10 z-10">
            <div className="flex md:justify-around w-fit flex-col ">
              <div className="flex flex-col items-center gap-2 ">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setFloor(5);
                    setRoomtype("34th");
                  }}
                  className={classNames(
                    floor == 0 || floor == 5
                      ? " text-[#B5A191]"
                      : "text-[#343F55] opacity-30",
                    "hover:scale-150 duration-300 w-fit h-fit !z-50 text-3xl font-Heleness"
                  )}
                >
                  34 <span className="text-sm align-top -ml-1 ">th</span>
                </button>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setFloor(4);
                    setRoomtype("33th");
                  }}
                  className={classNames(
                    floor == 0 || floor == 4
                      ? " text-[#B5A191]"
                      : "text-[#343F55] opacity-30",
                    "hover:scale-150 duration-300 w-fit h-fit !z-50 text-3xl font-Heleness"
                  )}
                >
                  31 <span className="text-sm align-top -ml-1 ">st</span> - 33{" "}
                  <span className="text-sm align-top -ml-1 ">rd</span>
                </button>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setFloor(3);
                    setRoomtype("29th");
                  }}
                  className={classNames(
                    floor == 0 || floor == 3
                      ? " text-[#B5A191]"
                      : "text-[#343F55] opacity-30",
                    "hover:scale-150 duration-300 w-fit h-fit !z-50 text-3xl font-Heleness"
                  )}
                >
                  27 <span className="text-sm align-top -ml-1 ">th</span> - 29{" "}
                  <span className="text-sm align-top -ml-1 ">th</span>
                </button>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setFloor(2);
                    setRoomtype("26th");
                  }}
                  className={classNames(
                    floor == 0 || floor == 2
                      ? " text-[#B5A191]"
                      : "text-[#343F55] opacity-30",
                    "hover:scale-150 duration-300 w-fit h-fit !z-50 text-3xl font-Heleness"
                  )}
                >
                  14 <span className="text-sm align-top -ml-1 ">th</span> - 26{" "}
                  <span className="text-sm align-top -ml-1 ">th</span>
                </button>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setFloor(1);
                    setRoomtype("12nd");
                  }}
                  className={classNames(
                    floor == 0 || floor == 1
                      ? " text-[#B5A191]"
                      : "text-[#343F55] opacity-30",
                    "hover:scale-150 duration-300 w-fit h-fit !z-50 text-3xl font-Heleness"
                  )}
                >
                  3 <span className="text-sm align-top -ml-1 ">rd</span> - 12{" "}
                  <span className="text-sm align-top -ml-1 ">nd</span>
                </button>
              </div>

              <div className="flex flex-col items-center gap-2 ">
                <button
                  id="ph"
                  onClick={(e) => {
                    e.preventDefault();
                    setRoomtype("ph");
                    setFloor(5);
                  }}
                  className={classNames(
                    floor != 5
                      ? "text-[#343F55] opacity-30"
                      : "text-[#B5A191] bg-[#d9cdc0]/20",
                    roomType == "ph" ? "!bg-[#B5A191] text-white" : "",
                    "rounded-full hover:scale-125 duration-300 w-12 h-12 text-3xl font-Heleness"
                  )}
                >
                  PH
                </button>

                <button
                  id="spacial"
                  onClick={(e) => {
                    e.preventDefault();
                    setRoomtype("4A");
                    setFloor(3);
                  }}
                  className={classNames(
                    floor != 3
                      ? "text-[#343F55] opacity-30"
                      : "text-[#B5A191] bg-[#d9cdc0]/20",
                    roomType == "4A" ? "!bg-[#B5A191] text-white" : "",
                    "rounded-full hover:scale-125 duration-300 w-12 h-12 text-3xl font-Heleness"
                  )}
                >
                  4A
                </button>

                <div className="flex gap-3">
                  <button
                    id="threea"
                    onClick={(e) => {
                      e.preventDefault();
                      setRoomtype("3A");
                      setFloor(2);
                    }}
                    className={classNames(
                      floor != 2
                        ? "text-[#343F55] opacity-30"
                        : "text-[#B5A191] bg-[#d9cdc0]/20",

                      roomType == "3A" ? "!bg-[#B5A191] text-white" : "",
                      "rounded-full hover:scale-125 duration-300 w-12 h-12 text-3xl font-Heleness"
                    )}
                  >
                    3A
                  </button>

                  <button
                    id="threeb"
                    onClick={(e) => {
                      e.preventDefault();
                      setRoomtype("3B");
                      setFloor(4);
                    }}
                    className={classNames(
                      floor != 4
                        ? "text-[#343F55] opacity-30"
                        : "text-[#B5A191] bg-[#d9cdc0]/20",
                      roomType == "3B" ? "!bg-[#B5A191] text-white" : "",
                      "rounded-full hover:scale-125 duration-300 w-12 h-12 text-3xl font-Heleness"
                    )}
                  >
                    3B
                  </button>

                  <button
                    id="threec"
                    onClick={(e) => {
                      e.preventDefault();
                      setRoomtype("3C");
                      setFloor(4);
                    }}
                    className={classNames(
                      floor != 4
                        ? "text-[#343F55] opacity-30"
                        : "text-[#B5A191] bg-[#d9cdc0]/20",
                      roomType == "3C" ? "!bg-[#B5A191] text-white" : "",
                      "rounded-full hover:scale-125 duration-300 w-12 h-12 text-3xl font-Heleness"
                    )}
                  >
                    3C
                  </button>
                </div>

                <div className="flex gap-3">
                  <button
                    id="twoa"
                    onClick={(e) => {
                      e.preventDefault();
                      setRoomtype("2A");
                      setFloor(1);
                    }}
                    className={classNames(
                      floor != 1
                        ? "text-[#343F55] opacity-30"
                        : "text-[#B5A191] bg-[#d9cdc0]/20",
                      roomType == "2A" ? "!bg-[#B5A191] text-white" : "",
                      "rounded-full hover:scale-125 duration-300 w-12 h-12 text-3xl font-Heleness"
                    )}
                  >
                    2A
                  </button>
                  <button
                    id="twob"
                    onClick={(e) => {
                      e.preventDefault();
                      setRoomtype("2B");
                      setFloor(1);
                    }}
                    className={classNames(
                      floor != 1
                        ? "text-[#343F55] opacity-30"
                        : "text-[#B5A191] bg-[#d9cdc0]/20",
                      roomType == "2B" ? "!bg-[#B5A191] text-white" : "",
                      "rounded-full hover:scale-125 duration-300 w-12 h-12 text-3xl font-Heleness"
                    )}
                  >
                    2B
                  </button>

                  <button
                    id="twoc"
                    onClick={(e) => {
                      e.preventDefault();
                      setRoomtype("2C");
                      setFloor(2);
                    }}
                    className={classNames(
                      floor != 2
                        ? "text-[#343F55] opacity-30"
                        : "text-[#B5A191] bg-[#d9cdc0]/20",
                      roomType == "2C" ? "!bg-[#B5A191] text-white" : "",
                      "rounded-full hover:scale-125 duration-300 w-12 h-12 text-3xl font-Heleness"
                    )}
                  >
                    2C
                  </button>
                </div>

                <div className="flex gap-3">
                  <button
                    id="onea"
                    onClick={(e) => {
                      e.preventDefault();
                      setRoomtype("1A");
                      setFloor(1);
                    }}
                    className={classNames(
                      floor != 1
                        ? "text-[#343F55] opacity-30"
                        : "text-[#B5A191] bg-[#d9cdc0]/20",
                      roomType == "1A" ? "!bg-[#B5A191] text-white" : "",
                      "rounded-full hover:scale-125 duration-300 w-12 h-12 text-3xl font-Heleness"
                    )}
                  >
                    ST
                  </button>

                  <button
                    id="oneonea"
                    onClick={(e) => {
                      e.preventDefault();
                      setRoomtype("11A");
                      setFloor(1);
                    }}
                    className={classNames(
                      floor != 1
                        ? "text-[#343F55] opacity-30"
                        : "text-[#B5A191] bg-[#d9cdc0]/20",
                      roomType == "11A" ? "!bg-[#B5A191] text-white" : "",
                      "rounded-full hover:scale-125 duration-300 w-12 h-12 text-3xl font-Heleness"
                    )}
                  >
                    1+1
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="!z-0 scale-90 md:scale-100 relative flex justify-center items-center ">
            <svg
              id="mysvg"
              version="1.2"
              xmlns="http://www.w3.org/2000/svg"
              width="1500"
              height="750"
              style={{
                backgroundImage:
                  "url(/assets/plan/F0099-floorplan-1655814479.png)",
                backgroundPosition: "center center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
              className="relative -translate-y-7 "
            >
              <defs>
                <circle
                  id="point-handle"
                  r="3"
                  x="0"
                  y="0"
                  strokeWidth="0"
                  fillOpacity="1"
                  stroke="#FF0000"
                ></circle>
              </defs>

              <polygon
                id="edit-polygon-B1162"
                stroke="1"
                strokeWidth="0"
                className="element_select "
                data-id="B1162"
                data-boothtitle="Test-SDK-[Level 3rd - 12th]"
                strokeLinejoin="round"
                fill={floor == 1 ? "#B5A191" : "transparent"}
                fillOpacity="0.7"
                points="554,462 752,463 753,631 554,631"
              ></polygon>

              <polygon
                id="edit-polygon-B1163"
                stroke="1"
                strokeWidth="0"
                className="element_select"
                data-id="B1163"
                data-boothtitle="Test-SDK-[Level 14th - 26th]"
                strokeLinejoin="round"
                fill={floor == 2 ? "#B5A191" : "transparent"}
                fillOpacity="0.7"
                points="553,245 751,244 752,463 554,462"
              ></polygon>

              <polygon
                id="edit-polygon-B1164"
                stroke="1"
                strokeWidth="0"
                className="element_select"
                data-id="B1164"
                data-boothtitle="Test-SDK-[Level 27th - 29th]"
                strokeLinejoin="round"
                fill={floor == 3 ? "#B5A191" : "transparent"}
                fillOpacity="0.7"
                points="553,209 648,209 648,186 752,187 752,244 553,245"
              ></polygon>

              <polygon
                id="edit-polygon-B1165"
                stroke="1"
                strokeWidth="0"
                className="element_select"
                data-id="B1165"
                data-boothtitle="Test-SDK-[Level 31th - 33th]"
                strokeLinejoin="round"
                fill={floor == 4 ? "#B5A191" : "transparent"}
                fillOpacity="0.7"
                points="619,101 750,101 751,159 618,159"
              ></polygon>

              <polygon
                id="edit-polygon-B1166"
                stroke="1"
                strokeWidth="0"
                className="element_select"
                data-id="B1166"
                data-boothtitle="Test-SDK-[Level 34th]"
                strokeLinejoin="round"
                fill={floor == 5 ? "#B5A191" : "transparent"}
                fillOpacity="0.7"
                points="619,78 750,78 750,101 618,101"
              ></polygon>
            </svg>
          </div>
        </div>

        {floor != 0 ? (
          <div
            className={classNames(
              floor == 0
                ? ""
                : "max-w-lg w-full h-fit relative flex justify-center items-center",
              "transition-all duration-200"
            )}
          >
            <div className=" w-full flex flex-col gap-4  border border-[#B5A191]/50  relative p-5 transition-all duration-300">
              <Fancybox
                options={{
                  Carousel: {
                    infinite: false,
                  },
                }}
              >
                {rom_plan
                  .find((p) => p.floorId == floor && p.roomId == roomType)
                  ?.image.map((item, index) => (
                    <>
                      <div
                        key={index}
                        className="min-h-[450px] h-fit w-full flex justify-center relative overflow-hidden "
                      >
                        <div className=" absolute bottom-0 left-2 flex items-center">
                          <p className="text-[#B5A191] text-3xl font-Heleness">
                            {item.label}{" "}
                            <span className="text-sm align-top -ml-1 ">
                              {item.prefix}
                            </span>
                          </p>

                          {item.prefix2 != null ? (
                            <p className="text-[#B5A191] text-3xl font-Heleness">
                              - {item.label2}{" "}
                              <span className="text-sm align-top -ml-1 ">
                                {item.prefix2}
                              </span>
                            </p>
                          ) : null}
                        </div>
                        <a
                          aria-label={item.alt}
                          data-fancybox={item.alt}
                          href={item.src}
                          className="w-full h-full"
                        >
                          <Image
                            src={item.src}
                            alt={item.alt}
                            sizes="100vw"
                            width={0}
                            height={0}
                            style={{
                              objectFit: "contain",
                              objectPosition: item.position,
                            }}
                            className={classNames(
                              item.scal ? "" : "",
                              "w-fit "
                            )}
                          />
                        </a>
                      </div>
                    </>
                  ))}
              </Fancybox>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default FloorPlan;
