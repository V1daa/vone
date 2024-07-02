// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6UqKMPvPBLNGh4ZqDnm_zJ8WjmIMmjos",
  authDomain: "books-6e140.firebaseapp.com",
  projectId: "books-6e140",
  storageBucket: "books-6e140.appspot.com",
  messagingSenderId: "856109204985",
  appId: "1:856109204985:web:a9cc71644e89d0d290a928"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
