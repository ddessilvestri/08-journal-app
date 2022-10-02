
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuZ6kzsL-wcr11JWpkVLnkprJ8GQ0stU4",
  authDomain: "react-curso-journal-app-e2dd0.firebaseapp.com",
  projectId: "react-curso-journal-app-e2dd0",
  storageBucket: "react-curso-journal-app-e2dd0.appspot.com",
  messagingSenderId: "357325644354",
  appId: "1:357325644354:web:d3d0e5fffb9fd1617183db"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);