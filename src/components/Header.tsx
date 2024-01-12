"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
// TODO create animation for Logo and Nav
const Header = () => {
  const [isNavBarShowing, setIsNavBarShowing] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const toggleNavbar = () => {
    setIsNavBarShowing(!isNavBarShowing);
  };
  const listItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.2,
      },
    },
  };
  const listContactVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        delay: 0.4,
      },
    },
  };
  const listLinkVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.6,
      },
    },
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {}, [isMobile]);
  useEffect(() => {}, [isNavBarShowing]);
  // TODO scrollable header
  return (
    <header className="w-full absolute md:fixed flex items-center justify-between px-7 py-7 md:p-16 bg-transparent z-[100]">
      {!isNavBarShowing ? (
        <motion.div
          whileTap={{ scale: 0.5 }}
          className="text-3xl text-white font-semibold z-[1000]"
        >
          <Link href="/">Dyno</Link>
        </motion.div>
      ) : (
        <motion.div
          whileTap={{ scale: 0.5 }}
          className="text-3xl text-black md:text-white font-semibold z-[1000]"
        >
          <Link href="/">Dyno</Link>
        </motion.div>
      )}
      {!isNavBarShowing ? (
        <motion.button
          whileTap={{ scale: 0.5 }}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          exit={{ rotate: 360 }}
          className="text-slate-300 z-[999]"
          onClick={toggleNavbar}
        >
          <HiMiniBars3BottomRight size={40} />
        </motion.button>
      ) : (
        <motion.button
          whileTap={{ scale: 0.5 }}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="text-slate-900 z-[999]"
          onClick={toggleNavbar}
        >
          <RxCross2 size={40} />
        </motion.button>
      )}

      <motion.nav
        initial={
          !isMobile
            ? { opacity: 0, scale: 0.3, originX: 1, originY: 0 }
            : { opacity: 0 }
        }
        animate={isNavBarShowing ? { opacity: 1, scale: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ pointerEvents: isNavBarShowing ? "auto" : "none" }}
        className="border rounded-sm shadow-md shadow-slate-800 text-xl md:text-base w-full
        h-full top-0 right-0 pt-28 px-14 md:w-auto md:h-auto md:p-[3.5em] 
      bg-white text-black fixed md:right-[50px] md:top-[60px] z-[998]"
      >
        <motion.ul
          variants={listItemVariants}
          initial={isNavBarShowing ? "hidden" : "visible"}
          animate={isNavBarShowing ? "visible" : "hidden"}
          className="my-[1.2em] leading-[2.5] text-[1.1em]"
        >
          <motion.li
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="mb-6 md:my-2"
          >
            <a href="/work" className="transition duration-500 hover:">
              My Self
            </a>
          </motion.li>
          <motion.li
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="mb-6 md:my-2"
          >
            <a href="/work">My Works</a>
          </motion.li>
          <motion.li
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="mb-6 md:my-2"
          >
            <a href="/resume">My Résumé</a>
          </motion.li>
        </motion.ul>
        <motion.div
          variants={listContactVariants}
          initial={isNavBarShowing ? "hidden" : "visible"}
          animate={isNavBarShowing ? "visible" : "hidden"}
          className="mt-[0.8em] leading-[2.5] text-[1em] pb-[2em]"
        >
          <span className="text-slate-400 tracking-widest">SAY HELLO</span>
          <ul>
            <motion.li
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="my-3 md:my-2"
            >
              <a href="mailto:thedangqn@gmail.com">thedangqn@gmail.com</a>
            </motion.li>
            <motion.li
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="my-3 md:my-2"
            >
              <a href="https://t.me/dynotran999" target="_blank">
                t.me/dynotran999
              </a>
            </motion.li>
          </ul>
        </motion.div>
        <motion.ul
          variants={listLinkVariants}
          initial={isNavBarShowing ? "hidden" : "visible"}
          animate={isNavBarShowing ? "visible" : "hidden"}
          className="flex"
        >
          <motion.li
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="mr-[2.5em]"
          >
            <a href="https://www.facebook.com/dynotran999/" target="_blank">
              <FaFacebookSquare size={35} />
            </a>
          </motion.li>
          <motion.li
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="mr-[2.5em]"
          >
            <a href="https://github.com/tranthedang" target="_blank">
              <FaGithubSquare size={35} />
            </a>
          </motion.li>
          <motion.li
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="mr-[2.5em]"
          >
            <a href="https://www.linkedin.com/in/dynotran999/" target="_blank">
              <FaLinkedin size={35} />
            </a>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </header>
  );
};

export default Header;
