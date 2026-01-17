"use client";

import { Play } from "lucide-react";
import { useState } from "react";
import VideoModal from "./VideoModal";


const data = [
  {
    title: "Environment-Friendly",
    desc: "Environment-friendly practices protect nature and promote sustainability.",
    image: "/image/video-img-01.jpg",
  },
  {
    title: "Sustainable Crop Growth",
    desc: "Sustainable Crop Growth ensures healthy yields with eco-friendly practices.",
    image: "/image/video-img-02.jpg",
  },
  {
    title: "Farmed In Fertile Ground",
    desc: "Farmed in Fertile Ground ensures robust growth and healthy yields.",
    image: "/image/video-img-03.jpg",
  },
];

export default function GreenPractices() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="max-w-[1540px] mx-auto px-4 md:px-8 py-12">
        <div className="rounded-3xl bg-gradient-to-br from-[#3f4f2a] to-[#2c3a1f] p-8 md:p-12 text-white">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
            <div>
              <span className="text-xs tracking-widest uppercase text-lime-200">
                Green Practices
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold">
                Eco-Friendly Farm Solutions
              </h2>
            </div>

            <button className="mt-4 md:mt-0 rounded-full bg-lime-300 px-5 py-2 text-sm font-semibold text-black">
              Explore All
            </button>
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {data.map((item, index) => (
              <div key={index} className="text-center">

                {/* Image */}
                <div
                  onClick={() => setOpen(true)}
                  className="relative mb-4 cursor-pointer overflow-hidden rounded-2xl group"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[260px] w-full object-cover transition group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 max-w-[1540px]" />

                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/30 backdrop-blur">
                      <Play className="h-6 w-6 text-white fill-white" />
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-200">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Video Modal */}
      <VideoModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
