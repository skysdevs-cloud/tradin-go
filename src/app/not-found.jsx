// app/not-found.jsx
"use client";

import Link from "next/link";
import { Leaf } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 bg-cover bg-center "
      style={{ backgroundImage: "url('/image/404-error-bg-1.jpg')" }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-[100px] font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-200 mb-8 max-w-md">
          We searched everywhere but couldn't find what you're looking for.
          Let's find a better place for you to go.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-lime-300 px-6 py-3 text-black font-semibold transition hover:bg-lime-400"
        >
          <Leaf size={20} />
          Back To Home
        </Link>
      </div>
    </div>
  );
}
