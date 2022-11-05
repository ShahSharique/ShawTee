import firebase from "firebase";
// import "firebase/compat/auth";
// import "firebase/compat/firestore"; // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHce279Fj-SLMhgxKl5EDyxT0TDxGwCJQ",
  authDomain: "shawte-challenge.firebaseapp.com",
  projectId: "shawte-challenge",
  storageBucket: "shawte-challenge.appspot.com",
  messagingSenderId: "571240878250",
  appId: "1:571240878250:web:595e02ae336f026e9000d3",
  measurementId: "G-BMERHH3CRK",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
//const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
//db;
