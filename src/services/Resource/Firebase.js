import { getFirestore } from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfGClzKYklgouKNj27-CDPwneRD5-Kyes",
  authDomain: "ecommerce-la-fabrica.firebaseapp.com",
  projectId: "ecommerce-la-fabrica",
  storageBucket: "ecommerce-la-fabrica.appspot.com",
  messagingSenderId: "948535340826",
  appId: "1:948535340826:web:2a1721a36de744273bc6a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
 

