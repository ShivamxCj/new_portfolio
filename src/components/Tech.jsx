import React from "react";
import { SiJavascript, SiReact, SiNodedotjs, SiPython, SiPostgresql, SiNumpy, SiScikitlearn } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" size={28} /> },
  { name: "React JS", icon: <SiReact className="text-cyan-400" size={28} /> },
  { name: "Node JS", icon: <SiNodedotjs className="text-green-600" size={28} /> },
  { name: "Python", icon: <SiPython className="text-blue-600" size={28} /> },
  { name: "SQL", icon: <SiPostgresql className="text-blue-700" size={28} /> },
  { name: "NumPy", icon: <SiNumpy className="text-blue-500" size={28} /> },
  { name: "Scikit Learn", icon: <SiScikitlearn className="text-green-700" size={28} /> },
];

const TechStack = () => {
  return (
    <section className="relative min-h-screen px-4 py-20 bg-black overflow-hidden flex items-center justify-center" id="tech">
      {/* Cosmic Dots */}
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
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-40 text-teal-300 drop-shadow-lg">
          Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900/60 text-teal-300 px-6 py-4 rounded-lg text-sm font-medium cursor-pointer select-none flex flex-col items-center gap-2 backdrop-blur-sm
                         transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(64,224,208,0.8)]"
            >
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

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
