// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO-gwE0wrZOZpJoq_JH2Aquy6c6ZGVYBs",
  authDomain: "fir-fighter-5667a.firebaseapp.com",
  projectId: "fir-fighter-5667a",
  storageBucket: "fir-fighter-5667a.firebasestorage.app",
  messagingSenderId: "175624410549",
  appId: "1:175624410549:web:0d7796705facdbefebf5fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
