import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "CrevonX Tech",
    duration: "Jan 2024 - May 2024",
    description:
      "Developed responsive UI using React, Tailwind CSS, and Framer Motion. Built reusable components and optimized performance for better UX.",
  },
  {
    role: "UI/UX Designer",
    company: "Freelance",
    duration: "Jun 2023 - Dec 2023",
    description:
      "Designed user-friendly wireframes and interactive prototypes using Figma. Delivered pixel-perfect responsive designs for multiple startups.",
  },
  {
    role: "Campus Ambassador",
    company: "TechFest IIT Bombay",
    duration: "Oct 2022 - Jan 2023",
    description:
      "Promoted national-level tech fest, conducted webinars, and onboarded 100+ participants through active campus engagement.",
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 lg:px-24 font-sans">
      {/* Page Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-violet-500 mb-12">
        Experience
      </motion.h1>

      {/* Experience Cards */}
      <div className="space-y-8 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * index, type: "spring", stiffness: 80 }}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-violet-700/40">
            <h2 className="text-2xl font-semibold text-violet-400">
              {exp.role}
            </h2>
            <p className="text-sm text-gray-400 mb-1">{exp.company}</p>
            <p className="text-sm text-gray-500 italic mb-3">{exp.duration}</p>
            <p className="text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
