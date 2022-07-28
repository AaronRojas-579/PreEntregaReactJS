// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdWjSEvhWTQi6fogROxTe-OFNOZ5HoJyo",
  authDomain: "taniker-rojas.firebaseapp.com",
  projectId: "taniker-rojas",
  storageBucket: "taniker-rojas.appspot.com",
  messagingSenderId: "1065769605053",
  appId: "1:1065769605053:web:1c28689e5a3c9ac926a4d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);