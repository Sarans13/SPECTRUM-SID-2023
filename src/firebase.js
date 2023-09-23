// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn_A_5MlI0rAnnMB2CvsbOVJmNE3PQ3YY",
  authDomain: "spectrum-sid.firebaseapp.com",
  projectId: "spectrum-sid",
  storageBucket: "spectrum-sid.appspot.com",
  messagingSenderId: "39599046427",
  appId: "1:39599046427:web:05ec3b5effc864bc025dbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

