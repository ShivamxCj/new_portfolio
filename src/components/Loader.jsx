import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setCollapse(true);

          setTimeout(() => {
            onFinish && onFinish();
          }, 1200);

          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onFinish]);

  const circumference = 2 * Math.PI * 70;

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* ================= NEURAL NETWORK BACKGROUND ================= */}

        <svg className="absolute w-full h-full opacity-20">
          {[...Array(20)].map((_, i) => {
            const x1 = Math.random() * 100 + "%";
            const y1 = Math.random() * 100 + "%";
            const x2 = Math.random() * 100 + "%";
            const y2 = Math.random() * 100 + "%";

            return (
              <motion.line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#14B8A6"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                }}
              />
            );
          })}
        </svg>

        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-teal-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.3,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
            }}
          />
        ))}

        {/* ================= BLACK HOLE COLLAPSE ================= */}

        {collapse && (
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-black"
            initial={{ scale: 0 }}
            animate={{ scale: 6 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        )}

        {/* ================= PLANET CORE ================= */}

        <motion.div
          className="relative w-40 h-40 flex items-center justify-center"
          animate={!collapse ? { rotate: 360 } : { scale: 0 }}
          transition={
            !collapse
              ? { repeat: Infinity, duration: 12, ease: "linear" }
              : { duration: 0.8 }
          }
        >
          <motion.div
            className="absolute w-16 h-16 rounded-full bg-teal-500"
            animate={{
              boxShadow: [
                "0 0 20px rgba(20,184,166,0.5)",
                "0 0 60px rgba(20,184,166,1)",
                "0 0 20px rgba(20,184,166,0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <svg className="absolute w-44 h-44 -rotate-90">
            <circle
              cx="88"
              cy="88"
              r="70"
              stroke="rgba(20,184,166,0.2)"
              strokeWidth="8"
              fill="transparent"
            />
            <motion.circle
              cx="88"
              cy="88"
              r="70"
              stroke="#14B8A6"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - progress / 100)}
              strokeLinecap="round"
              transition={{ ease: "easeOut" }}
            />
          </svg>
        </motion.div>

        {/* ================= TEXT ================= */}

        {!collapse && (
          <motion.div
            className="absolute bottom-24 text-teal-300 text-xl font-semibold tracking-wider"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Initializing AI Systems... {progress}%
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;