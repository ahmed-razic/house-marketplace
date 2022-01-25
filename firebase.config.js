// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC0UTtcdL77m0UwUYTZv0fUTC3bOYf3vVI',
  authDomain: 'house-marketplace-app-5efbe.firebaseapp.com',
  projectId: 'house-marketplace-app-5efbe',
  storageBucket: 'house-marketplace-app-5efbe.appspot.com',
  messagingSenderId: '601152190476',
  appId: '1:601152190476:web:ddfda1e0c332c4dfc1d629',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
