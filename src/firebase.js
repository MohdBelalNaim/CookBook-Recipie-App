import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDwuXDQmoizxN_3G-KjetABjBJpQLkpqmE",
  authDomain: "blog-95891.firebaseapp.com",
  projectId: "blog-95891",
  storageBucket: "blog-95891.appspot.com",
  messagingSenderId: "499565770991",
  appId: "1:499565770991:web:4d0e1ad987c2ddad0ec31a"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)