// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIQ1oZA6xvfzeP9DGvkldQW4Sb5W_2BdM",
  authDomain: "delizi-e9102.firebaseapp.com",
  projectId: "delizi-e9102",
  storageBucket: "delizi-e9102.appspot.com",
  messagingSenderId: "221932412682",
  appId: "1:221932412682:web:67289990eed460a43364f3",
  measurementId: "G-DK2HQJJ807"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, GithubAuthProvider, signInWithPopup };
