"use client";

import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

interface Props {
  sectionID: string;
  image: { src: string; alt: string }[];
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const ImageSlide: FC<Props> = ({ sectionID, image }): JSX.Element => {
  return (
    <>
      <Swiper
        id={sectionID}
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
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
        className="h-full w-full relative loading"
      >
        {image.map((item, index) => (
          <SwiperSlide key={index} className="h-full w-full relative ">
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
              className="w-full h-full image max-h-[450px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImageSlide;
