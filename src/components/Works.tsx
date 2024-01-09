import React from "react";
import Card from "./Cards";
import { motion } from "framer-motion";
const datas = [
  {
    date: "Aug 2018",
    title: "Heading1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus ex suscipit tenetur praesentium nemo, eveniet rerum, in, voluptatum totam ratione deleniti a odit eos sit cumque quam aspernatur labore.",
  },
  {
    date: "Dec 2021",
    title: "Heading2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus ex suscipit tenetur praesentium nemo, eveniet rerum, in, voluptatum totam ratione deleniti a odit eos sit cumque quam aspernatur labore.",
  },
  {
    date: "Oct 2023",
    title: "Heading3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus ex suscipit tenetur praesentium nemo, eveniet rerum, in, voluptatum totam ratione deleniti a odit eos sit cumque quam aspernatur labore.",
  },
];

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
    <section className="scroll-smooth my-20 w-full">
      {/* Job flow */}
      <div className="flex flex-col justify-center items-center ">
        <motion.h2
          className=" text-white mb-10 md:mb-4"
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Education & Jobs
        </motion.h2>
        <div className="timeline w-[80%] h-auto max-w-max mt-7 md:mt-14 relative">
          <ul className="list-none">
            {datas.map((data, index) => (
              <li
                className="px-5 py-3 text-white mb-5 rounded-2xl md:w-1/2 md:relative
                md:odd:float-left md:odd:clear-right md:odd:-translate-x-[30px] md:odd:rounded-[20px] md:odd:rounded-tr-none
                md:even:float-right md:even:clear-left md:even:translate-x-[30px] md:even:rounded-[20px] md:even:rounded-tl-none"
                key={index}
              >
                <div className="timeline-content">
                  <motion.h3
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="date font-light text-xs mb-3 tracking-[3px] md:absolute md:-top-5"
                  >
                    {data.date}
                  </motion.h3>
                  <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="font-medium text-2xl leading-8 mb-3"
                  >
                    {data.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0.5, x: index % 2 == 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="leading-7 text-sm font-light"
                  >
                    {data.content}
                  </motion.p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Works charts */}
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
