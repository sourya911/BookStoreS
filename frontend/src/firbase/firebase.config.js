// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLQzp3-5cCqcBGqXOhBj8jUY5wzLLmFQg",
  authDomain: "book-inventory-9f5af.firebaseapp.com",
  projectId: "book-inventory-9f5af",
  storageBucket: "book-inventory-9f5af.appspot.com",
  messagingSenderId: "994586788805",
  appId: "1:994586788805:web:0c65a3afa80174472f41ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
