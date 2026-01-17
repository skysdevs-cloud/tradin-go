// components/AgricultureProcess.jsx
import React from "react";
import { Home, Monitor, Sprout, Truck } from "lucide-react"; // valid icons
import SpotlightButton from "./SpotlightButton";

const steps = [
  {
    id: "01",
    title: "Field Planning",
    description: "Effective field planning is the foundation of a successful farm.",
    icon: <Home size={24} />,
  },
  {
    id: "02",
    title: "Growth Monitoring",
    description: "Growth monitoring is essential for ensuring healthy crops.",
    icon: <Monitor size={24} />,
  },
  {
    id: "03",
    title: "Plant Nurture",
    description: "Plant nurture provides crops with care and resources to thrive.",
    icon: <Sprout size={24} />,
  },
  {
    id: "04",
    title: "Farm Delivery",
    description: "Farm delivery brings fresh produce quickly and efficiently.",
    icon: <Truck size={24} />,
  },
];

const AgricultureProcess = () => {
  return (
    <section className=" py-16">
      <div className="max-w-[1540px] mx-auto text-center">
        <p className="text-sm text-green-700 uppercase mb-2 flex justify-center items-center gap-2">
          <span>🌿</span> Precision Farming
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-green-900 mb-12">
          Our Agriculture Process
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center relative">
              {/* Icon */}
              <div className="bg-green-900 text-lime-200 w-16 h-16 flex items-center justify-center rounded-xl mb-4">
                {step.icon}
              </div>

              {/* Connect line for md+ screens */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-[-50%] w-[100%] h-[2px] bg-gray-300"></div>
              )}

              {/* Title */}
              <div className="text-center max-w-xs">
                <h3 className="font-semibold text-green-900 text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>

              {/* Step number */}
              <div className="mt-2">
                <span className="bg-lime-200 text-green-900 font-semibold px-3 py-1 rounded-full text-sm">
                  {step.id}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Explore button */}
        <button className="mt-12 inline-flex items-center justify-center text-green-900 font-medium px-6 py-3 rounded-xl  transition">
   <SpotlightButton
            bgColor="bg-[#ecf96e]"
            text={`Explore More`}
            href="/services"
            // icon={Leaf}
          />        </button>
      </div>
    </section>
  );
};

export default AgricultureProcess;
