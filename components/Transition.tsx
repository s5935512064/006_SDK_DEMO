"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: {
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

const Transition: FC<Props> = ({ children }): JSX.Element => {
  const ref = useRef(null);
  const [isActive, setActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 1500);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.body
          ref={ref}
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          className="overflow-x-hidden flex flex-col min-h-screen"
        >
          {children}
        </motion.body>
      </AnimatePresence>
    </>
  );
};

export default Transition;
