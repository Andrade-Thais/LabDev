// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7Qe5ekLGYnYG8hoM3sQ_KXA9Fr0sHJyw",
  authDomain: "labdev-f9041.firebaseapp.com",
  projectId: "labdev-f9041",
  storageBucket: "labdev-f9041.firebasestorage.app",
  messagingSenderId: "233840011003",
  appId: "1:233840011003:web:4e3813452b84263d30f25e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app)
export {authentication}