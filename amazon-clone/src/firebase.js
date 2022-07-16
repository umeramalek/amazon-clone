import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALskDA4wtVys1-lJtqqXP64ET4QZB5oM4",
  authDomain: "clone-a01aa.firebaseapp.com",
  projectId: "clone-a01aa",
  storageBucket: "clone-a01aa.appspot.com",
  messagingSenderId: "213498363313",
  appId: "1:213498363313:web:019e8671638e037f951190",
  measurementId: "G-34K22YEMEG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};

     