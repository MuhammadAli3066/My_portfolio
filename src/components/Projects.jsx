import React, { useState } from "react";
import projectsData from "../components/ProjectsData";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);

  return (
    <section
      id="projects"
      className="bg-slate-50 text-slate-900 py-12 sm:py-16 lg:py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 text-center text-slate-700">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:translate-y-[-4px] border-2 border-slate-300 hover:border-slate-500"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-800">
                {project.title}
              </h3>
              <p className="text-base sm:text-lg mb-4 text-slate-700 text-justify px-3">
                {project.description}
              </p>
              <div className="w-full flex justify-end mt-auto">
                <a
                  href={project.link}
                  className="text-slate-600 hover:text-slate-800 font-medium transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
