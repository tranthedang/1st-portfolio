import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const AboutMe = () => {
  return (
    <section className="my-20">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          initial={{ opacity: 0.5, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/TranTheDang-remove-bg.png"
            alt="about-image"
            width={400}
            height={400}
          />
        </motion.div>
        <div>
          <motion.h2
            initial={{ opacity: 0.5, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            About me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0.5, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ea
            explicabo eligendi sint cum dolore ex laudantium. Voluptatem est
            nemo neque natus autem esse perferendis, tempore iure alias,
            cupiditate iusto!
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
