import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import { FiSend, FiLoader } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send("service_9y5e5b8", "template_t7l617p", formData, "LqW2OzOsJfE4OmSCD")
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ user_name: "", user_email: "", message: "" });
      })
      .catch((err) => {
        console.error("Email error:", err);
        toast.error("Failed to send message. Try again.");
      })
      .finally(() => setLoading(false));
  };

  // Variants for staggered inputs
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-4 py-16 bg-black overflow-hidden"
    >
      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Cosmic dots background */}
      <div className="absolute inset-0 z-0">
        {[...Array(40)].map((_, i) => (
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

      {/* Content box */}
      <motion.div
        className="relative z-10 max-w-2xl w-full bg-black/60 p-8 rounded-lg shadow-lg text-gray-200"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-teal-300 text-center drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-center text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Feel free to reach out for collaboration or just a friendly hello.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <label className="block mb-1 text-gray-200 font-medium">Name</label>
            <input
              type="text"
              name="user_name"
              required
              value={formData.user_name}
              onChange={handleChange}
              className="w-full border border-gray-600 rounded px-4 py-2 focus:ring-2 focus:ring-teal-400 bg-black/40 text-white"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block mb-1 text-gray-200 font-medium">Email</label>
            <input
              type="email"
              name="user_email"
              required
              value={formData.user_email}
              onChange={handleChange}
              className="w-full border border-gray-600 rounded px-4 py-2 focus:ring-2 focus:ring-teal-400 bg-black/40 text-white"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block mb-1 text-gray-200 font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-600 rounded px-4 py-2 focus:ring-2 focus:ring-teal-400 bg-black/40 text-white"
            ></textarea>
          </motion.div>

          <motion.div variants={itemVariants}>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center gap-2 bg-teal-600 hover:bg-teal-700 transition px-6 py-3 rounded text-white font-semibold disabled:opacity-50"
            >
              {loading ? (
                <>
                  <FiLoader className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <FiSend />
                  Send Message
                </>
              )}
            </button>
          </motion.div>
        </motion.form>
      </motion.div>

      {/* Dot animation */}
      <style>{`
        @keyframes shootingDot {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translate(${50 + Math.random()*100}px, ${50 + Math.random()*100}px); opacity: 0; }
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

export default Contact;
