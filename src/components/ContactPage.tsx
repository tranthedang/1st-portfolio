import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";
// TODO useMediaQuery to make motion diffrently in small screen
const ContactPage = () => {
  return (
    <section className="scroll-smooth my-20">
      <div className="flex text-center justify-center items-center ">
        <div className="flex flex-col w-[1000px]">
          <motion.h2
            className=" text-white mb-10 md:pl-4"
            initial={{ opacity: 0.5, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Let's <span className="text-red-800">connect!</span>
          </motion.h2>
          <form className="text-black flex flex-col">
            <div className="flex flex-col gap-y-7 md:flex-row gap-x-6 p-4">
              <motion.div
                initial={{ opacity: 0.5, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-start w-full"
              >
                <label className="text-white">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="rounded w-full p-2 mt-2"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0.5, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-start w-full"
              >
                <label className="text-white">Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  className="rounded w-full p-2 mt-2"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0.5, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-4 text-start w-full"
            >
              <label className="text-white">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="rounded p-2 w-full mt-2"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0.5, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-4 text-start w-full"
            >
              <label className="text-white">Message</label>
              <textarea
                placeholder="Message"
                className="rounded p-2 w-full mt-2 min-h-20 h-24"
              />
            </motion.div>
            <motion.button
              initial={{ opacity: 0.5, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-white m-4 p-2 border rounded-full border-red-500 flex items-center 
              justify-center "
            >
              <span>Let's talk</span>
              <FaLongArrowAltRight />
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
