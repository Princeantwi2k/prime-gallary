import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAy_8huY9SnpTeehK8KR84O4whtuWDKwdc",
    authDomain: "my-gallery-b1685.firebaseapp.com",
    projectId: "my-gallery-b1685",
    storageBucket: "my-gallery-b1685.appspot.com",
    messagingSenderId: "174042241082",
    appId: "1:174042241082:web:56b9bc329ee0e02ea2fd03"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();