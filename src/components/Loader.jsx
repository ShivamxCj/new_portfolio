import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onFinish && onFinish(), 500); // trigger fade out
          return 100;
        }
        return prev + 1;
      });
    }, 30);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        {/* Twinkling stars */}
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-70 animate-shootingDot"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Revolving planet with rings */}
        <motion.div
          className="relative w-32 h-32 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          <div className="absolute w-16 h-16 rounded-full bg-teal-500 shadow-[0_0_30px_rgba(20,184,166,0.5)]" />

          {/* Rings */}
          {/* <div className="absolute w-40 h-2 border-2 border-teal-400 rounded-full rotate-45 opacity-50" />
          <div className="absolute w-40 h-2 border-2 border-teal-400 rounded-full -rotate-45 opacity-50" /> */}

          {/* Circular progress */}
          <svg className="absolute w-40 h-40 -rotate-90">
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="rgba(20,184,166,0.2)"
              strokeWidth="10"
              fill="transparent"
            />
            <motion.circle
              cx="80"
              cy="80"
              r="70"
              stroke="#14B8A6"
              strokeWidth="10"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 70}
              strokeDashoffset={2 * Math.PI * 70 * (1 - progress / 100)}
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Loading percentage */}
        <div className="absolute bottom-20 text-teal-300 text-xl font-semibold">
          {progress}%
        </div>

        <style>{`
          @keyframes shootingDot {
            0% { transform: translate(0,0); opacity:0; }
            10% { opacity:1; }
            100% { transform: translate(50px, 50px); opacity:0; }
          }
          .animate-shootingDot {
            animation-name: shootingDot;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
