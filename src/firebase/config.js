import firebase from "firebase/app";
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfuBZ6QV2B8oALb8UyXE4uuTUrMbIodAQ",
    authDomain: "food-website-fbcec.firebaseapp.com",
    projectId: "food-website-fbcec",
    storageBucket: "food-website-fbcec.appspot.com",
    messagingSenderId: "775343969234",
    appId: "1:775343969234:web:95d64d1859253699c96e0b",
    measurementId: "G-X6WBJX34LQ"
  };


  firebase.initializeApp(firebaseConfig)

//   initialize firestore 

  const projectFirestore = firebase.firestore()


  export { projectFirestore }