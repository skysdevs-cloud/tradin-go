"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import PageHeading from "@/compontes/PageHeading";

export default function ContactQueriesPage() {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const q = query(
          collection(db, "contactQueries"),
          orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setQueries(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchQueries();
  }, []);

  // ✅ Download CSV
  const downloadCSV = () => {
    const header = ["Name", "Email", "Project Type", "Budget", "Message", "Date"];
    const rows = queries.map((q) => [
      q.name,
      q.email,
      q.projectType,
      q.budget,
      q.message,
      q.createdAt?.toDate().toLocaleString() || "",
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [header, ...rows].map((e) => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "contact_queries.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ✅ Delete All Queries
  const handleDeleteAll = async () => {
    if (!confirm("Are you sure you want to delete all queries?")) return;

    try {
      const res = await fetch("/api/deleteContactQueries", { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setQueries([]); // Clear local state
      alert("All queries deleted!");
    } catch (err) {
      console.error(err);
      alert("Error deleting queries");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <PageHeading
        title="Contact Queries"
        breadcrumb="Home – Contact Queries"
        bgImage="/image/breadcrum-bg.jpg"
      />

      <div className="p-6">
        <h1 className="mb-4 text-2xl font-semibold">Contact Queries</h1>

        {/* Buttons */}
        <div className="mb-4 flex gap-2">
          <button
            onClick={downloadCSV}
            className="rounded bg-lime-400 px-4 py-2 text-black font-semibold hover:bg-lime-300 transition"
          >
            Download CSV
          </button>

          <button
            onClick={handleDeleteAll}
            className="rounded bg-red-500 px-4 py-2 text-white font-semibold hover:bg-red-400 transition"
          >
            Delete All
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Project</th>
                <th className="p-3">Budget</th>
                <th className="p-3">Message</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>

            <tbody>
              {queries.map((q) => (
                <tr
                  key={q.id}
                  className="border-t hover:bg-gray-200 transition-colors"
                >
                  <td className="p-3">{q.name}</td>
                  <td className="p-3">{q.email}</td>
                  <td className="p-3">{q.projectType}</td>
                  <td className="p-3">{q.budget}</td>
                  <td className="p-3">{q.message}</td>
                  <td className="p-3">
                    {q.createdAt?.toDate().toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
