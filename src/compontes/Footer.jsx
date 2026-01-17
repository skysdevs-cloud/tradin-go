import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import Image from "next/image";


export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" }, // X
    { icon: Youtube, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="max-w-[1530px] mx-auto px-6 relative bg-gradient-to-br from-[#213e13] via-[#172f10] to-[#213e13] text-gray-300">
      <div className="max-w-8xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
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
            <p className="text-sm leading-relaxed text-gray-200">
              AgriCulture is your trusted partner in sustainable farming, crop management, 
              and modern agriculture solutions.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="group w-9 h-9 flex items-center justify-center rounded-md border border-gray-600 
                             hover:border-lime-400 hover:text-lime-400 transition"
                >
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-200 mb-4">PAGES</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-lime-600">Home</a></li>
              <li><a href="#" className="hover:text-lime-600">About</a></li>
              <li><a href="#" className="hover:text-lime-600">Contact Us</a></li>
              <li><a href="#" className="hover:text-lime-600">Blog</a></li>
              <li><a href="#" className="hover:text-lime-600">Gallery</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-gray-200 mb-4">SERVICES</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-lime-600">Crop Planning</a></li>
              <li><a href="#" className="hover:text-lime-600">Organic Fertilizers</a></li>
              <li><a href="#" className="hover:text-lime-600">Irrigation Solutions</a></li>
              <li><a href="#" className="hover:text-lime-600">Farm Consultancy</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-gray-200 mb-4">RESOURCES</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-lime-600">Farming Guides</a></li>
              <li><a href="#" className="hover:text-lime-600">Tips & Tricks</a></li>
              <li><a href="#" className="hover:text-lime-600">Success Stories</a></li>
              <li><a href="#" className="hover:text-lime-600">Events</a></li>
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
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4 mt-16">
          <p>© 2026 AgriCulture — Developed by Skysdev Team</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-lime-600">Security</a>
            <a href="#" className="hover:text-lime-600">Terms of service</a>
            <a href="#" className="hover:text-lime-600">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
