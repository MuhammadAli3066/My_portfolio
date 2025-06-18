import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaEthereum,
  FaReact ,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const skillsData = [
  { name: "HTML5", icon: <FaHtml5 size={24} /> },
  { name: "CSS3", icon: <FaCss3Alt size={24} /> },
  { name: "JavaScript", icon: <FaJs size={24} /> },
  { name: "Node.js", icon: <FaNodeJs size={24} /> },
  { name: "React.js", icon: <FaReact size={24} /> },
  { name: "Next.js", icon: <FaReact size={24} /> },
  { name: "JavaScript", icon: <FaReact size={24} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
  { name: "Solidity", icon: <FaEthereum size={24} /> },
  { name: "MongoDB", icon: <SiMongodb size={24} /> },
];

const Skills = () => {
  const [skills, setSkills] = useState(skillsData);

  return (
    <section id="skills" className="w-full bg-slate-50 text-slate-900 ">
      <div className=" mx-auto px-4 pt-8 bg-gradient-to-b from-slate-100 to-slate-50 ">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 text-center text-slate-700">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-200 text-center py-4 px-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-4px] hover:scale-105 border-2 border-slate-300 hover:border-slate-500 mx-2 sm:mx-4 lg:mx-6 opacity-90 hover:opacity-100"
            >
              <div className="mb-2 text-slate-500">{skill.icon}</div>
              <p className="text-lg sm:text-xl lg:text-2xl font-medium">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
