// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA18yaQHoGSymqmvZWnUYuasbaGbn7Pw0I",
    authDomain: "pratice-simple-firebase-auth.firebaseapp.com",
    projectId: "pratice-simple-firebase-auth",
    storageBucket: "pratice-simple-firebase-auth.appspot.com",
    messagingSenderId: "498485505009",
    appId: "1:498485505009:web:4e278e9aa6c3b1a64d3250"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;