"use client";

import { Leaf } from "lucide-react";
import SpotlightButton from "./SpotlightButton";
import Link from "next/link";


const blogs = [
  {
    id: 1,
    title: "The Science Behind Healthy Plant Nutrition",
    desc: "The science behind healthy plant nutrition focuses on understanding plants use and...",
    date: "June 23, 2025",
    image: "/image/blog_01.jpg",
  },
  {
    id: 2,
    title: "Crop Protection: The Science Of Modern Agriculture",
    desc: "Crop protection is a vital part of modern agriculture, combining scientific innovation...",
    date: "June 13, 2025",
    image: "/image/blog_02.jpg",
  },
  {
    id: 3,
    title: "From Sprout to Yield: The Farmer’s Seasonal Journey",
    desc: "From the first sprout breaking through the soil to the final harvest...",
    date: "May 30, 2025",
    image: "/image/blog_03.jpg",
  },
];

export default function BlogGridSection() {
  return (
    <section className="max-w-382.5 mx-auto px-4 py-16">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
        <div>
          <p className="text-sm tracking-widest text-[#6b7a45] flex items-center gap-2 mb-2">
            🌿 RECENT UPDATES
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#3f4d2a]">
            Explore The Latest News
          </h2>
        </div>

        <button className="flex items-center ">
          <SpotlightButton
            bgColor="bg-[#ecf96e]"
            text={`View all blog`}
            href="/blog"
            icon={Leaf}
          />
        </button>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="group">
            
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-65 object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Date Badge */}
              <span className="absolute bottom-4 right-4 bg-[#3f4d2a] text-white text-xs px-4 py-2 rounded-full flex items-center gap-2">
                📅 {blog.date}
              </span>
            </div>

            {/* Content */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-[#3f4d2a] mb-3 leading-snug">
                {blog.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                {blog.desc}
              </p>

              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#3f4d2a] hover:gap-3 transition-all"
              >
                Continue Blogs
                <span>🌿</span>
              </Link>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
