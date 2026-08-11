import React from "react";
import { motion } from "framer-motion";

import {
  FaMicrosoft,
  FaChartLine,
  FaDatabase,
} from "react-icons/fa";

import {
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiLangchain,
  SiHuggingface,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";


const techStack = [

  {
    title: "AI / ML",
    skills: [
      {
        name: "Python",
        icon: <SiPython className="text-blue-500" size={30} />,
      },
      {
        name: "TensorFlow",
        icon: <SiTensorflow className="text-orange-400" size={30} />,
      },
      {
        name: "PyTorch",
        icon: <SiPytorch className="text-red-500" size={30} />,
      },
      {
        name: "Scikit-Learn",
        icon: <SiScikitlearn className="text-orange-500" size={30} />,
      },
      {
        name: "OpenCV",
        icon: <SiOpencv className="text-green-400" size={30} />,
      },
      {
        name: "LangChain",
        icon: <SiLangchain className="text-green-500" size={30} />,
      },
      {
        name: "Hugging Face",
        icon: <SiHuggingface className="text-yellow-400" size={30} />,
      },
    ],
  },


  {
    title: "Data Science",
    skills: [
      {
        name: "SQL",
        icon: <FaDatabase className="text-blue-400" size={30} />,
      },
      {
        name: "Pandas",
        icon: <SiPython className="text-blue-500" size={30} />,
      },
      {
        name: "NumPy",
        icon: <SiPython className="text-yellow-400" size={30} />,
      },
      {
        name: "Power BI",
        icon: <FaMicrosoft className="text-yellow-500" size={30} />,
      },
      {
        name: "Matplotlib",
        icon: <FaChartLine className="text-blue-400" size={30} />,
      },
      {
        name: "Data Analysis",
        icon: <FaDatabase className="text-teal-400" size={30} />,
      },
    ],
  },


  {
    title: "Web Development",
    skills: [
      {
        name: "React",
        icon: <SiReact className="text-cyan-400" size={30} />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" size={30} />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-300" size={30} />,
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs className="text-green-500" size={30} />,
      },
      {
        name: "Express",
        icon: <SiExpress className="text-gray-300" size={30} />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-400" size={30} />,
      },
    ],
  },

];


const TechStack = () => {


  const cardVariants = {

    hidden: {
      opacity: 0,
      y: 30,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },

  };


  return (

    <section
      className="relative min-h-screen px-4 py-20 bg-black overflow-hidden"
      id="tech"
    >


      {/* Background Animation */}
      <div className="absolute inset-0">

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



      <div className="relative z-10 max-w-7xl mx-auto">


        <motion.h2

          className="
          text-4xl 
          md:text-5xl 
          font-bold 
          text-center 
          text-teal-300 
          mb-16
          "

          initial={{
            opacity:0,
            y:-30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

        >
          Tech Stack
        </motion.h2>




        <div
          className="
          grid 
          grid-cols-1 
          md:grid-cols-3 
          gap-8
          "
        >


          {techStack.map((section,index)=>(


            <motion.div

              key={index}

              variants={cardVariants}

              initial="hidden"

              whileInView="visible"

              viewport={{
                once:true
              }}

              className="
              bg-gray-900/70
              rounded-xl
              p-8
              shadow-lg
              backdrop-blur-sm
              "

            >


              <h3
                className="
                text-2xl
                font-semibold
                text-teal-300
                text-center
                mb-8
                "
              >

                {section.title}

              </h3>



              <div
                className="
                flex 
                flex-wrap 
                justify-center 
                gap-5
                "
              >


                {section.skills.map((skill,idx)=>(


                  <div

                    key={idx}

                    className="
                    w-28
                    h-24
                    bg-gray-800
                    rounded-lg
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-2
                    text-gray-200
                    hover:scale-110
                    transition
                    "

                  >

                    {skill.icon}


                    <span className="text-sm text-center">

                      {skill.name}

                    </span>


                  </div>


                ))}


              </div>


            </motion.div>


          ))}


        </div>


      </div>




      <style>{`

        @keyframes shootingDot {

          0% {
            transform: translate(0,0);
            opacity:0;
          }

          10% {
            opacity:1;
          }

          100% {
            transform: translate(100px,100px);
            opacity:0;
          }

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