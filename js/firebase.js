// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFnEF6Q3530e0tOrz0xWAQIV0gYwYSFVE",
  authDomain: "nuisoctrip15-5.firebaseapp.com",
  projectId: "nuisoctrip15-5",
  storageBucket: "nuisoctrip15-5.appspot.com",
  messagingSenderId: "193052090215",
  appId: "1:193052090215:web:45be34657b55685a45d9c2",
  measurementId: "G-0DTNH76MGL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
