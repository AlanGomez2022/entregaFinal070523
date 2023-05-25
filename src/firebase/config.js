// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqaZuXvaN0Dyv2-AXHUOl7QGATTZBohEo",
  authDomain: "lacava2023-8c43f.firebaseapp.com",
  projectId: "lacava2023-8c43f",
  storageBucket: "lacava2023-8c43f.appspot.com",
  messagingSenderId: "283557302696",
  appId: "1:283557302696:web:6f7a6f55c28185e480cd9d"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const initFirebase = () => app