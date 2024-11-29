// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfqCHdptyvVJg8PS-gnCNS7TtgEf8SAXk",
  authDomain: "pythagorean-principles.firebaseapp.com",
  projectId: "pythagorean-principles",
  storageBucket: "pythagorean-principles.firebasestorage.app",
  messagingSenderId: "1008954213962",
  appId: "1:1008954213962:web:97154ebb878ba0f67cc8b3",
  measurementId: "G-WLZT5B9S8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);