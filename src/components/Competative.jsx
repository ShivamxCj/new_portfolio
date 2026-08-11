import React from "react";
import { motion } from "framer-motion";

const CompetitiveProgramming = () => {
  return (
    <section
      className="relative min-h-screen px-4 py-20 bg-black overflow-hidden flex flex-col items-center"
      id="cp"
    >
      {/* Cosmic Shooting Stars Background */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[3px] h-[3px] bg-white rounded-full opacity-70 animate-shootingDot"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Section Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 text-4xl md:text-5xl font-bold mb-24 mt-12 text-teal-300 drop-shadow-lg"
      >
        Coding Profile
      </motion.h1>

      {/* LeetCode Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 text-center flex flex-col items-center gap-6"
      >
        <img
          src="https://leetcard.jacoblin.cool/sivm_cj?theme=dark&font=Baloo%20Bhaijaan%202&ext=contest"
          alt="LeetCode Stats"
          className="mx-auto mb-4 rounded-lg shadow-lg border-2 border-teal-400/50 w-full max-w-md"
        />

        {/* Button */}
        <motion.a
          href="https://leetcode.com/u/sivm_cj/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1}} 
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }} // ⚡ smoother transition
          viewport={{ once: true }}
          className="inline-block bg-teal-500 text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg mt-10"
        >
          View LeetCode
        </motion.a>
      </motion.div>

      {/* Shooting Dot Animation */}
      <style>{`
        @keyframes shootingDot {
          0% { transform: translate(0,0); opacity:0; }
          10% { opacity:1; }
          100% { transform: translate(${50 + Math.random() * 100}px, ${
        50 + Math.random() * 100
      }px); opacity:0; }
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

export default CompetitiveProgramming;
