"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
function Hero() {
  const handleOpenCV = () => {
    window.open(
      "https://c5qcgij075a.sg.larksuite.com/file/Dgf0bURpSoOk00xTvWAlYaxpgEe",
      "_blank"
    );
  };

  return (
    <section className="scroll-smooth my-20 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white pb-10 text-4xl sm:text-5xl lg:text-6xl font-extrabold"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Hello, I'm Dyno
              <br />
              <span className="text-xl">
                I'm a{" "}
                {
                  <TypeAnimation
                    sequence={[
                      " Friend",
                      1000,
                      " Web Developer",
                      1000,
                      " Software Engineer",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                }
              </span>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-4 text-white text-base sm:text-lg lg:text-xl"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
            voluptatum veniam ipsam. Adipisci, nesciunt dolorum, laudantium iste
            a voluptatem saepe doloremque natus, eligendi quos labore quasi
            excepturi harum unde sit.
          </motion.p>
          <div className="">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-purple-400 to-blue-400 text-black"
            >
              Hire me
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="mt-3 px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-purple-400 to-blue-400"
              onClick={handleOpenCV}
            >
              <span className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2">
                My CV
              </span>
            </motion.button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"
          >
            <Image
              src="/image.png"
              alt="Hero Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
