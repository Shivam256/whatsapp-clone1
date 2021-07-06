import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyARoARFUvZ4lRMWIfI9V84ZOSmGEjKNubQ",
  authDomain: "whatsapp-clone-613cd.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-613cd-default-rtdb.firebaseio.com",
  projectId: "whatsapp-clone-613cd",
  storageBucket: "whatsapp-clone-613cd.appspot.com",
  messagingSenderId: "473487434976",
  appId: "1:473487434976:web:d430ca4d3a3e1197cd9c85",
  measurementId: "G-9ZD0Z306BE"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// export const auth = firebase.auth();
// export const provider = new firebase.auth.GoogleAuthProvider();

// export default db;
