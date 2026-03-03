import React from "react";
import { motion } from "framer-motion";
import certImage from "../../src/assets/certificate.jpg"; // 🔥 Add your certificate image here
import { FiExternalLink } from "react-icons/fi";

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="min-h-screen bg-black text-white px-4 py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-teal-300 mb-16">
          My Certification
        </h2>

        {/* Certificate Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Certificate Image (Left on Desktop, Bottom on Mobile) */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <img
              src={certImage}
              alt="Certificate"
              className="rounded-xl shadow-[0_0_30px_rgba(20,184,166,0.5)] border border-teal-400/30 hover:scale-105 transition duration-300"
            />
          </motion.div>

          {/* Certificate Details (Right on Desktop, Top on Mobile) */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-teal-300 mb-4">
              SQL Realtional Database Certification
            </h3>

            <p className="text-gray-300 mb-4">
                This certification validates my proficiency in SQL and relational database management, demonstrating my ability to design, query, and optimize databases effectively.
            </p>

            <p className="text-gray-400 mb-6">
              Issued by: Cognitive Class and IBM <br />
              Year: 2025
            </p>

            <a
              href="https://courses.cognitiveclass.ai/certificates/47a519edf37e4b1c9b665cd2bf23c475"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600/80 rounded-lg hover:bg-teal-700 transition shadow-lg"
            >
              View Credential
              <FiExternalLink />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Certificates;