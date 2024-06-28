import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvW9O8Md-ZvOr-YFCYU22bOAD2mNZrtho",
  authDomain: "nishublogs-c98e0.firebaseapp.com",
  projectId: "nishublogs-c98e0",
  storageBucket: "nishublogs-c98e0.appspot.com",
  messagingSenderId: "1036934752516",
  appId: "1:1036934752516:web:9e699c59a9da10bbc6c851"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a Firestore instance
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export { db };