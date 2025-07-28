import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaLaptopCode,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact className="text-blue-400 text-3xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
  { name: "Express", icon: <SiExpress className="text-white text-3xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-3xl" /> },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-cyan-400 text-3xl" />,
  },
];

const About = () => {
  return (
    <section id="about" className="bg-black text-white px-6 md:px-20 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-violet-500">Crevonx</span>
        </h2>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-gray-300 text-center mb-12">
          <p className="text-lg leading-relaxed">
            At <span className="text-white font-semibold">Crevonx</span>, we
            craft powerful and scalable digital experiences with cutting-edge
            technologies. Our goal is to empower startups, businesses, and
            creators through sleek interfaces and intelligent backend systems.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-gray-900 p-6 rounded-2xl shadow hover:shadow-violet-500/30 transition">
            <FaLaptopCode className="text-violet-400 text-4xl mb-4" />
            <h4 className="text-xl font-bold mb-2">Full-Stack Development</h4>
            <p className="text-gray-400 text-sm">
              From frontend to backend — we build complete and performant web
              applications.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow hover:shadow-violet-500/30 transition">
            <FaLightbulb className="text-yellow-400 text-4xl mb-4" />
            <h4 className="text-xl font-bold mb-2">Creative Design</h4>
            <p className="text-gray-400 text-sm">
              We blend design and UX strategy to create visually striking and
              intuitive user interfaces.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow hover:shadow-violet-500/30 transition">
            <FaRocket className="text-pink-500 text-4xl mb-4" />
            <h4 className="text-xl font-bold mb-2">Performance & Launch</h4>
            <p className="text-gray-400 text-sm">
              Our solutions are optimized for speed, scalability, and seamless
              deployment.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold mb-4">Our Tech Stack</h3>
          <div className="flex justify-center flex-wrap gap-6">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center">
                <div className="bg-gray-800 p-4 rounded-full">{tech.icon}</div>
                <span className="text-sm text-gray-300 mt-2">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
