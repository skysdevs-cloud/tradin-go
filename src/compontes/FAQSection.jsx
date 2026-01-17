"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What Farming Services Do You Offer?",
    answer:
      "We provide a wide range of agricultural support services including crop monitoring, soil health analysis, sustainable farming guidance, field inspections, and modern cultivation strategies to help farmers improve productivity and crop quality.",
  },
  {
    id: 2,
    question: "How Can I Start Working With You?",
    answer:
      "You can start by contacting us through our website or phone. Our experts will assess your needs and guide you through the onboarding process.",
  },
  {
    id: 3,
    question: "What Are Your Service Charges?",
    answer:
      "Our service charges depend on farm size, crop type, and services required. We offer flexible and affordable pricing.",
  },
  {
    id: 4,
    question: "How Long Do Crop Evaluations Take?",
    answer:
      "Crop evaluations typically take between 24 to 72 hours depending on field size and conditions.",
  },
  {
    id: 5,
    question: "Do You Support Different Types of Farms?",
    answer:
      "Yes, we support small, medium, and large farms including organic and commercial farming operations.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(1);

  return (
    <section className="max-w-[1530px] mx-auto px-4 py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-sm uppercase tracking-widest text-emerald-700 mb-2">
          🌿 Questions
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
          Frequently Asked Questions
        </h2>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isActive = active === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isActive
                    ? "bg-[#ecf96e] border-[#edff49]"
                    : "bg-white border-gray-200"
                }`}
              >
                <button
                  onClick={() => setActive(isActive ? null : faq.id)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left cursor-pointer"
                >
                  <span className="font-medium text-gray-900">
                    {String(faq.id).padStart(2, "0")}. {faq.question}
                  </span>

                  <ChevronDown
                    className={`text-gray-700 transition-transform duration-300 ${
                      isActive ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isActive && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-gray-800">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Image Section */}
        <div className="relative w-full h-[420px] rounded-3xl overflow-hidden">
          <Image
            src="/image/faq1.jpg"
            alt="Farmer inspecting crops"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
