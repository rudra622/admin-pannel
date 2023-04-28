import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDKIkgzkEMDGJgj3en7h3LjjbvGMlCIog0",
  authDomain: "admin-pannel-35d49.firebaseapp.com",
  projectId: "admin-pannel-35d49",
  storageBucket: "admin-pannel-35d49.appspot.com",
  messagingSenderId: "535234470518",
  appId: "1:535234470518:web:256275ea87258482353557"
};

// Initialize Firebase
const MyFirebase = initializeApp(firebaseConfig);

export const auth = getAuth(MyFirebase);

export const db = getFirestore(MyFirebase);