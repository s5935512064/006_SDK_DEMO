"use client";

import React, { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Fancybox from "./FancyboxWrap";

interface Props {
  typeRoom: string;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const slide_image = [
  {
    room: "1B",
    image: [
      {
        id: 1,
        src: "/assets/room_gall/1A_708/DSCF1647-124.webp",
        alt: "1a708-01",
        album: "1a708",
      },
      {
        id: 2,
        src: "/assets/room_gall/1A_708/DSCF1697-135.webp",
        alt: "1a708-02",
        album: "1a708",
      },
      {
        id: 3,
        src: "/assets/room_gall/1A_708/DSCF1687-133.webp",
        alt: "1a708-03",
        album: "1a708",
      },
      {
        id: 4,
        src: "/assets/room_gall/1A_708/DSCF1639-123.webp",
        alt: "1a708-04",
        album: "1a708",
      },
      {
        id: 5,
        src: "/assets/room_gall/1A_708/DSCF1627-116.webp",
        alt: "1a708-05",
        album: "1a708",
      },
      {
        id: 6,
        src: "/assets/room_gall/1A_708/DSCF1623-112.webp",
        alt: "1a708-06",
        album: "1a708",
      },
      {
        id: 7,
        src: "/assets/room_gall/1A_708/DSCF1577-Edit-103.webp",
        alt: "1a708-07",
        album: "1a708",
      },
      {
        id: 8,
        src: "/assets/room_gall/1A_708/DSCF1572-101.webp",
        alt: "1a708-08",
        album: "1a708",
      },
    ],
  },
  {
    room: "2B",
    image: [
      {
        id: 1,
        src: "/assets/room_gall/2B_709/DSCF1716-Edit-105.webp",
        alt: "2b709-01",
        album: "2b709",
      },
      {
        id: 2,
        src: "/assets/room_gall/2B_709/DSCF1800-133.webp",

        alt: "2b709-02",
        album: "2b709",
      },
      {
        id: 3,
        src: "/assets/room_gall/2B_709/DSCF1757-Edit-116.webp",

        alt: "2b709-03",
        album: "2b709",
      },
      {
        id: 4,
        src: "/assets/room_gall/2B_709/DSCF1744-110.webp",

        alt: "2b709-04",
        album: "2b709",
      },
      {
        id: 5,
        src: "/assets/room_gall/2B_709/DSCF1734-Edit-108.webp",

        alt: "2b709-05",
        album: "2b709",
      },
      {
        id: 6,
        src: "/assets/room_gall/2B_709/DSCF1726-Edit-106.webp",

        alt: "2b709-06",
        album: "2b709",
      },
      {
        id: 7,
        src: "/assets/room_gall/2B_709/DSCF1703-Edit-102.webp",

        alt: "2b709-07",
        album: "2b709",
      },
    ],
  },
  {
    room: "3B",
    image: [
      {
        id: 1,
        src: "/assets/room_gall/3B_1901/DSC03940-HDR-105.webp",
        alt: "3b1901-01",
        album: "3b1901",
      },
      {
        id: 2,
        src: "/assets/room_gall/3B_1901/DSC03968-116.webp",
        alt: "3b1901-02",
        album: "3b1901",
      },
      {
        id: 3,
        src: "/assets/room_gall/3B_1901/DSC03958-HDR-110.webp",
        alt: "3b1901-03",
        album: "3b1901",
      },
      {
        id: 4,
        src: "/assets/room_gall/3B_1901/DSC03928-HDR-102.webp",
        alt: "3b1901-04",
        album: "3b1901",
      },
      {
        id: 5,
        src: "/assets/room_gall/3B_1901/DSC03949-HDR-108.webp",
        alt: "3b1901-05",
        album: "3b1901",
      },
      {
        id: 6,
        src: "/assets/room_gall/3B_1901/DSC03946-HDR-107-002.webp",
        alt: "3b1901-06",
        album: "3b1901",
      },
      {
        id: 7,
        src: "/assets/room_gall/3B_1901/DSC03922-HDR-101.webp",
        alt: "3b1901-07",
        album: "3b1901",
      },
    ],
  },
  {
    room: "4B",
    image: [
      {
        id: 1,
        src: "/assets/room_gall/APL_4AR LIVING ROOM 01-EDIT-13.webp",
        alt: "4broom-01",
        album: "4broom",
      },
      {
        id: 2,
        src: "/assets/room_gall/APL_4CR LIVING ROOM 02_20180319-EDIT-17.webp",
        alt: "4broom-02",
        album: "4broom",
      },
    ],
  },
  {
    room: "PH",
    image: [
      {
        id: 1,
        src: "/assets/room_gall/PENTHOUSE-01.webp",
        alt: "penthouse-01",
        album: "penthouse",
      },
      {
        id: 2,
        src: "/assets/room_gall/PENTHOUSE-02.webp",
        alt: "penthouse-02",
        album: "penthouse",
      },
    ],
  },
];

const RoomComponent: FC<Props> = ({ typeRoom }): JSX.Element => {
  return (
    <>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <Swiper
          id={typeRoom}
          slidesPerView={1}
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
          speed={1500}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Navigation, Pagination]}
          className="h-full w-full relative !transition-all !duration-300 loading"
        >
          {slide_image &&
            slide_image
              .find((p) => p.room == typeRoom)
              ?.image.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="!h-[350px] md:!h-[500px] relative image"
                >
                  <a
                    aria-label={item.alt}
                    data-fancybox={item.album}
                    href={item.src}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      className="w-full h-full"
                    />
                  </a>
                </SwiperSlide>
              ))}
        </Swiper>
      </Fancybox>
    </>
  );
};

export default RoomComponent;
