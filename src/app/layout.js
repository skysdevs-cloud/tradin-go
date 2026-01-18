import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/compontes/Header";   
import Footer from "@/compontes/Footer";
import FAQSection from "@/compontes/FAQSection";
import BlogGridSection from "@/compontes/BlogGridSection";
import ScrollToTop from "@/compontes/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tradin-Go Agro Impex | Global Trade of Quality Agricultural Products",
  description:
    "Tradin-Go Agro Impex is a leading agriculture trading company in India, supplying premium grains, spices & agro commodities like groundnut, maize, castor, sesame & more worldwide.",
  icons: {
    icon: "/tradin-go-logo.png",
    shortcut: "/tradin-go-logo.png",
    apple: "/tradin-go-logo.png",
  },
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
        <ToastContainer />
      </body>
    </html>
  );
}
