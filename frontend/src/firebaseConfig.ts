// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp_VXK5tpnygctYiM0vBa6ehv0XNsPkb8",
  authDomain: "videogame-collector-app.firebaseapp.com",
  projectId: "videogame-collector-app",
  storageBucket: "videogame-collector-app.firebasestorage.app",
  messagingSenderId: "1066242704032",
  appId: "1:1066242704032:web:7b565367b5b54726d37fc5",
  measurementId: "G-DWR2Z63899"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);