// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo9qKa_TiYLWsAUeZo8XBJqKCtBlEPBRQ",
  authDomain: "artharbor-934aa.firebaseapp.com",
  projectId: "artharbor-934aa",
  storageBucket: "artharbor-934aa.appspot.com",
  messagingSenderId: "548767900610",
  appId: "1:548767900610:web:749b0c4ad1a3dbb04f2c5b",
  measurementId: "G-NEDRR5W9NW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize storage
const storage = getStorage(app);
// Initialize database
const db = getFirestore(app);
// Initialize authentication
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is authenticated, currentUser is not null
    console.log('Authenticated user:', user);
  } else {
    // User is not authenticated, currentUser is null
    console.log('User is not authenticated');
  }
});

export { auth, onAuthStateChanged, db, storage }