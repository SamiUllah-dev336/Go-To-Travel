// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB-_IBNJ1f3Mlgt3n6y0IcI4_PqpifQK_w",
  authDomain: "sami-2a51e.firebaseapp.com",
  projectId: "sami-2a51e",
  storageBucket: "sami-2a51e.appspot.com",
  messagingSenderId: "963969157633",
  appId: "1:963969157633:web:da128ee831190a29950e00",
  measurementId: "G-LHD56ENDJM",
  databaseURL:"https://sami-2a51e-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db=getFirestore(app);

export {db,auth};
