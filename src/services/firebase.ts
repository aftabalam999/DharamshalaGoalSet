import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

// Configuration for dharamshalalearning-5c1b1 project (for database)
const dharamshalaConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyAHZO9y4ZzdUowvsVCg6cSub1IyUCJju88",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "dharamshalalearning-5c1b1.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "dharamshalalearning-5c1b1",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "dharamshalalearning-5c1b1.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "426847203222",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:426847203222:web:5744e3bfa34b9f8b62f7b7",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-0JQCYHPLC5"
};

// Initialize the main Firebase app (dharamshalalearning-5c1b1)
const app = initializeApp(dharamshalaConfig);

// Initialize Firebase services from dharamshalalearning-5c1b1
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);

export default app;