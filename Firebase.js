import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRYIQkaL5fpsMetDkDyNzuPhD_nJPl0Pw",
  authDomain: "uber-cd548.firebaseapp.com",
  projectId: "uber-cd548",
  storageBucket: "uber-cd548.appspot.com",
  messagingSenderId: "789026806932",
  appId: "1:789026806932:web:505d5a515826ae5d5b6881",
  measurementId: "G-NDW3B3E0PE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();


export {app, provider, auth}