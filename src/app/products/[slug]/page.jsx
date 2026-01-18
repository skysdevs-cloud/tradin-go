"use client";

import { Leaf } from "lucide-react";
import { useParams } from "next/navigation";
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

export default function ProductPage() {
  const { slug } = useParams();

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="text-center py-20 text-2xl font-semibold">
        Product not found
      </div>
    );
  }

  return (
    <>
      <PageHeading
        title={product.title}
        breadcrumb={`Home – Products – ${product.title}`}
        bgImage="/image/breadcrum-bg.jpg"
      />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-full md:w-1/2 h-64 object-cover rounded-xl"
          />

          <div className="flex flex-col justify-between md:w-1/2">
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <p className="text-gray-700 mb-6">{product.description}</p>
            </div>

            <SpotlightButton
              bgColor="bg-lime-400"
              text="Contact For Inquiry"
              href="/contact"
              icon={Leaf}
            />
          </div>
        </div>
      </section>
    </>
  );
}
