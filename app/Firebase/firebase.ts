// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH5c16sQNhOyns9zhmLkO5e9YUBHq0DsY",
  authDomain: "ecommxpert-fc447.firebaseapp.com",
  projectId: "ecommxpert-fc447",
  storageBucket: "ecommxpert-fc447.appspot.com",
  messagingSenderId: "882495693738",
  appId: "1:882495693738:web:b0d1df503a98ce9fbd81d3",
  measurementId: "G-SWKX4ET69K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage();