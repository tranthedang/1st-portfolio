"use client";
import React from "react";
import { IconContext } from "react-icons";
import {
  FaFaceAngry,
  FaFaceDizzy,
  FaFaceLaughSquint,
  FaFaceFrown,
  FaFaceGrin,
  FaFaceGrinHearts,
  FaFaceSurprise,
  FaFaceGrinStars,
} from "react-icons/fa6";

const icons = [
  "FaFaceAngry",
  "FaFaceDizzy",
  "FaFaceLaughSquint",
  "FaFaceFrown",
  "FaFaceGrin",
  "FaFaceGrinHearts",
  "FaFaceSurprise",
  "FaFaceGrinStars",
];
const Icons = ({ index }: any) => {
  const IconComponent = icons[index];
  return (
    <IconContext.Provider value={{ size: "2em" }}>
      <div className="flex text-white text-[50px] items-center absolute z-1">
        <span className="block w-[10px] h-[10px] bg-white rounded-[50%] mr-3"></span>
        {<IconComponent />}
      </div>
    </IconContext.Provider>
  );
};

export default Icons;
