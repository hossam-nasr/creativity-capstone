import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// TODO: WARNING: CONFIGURATION HAS TO BE SET TO ENVIRONMENT BEFORE PRODUCTION YA2EMA HANROO7 FE DAHYA

let app = firebase.initializeApp({
  apiKey: "AIzaSyCfNSRJ1MwbvphUHBNWk1GoANjppfgf87c",
  authDomain: "bendbreakblend.firebaseapp.com",
  projectId: "bendbreakblend",
  storageBucket: "bendbreakblend.appspot.com",
  messagingSenderId: "544472157990",
  appId: "1:544472157990:web:a2f07c433b2cea4d4dfbe7",
  measurementId: "G-YRNFBVSX3Q",
});

// firebase.analytics();

export default app;
