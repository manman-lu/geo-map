import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAkDbwdWbAUJayCfOddlCxYR_KlpvSg9Ic",
    authDomain: "geo-map-c9d78.firebaseapp.com",
    databaseURL: "https://geo-map-c9d78.firebaseio.com",
    projectId: "geo-map-c9d78",
    storageBucket: "geo-map-c9d78.appspot.com",
    messagingSenderId: "850932577407",
    appId: "1:850932577407:web:a0f8b4ad9f57e464f13b4a",
    measurementId: "G-0ZKXT65WEM"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore();
