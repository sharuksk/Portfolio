import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { RiSignalTowerFill } from "react-icons/ri";
const ProjectCard = ({projectName, demo, imgsrc, desc}) => {
  return (
    <div className="p-4 -m-4">
      <div className="h-fit w-[300px] md:w-[320p] border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-clip lg:overlow-hidden hover:shadow-md lg:hover:scale-105 transition-all backdrop-blur-3xl shadow-xl">
        <a href="">
          <img
            src={imgsrc}
            alt="project-img"
            className="lg:h-48 h-[200px] w-full object-cover object-center"
          />
        </a>
        <div className="p-4 flex flex-col lg:gap-3">
          <h2 className="tracking-widest text-2xl text-white">{projectName}</h2>
          <h1 className="text-lg lg:text-xl font-bold text-gray-400">
            {desc}
          </h1>
          <div className="flex items-center justify-between">
            <a href={demo}>
              <AiFillGithub className="text-pink-500 font-bold inline-flex item-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-purple-600 cursor-pointer" />
            </a>
            <a href={demo}>
              <RiSignalTowerFill className="text-pink-500 font-bold inline-flex item-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-purple-600 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
