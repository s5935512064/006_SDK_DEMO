"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  imgSrc: string;
  title: string;
  tagline: string;
  imgPosition: string;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const CHILD_VARIANTS_SCALE = {
  visible: {
    opacity: 1,
    scale: 1.05,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
  hidden: { opacity: 1, scale: 1 },
};

const SubHero: FC<Props> = ({
  imgSrc,
  title,
  tagline,
  imgPosition,
}): JSX.Element => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "100px 0px 100px 0px",
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls, ref]);

  return (
    <>
      <div className="relative h-[80vh] overflow-hidden flex flex-col items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={controls}
          variants={CHILD_VARIANTS_SCALE}
          className="absolute w-full h-full "
        >
          <Image
            src={imgSrc}
            priority
            alt="cover"
            sizes="100vw"
            width={0}
            height={0}
            style={{ objectFit: "cover", objectPosition: imgPosition }}
            className="w-full h-full"
          />
        </motion.div>

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl text-white text-center font-Heleness drop-shadow-md">
            {title}
          </h1>
          <h2 className="text-base md:text-xl text-white mt-2 md:mt-4 text-center">
            {tagline}
          </h2>
        </div>
      </div>
    </>
  );
};

export default SubHero;
