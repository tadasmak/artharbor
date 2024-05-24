// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "<:api_key>",
    authDomain: "<:app_name>.firebaseapp.com",
    projectId: "<:project_id>",
    storageBucket: "<:app_name>.appspot.com",
    messagingSenderId: "<:messaging_sender_id>",
    appId: "<:app_id>",
    measurementId: "<:measurement_id>"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// // Import the functions you need from the SDKs you need
// import { getAuth } from "firebase/auth";
// // Initialize authentication
// const auth = getAuth(app);

// export { auth }

// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Initialize storage
const storage = getStorage(app);
// Initialize database
const db = getFirestore(app);

export { storage, db }


