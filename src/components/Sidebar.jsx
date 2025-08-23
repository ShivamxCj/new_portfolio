import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUser, FaLaptopCode } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiReact, SiLeetcode } from "react-icons/si"; // Tech Stack & Coding Profile icons

const Sidebar = () => {
  const links = [
    { icon: <AiFillHome />, href: "#home", name: "Home" },
    { icon: <FaUser />, href: "#about", name: "About" },
    { icon: <SiReact />, href: "#tech", name: "Tech Stack" }, // Tech Stack icon
    { icon: <SiLeetcode />, href: "#cp", name: "Coding Profile" }, // Coding Profile icon
    { icon: <FaLaptopCode />, href: "#projects", name: "Projects" },
    { icon: <HiOutlineMail />, href: "#contact", name: "Contact" },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-6 z-50">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={(e) => handleScroll(e, link.href)}
          className="text-gray-400 hover:text-teal-400 text-2xl transition-colors"
          title={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
