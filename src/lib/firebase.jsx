// import {Firebase} from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// import firebase from "firebase/compat/app"; 
// import "firebase/compat/firestore";
// import "firebase/compat/auth";


// ******New firebase config
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";






import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyAAmAUhlnAAv5on5WO6n1CLWvLCN3jom5k",
  authDomain: "instgram-f39c5.firebaseapp.com",
  projectId: "instgram-f39c5",
  storageBucket: "instgram-f39c5.appspot.com",
  messagingSenderId: "403345314380",
  appId: "1:403345314380:web:bb84440be958a800bfdae9",
};

 firebase.initializeApp(config);
 
 const firestore = firebase.firestore();

 const auth = firebase.auth();

const  fieldValue  = firebase.firestore.FieldValue;


export { firebase, auth, firestore, fieldValue };