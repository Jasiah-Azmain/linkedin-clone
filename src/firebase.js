import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAevDAdl9jEzQGtzfjix2R1lOW-gBLPPw",
  authDomain: "linkedin-clone-d0333.firebaseapp.com",
  projectId: "linkedin-clone-d0333",
  storageBucket: "linkedin-clone-d0333.appspot.com",
  messagingSenderId: "206635955569",
  appId: "1:206635955569:web:38a09aa9f46fa5945a72d0",
  measurementId: "G-F2FE09DDYF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
