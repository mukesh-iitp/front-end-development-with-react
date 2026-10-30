// create firebase config here and export the db object
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5M2KRqYBVbXls2JW_PhgWVEUKcabxx-k",
  authDomain: "transactions-196fb.firebaseapp.com",
  projectId: "transactions-196fb",
  storageBucket: "transactions-196fb.firebasestorage.app",
  messagingSenderId: "936490926366",
  appId: "1:936490926366:web:e68a411a76cabfa24a890f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app,"transactions");