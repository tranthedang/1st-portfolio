import React from "react";
import Card from "./Cards";
import { motion } from "framer-motion";

const cards = [
  {
    dataImage:
      "https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=",
    header: "Card One",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    dataImage:
      "https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
    header: "Card Two",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    dataImage:
      "https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
    header: "Card Three",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    dataImage:
      "https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
    header: "Card Four",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    dataImage:
      "https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
    header: "Card Five",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    dataImage:
      "https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop=",
    header: "Card Six",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Works = () => {
  return (
    <section className="my-20 w-full">
      <div className="flex flex-col justify-center items-center mt-32">
        <motion.h2
          className=" text-white mb-10 md:mb-4"
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Works
        </motion.h2>
        <div className=" flex flex-wrap justify-center ">
          {cards.map((card, index) => (
            <motion.div
              initial={{ opacity: 0.1 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 * index }}
              key={index}
              whileTap={{ scale: 0.8 }}
              viewport={{ once: true }}
            >
              <Card
                dataImage={card.dataImage}
                header={card.header}
                content={card.content}
              ></Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
