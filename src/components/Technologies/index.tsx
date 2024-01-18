"use client";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { SiFramer } from "react-icons/si";
const logos = [
  { logo: FaCss3Alt, name: "CSS" },
  { logo: FaNodeJs, name: "NodeJS" },
  { logo: FaReact, name: "ReactJs" },
  { logo: SiTypescript, name: "TypeScript" },
  { logo: SiRedux, name: "Redux" },
  { logo: SiJavascript, name: "JavaScript" },
  { logo: FaGitAlt, name: "Git" },
  { logo: SiMongodb, name: "MongoDB" },
  { logo: SiFramer, name: "Framer" },
];

const index = () => {
  return (
    <section className="flex flex-col justify-between space-y-28 items-center py-20 mb-[300px] w-full">
      <motion.h2
        className=" text-white mb-10 md:mb-4"
        initial={{ opacity: 0.5, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Technologies
      </motion.h2>
      <motion.div
        initial={{ opacity: 0.5, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="slide-wrapper absolute whitespace-nowrap overflow-hidden w-[70%]"
      >
        <div className="slide animate-slide inline-block py-4 px-2">
          {logos.map((logo, index) => (
            <div className="inline-block mx-5 md:mx-10" key={index}>
              <motion.div
                whileHover={{ scale: [null, 1.3, 1.2] }}
                transition={{ duration: 0.25 }}
                className="text-center flex flex-col items-center gap-y-2"
              >
                <logo.logo className="size-10 sm:size-12 md:size-16" />
                <p>{logo.name}</p>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="slide animate-slide inline-block py-4 px-2">
          {logos.map((logo, index) => (
            <div className="inline-block mx-5 md:mx-10" key={index}>
              <motion.div
                whileHover={{ scale: [null, 1.3, 1.2] }}
                transition={{ duration: 0.25 }}
                className="text-center flex flex-col items-center gap-y-2"
              >
                <logo.logo className="size-10 sm:size-12 md:size-16" />
                <p>{logo.name}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default index;
