import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgpE_DTKRJIDjhQd0ZCoePR1ksxsN4jTs",
  authDomain: "whatsup-46437.firebaseapp.com",
  projectId: "whatsup-46437",
  storageBucket: "whatsup-46437.appspot.com",
  messagingSenderId: "115453253419",
  appId: "1:115453253419:web:11256cfe451670bdcf176e",
  measurementId: "G-3D5NCL9TK2"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
