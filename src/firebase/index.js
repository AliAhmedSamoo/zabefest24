import firebase from 'firebase/app';

import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXqwCC1kZYf1V7VfumIPZNPgZ0fLnsMVA",
    authDomain: "zabefest-23.firebaseapp.com",
    projectId: "zabefest-23",
    storageBucket: "zabefest-23.appspot.com",
    messagingSenderId: "1053049280997",
    appId: "1:1053049280997:web:2c55a87a356222878ab70c",
    measurementId: "G-43LCQBJ7Z2"
  };

  firebase.initializeApp(firebaseConfig);

//   // Get a reference to the storage service
  const storage = firebase.storage();
  
  export { storage, firebase as default };
