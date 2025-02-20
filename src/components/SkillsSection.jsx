import React from "react";
import SkillsCard from "./SkillsCard";


const SkillsSection = () => {
  return (
    <div data-aos="fade-right" className="mb-20 lg:mb-36">
      <h1 className="text-5xl lg:text-7xl gradient-text mb-10">My Skills</h1>
      <div className="h-[300px] overflow-y-scroll select-none scroll-bar">
        <SkillsCard title={"TypeScript"} value={80} />
        <SkillsCard title={"JavaScript"} value={75} />
        <SkillsCard title={"Angular"} value={80} />
        <SkillsCard title={"ReactJS"} value={75} />
        <SkillsCard title={"AngularJS"} value={60} />
        <SkillsCard title={"Tailwind css"} value={60} />
        <SkillsCard title={"SQL"} value={50} />
        <SkillsCard title={"NodeJs"} value={40} />
        <SkillsCard title={"MongoDB"} value={70} />
      </div>
    </div>
  );
};

export default SkillsSection;
