"use client";

import { useState } from "react";
import { Leaf } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { toast } from "react-toastify";

export default function ContactFormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(form).forEach((key) => {
      if (!form[key] || form[key].trim() === "") newErrors[key] = true;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "contactQueries"), {
        ...form,
        createdAt: serverTimestamp(),
      });

      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Email failed");

      toast.success("✅ Query sent successfully!");
      setForm({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
      });
      setErrors({});
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

const inputClass = (field) =>
  `w-full rounded-xl px-4 py-2
   bg-white/20 backdrop-blur-xl
   text-white placeholder:text-white
   outline-none border
   ${errors[field] ? "border-red-500" : "border-transparent"}
   focus:border-lime-400
   transition`;

const selectClass = (field) =>
  `w-full rounded-xl px-4 py-2
   bg-lime-200/40 backdrop-blur-xl
   text-black
   outline-none border
   ${errors[field] ? "border-red-500" : "border-lime-400"}
   focus:bg-lime-200/50 focus:border-lime-500
   transition appearance-none`;

  return (
    <section className="max-w-382.5 mx-auto px-6 relative overflow-hidden rounded-3xl">
      <div
        className="h-162.5 w-full bg-cover bg-center rounded-3xl"
        style={{ backgroundImage: "url('/image/bg-form-img-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/10 rounded-3xl" />

        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="max-w-xl w-full rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/20 text-white">
            <span className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-wide text-lime-300">
              <Leaf size={14} /> Quick Help
            </span>

            <h2 className="mb-6 text-3xl font-semibold text-white">
              Need Assistance?
            </h2>

            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  className={inputClass("name")}
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  className={inputClass("email")}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className={`${inputClass("projectType")} appearance-none`}
                >
                  <option value="" className="bg-lime-50 text-black cursor-pointer">
                    Project Type*
                  </option>
                  <option value="Organic Farming" className="bg-lime-50 text-black cursor-pointer">
                    Organic Farming
                  </option>
                  <option value="Agro Export" className="bg-lime-50 text-black cursor-pointer">
                    Agro Export
                  </option>
                  <option value="Consultation" className="bg-lime-50 text-black cursor-pointer">
                    Consultation
                  </option>
                </select>

                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className={`${inputClass("budget")} appearance-none`}
                >
                  <option value="" className="bg-lime-50 text-black cursor-pointer">
                    Select Your Budget*
                  </option>
                  <option value="Below $1,000" className="bg-lime-50 text-black cursor-pointer">
                    Below $1,000
                  </option>
                  <option value="$1,000 - $5,000" className="bg-lime-50 text-black cursor-pointer">
                    $1,000 - $5,000
                  </option>
                  <option value="$5,000+" className="bg-lime-50 text-black cursor-pointer">
                    $5,000+
                  </option>
                </select>
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                placeholder="Message*"
                className={`${inputClass("message")} resize-none`}
              />

              <button
                type="submit"
                disabled={loading}
                className={`mt-2 inline-flex w-fit items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-black transition border
                  ${
                    loading
                      ? "bg-gray-300 border-gray-400 cursor-not-allowed"
                      : "bg-lime-400 hover:bg-lime-300 border-lime-500"
                  }`}
              >
                <Leaf size={16} />
                {loading ? "Sending..." : "Submit Query"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
