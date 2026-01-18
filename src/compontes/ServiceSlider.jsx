"use client";

import { useState, useEffect } from "react";
import SpotlightButton from "./SpotlightButton";
import { Leaf } from "lucide-react";
import { useRouter } from "next/navigation";

// Product list with slug
const products = [
  { title: "Groundnut", description: "High-quality groundnuts for oil and snacks.", image: "/image/prod1.jpeg" },
  { title: "Maize", description: "Premium maize for human consumption and feed.", image: "/image/prod2.jpeg" },
  { title: "Castor Seeds", description: "Castor seeds for oil extraction and industrial use.", image: "/image/prod3.jpeg" },
  { title: "Guar Seeds", description: "Top-grade guar seeds for gum and food industry.", image: "/image/prod4.jpeg" },
  { title: "Wheat", description: "Organic wheat for flour and cereals.", image: "/image/prod5.jpeg" },
  { title: "Moong Whole", description: "Whole moong beans, ideal for dals and sprouts.", image: "/image/prod6.jpeg" },
  { title: "Fennel", description: "Aromatic fennel seeds for culinary and medicinal use.", image: "/image/prod7.jpeg" },
  { title: "Cummins", description: "Quality cumin seeds for flavor and spice.", image: "/image/prod5.jpeg" },
  { title: "Sesame Seeds", description: "Rich sesame seeds for oil and cooking.", image: "/image/prod2.jpeg" },
  { title: "Psyllium (Isabgol)", description: "Pure psyllium husk for health and fiber.", image: "/image/prod3.jpeg" },
  { title: "Pearl Millet (Bajra)", description: "Nutritious bajra for cereals and flour.", image: "/image/prod2.jpeg" },
  { title: "Mustard", description: "Premium mustard seeds for oil and spice.", image: "/image/prod6.jpeg" },
].map(p => ({ ...p, slug: p.title.toLowerCase().replace(/\s+/g, "-") }));

export default function ProductSlider() {
  const router = useRouter();
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1 >= products.length ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  let visibleSlides;
  if (isMobile) {
    visibleSlides = [products[startIndex]];
  } else {
    visibleSlides = products.slice(startIndex, startIndex + 3);
    if (visibleSlides.length < 3) {
      visibleSlides.push(...products.slice(0, 3 - visibleSlides.length));
    }
  }

  const activeSlide = isMobile ? visibleSlides[0] : visibleSlides[1];

  return (
    <section className="max-w-382.5 mx-auto py-16 px-6">
      <div className="bg-[#213e13] text-white py-16 px-6 rounded-xl relative">
        {/* Header */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-wider mb-2 flex justify-center items-center gap-2">
            <span>🌾</span> Our Products
          </p>
          <h2 className="text-3xl font-bold mb-4">Premium Agro Products</h2>
          <p className="text-gray-200 text-sm">
            India is one of the world's largest food grains and spices producers. Tradin-Go Agro Impex provides superior quality bulk products to buyers worldwide.
          </p>
        </div>

        {/* Slider */}
        <div className="flex justify-center items-center gap-6 w-full overflow-visible mt-12">
          {visibleSlides.map((product, index) => {
            const isActive = isMobile ? true : index === 1;

            return (
              <div
                key={product.slug}
                className={`
                  shrink-0 w-64 sm:w-72 md:w-80 p-4 bg-white text-black rounded-xl
                  transform transition-all duration-500 cursor-pointer
                  ${isActive ? "scale-110 shadow-2xl z-10" : "scale-95 opacity-70 z-0"}
                `}
                onClick={() => router.push(`/products/${product.slug}`)}
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-40 object-cover rounded-lg transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold text-lg mt-3 mb-1">{product.title}</h3>
                <p className="text-sm text-gray-700">{product.description}</p>
              </div>
            );
          })}
        </div>

        {/* Spotlight Button */}
        <div className="text-center mt-12 flex justify-center">
          <SpotlightButton
            bgColor="bg-white"
            text={`Explore ${activeSlide.title}`}
            href={`/products/${activeSlide.slug}`}
            icon={Leaf}
          />
        </div>
      </div>
    </section>
  );
}
