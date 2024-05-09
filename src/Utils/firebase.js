// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs8wJjwqc5VZQ8AF6iVU0riQi1DMBkOdM",
  authDomain: "namaste-foods-7bf79.firebaseapp.com",
  projectId: "namaste-foods-7bf79",
  storageBucket: "namaste-foods-7bf79.appspot.com",
  messagingSenderId: "223939034504",
  appId: "1:223939034504:web:6d00988c6a75831cae4e3d",
  measurementId: "G-EDMC2TJWPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);