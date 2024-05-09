// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLdyLIwCYZQ8eCxIkcVLV3kXczkM-pqNI",
  authDomain: "food-central-62898.firebaseapp.com",
  projectId: "food-central-62898",
  storageBucket: "food-central-62898.appspot.com",
  messagingSenderId: "1065878372831",
  appId: "1:1065878372831:web:d7a97cb89381f8fde5c46a",
  measurementId: "G-WWDCPLE7ZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);