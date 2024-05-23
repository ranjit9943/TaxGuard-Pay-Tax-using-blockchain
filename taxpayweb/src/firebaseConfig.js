// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
// Your Firebase config
  // enable authentication and firebase database
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and export it
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

export { auth, db };
