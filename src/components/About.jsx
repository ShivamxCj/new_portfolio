import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Parent container for stagger
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Child animation for heading & paragraphs
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center
                 bg-gradient-to-br from-black via-gray-900 to-teal-950 px-6 overflow-hidden"
    >
      {/* Cosmic dots background */}
      <div className="absolute inset-0 z-0 bg-black">
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

      {/* Content box with staggered animations */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto bg-black/50 p-8 rounded-lg shadow-lg text-center text-gray-200"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-24 text-teal-300 drop-shadow-lg"
          variants={fadeUp}
        >
          About Me
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-lg md:text-xl leading-relaxed text-justify"
          variants={fadeUp}
        >
          Hi, I’m{" "}
          <span className="font-semibold text-teal-400">Shivam Chatterjee</span>, a passionate
          developer and lifelong learner. I have a strong foundation in web
          development and am currently expanding my knowledge in{" "}
          <span className="text-teal-400 font-semibold">AI/ML</span> and{" "}
          <span className="text-teal-400 font-semibold">Data Science</span>. I
          enjoy building responsive and elegant web applications while exploring
          the exciting world of artificial intelligence and data-driven
          technologies.
        </motion.p>
      </motion.div>

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

export default About;
