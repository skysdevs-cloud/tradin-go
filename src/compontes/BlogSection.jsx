import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";


const blogs = [
  {
    slug: "organic-farming-trends",
    category: "Climate-Smart Agriculture",
    title: "Organic Farming Trends Growing Worldwide Today",
    date: "July 2, 2025",
    author: "Developer",
    image: "/image/blog_01.jpg",
  },
  {
    slug: "teaching-next-generation-agriculture",
    category: "Sustainable Crop Practices",
    title: "Teaching The Next Generation About Agriculture",
    date: "June 29, 2025",
    author: "Developer",
    image: "/image/blog_02.jpg",
  },
  {
    slug: "modern-agriculture-machinery",
    category: "Organic Market Trends & Insights",
    title: "Mobility And Machinery Powering Modern Agriculture",
    date: "June 27, 2025",
    author: "Developer",
    image: "/image/blog_03.jpg",
  },
  {
    slug: "healthy-plant-nutrition",
    category: "Soil Health & Fertility",
    title: "The Science Behind Healthy Plant Nutrition",
    date: "June 23, 2025",
    author: "Developer",
    image: "/image/blog_02.jpg",
  },
  {
    slug: "automation-high-tech-lettuce-farm",
    category: "Climate-Smart Agriculture",
    title: "Automation in Action: Inside A High-Tech Lettuce Farm",
    date: "June 19, 2025",
    author: "Developer",
    image: "/image/blog_03.jpg",
  },
  {
    slug: "crop-protection-modern-agriculture",
    category: "Soil Health & Fertility",
    title: "Crop Protection: The Science Of Modern Agriculture",
    date: "June 13, 2025",
    author: "Developer",
    image: "/image/blog_01.jpg",
  },
];


export default function BlogSection() {
  return (
    <section className="bg-[#faf9f5] py-20 px-4 md:px-10">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <span className="text-xs uppercase tracking-widest text-gray-500">
          Our Blogs
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-[#3f4f2a]">
          Read Our Latest News
        </h2>
      </div>

      {/* Blog Grid */}
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <article key={index} className="group">
            
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={blog.image}
                alt={blog.title}
                className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Category Badge */}
              <span className="absolute top-4 left-4 rounded-full bg-white px-4 py-1 text-xs font-medium text-[#3f4f2a] shadow">
                {blog.category}
              </span>
            </div>

            {/* Meta */}
            <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar size={14} /> {blog.date}
              </span>
              <span className="flex items-center gap-1">
                <User size={14} /> {blog.author}
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-3 text-lg font-semibold leading-snug text-[#3f4f2a] group-hover:underline">
              {blog.title}
            </h3>

            {/* Read More */}
            <Link
             href={`/blog/${blog.slug}`}
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#3f4f2a] hover:gap-2 transition-all"
            >
              View Blog <ArrowRight size={16} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
