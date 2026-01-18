import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function DELETE() {
  try {
    const snapshot = await getDocs(collection(db, "contactQueries"));
    const batch = snapshot.docs.map((d) => deleteDoc(doc(db, "contactQueries", d.id)));

    await Promise.all(batch);

    return new Response(JSON.stringify({ message: "All queries deleted" }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to delete" }), { status: 500 });
  }
}
