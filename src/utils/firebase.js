// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd5v25grLo6qGZlq6lLx2A4qtPJHRgYRA",
  authDomain: "netflixgpt-44c6f.firebaseapp.com",
  projectId: "netflixgpt-44c6f",
  storageBucket: "netflixgpt-44c6f.firebasestorage.app",
  messagingSenderId: "538240667025",
  appId: "1:538240667025:web:dea6ae9495f558beba9e30",
  measurementId: "G-D8007J4DMF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
