// lib/firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAN-4ZDjagbdQ85y4p63P5Mbrpu71ImvUc",
  authDomain: "tradin-go.firebaseapp.com",
  projectId: "tradin-go",
  storageBucket: "tradin-go.firebasestorage.app",
  messagingSenderId: "459405615989",
  appId: "1:459405615989:web:9ca34bce36e737ba32293c",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);  // Firestore add kiya
export default app;
