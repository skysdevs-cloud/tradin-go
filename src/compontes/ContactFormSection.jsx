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

    // Remove error as soon as user types
    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
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
      // Save to Firestore
      await addDoc(collection(db, "contactQueries"), {
        ...form,
        createdAt: serverTimestamp(),
      });

      // Send email via API
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Email sending failed");

      toast.success("✅ Query sent and email delivered!");
      setForm({ name: "", email: "", projectType: "", budget: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `w-full rounded-xl px-4 py-2 bg-white/20 placeholder:text-white text-white outline-none border ${
      errors[field] ? "border-red-500" : "border-transparent"
    } focus:border-lime-400 transition`;

  return (
    <section className="max-w-382.5 mx-auto px-6 relative overflow-hidden rounded-3xl bg-transparent">
      <div
        className="h-162.5 w-full bg-cover bg-center rounded-3xl"
        style={{ backgroundImage: "url('/image/bg-form-img-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/10 rounded-3xl" />
        <div className="relative z-10 flex h-full items-center px-4 mb:justify-center">
          <div className="max-w-xl rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/20 text-white">
            <span className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-wide text-lime-300">
              <Leaf size={14} /> Quick Help
            </span>
            <h2 className="mb-6 text-3xl font-semibold">Need Assistance?</h2>

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
                  className={inputClass("projectType")}
                >
                  <option value="">Project Type*</option>
                  <option value="Organic Farming">Organic Farming</option>
                  <option value="Agro Export">Agro Export</option>
                  <option value="Consultation">Consultation</option>
                </select>

                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className={inputClass("budget")}
                >
                  <option value="">Select Your Budget*</option>
                  <option value="Below $1,000">Below $1,000</option>
                  <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                  <option value="$5,000+">$5,000+</option>
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
                className={`mt-2 inline-flex w-fit items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-black transition cursor-pointer border ${
                  loading ? "bg-gray-400 border-gray-500" : "bg-lime-400 hover:bg-lime-300 border-lime-500"
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
