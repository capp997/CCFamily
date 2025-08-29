import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCpQT54N7k6hPia8Uon6Sv5kdLBu15SvGM",
    authDomain: "ccfamily-47764.firebaseapp.com",
    projectId: "ccfamily-47764",
    storageBucket: "ccfamily-47764.firebasestorage.app",
    messagingSenderId: "88544915004",
    appId: "1:88544915004:web:36c4779fd953f072715d39",
    measurementId: "G-BHJZBKZP96"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
