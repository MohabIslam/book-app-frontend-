// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuyUffaQR1K0lv1LrAh_9ka6AwSakSJeo",
  authDomain: "book-store-mern-app-ccded.firebaseapp.com",
  projectId: "book-store-mern-app-ccded",
  storageBucket: "book-store-mern-app-ccded.firebasestorage.app",
  messagingSenderId: "756019020441",
  appId: "1:756019020441:web:faf311ee6ba397992fae08"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);