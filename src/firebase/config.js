import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBdzVCUGp2_b7Ss2-4lV8g85hyJUaeghnA",
  authDomain: "olx-app-8e010.firebaseapp.com",
  projectId: "olx-app-8e010",
  storageBucket: "olx-app-8e010.firebasestorage.app",
  messagingSenderId: "46620767746",
  appId: "1:46620767746:web:ee8318a90e6a4e2cd3191b",
  measurementId: "G-EQFNE7ZLYR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export { firebaseApp };