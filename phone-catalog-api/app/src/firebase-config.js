// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZKaL_uie5ocNAldQkQJtgc-8V2RPceV8",
  authDomain: "phone-catalog-c5206.firebaseapp.com",
  projectId: "phone-catalog-c5206",
  storageBucket: "phone-catalog-c5206.appspot.com",
  messagingSenderId: "830759796015",
  appId: "1:830759796015:web:1672fa78755e75590a35da",
  measurementId: "G-KCX5GK04TH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
