// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPwVgbamkWxeNZxoiO4mpzpmn6fq96P8E",
  authDomain: "notificacionesvg-d4af4.firebaseapp.com",
  projectId: "notificacionesvg-d4af4",
  storageBucket: "notificacionesvg-d4af4.appspot.com",
  messagingSenderId: "141433420708",
  appId: "1:141433420708:web:ea236c5ac00454c6611f31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);