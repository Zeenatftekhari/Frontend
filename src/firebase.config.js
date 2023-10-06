// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKi8nImejgwaf6jEh0gddUjahw09ShCXg",
  authDomain: "weeklygroupby.firebaseapp.com",
  projectId: "weeklygroupby",
  storageBucket: "weeklygroupby.appspot.com",
  messagingSenderId: "565650354875",
  appId: "1:565650354875:web:99a63d693b6f48c52c6f9e",
  measurementId: "G-0CS6PXHTXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app ;