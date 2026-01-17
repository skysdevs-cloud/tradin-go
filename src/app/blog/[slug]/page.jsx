import { Calendar, User, Quote } from "lucide-react";
import { blogs } from "../data/blogs";
import { notFound } from "next/navigation";
import PageHeading from "@/compontes/PageHeading";

export default async function BlogReadPage({ params }) {
  const { slug } = await params; // ✅ correct

  console.log("Resolved slug:", slug);

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }
  const capitalizeWords = (str) => {
  if (!str) return "";
  return str
    .replace(/[-_]/g, " ") // slug me dash/underscore ho to space
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};


  return (
    <>
    <PageHeading title={`${capitalizeWords(blog?.slug)}`}
  breadcrumb={`Home – About -> ${capitalizeWords(blog?.slug)}`}
  bgImage="/image/breadcrum-bg.jpg"/>
    <section className="bg-[#faf9f5] py-16 px-4">
      <div className="mx-auto max-w-3xl">

        {/* Hero Image */}
        <div className="overflow-hidden rounded-3xl">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full object-cover"
          />
        </div>

        {/* Meta */}
        <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Calendar size={14} /> {blog.date}
          </span>
          <span className="flex items-center gap-1">
            <User size={14} /> {blog.author}
          </span>
        </div>

        {/* Title */}
        <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-[#3f4f2a]">
          {blog.title}
        </h1>

        {/* Intro */}
        <p className="mt-6 text-gray-700">
          {blog.content.intro}
        </p>

        {/* Quote */}
        <div className="mt-8 rounded-2xl bg-white p-6 shadow">
          <div className="flex items-start gap-3">
            <Quote className="text-lime-500 mt-1" />
            <p className="text-gray-700">
              {blog.content.quote}
            </p>
          </div>
        </div>

        {/* Section */}
        <h2 className="mt-12 text-2xl font-semibold text-[#3f4f2a]">
          {blog.content.sectionTitle}
        </h2>

        <p className="mt-4 text-gray-700">
          {blog.content.sectionText}
        </p>

        {/* Author Quote */}
        <div className="mt-12 rounded-2xl bg-[#3f4f2a] p-6 text-white">
          <p className="italic">
            “{blog.content.authorQuote}”
          </p>
          <p className="mt-3 text-sm font-medium">
            {blog.author}
          </p>
        </div>

      </div>
    </section>
    </>
  );
}
