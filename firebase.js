// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK7l2i0j2Qpr3ZtkC1dG3jSDL4lyGYe9Y",
  authDomain: "inventory-management-c40f6.firebaseapp.com",
  projectId: "inventory-management-c40f6",
  storageBucket: "inventory-management-c40f6.appspot.com",
  messagingSenderId: "955191910606",
  appId: "1:955191910606:web:76dd62e9d58e32666e709f",
  measurementId: "G-WC3R5LSVVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  
const firestore = getFirestore(app);

export{firestore}