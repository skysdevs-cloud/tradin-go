"use client";

import { Leaf } from "lucide-react";
import { useRouter } from "next/navigation";
import SpotlightButton from "@/compontes/SpotlightButton";
import PageHeading from "@/compontes/PageHeading";

const products = [
  { title: "Groundnut", description: "High-quality groundnuts for oil and snacks.", image: "/image/prod1.jpeg", slug: "groundnut" },
  { title: "Maize", description: "Premium maize for human consumption and feed.", image: "/image/prod2.jpeg", slug: "maize" },
  { title: "Castor Seeds", description: "Castor seeds for oil extraction and industrial use.", image: "/image/prod3.jpeg", slug: "castor-seeds" },
  { title: "Guar Seeds", description: "Top-grade guar seeds for gum and food industry.", image: "/image/prod4.jpeg", slug: "guar-seeds" },
  { title: "Wheat", description: "Organic wheat for flour and cereals.", image: "/image/prod5.jpeg", slug: "wheat" },
  { title: "Moong Whole", description: "Whole moong beans, ideal for dals and sprouts.", image: "/image/prod6.jpeg", slug: "moong-whole" },
  { title: "Fennel", description: "Aromatic fennel seeds for culinary and medicinal use.", image: "/image/prod7.jpeg", slug: "fennel" },
  { title: "Cummins", description: "Quality cumin seeds for flavor and spice.", image: "/image/prod5.jpeg", slug: "cummins" },
  { title: "Sesame Seeds", description: "Rich sesame seeds for oil and cooking.", image: "/image/prod2.jpeg", slug: "sesame-seeds" },
  { title: "Psyllium (Isabgol)", description: "Pure psyllium husk for health and fiber.", image: "/image/prod3.jpeg", slug: "psyllium-isabgol" },
  { title: "Pearl Millet (Bajra)", description: "Nutritious bajra for cereals and flour.", image: "/image/prod2.jpeg", slug: "pearl-millet-bajra" },
  { title: "Mustard", description: "Premium mustard seeds for oil and spice.", image: "/image/prod6.jpeg", slug: "mustard" },
];

export default function ProductsPage() {
  const router = useRouter();

  return (
    <>
      <PageHeading title={"Products"}
  breadcrumb={`Home – Products`}
  bgImage="/image/breadcrum-bg.jpg"/>
    <section className="max-w-382.5 mx-auto py-16 px-6">
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-wider mb-2 flex justify-center items-center gap-2">
          <span>🌾</span> Our Products
        </p>
        <h2 className="text-3xl font-bold mb-4">All Agro Products</h2>
        <p className="text-gray-700 text-sm">
          Explore our wide range of premium agro products. Click on any product to see full details and inquire.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.slug}
            className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
            onClick={() => router.push(`/products/${product.slug}`)}
          >
            <div className="overflow-hidden h-48">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
              <p className="text-sm text-gray-700">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
