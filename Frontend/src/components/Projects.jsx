import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCss3Alt,
  FaFire,
} from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiRedux } from "react-icons/si";
import JobPortal from "../assets/JobPortal.png";
import food from "../assets/food.png";

// Icon mapping
const techIcons = {
  React: <FaReact className="text-blue-400" />,
  "Node.js": <FaNodeJs className="text-green-400" />,
  MongoDB: <FaDatabase className="text-green-300" />,
  Express: <SiExpress className="text-white" />,
  Tailwind: <SiTailwindcss className="text-cyan-400" />,
  Redux: <SiRedux className="text-purple-400" />,
  Firebase: <FaFire className="text-yellow-400" />,
  CSS: <FaCss3Alt className="text-blue-300" />,
};

// Project list
const projects = [
  {
    title: "Job Portal Website",
    description:
      "A MERN stack job platform for recruiters and students with authentication and filters.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    image: JobPortal,
    link: "https://job-portal-website-p1.netlify.app/",
  },
  {
    title: "Food Delivery App",
    description:
      "React-based food ordering UI with cart, filters and Firebase backend.",
    tech: ["React", "Redux", "Tailwind", "Firebase"],
    image: food,
    link: "https://yourfoodapp.netlify.app",
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="projects"
      className="bg-black text-white px-4 sm:px-6 md:px-20 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        My Projects
      </h2>

      <div className="space-y-12">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-md shadow-white/10 hover:shadow-indigo-500/20 flex flex-col lg:flex-row transition duration-300">
            {/* Left Side: Text */}
            <div className="p-6 w-full lg:w-1/2 flex flex-col justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.description}</p>

                {/* Tech Icons */}
                <div className="flex flex-wrap mt-4 gap-4">
                  {project.tech.map((tech, i) => (
                    <div
                      key={i}
                      className="group relative text-xl p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition">
                      {techIcons[tech]}
                      <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-white text-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visit Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block bg-white text-black hover:bg-indigo-600 hover:text-white font-semibold text-sm px-6 py-2 rounded-full transition w-fit max-w-full sm:max-w-sm">
                Visit Project →
              </a>
            </div>

            {/* Right Side: Image */}
            <div
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative w-full lg:w-1/2 h-60 sm:h-72 md:h-80 lg:h-auto">
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover transition duration-500 ${
                  hoveredIndex === idx ? "opacity-30 blur-sm scale-105" : ""
                }`}
              />
              {hoveredIndex === idx && (
                <div className="absolute inset-0 flex items-center justify-center text-indigo-400 font-bold text-xl transition-opacity text-center px-4">
                  {project.title}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
