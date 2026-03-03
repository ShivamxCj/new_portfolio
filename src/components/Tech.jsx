import React from "react";
import { motion } from "framer-motion";
import { SiReact, SiPython, SiPandas, SiScikitlearn } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

const skills = [
  { name: "React", icon: <SiReact className="text-cyan-400" size={28} /> },
  { name: "SQL", icon: <FaDatabase className="text-blue-500" size={28} /> },
  { name: "Python", icon: <SiPython className="text-blue-600" size={28} /> },
  { name: "Pandas", icon: <SiPandas className="text-blue-400" size={28} /> },
  { name: "Machine Learning", icon: <SiScikitlearn className="text-orange-500" size={28} /> },
];

const TechStack = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative min-h-screen px-4 py-20 bg-black overflow-hidden flex items-center justify-center"
      id="tech"
    >
      {/* Cosmic Background Dots */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-70 animate-shootingDot"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Skills Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-40 text-teal-300 drop-shadow-lg"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Tech Stack
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="w-40 h-32 bg-gray-900/60 text-teal-300 
           rounded-xl flex flex-col items-center justify-center gap-3
           backdrop-blur-sm shadow-lg
           transition-all duration-300 
           hover:scale-110 hover:shadow-[0_0_30px_rgba(64,224,208,1)]"
            >
              {skill.icon}
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Dot Animation */}
      <style>{`
        @keyframes shootingDot {
          0% { transform: translate(0,0); opacity:0; }
          10% { opacity:1; }
          100% { transform: translate(${50 + Math.random()*100}px, ${50 + Math.random()*100}px); opacity:0; }
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

export default TechStack;