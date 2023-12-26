"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header className="w-full fixed flex items-center justify-between px-7 py-7 md:p-20 bg-transparent">
      {!showNavbar ? (
        <Link href="/" className="text-5xl text-white font-semibold z-[1000]">
          Logo
        </Link>
      ) : (
        <Link
          href="/"
          className="text-5xl text-black md:text-white font-semibold z-[1000]"
        >
          Logo
        </Link>
      )}

      {!showNavbar ? (
        <button className="text-slate-300 z-[999]" onClick={toggleNavbar}>
          <HiMiniBars3BottomRight size={40} />
        </button>
      ) : (
        <button className="text-slate-900 z-[999]" onClick={toggleNavbar}>
          <RxCross2 size={40} />
        </button>
      )}

      {showNavbar && (
        <nav className="text-xl md:text-base w-full h-full top-0 right-0 pt-28 px-14 md:w-auto md:h-auto md:pt-14 md:pb-7 md:px-7 bg-white text-black fixed md:right-[60px] md:top-[80px] z-[998]">
          <ul className="mt-6 mx-2">
            <li className="mb-6 md:my-2">
              <a href="/work">My Works</a>
            </li>
            <li className="my-6 md:my-2">
              <a href="/resume">My Resume</a>
            </li>
          </ul>
          <div className="mt-32 md:mt-10 mx-2">
            <span className="text-slate-400 tracking-widest">SAY HELLO</span>
            <ul>
              <li className="my-6 md:my-2">
                <a href="mailto:thedangqn@gmail.com">thedangqn@gmail.com</a>
              </li>
              <li className="my-6 md:my-2">
                <a href="https://t.me/dynotran999" target="_blank">
                  t.me/dynotran999
                </a>
              </li>
            </ul>
          </div>
          <ul className="mt-28 md:mt-10 mx-2">
            <li className="inline-block mr-8">
              <a href="https://www.facebook.com/dynotran999/" target="_blank">
                <FaFacebookSquare size={30} />
              </a>
            </li>
            <li className="inline-block mr-8">
              <a href="https://github.com/tranthedang" target="_blank">
                <FaGithubSquare size={30} />
              </a>
            </li>
            <li className="inline-block mr-8">
              <a
                href="https://www.linkedin.com/in/dynotran999/"
                target="_blank"
              >
                <FaLinkedin size={30} />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
