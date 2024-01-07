"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  const handleOpenCV = () => {
    window.open(
      "https://c5qcgij075a.sg.larksuite.com/file/Dgf0bURpSoOk00xTvWAlYaxpgEe",
      "_blank"
    );
  };

  return (
    <section className="scroll-smooth my-20">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white pb-10 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Hello, I'm <br />
              {
                <TypeAnimation
                  sequence={[
                    "Dyno",
                    3000,
                    "Web Developer",
                    1000,
                    "Software Engineer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              }
            </span>
          </h1>
          <p className="mb-4 text-white text-base sm:text-lg lg:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
            voluptatum veniam ipsam. Adipisci, nesciunt dolorum, laudantium iste
            a voluptatem saepe doloremque natus, eligendi quos labore quasi
            excepturi harum unde sit.
          </p>
          <div className="">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-purple-400 to-blue-400 text-black">
              Hire me
            </button>
            <button
              className="mt-3 px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-purple-400 to-blue-400"
              onClick={handleOpenCV}
            >
              <span className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2">
                My CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/image.png"
              alt="Hero Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
