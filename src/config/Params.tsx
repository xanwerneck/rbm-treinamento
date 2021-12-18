// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-Bf_wNvFYi0Rdy0FoZBxaqr6Vu5s3B8A",
  authDomain: "rbm-gesta-financeira.firebaseapp.com",
  projectId: "rbm-gesta-financeira",
  storageBucket: "rbm-gesta-financeira.appspot.com",
  messagingSenderId: "837954138515",
  appId: "1:837954138515:web:1687ff05b120cbd4f13866"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);