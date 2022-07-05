import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBK5KRApqNG-QL0g4B1_wBRLUpXBNSuJ7k",
  authDomain: "starlabservicing.firebaseapp.com",
  projectId: "starlabservicing",
  storageBucket: "starlabservicing.appspot.com",
  messagingSenderId: "123290129892",
  appId: "1:123290129892:web:acf3c1264e34e2d64b63f1",
  measurementId: "G-X5Q3RJML57"
};

const initFirebase = firebase.initializeApp(firebaseConfig);
const db = initFirebase.firestore();

export default db;
