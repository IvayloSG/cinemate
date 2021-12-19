import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD_8LNyGXn1OyW4yBE38TwZ3VUAPILCN6k",
    authDomain: "cinemate-2836f.firebaseapp.com",
    projectId: "cinemate-2836f",
    storageBucket: "cinemate-2836f.appspot.com",
    messagingSenderId: "735384765942",
    appId: "1:735384765942:web:8e93fbd534d34bf75273d7",
    measurementId: "G-TCW2Q4DVTR"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
export { firebase, db, auth }