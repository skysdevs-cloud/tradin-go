"use client";

import Link from "next/link";
import { Menu, X, Leaf, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Container from "./Container";
import Image from "next/image";
import SpotlightButton from "./SpotlightButton";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { toast } from "react-toastify";

const ADMIN_UID = "VXSp8udtLWP8PRd1xe0LWfEQLYT2";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checking, setChecking] = useState(true);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.uid === ADMIN_UID) setIsAdmin(true);
      else setIsAdmin(false);
      setChecking(false);
    });
    return () => unsubscribe();
  }, []);

  if (checking) {
    return (
      <div className="flex min-h-20 items-center justify-center bg-gray-100">
        Checking user...
      </div>
    );
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
      router.push("/");
    } catch {
      toast.error("Logout failed");
    }
  };

  const linkClass = (path) =>
    pathname === path
      ? "text-lime-600 font-semibold"
      : "transition hover:text-lime-600";

  const links = isAdmin
    ? [
        { name: "Home", path: "/" },
        { name: "Queries", path: "/admin/contactQueries" },
      ]
    : [
        { name: "Home", path: "/" },
        { name: "Product", path: "/products" },
        { name: "Gallery", path: "/gallery" },
        { name: "About", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Contact Us", path: "/contact" },
      ];

  return (
    <Container>
      <header className="relative w-full">
        {/* TOP BAR */}
        <div className="px-4 py-3 flex items-center justify-between">
          {/* LOGO */}
          <Link href={isAdmin ? "/" : "/"} className="flex items-center gap-2">
            <Image
              src="/image/tradin-go-logo.png"
              alt="Agrotech Logo"
              width={180}
              height={90}
              priority
              className="object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#3f492a]">
            {links.map((link) => (
              <Link key={link.path} href={link.path} className={linkClass(link.path)}>
                {link.name}
              </Link>
            ))}
          </nav>

          {/* DESKTOP RIGHT */}
          <div className="hidden lg:flex items-center gap-4">
            {!isAdmin && (
              <SpotlightButton
                bgColor="bg-[#ecf96e]"
                text="Get A Quote"
                href="/contact"
                icon={Leaf}
              />
            )}

            {isAdmin && (
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 rounded-xl bg-red-500 px-4 py-2 text-white text-sm font-semibold hover:bg-red-400 transition"
              >
                <LogOut size={16} />
                Logout
              </button>
            )}
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden z-50"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* 🍋 MOBILE MENU – LEMON GLASS */}
        <div
          className={`
            lg:hidden fixed top-0 left-0 w-full z-40
            transition-all duration-500 ease-out
            ${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
          `}
        >
          <div
            className="
              mx-4 mt-20 rounded-3xl
              bg-lime-200/60 backdrop-blur-xl
              border border-lime-300/40
              shadow-[0_20px_60px_-15px_rgba(163,230,53,0.6)]
              px-6 py-6
              flex flex-col gap-5
              text-[#3f492a]
            "
          >
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="font-medium hover:text-lime-700 transition"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {isAdmin && (
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 rounded-xl bg-red-500 px-4 py-2 text-white text-sm font-semibold hover:bg-red-400 transition"
              >
                <LogOut size={16} />
                Logout
              </button>
            )}
          </div>
        </div>
      </header>
    </Container>
  );
}
