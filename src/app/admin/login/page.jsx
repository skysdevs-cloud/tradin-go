"use client";

import SpotlightButton from "@/compontes/SpotlightButton";
import { Leaf } from "lucide-react";
import { useState } from "react";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function AdminLoginPage() {
  const ADMIN_UID = "VXSp8udtLWP8PRd1xe0LWfEQLYT2";

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);

      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;

      // 🔐 ADMIN UID CHECK
      if (user.uid !== ADMIN_UID) {
        await signOut(auth);

        toast.error("❌ You are not admin");

        // ⏩ Redirect to home
        router.push("/");
        return;
      }

      // ✅ ADMIN VERIFIED
      toast.success("Admin login successful");
      router.push("/admin/contactQueries");

    } catch (error) {
  if (error.code === "auth/popup-closed-by-user") {
    console.log("User closed the popup");
    return;
  }

  console.error("Google Auth Error:", error);
  toast.error(error.message);
}
finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min py-20 items-center justify-center bg-linear-to-br from-lime-50 via-white to-lime-100 px-4">
      <div className="w-full max-w-md rounded-3xl border border-lime-200 bg-white/70 p-8 shadow-xl backdrop-blur-xl">

        {/* Header */}
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-lime-400">
            <Leaf className="text-black" />
          </div>

          <h1 className="text-2xl font-semibold text-gray-900">
            Admin Login
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Authorized access only
          </p>
        </div>

        {/* Google Button */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading}
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-60 cursor-pointer"
        >
          {loading ? "Logging in..." : "Continue with Google"}
        </button>

      </div>
    </section>
  );
}
