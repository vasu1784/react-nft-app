// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdXy8akyo2-yeAw29Ni2gWdRgjrKC26tc",
  authDomain: "vasu-app.firebaseapp.com",
  projectId: "vasu-app",
  storageBucket: "vasu-app.appspot.com",
  messagingSenderId: "112505236434",
  appId: "1:112505236434:web:94285febf342170c3a760b",
  measurementId: "G-27G8ZVYZWJ"
};

// Initialize Firebase


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

const analytics = getAnalytics(app);
