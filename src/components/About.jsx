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
    className="text-3xl md:text-4xl font-bold mb-12 text-teal-300 drop-shadow-lg"
    variants={fadeUp}
  >
    About Me
  </motion.h2>

  {/* About Paragraph */}
  <motion.p
    className="text-lg md:text-xl leading-relaxed text-justify mb-10"
    variants={fadeUp}
  >
    Hi, I’m{" "}
    <span className="font-semibold text-teal-400">
      Shivam Chatterjee
    </span>
    , a data-focused developer passionate about transforming raw data into
    meaningful insights. I have hands-on experience in{" "}
    <span className="text-teal-400 font-semibold">
      SQL, Python, and data visualization
    </span>{" "}
    and have worked on building data warehouses and analytics dashboards. I am
    actively strengthening my foundations in{" "}
    <span className="text-teal-400 font-semibold">
      Data Engineering
    </span>{" "}
    and{" "}
    <span className="text-teal-400 font-semibold">
      Machine Learning
    </span>{" "}
    to design scalable data solutions and intelligent systems.
  </motion.p>

  {/* Education Section */}
  <motion.div variants={fadeUp}>

    <p className="text-lg text-gray-300 mt-20">
      B.Tech | Mechanical Engineering (2027 Batch) <br />
      <span className="text-teal-400 font-medium">
        National Institute of Technology, Bhopal
      </span>
    </p>
  </motion.div>
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
