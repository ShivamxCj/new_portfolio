import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

// Sample projects data
const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React, Tailwind, and Framer Motion.",
    demo: "#",
    github: "#",
  },
  {
    title: "E-commerce App",
    description:
      "A full-stack e-commerce application using React, Node.js, and MongoDB.",
    demo: "#",
    github: "#",
  },
  {
    title: "AI Chatbot",
    description: "A chatbot powered by AI and NLP technologies.",
    demo: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center
                 px-4 py-10 bg-black overflow-hidden"
    >
      {/* Cosmic shooting dots background */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute bg-white rounded-full w-[2px] h-[2px] opacity-70 animate-shootingDot"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          ></span>
        ))}
      </div>

      {/* Section Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-300 mb-48 text-center drop-shadow-lg">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/70 rounded-lg p-6 flex flex-col justify-between h-full shadow-lg backdrop-blur-sm w-full sm:w-2/3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-teal-300 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 flex-grow">
                {project.description}
              </p>

              <div className="mt-auto flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-teal-600/80 text-white rounded-lg flex items-center gap-2 hover:bg-teal-700 transition"
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gray-700/80 text-white rounded-lg flex items-center gap-2 hover:bg-gray-800 transition"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dot animation */}
      <style>{`
        @keyframes shootingDot {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translate(${50 + Math.random() * 100}px, ${
        50 + Math.random() * 100
      }px); opacity: 0; }
        }
        .animate-shootingDot {
          animation-name: shootingDot;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;
