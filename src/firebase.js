// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCpQT54N7k6hPia8Uon6Sv5kdLBu15SvGM",
    authDomain: "ccfamily-47764.firebaseapp.com",
    projectId: "ccfamily-47764",
    storageBucket: "ccfamily-47764.firebasestorage.app",
    messagingSenderId: "88544915004",
    appId: "1:88544915004:web:36c4779fd953f072715d39",
    measurementId: "G-BHJZBKZP96"
  };

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

// Exporta db para usarlo en otras partes de la app
export { db };
