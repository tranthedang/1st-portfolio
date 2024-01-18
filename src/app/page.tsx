"use client";
import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import Jobs from "@/components/Jobs";
import Technologies from "@/components/Technologies";
import Works from "@/components/Works";
import PreLoader from "@/components/PreLoader";
import { useEffect, useState } from "react";
const slideUp = {
  initial: {
    y: 300,
  },
  enter: {
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 3.1 },
  },
};
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2500);
    })();
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <PreLoader />}</AnimatePresence>
      <motion.main
        variants={slideUp}
        initial="initial"
        animate="enter"
        className="flex min-h-screen flex-row bg-black"
      >
        <div className="container mx-auto px-5 sm:px-10 md:px-14 lg:px-16 xl:px-20 2xl:px-24 py-4 mt-40">
          <Hero />
          <AboutMe />
          <Technologies />
          <Jobs />
          <Works />
          <ContactMe />
        </div>
      </motion.main>
    </>
  );
}
