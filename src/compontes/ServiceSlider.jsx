"use client";

import { useState, useEffect } from "react";
import SpotlightButton from "./SpotlightButton";
import { Leaf } from "lucide-react";

const services = [
  {
    title: "Green Farming",
    description:
      "Green Farming supports eco-friendly methods that protect resources and ensure sustainability.",
    image: "/image/service01.jpg",
  },
  {
    title: "Drone Spraying",
    description:
      "Drone Spraying applies crop treatments quickly and accurately using aerial technology.",
    image: "/image/service02.jpg",
  },
  {
    title: "Wheat Farming",
    description:
      "It involves soil preparation, timely sowing, and precise irrigation for optimal growth.",
    image: "/image/service03.jpg",
  },
  {
    title: "Organic Seeds",
    description:
      "High-quality organic seeds for sustainable farming and higher yields.",
    image: "/image/service01.jpg",
  },
  {
    title: "Smart Irrigation",
    description:
      "Automated irrigation solutions to save water and improve crop efficiency.",
    image: "/image/service02.jpg",
  },
];

export default function ServiceSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) =>
        prev + 1 >= services.length ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Calculate visible slides
  let visibleSlides;
  if (isMobile) {
    visibleSlides = [services[startIndex]]; // only 1 slide
  } else {
    visibleSlides = services.slice(startIndex, startIndex + 3);
    if (visibleSlides.length < 3) {
      visibleSlides.push(...services.slice(0, 3 - visibleSlides.length));
    }
  }

  // Middle slide active only on desktop
  const activeSlide = isMobile ? visibleSlides[0] : visibleSlides[1];

  return (
    <section className="max-w-[1530px] mx-auto py-16 px-6">
      <div className="bg-[#213e13] text-white py-16 px-6 rounded-xl relative">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider mb-2 flex justify-center items-center gap-2">
            <span>🌿</span> Our Service
          </p>
          <h2 className="text-3xl font-bold">Sustainable Growth For Farms</h2>
        </div>

        {/* Slider */}
        <div className="flex justify-center items-center gap-6 w-full overflow-visible">
          {visibleSlides.map((service, index) => {
            const isActive = isMobile ? true : index === 1; // only middle active on desktop
            return (
              <div
                key={service.title}
                className={`
                  flex-shrink-0 w-64 sm:w-72 md:w-80 p-4 bg-white text-black rounded-xl
                  transform transition-transform duration-500
                  ${isActive ? "scale-110 shadow-2xl z-10" : "scale-95 opacity-70 z-0"}
                `}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg mb-4 w-full h-40 object-cover"
                />
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm mb-3">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Spotlight Button */}
        <div className="text-center mt-12 flex justify-center">
          <SpotlightButton
            bgColor="bg-white"
            text={`Explore ${activeSlide.title}`}
            href="/services"
            icon={Leaf}
          />
        </div>
      </div>
    </section>
  );
}
