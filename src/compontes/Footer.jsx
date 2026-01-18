import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import Image from "next/image";


export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "/" },
    { icon: Facebook, href: "/" },
    { icon: Twitter, href: "/" }, // X
    { icon: Youtube, href: "/" },
    { icon: Linkedin, href: "/" },
  ];

  return (
    <footer className="max-w-382.5 mx-auto px-6 relative bg-linear-to-br from-[#213e13] via-[#172f10] to-[#213e13] text-gray-300">
      <div className="max-w-8xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
             <Link href="/" className="flex items-center gap-2">
            <Image
              src="/image/whiteLogo.png"
              alt="Agrotech Logo"
              width={200}
              height={100}
              priority
              className="object-contain"
            />
          </Link>
            <p className="text-sm leading-relaxed text-gray-200">
              AgriCulture is your trusted partner in sustainable farming, crop management, 
              and modern agriculture solutions.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="group w-9 h-9 flex items-center justify-center rounded-md border border-gray-600 
                             hover:border-lime-400 hover:text-lime-400 transition"
                >
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-200 mb-4">PAGES</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-lime-600">Home</Link></li>
              <li><Link href="/about" className="hover:text-lime-600">About</Link></li>
              <li><Link href="/contact" className="hover:text-lime-600">Contact Us</Link></li>
              <li><Link href="/blog" className="hover:text-lime-600">Blog</Link></li>
              <li><Link href="/gallery" className="hover:text-lime-600">Gallery</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-gray-200 mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products" className="hover:text-lime-600">Crop Planning</Link></li>
              <li><Link href="/products" className="hover:text-lime-600">Organic Fertilizers</Link></li>
              <li><Link href="/products" className="hover:text-lime-600">Irrigation Solutions</Link></li>
              <li><Link href="/products" className="hover:text-lime-600">Farm Consultancy</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-gray-200 mb-4">RESOURCES</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/blog" className="hover:text-lime-600">Farming Guides</Link></li>
              <li><Link href="/blog" className="hover:text-lime-600">Tips & Tricks</Link></li>
              <li><Link href="/blog" className="hover:text-lime-600">Success Stories</Link></li>
              <li><Link href="/blog" className="hover:text-lime-600">Events</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-12"></div>

        {/* Watermark */}
        <div className="relative overflow-hidden">
          <span className="absolute inset-x-0 -bottom-10 text-[160px] font-bold text-white/5 select-none text-center tracking-wider">
            AgriCulture
          </span>
        </div>

        {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-center items-center text-xs text-gray-400 gap-4 mt-16">
  <p>
    © 2026 Tradin-Go — Developed by{" "}
    <a
      href="https://www.instagram.com/skysdev/" // apna team link yahan dalo
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#ecf96e] hover:text-white underline transition"
    >
      Skysdev Team
    </a>
  </p>
</div>

      </div>
    </footer>
  );
}
