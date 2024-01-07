import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
const logos = [
  { logo: FaCss3Alt, name: "CSS" },
  { logo: FaNodeJs, name: "NodeJS" },
  { logo: FaReact, name: "ReactJs" },
  { logo: SiTypescript, name: "TypeScript" },
  { logo: SiRedux, name: "Redux" },
  { logo: SiJavascript, name: "JavaScript" },
  { logo: FaGitAlt, name: "Git" },
  { logo: SiMongodb, name: "MongoDB" },
];

const Technologies = () => {
  return (
    <section className="flex flex-col space-y-20 items-center py-20 mb-40 w-full">
      <h2 className="h2">Technologies</h2>
      <div className="slide-wrapper absolute whitespace-nowrap overflow-hidden w-[70%] mt-10">
        <div className="slide animate-slide inline-block py-4 px-2">
          {logos.map((logo, index) => (
            <div className="inline-block mx-5 md:mx-10" key={index}>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ scale: 1.2 }}
                animate={{ opacity: 1 }}
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
              <div className="text-center flex flex-col items-center gap-y-2">
                <logo.logo className="size-10 sm:size-12 md:size-16" />
                <p>{logo.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
