// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAdDo-EIDezcBFx2gUP5RWRFFV9b-_A-8k',
  authDomain: 'house-marketplace-580aa.firebaseapp.com',
  projectId: 'house-marketplace-580aa',
  storageBucket: 'house-marketplace-580aa.appspot.com',
  messagingSenderId: '1059996190087',
  appId: '1:1059996190087:web:5bacf147f5509ce3cfbf22',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
