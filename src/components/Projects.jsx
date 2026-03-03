import React, { useState } from "react";
import { FaGithub, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Product Sales Data Warehousing",
    description:
      "This warehouse consists of ETL processes and data cleaning, standardization and analysis.",
    details:
      `Built a Sales & Customer Data Warehouse in Microsoft SQL Server using Medallion Architecture (Bronze, Silver, Gold) to transform raw transactional data into analytics-ready datasets. Designed a Star Schema with fact and dimension tables, implemented SQL-based ETL pipelines for data ingestion and transformation, and performed data cleaning and standardization while simulating real-world business scenarios for analytical querying.`,

    github: "https://github.com/ShivamxCj/sql_data_warehouse_project",
  },
  {
    title: "Customer Trend Analysis",
    description:
      "End-to-end customer analytics project delivering business insights using SQL, Python, and Power BI.",
    details:
      "Built an end-to-end Customer Behaviour Analytics project using SQL Server, Python, and Power BI to analyze purchase patterns and revenue trends. Performed data cleaning and EDA in Python, executed advanced SQL queries for customer segmentation and revenue analysis, and developed an interactive Power BI dashboard with KPIs and drill-down insights. Delivered structured reports with business-focused recommendations to support data-driven decision-making and revenue growth.",
    github: "https://github.com/ShivamxCj/Customer-Trends-Analysis",
  },
  {
    title: "EDA Project - Diwali Sales Analysis",
    description:
      "Analyzed Diwali sales data to identify customer and product trends.",
    details:
      "Built a Python-based Diwali Sales Analysis project using Pandas, NumPy, and Matplotlib to analyze customer demographics, state-wise sales, and product performance. Extracted key insights on high-spending groups and top-performing regions to support data-driven sales strategies.",
    github: "https://github.com/ShivamxCj/Diwali-Sales-EDA-Project",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website showcasing my projects and skills.",
    details:
      "Developed a modern, responsive portfolio website using React and Tailwind CSS to highlight my projects and technical skills. Implemented smooth animations and transitions for an enhanced user experience.",
    github: "https://github.com/ShivamxCj/new_portfolio",
  },
    {
    title: "CSV Cleaner",
    description:
      "A tool for cleaning and preprocessing CSV data and converting them into Excel format if needed.",
    details:
      "Developed a Python application for cleaning and preprocessing CSV data, including handling missing values, removing duplicates, and standardizing formats and can covert into excel.",
    github: "https://github.com/ShivamxCj/CSV-Cleaner",
  },
  
];

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleProject = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen px-4 py-10 bg-black text-white" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-teal-300 mb-16 text-center">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col">
              <motion.div
                className="bg-gray-900/70 rounded-lg p-6 shadow-lg backdrop-blur-sm"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-semibold text-teal-300 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6">
                  {project.description}
                </p>

                <div className="flex gap-4 mb-4">
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
                      className={`transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </motion.div>

              {/* Expandable Section */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-800 rounded-b-lg p-4 text-gray-300 overflow-hidden"
                  >
                    {project.details}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;