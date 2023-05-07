// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNPdmSdJbnmpPLppnSFndEtoGn3NO-O9Q",
  authDomain: "lacava-6bd9e.firebaseapp.com",
  projectId: "lacava-6bd9e",
  storageBucket: "lacava-6bd9e.appspot.com",
  messagingSenderId: "68194066057",
  appId: "1:68194066057:web:367ea5bcff974ce5fc3058"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app 