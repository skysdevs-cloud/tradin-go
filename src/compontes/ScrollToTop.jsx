"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
     className={`fixed bottom-6 right-6 z-50 
  rounded-full bg-[#ecf96e] p-3 text-black shadow-lg
  transition-all duration-300 hover:bg-[#d2e906] hover:scale-110 border-none outline-none cursor-pointer
  ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}

    >
      <ArrowUp size={22} />
    </button>
  );
}
