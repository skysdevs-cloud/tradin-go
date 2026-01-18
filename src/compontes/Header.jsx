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
    } catch (err) {
      console.error(err);
      toast.error("Logout failed");
    }
  };

  const linkClass = (path) =>
    pathname === path
      ? "text-lime-600 font-semibold"
      : "transition-colors duration-300 hover:text-lime-600";

  const links = isAdmin
    ? [
        { name: "Home", path: "/admin" },
        { name: "Queries", path: "/admin/contactQueries" },
        { name: "Blogs", path: "/admin/blogs" },
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
      <header className="w-full">
        <div className="max-[1540px] mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href={isAdmin ? "/admin" : "/"} className="flex items-center gap-2">
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
            {links.map((link) => (
              <Link key={link.path} href={link.path} className={linkClass(link.path)}>
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Desktop */}
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

          {/* Mobile Button */}
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden bg-[#3f492a] px-4 py-4 flex flex-col gap-4 text-white">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={linkClass(link.path)}
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
        )}
      </header>
    </Container>
  );
}
