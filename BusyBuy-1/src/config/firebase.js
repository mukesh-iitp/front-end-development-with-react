// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhwgZmxm3xNz00awrTM7QKS1buyG7dZbY",
  authDomain: "blogging-app-7e95d.firebaseapp.com",
  projectId: "blogging-app-7e95d",
  storageBucket: "blogging-app-7e95d.firebasestorage.app",
  messagingSenderId: "205160860688",
  appId: "1:205160860688:web:2ea45a83c80557c717ce95"
};

console.log(process.env);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app,"blogs");
const auth = getAuth();
setPersistence(auth, browserLocalPersistence);
export { db };
