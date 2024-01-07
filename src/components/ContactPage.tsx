import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
const ContactPage = () => {
  return (
    <section className="scroll-smooth my-20">
      <div className="flex text-center justify-center items-center ">
        <div className="flex flex-col w-[1000px]">
          <h2 className=" text-white mb-10 md:pl-4">
            Let's <span className="text-red-800">connect!</span>
          </h2>
          <form className="text-black flex flex-col">
            <div className="flex flex-col gap-y-7 md:flex-row gap-x-6 p-4">
              <div className="text-start w-full">
                <label className="text-white">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="rounded w-full p-2 mt-2"
                />
              </div>
              <div className="text-start w-full">
                <label className="text-white">Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  className="rounded w-full p-2 mt-2"
                />
              </div>
            </div>
            <div className="p-4 text-start w-full">
              <label className="text-white">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="rounded p-2 w-full mt-2"
              />
            </div>
            <div className="p-4 text-start w-full">
              <label className="text-white">Message</label>
              <textarea
                placeholder="Message"
                className="rounded p-2 w-full mt-2 min-h-20 h-24"
              />
            </div>
            <button
              className="text-white m-4 p-2 border rounded-full border-red-500 flex items-center 
              justify-center "
            >
              <span>Let's talk</span>
              <FaLongArrowAltRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
