import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCW5H24hq1hqJVG6nzrA389lpDAi4P3d2A",
    authDomain: "tclone-c986f.firebaseapp.com",
    projectId: "tclone-c986f",
    storageBucket: "tclone-c986f.appspot.com",
    messagingSenderId: "43522471329",
    appId: "1:43522471329:web:a208882d0614a9bf4d07e0",
    measurementId: "G-4VZT6TZ18P"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;