import { initializeApp,getApps,getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB0r-9pzLDJrkjUNRol6cjgs7gHCCiX6aQ",
  authDomain: "notion-clone-a8761.firebaseapp.com",
  projectId: "notion-clone-a8761",
  storageBucket: "notion-clone-a8761.firebasestorage.app",
  messagingSenderId: "306624796970",
  appId: "1:306624796970:web:6bfefeb18a4a7528396653",
  measurementId: "G-T5W86KB6JJ"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };