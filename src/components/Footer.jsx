import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300 py-6 overflow-hidden">
      {/* Animated Cosmic Stars Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full opacity-60"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(64,224,208,0.25), transparent 30%),
              radial-gradient(circle at 70% 60%, rgba(64,224,208,0.15), transparent 30%),
              radial-gradient(circle at 40% 80%, rgba(64,224,208,0.1), transparent 30%)
            `,
            backgroundSize: "200% 200%",
            animation: "cosmicMove 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-4 z-10 text-center">
        {/* Made with ❤️ and React */}
        <p className="text-sm text-teal-400 flex items-center gap-2 justify-center">
          Made with{" "}
          <span className="text-red-500 animate-pulse inline-block">❤️</span> and{" "}
          <FaReact className="text-blue-400 animate-pulse inline-block" />
        </p>

        {/* Centered Text */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Shivam Chatterjee. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/ShivamxCj"
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shivam-chatterjee-1230b4247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/sivm_cj"
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-400 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Cosmic movement animation */}
      <style>{`
        @keyframes cosmicMove {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
