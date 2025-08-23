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
      <h1 className="relative z-10 text-4xl md:text-5xl font-bold mb-16 text-teal-300 drop-shadow-lg">
        Coding Profile
      </h1>

      {/* LeetCode Card */}
      <div className="relative z-10 text-center flex flex-col items-center gap-6">
        {/* <h2 className="text-3xl font-bold mb-6 text-teal-300 drop-shadow-lg">
          LeetCode
        </h2> */}
        <img
          src="https://leetcard.jacoblin.cool/sivm_cj?theme=dark&font=Baloo%20Bhaijaan%202&ext=contest"
          alt="LeetCode Stats"
          className="mx-auto mb-4 rounded-lg shadow-lg border-2 border-teal-400/50 w-full max-w-md"
        />
        <a
          href="https://leetcode.com/u/sivm_cj/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-teal-500 text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
          View LeetCode
        </a>
      </div>

      {/* Shooting Dot Animation */}
      <style>{`
        @keyframes shootingDot {
          0% { transform: translate(0,0); opacity:0; }
          10% { opacity:1; }
          100% { transform: translate(${50 + Math.random() * 100}px, ${50 + Math.random() * 100}px); opacity:0; }
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
