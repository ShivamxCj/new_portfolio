import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUser, FaLaptopCode } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiReact } from "react-icons/si";
import { PiCertificateFill } from "react-icons/pi";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { icon: <AiFillHome />, href: "#home", name: "Home" },
    { icon: <FaUser />, href: "#about", name: "About" },
    { icon: <SiReact />, href: "#tech", name: "Tech Stack" },
    {
      icon: <PiCertificateFill />,
      href: "#certificates",
      name: "Certifications",
    },
    { icon: <FaLaptopCode />, href: "#projects", name: "Projects" },
    { icon: <HiOutlineMail />, href: "#contact", name: "Contact" },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed top-1/2 right-4 -translate-y-1/2 flex-col gap-6 z-50">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="
              text-gray-400 
              hover:text-teal-400 
              text-2xl 
              transition-all
            "
            title={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>


      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          md:hidden
          fixed
          right-0
          top-1/2
          -translate-y-1/2
          z-[60]
          bg-teal-600
          text-white
          p-3
          rounded-l-xl
          shadow-lg
        "
      >
        {open ? <FiX size={24} /> : <FiChevronLeft size={24} />}
      </button>


      {/* Mobile Sidebar Drawer */}
      <div
        className={`
          md:hidden
          fixed
          top-1/2
          right-0
          -translate-y-1/2
          z-50
          bg-black/90
          backdrop-blur-md
          border-l
          border-gray-700
          rounded-l-xl
          p-5
          flex
          flex-col
          gap-6
          transition-transform
          duration-300
          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="
              flex
              items-center
              gap-3
              text-gray-300
              hover:text-teal-400
              text-xl
              transition
            "
          >

            {link.icon}

            <span className="text-sm">
              {link.name}
            </span>

          </a>
        ))}

      </div>
    </>
  );
};

export default Sidebar;