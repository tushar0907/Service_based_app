import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC_waRLQLb-Cw0R6SsLEw-DSXb1y3nc99g",
    authDomain: "s8vrittih-b6dfe.firebaseapp.com",
    projectId: "s8vrittih-b6dfe",
    storageBucket: "s8vrittih-b6dfe.appspot.com",
    messagingSenderId: "159817945860",
    appId: "1:159817945860:web:da561cf2cebc9b87cfb651",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();

export { firebase };