import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { RiSignalTowerFill } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";

const ProjectCard = ({ projectName, demo, imgsrc, desc, projectDetails }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isGitHub = demo.includes("github.com");

  return (
    <>
      <div className="p-4 -m-4">
        <div className="h-fit w-[300px] md:w-[320px] border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-clip lg:overflow-hidden hover:shadow-md lg:hover:scale-105 transition-all backdrop-blur-3xl shadow-xl">
          <a href={isGitHub ? "#" : demo} target={isGitHub ? "" : "_blank"} rel="noopener noreferrer">
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
              <button onClick={() => setIsModalOpen(true)}>
                <AiOutlineInfoCircle className="text-pink-500 font-bold inline-flex item-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-purple-600 cursor-pointer" />
              </button>
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <RiSignalTowerFill className="text-pink-500 font-bold inline-flex item-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-purple-600 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setIsModalOpen(false)}>
          <div className="bg-gray-900 border-2 border-gray-200 border-opacity-60 rounded-2xl p-6 max-w-md w-full mx-4 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={imgsrc}
              alt="project-img"
              className="w-full h-48 object-cover object-center rounded-lg mb-4"
            />
            <h2 className="text-2xl text-white mb-2">{projectName}</h2>
            <p className="text-gray-400 mb-4">{desc}</p>
            <p className="text-gray-300 mb-4">{projectDetails}</p>
            <div className="flex justify-between">
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors"
              >
                {isGitHub ? "View Code" : "View Live"}
              </a>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
