import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCV-4wVQn1Qvz7DwOkkqGXClVSmivZx86E",
  authDomain: "e-store-a00227463.firebaseapp.com",
  projectId: "e-store-a00227463",
  storageBucket: "e-store-a00227463.firebasestorage.app",
  messagingSenderId: "970567131118",
  appId: "1:970567131118:web:628dedf8c3ecf33d57f8ff",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
