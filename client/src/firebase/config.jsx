// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGWjwryD-8k0okT3_kotX9xaHuvJgVoiQ",
  authDomain: "node-app-569ac.firebaseapp.com",
  projectId: "node-app-569ac",
  storageBucket: "node-app-569ac.appspot.com",
  messagingSenderId: "835055516832",
  appId: "1:835055516832:web:735eb0f89edee703ff5dc5",
  measurementId: "G-92VR9MSHZK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
