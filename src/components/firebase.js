// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4wde62JjvquWn7izXRPgpaja6Aibm3-k",
  authDomain: "psychologicalcounseling-28efa.firebaseapp.com",
  projectId: "psychologicalcounseling-28efa",
  storageBucket: "psychologicalcounseling-28efa.appspot.com",
  messagingSenderId: "1021397689910",
  appId: "1:1021397689910:web:74f22cb6cd37293f79da97",
  measurementId: "G-HN1C145KHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);