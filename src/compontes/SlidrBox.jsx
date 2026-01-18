"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "./Container";
import { Leaf } from "lucide-react";
import SpotlightButton from "./SpotlightButton";
import { gsap } from "gsap";

const slides = [
  {
    image: "/image/slider1.jpg",
    title: "Cultivating Smarter Farming Futures",
  },
  {
    image: "/image/slider2.jpg",
    title: "Innovative Agriculture Solutions",
  },
  {
    image: "/image/slider3.jpg",
    title: "Grow Better With Smart Farming",
  },
];

export default function SlidrBox() {
  const [current, setCurrent] = useState(0);

  const slideRefs = useRef([]);
  const titleRef = useRef(null);
  const tagRef = useRef(null);
  const buttonRef = useRef(null);

  // 🔥 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // 🔥 GSAP ANIMATION ON SLIDE CHANGE
  useEffect(() => {
    const tl = gsap.timeline();

    // RESET
    gsap.set([titleRef.current, tagRef.current, buttonRef.current], {
      opacity: 0,
      y: 30,
    });

    // BACKGROUND IMAGE MOTION (fruity style depth)
    gsap.fromTo(
      slideRefs.current[current],
      { scale: 1.15 },
      { scale: 1, duration: 1.6, ease: "power3.out" }
    );

    // TEXT SEQUENCE (like Fruity)
    tl.to(tagRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    })
      .to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.2"
      )
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.2"
      );

    return () => tl.kill();
  }, [current]);

  return (
    <Container>
      <div className="relative w-full h-[45vh] sm:h-[65vh] lg:h-130 overflow-hidden rounded-2xl lg:rounded-3xl">

        {/* SLIDES */}
        {slides.map((slide, index) => (
          <div
            key={index}
            ref={(el) => (slideRefs.current[index] = el)}
            className={`absolute inset-0 ${
              index === current ? "z-10" : "z-0 opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/50" />

            {/* CONTENT */}
            {index === current && (
              <div className="absolute inset-0 flex items-center justify-center lg:justify-start">
                <div className="px-6 sm:px-10 lg:px-16 max-w-xl text-white space-y-5 text-center lg:text-left">

                  {/* TAG */}
                  <div
                    ref={tagRef}
                    className="flex items-center justify-center lg:justify-start gap-2 text-xs tracking-widest uppercase opacity-90"
                  >
                    <Leaf size={14} />
                    <span>Growth Optimization</span>
                  </div>

                  {/* HEADING */}
                  <h1
                    ref={titleRef}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight"
                  >
                    {slide.title}
                  </h1>

                  {/* BUTTON */}
                  <div ref={buttonRef}>
                    <SpotlightButton
  bgColor="bg-white"
  text="Have A Look"
  href="/contact"
  icon={Leaf}
/>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}
