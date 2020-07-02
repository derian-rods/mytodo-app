import firebase from "firebase/app";
import "firebase/firebase-firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBiTivDInnZaXK_T7k2EPyJ0s16S3dWYrU",
    authDomain: "todo-app-8539e.firebaseapp.com",
    databaseURL: "https://todo-app-8539e.firebaseio.com",
    projectId: "todo-app-8539e",
    storageBucket: "todo-app-8539e.appspot.com",
    messagingSenderId: "479339934871",
    appId: "1:479339934871:web:8d20d33db6bb3897e5a5d2",
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
