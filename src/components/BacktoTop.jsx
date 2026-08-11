import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {visible && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-teal-500 hover:bg-teal-600 text-white shadow-lg transition-transform hover:scale-110"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
