// create firebase config here and export the db object
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhwgZmxm3xNz00awrTM7QKS1buyG7dZbY",
  authDomain: "blogging-app-7e95d.firebaseapp.com",
  projectId: "blogging-app-7e95d",
  storageBucket: "blogging-app-7e95d.firebasestorage.app",
  messagingSenderId: "205160860688",
  appId: "1:205160860688:web:2ea45a83c80557c717ce95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app,"blogs");