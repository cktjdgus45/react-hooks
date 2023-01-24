import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: "shoppy-64340.firebaseapp.com",
    projectId: "shoppy-64340",
    storageBucket: "shoppy-64340.appspot.com",
    messagingSenderId: "695135224055",
    appId: "1:695135224055:web:91efd9e39af21acc0fd3f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);