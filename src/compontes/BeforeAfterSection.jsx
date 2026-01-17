"use client";
import { useState } from "react";

const contentData = {
  before: {
    title: "Soil Irrigation Project (Before)",
    issue:
      "Water distribution was uneven, soil moisture levels were poorly managed, and irrigation inefficiency caused dryness and cracking in the soil.",
    exception:
      "Frequent pipeline blockages, irregular water flow, and lack of monitoring led to poor crop preparation and reduced soil fertility.",
    image: "/image/before-after-01.jpg",
  },
  after: {
    title: "Soil Irrigation Project (After)",
    issue:
      "Optimized irrigation systems ensure balanced water distribution, improved soil moisture retention, and efficient drainage management.",
    exception:
      "With smart monitoring and maintenance, unexpected water flow issues are minimized, ensuring healthier soil and improved crop yield.",
    image: "/image/before-after-02.jpg",
  },
};

export default function BeforeAfterSection() {
  const [active, setActive] = useState("before");
  const data = contentData[active];

  return (
    <section className="max-w-[1530px] mx-auto flex justify-center px-4 py-10">
      <div className="w-full max-w-8xl rounded-3xl bg-[#213e13] p-12 text-white">

        {/* Heading */}
        <div className="text-center mb-8">
          <p className="text-xs tracking-widest text-lime-300 mb-2">
            ✔ GROWTH ACHIEVED
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Before Planting, After Prosperity
          </h2>

          {/* Toggle */}
          <div className="flex justify-center gap-2 mt-6">
            {["before", "after"].map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer
                  ${
                    active === item
                      ? "bg-lime-300 text-black"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }
                `}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={data.image}
              alt={active}
              className="w-full h-[260px] object-cover transition-all duration-500"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              {data.title}
            </h3>

            <p className="text-sm text-white/80 mb-4">
              <span className="font-semibold text-white">Issue:</span>
              <br />
              {data.issue}
            </p>

            <p className="text-sm text-white/80">
              <span className="font-semibold text-white">Exception:</span>
              <br />
              {data.exception}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
