import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhzw6_lNSIMO99jSBnJRdXzH5cvA9LMro",
  authDomain: "prepwise-fc86e.firebaseapp.com",
  projectId: "prepwise-fc86e",
  storageBucket: "prepwise-fc86e.firebasestorage.app",
  messagingSenderId: "201954015781",
  appId: "1:201954015781:web:20c2ca4ac9de34f5181dcc",
  measurementId: "G-TQ4Z4T4B5S"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);