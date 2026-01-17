import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/compontes/Header";   
import Footer from "@/compontes/Footer";
import FAQSection from "@/compontes/FAQSection";
import BlogGridSection from "@/compontes/BlogGridSection";
import ScrollToTop from "@/compontes/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkyHub Recipes | Trending & Popular Recipes",
  description:
    "Explore trending recipes, detailed cooking steps, and ingredient lists at SkyHub.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
     <BlogGridSection/>
        <FAQSection/>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
