"use client";

import Link from "next/link";
import { Menu, X, Leaf } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Container from "./Container";
import Image from "next/image";
import SpotlightButton from "./SpotlightButton";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [quoteActive, setQuoteActive] = useState(false);
  const pathname = usePathname();

  const linkClass = (path) =>
    pathname === path
      ? "text-lime-600 font-semibold"
      : "transition-colors duration-300 hover:text-lime-600";

  return (
    <Container>
      <header className="w-full">
        <div className="max-[1540px] mx-auto px-4 py-3 flex items-center justify-between">

                   {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/image/tradin-go-logo.png"
              alt="Agrotech Logo"
              width={200}
              height={100}
              priority
              className="object-contain"
            />
          </Link>
          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#3f492a]">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>

            <Link href="/gallery" className={linkClass("/gallery")}>
              Gallery
            </Link>
            <Link href="/about" className={linkClass("/about")}>
              About
            </Link>

            <Link href="/blog" className={linkClass("/blog")}>
              Blog
            </Link>


            <Link href="/contact" className={linkClass("/contact")}>
              Contact Us
            </Link>
          </nav>

 

          {/* Right Desktop */}
          <div className="hidden lg:flex items-center gap-6 text-sm">
            <SpotlightButton
              bgColor="bg-[#ecf96e]"
              text="Get A Quote"
              href="/contact"
              icon={Leaf}
            />
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden bg-[#3f492a] px-4 py-4 flex flex-col gap-4 text-white">
            <Link href="/" className={linkClass("/")} onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/gallery" className={linkClass("/gallery")} onClick={() => setOpen(false)}>
              Gallery
            </Link>
            <Link href="/about" className={linkClass("/about")} onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/blog" className={linkClass("/blog")} onClick={() => setOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" className={linkClass("/contact")} onClick={() => setOpen(false)}>
              Contact Us
            </Link>
          </div>
        )}
      </header>
    </Container>
  );
}
