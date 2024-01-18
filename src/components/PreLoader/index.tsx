"use client";
import React, { useEffect, useState } from "react";
import Icons from "./Icons";
import { motion } from "framer-motion";
const words = [
  "Hello",
  "Bonjour",
  "こんにちは",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "你好",
  "Xin chào",
];
const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};
const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.9,
    transition: { duration: 1 },
  },
};

const index = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (index == words.length - 1) {
          return;
        } else {
          setIndex(index + 1);
        }
      },
      index == 0 ? 1000 : 150
    );
    return () => clearTimeout(timeout);
  }, [index]);
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-screen w-screen bg-[#141516] flex items-center justify-center fixed z-[1001]"
    >
      <>
        <motion.p
          variants={opacity}
          initial="initial"
          animate="enter"
          className="flex text-white text-[50px] items-center absolute z-1"
        >
          <span className="block w-[10px] h-[10px] bg-white rounded-[50%] mr-3"></span>
          {words[index]}
        </motion.p>
        {/* <Icons index={index} /> */}
      </>
    </motion.div>
  );
};

export default index;
