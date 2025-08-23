import React, { useEffect, useState } from "react";
import profile from "../assets/profile.jpg";
import { FiExternalLink } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const roles = ["Web Developer", "Data Engineer", "AI ML"];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!showAll) {
        if (index === roles.length - 1) {
          setShowAll(true);
        } else {
          setIndex(index + 1);
        }
      } else {
        setTimeout(() => {
          setShowAll(false);
          setIndex(0);
        }, 2000);
      }
    }, 1800);

    return () => clearInterval(interval);
  }, [index, showAll]);

  const textVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6 } },
    exit: { opacity: 0, transition: { duration: 0.6 } },
  };

  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black px-4 overflow-hidden"
    >
      {/* Shooting stars background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-70 animate-shootingStar"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left order-2 md:order-1 flex flex-col justify-center"
          variants={leftVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-teal-300 drop-shadow-lg">
            Hi, I'm {""} <br />
            Shivam Chatterjee
            
          </h1>

          <div className="text-lg md:text-xl text-white min-h-[1.5rem] md:min-h-[2rem]">
            <AnimatePresence mode="wait">
              {!showAll ? (
                <motion.span
                  key={roles[index]}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="inline-block"
                >
                  {roles[index]}
                </motion.span>
              ) : (
                <motion.span
                  key="all-roles"
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="inline-block"
                >
                  {roles.join(" | ")}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Buttons */}
          <div className="mt-4 md:mt-6 flex flex-col md:flex-row md:justify-start items-center md:items-stretch gap-3 md:gap-4">
            <a
              href="#projects"
              className="w-52 md:w-52 px-6 py-3 bg-teal-600/80 text-white rounded-lg hover:bg-teal-700/90 transition flex items-center justify-center gap-2 shadow-lg backdrop-blur-sm"
            >
              <FiExternalLink className="text-lg" />
              View My Work
            </a>
            <a
              href="/resume.pdf"
              download
              className="w-52 md:w-52 px-6 py-3 bg-emerald-700/80 text-white rounded-lg hover:bg-emerald-800/90 transition flex items-center justify-center gap-2 shadow-lg backdrop-blur-sm"
            >
              <HiDownload className="text-lg" />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="flex justify-center order-1 md:order-2"
          variants={rightVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src={profile}
            alt="Profile"
            className="w-36 h-36 md:w-80 md:h-80 object-cover rounded-full shadow-[0_0_25px_rgba(20,184,166,0.8)] border-4 border-teal-400/70 hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </motion.div>
      </div>

      <style>{`
        @keyframes shootingStar {
          0% { transform: translate(0,0); opacity:0; }
          10% { opacity:1; }
          100% { transform: translate(100px, 100px); opacity:0; }
        }
        .animate-shootingStar {
          animation-name: shootingStar;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;
