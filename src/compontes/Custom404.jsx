"use client";

import Link from "next/link";
import { Leaf } from "lucide-react";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-b from-yellow-50 to-yellow-100 px-4 text-center">
      <h1 className="text-[120px] font-bold text-green-900 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-green-900 mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-700 mb-6 max-w-md">
        We searched everywhere but couldn't find what you're looking for. Let's
        find a better place for you to go.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-xl bg-lime-300 px-6 py-3 font-semibold text-green-900 hover:bg-lime-400 transition"
      >
        <Leaf size={18} />
        Back To Home
      </Link>

      {/* Optional background image */}
      <div className="mt-12 w-full max-w-4xl">
        <img
          src="/image/404-cows.jpg" // replace with your image path
          alt="Cows in a field"
          className="w-full object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}
