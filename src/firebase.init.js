// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: process.env.React_APP_APIKEY,
  authDomain: process.env.React_APP_AUTHDOMAIN,
  projectId: process.env.React_APP_PROJECTID,
  storageBucket: process.env.React_APP_STORAGEBUCKET,
  messagingSenderId: process.env.React_APP_MESSAGINGSENDERID,
  appId: process.env.React_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;