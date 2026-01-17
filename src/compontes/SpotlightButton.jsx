"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function SpotlightButton({
  bgColor = "white",
  text = "Click Me",
  href = "/",
  icon: Icon = null, // pass a component like Leaf
}) {
  const buttonRef = useRef(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const spotlight = spotlightRef.current;

    const handleMove = (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;

      gsap.to(spotlight, {
        x,
        scale: 30,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      gsap.to(spotlight, {
        scale: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    };

    button.addEventListener("mousemove", handleMove);
    button.addEventListener("mouseleave", handleLeave);

    return () => {
      button.removeEventListener("mousemove", handleMove);
      button.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="flex justify-center lg:justify-start">
      <Link
        href={href}
        ref={buttonRef}
        className={`
          relative overflow-hidden
          inline-flex items-center gap-1
          px-5 py-3
          rounded-xl
          font-medium
          ${bgColor} text-black
        `}
      >
        {/* Spotlight */}
        <span
          ref={spotlightRef}
          className="absolute top-1/2 left-0 h-3 w-3 rounded-full bg-gradient-to-r from-lime-400 to-lime-200 -translate-y-1/2 scale-0
            pointer-events-none
          "
        />

        {/* Icon */}
        {Icon && (
          <span className="relative z-10 p-2 rounded-lg">
            <Icon size={18} />
          </span>
        )}

        {/* Text */}
        <span className="relative z-10">{text}</span>
      </Link>
    </div>
  );
}
