
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyC6RroZTMb6i0RCTiEGyTZUV9eExma6Mqk",
  authDomain: "lear-lingo.firebaseapp.com",
  projectId: "lear-lingo",
  databaseURL: "https://lear-lingo-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "lear-lingo.firebasestorage.app",
  messagingSenderId: "650795917573",
  appId: "1:650795917573:web:191a6bf1733fc8f1e1976c",
  measurementId: "G-STXQ0DRGN5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
// const analytics = getAnalytics(app);

export  {auth, database, ref, get};