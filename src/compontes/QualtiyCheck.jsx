"use client";

import React, { useState } from "react";
import SpotlightButton from "./SpotlightButton";
import { Leaf, Target, Sprout, ChevronDown } from "lucide-react";

export default function QualtiyCheck() {
  const tabs = [
    {
      title: "Our Objective",
      heading: "Evaluating Crop Quality In Field",
      leftImage: "/image/quickcheckImg1.jpg",
      image: "/image/quickcheckImg2.jpg",
      text: "Our objective is to craft meaningful solutions that elevate identity and improve usability.",
      features: [
        "Future Focused",
        "Quality Craftsmanship",
        "Smart Solutions",
        "Design Precision",
      ],
      buttonIcon: Leaf,
    },
    {
      title: "Our Goals",
      heading: "Driving Sustainable Farming Goals",
      leftImage: "/image/quickcheckImg5.jpg",
      image: "/image/quickcheckImg3.jpg",
      text: "Our goals are to maximize productivity and ensure sustainable farming practices.",
      features: ["Efficiency", "Sustainability", "Innovation", "Growth"],
      buttonIcon: Target,
    },
    {
      title: "Our Heritage",
      heading: "Rooted In Farming Heritage",
      leftImage: "/image/quickcheckImg6.jpg",
      image: "/image/quickcheckImg4.jpg",
      text: "Our heritage is built on decades of farming experience and dedication to quality crops.",
      features: ["Tradition", "Expertise", "Trust", "Excellence"],
      buttonIcon: Sprout,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <section className="max-w-[1530px] mx-auto  py-16 px-6 ">
      <div className="mx-auto grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT BIG IMAGE (Fixed Height) */}
<div className="rounded-lg overflow-hidden shadow-lg h-[420px] lg:h-[520px]">
  <img
    src={tabs[activeTab].leftImage}
    alt={tabs[activeTab].title}
    className="w-full h-full object-cover transition-all duration-500"
  />
</div>


        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-6">

          {/* Header */}
          <div className="flex items-center gap-2 text-sm text-green-700 uppercase font-semibold tracking-wider">
            <span>🌱</span>
            <span>Quality Check</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            {tabs[activeTab].heading}
          </h2>

          {/* DESKTOP TABS */}
          <div className="hidden lg:flex gap-3 mt-4">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-full font-medium transition cursor-pointer
                  ${
                    activeTab === index
                      ? "bg-lime-300 text-black"
                      : "bg-[#ecf96e] text-black hover:bg-lime-300"
                  }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* MOBILE GLASS DROPDOWN */}
          <div className="relative lg:hidden mt-4">
            <button
              onClick={() => setOpen(!open)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl
                         bg-lime-200/40 backdrop-blur-md border border-white/40
                         text-gray-900 font-semibold shadow-md cursor-pointer"
            >
              {tabs[activeTab].title}
              <ChevronDown
                className={`transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {open && (
              <div className="absolute z-20 mt-2 w-full rounded-xl overflow-hidden
                              bg-white/30 backdrop-blur-lg border border-white/40 shadow-xl">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveTab(index);
                      setOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 transition cursor-pointer
                      ${
                        activeTab === index
                          ? "bg-lime-300/80 text-black font-semibold"
                          : "hover:bg-white/30 text-gray-900"
                      }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CONTENT */}
          <div className="flex flex-col lg:flex-row gap-6 mt-6 items-start">
            <img
              src={tabs[activeTab].image}
              alt={tabs[activeTab].title}
              className="w-full lg:w-40 h-32 object-cover rounded-lg shadow-md"
            />
            <p className="text-gray-600 text-base lg:text-lg">
              {tabs[activeTab].text}
            </p>
          </div>

          {/* FEATURES */}
          <ul className="flex flex-col gap-3 mt-4 text-gray-700">
            {tabs[activeTab].features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span>✅</span>
                {feature}
              </li>
            ))}
          </ul>

          {/* CHAT BUTTON */}
          <SpotlightButton
            bgColor="bg-[#ecf96e]"
            text="Chat With Us"
            href="/services"
            icon={tabs[activeTab].buttonIcon}
          />
        </div>
      </div>
    </section>
  );
}
