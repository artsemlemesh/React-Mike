// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-f7410.firebaseapp.com",
  projectId: "reactchat-f7410",
  storageBucket: "reactchat-f7410.appspot.com",
  messagingSenderId: "341345964280",
  appId: "1:341345964280:web:05061aa5f6f45e9b10eb0d",
  measurementId: "G-4NGW8ECPZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()