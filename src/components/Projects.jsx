import React, { useState } from "react";
import { FaGithub, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "ContextaAI - RAG Powered AI Knowledge Assistant",
    description:
      "Built an end-to-end Retrieval-Augmented Generation (RAG) based AI document assistant for interactive PDF question answering.",
    details:
      "Developed a full-stack Generative AI application that converts PDF documents into interactive knowledge sources. Implemented PDF text extraction using PyMuPDF, semantic chunking with LangChain, embeddings generation using Hugging Face Sentence Transformers, vector similarity search using FAISS, and grounded response generation using Ollama Phi-3 LLM. Built React frontend with FastAPI backend and deployed the API on Azure VM.",
    github:
      "https://github.com/ShivamxCj/RAG-document-assistant_v-1.0.0",
  },
  {
  title: "Real-Time Fruit & Vegetable Recognition using YOLOv8",
  description:
    "Built a real-time computer vision system for detecting and classifying fruits and vegetables using YOLOv8 and OpenCV.",
  details:
    "Developed a deep learning-based object detection system using YOLOv8 for real-time produce recognition through webcam input. Implemented bounding box visualization, confidence score prediction, and tomato ripeness estimation using RGB color-channel analysis with OpenCV and NumPy. Used custom-trained YOLOv8 weights for multi-class fruit and vegetable detection.",
  github:
    "https://github.com/ShivamxCj/Real-Time-Fruit-Vegetable-Recognition-using-YOLOv8",
},

  {
    title: "Logistic Segmentation & Warehouse Assignment",
    description:
      "Developed a logistic segmentation and warehouse assignment system using K-Means clustering.",
    details:
      "Built a logistics optimization system using K-Means clustering to segment customer demand zones and intelligently assign orders to the nearest warehouse for efficient delivery operations.",
    github:
      "https://github.com/ShivamxCj/Logistic-Segmentation-and-Warehouse-Assingment",
  },

  {
    title: "Product Sales Data Warehousing",
    description:
      "Built a SQL-based data warehouse with ETL pipelines, data cleaning, and analytical modeling.",
    details:
      "Developed a Sales & Customer Data Warehouse using Microsoft SQL Server and Medallion Architecture (Bronze, Silver, Gold). Designed Star Schema with fact and dimension tables, implemented SQL ETL pipelines for data transformation, cleaning, standardization, and analytics-ready datasets.",
    github:
      "https://github.com/ShivamxCj/sql_data_warehouse_project",
  },
  {
  title: "Sales Executive Dashboard",
  description:
     "Interactive Power BI dashboard analyzing sales, profit, and business performance.",
  details:
    "Developed an executive-level Business Intelligence dashboard using Power BI with data cleaning in Power Query, data modeling using Star Schema, and DAX measures for KPI calculations. Created interactive visualizations for sales trends, product performance, category analysis, channel distribution, and city-wise sales insights to support data-driven business decisions.",
  github:
    "https://github.com/ShivamxCj/Sales-Executive--Power-Bi-Dashboard",
},

  {
    title: "Customer Trend Analysis",
    description:
      "End-to-end customer analytics project delivering business insights using SQL, Python, and Power BI.",
    details:
      "Built a customer behaviour analytics solution using SQL Server, Python, and Power BI to analyze purchase patterns, customer segments, revenue trends, and generate actionable business insights.",
    github:
      "https://github.com/ShivamxCj/Customer-Trends-Analysis",
  },


];
const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleProject = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="min-h-screen px-4 py-16 bg-black text-white"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-teal-300 mb-16 text-center">
          My Projects
        </h2>

        {/* IMPORTANT: items-start prevents stretching */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 items-start">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col">

              {/* PROJECT CARD */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-900/70 rounded-lg p-6 shadow-lg backdrop-blur-sm flex flex-col"
              >
                <h3 className="text-xl font-semibold text-teal-300 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 min-h-[60px]">
                  {project.description}
                </p>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-gray-700/80 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <button
                    onClick={() => toggleProject(index)}
                    className="px-4 py-2 bg-teal-600 rounded-lg flex items-center gap-2 hover:bg-teal-700 transition"
                  >
                    Know More
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </motion.div>

              {/* EXPAND SECTION */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 bg-gray-800 rounded-lg p-4 text-gray-300"
                  >
                    {project.details}
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}
          {/* view more projects button */}
        </div>
        <div className="flex justify-center mt-12">
  <motion.a
    href="https://github.com/ShivamxCj?tab=repositories"
    target="_blank"
    rel="noreferrer"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="px-6 py-3 bg-teal-600 rounded-lg text-white font-semibold flex items-center gap-2 hover:bg-teal-700 transition"
  >
    <FaGithub />
    View More Projects
  </motion.a>
</div>
      </div>
    </section>
  );
};

export default Projects;