"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "react-toastify";


export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // ✅ Allow admin login page without check
    if (pathname === "/admin/login") {
      setChecking(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      // ❌ Not logged in
      if (!user) {
        toast.error("Please Admin login first");
        router.replace("/");
        return;
      }

      // ❌ Logged in but not admin
      if (user.uid !== process.env.ADMIN_UID) {
        await signOut(auth);
        toast.error("You are not admin");
        router.replace("/");
        return;
      }

      // ✅ Admin verified
      setChecking(false);
    });

    return () => unsubscribe();
  }, [router, pathname]);

  // ⏳ Loader while checking
  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Checking admin access...
      </div>
    );
  }

  return <>{children}</>;
}
