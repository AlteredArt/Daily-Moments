import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZgWCsMgylVAS9OPh1BBaq7HsKzq9pArQ",
  authDomain: "daily-moments-aa.firebaseapp.com",
  databaseURL: "https://daily-moments-aa.firebaseio.com",
  projectId: "daily-moments-aa",
  storageBucket: "daily-moments-aa.appspot.com",
  messagingSenderId: "850545345787",
  appId: "1:850545345787:web:4eb677b6fdfb8606539c5e"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const firestore = app.firestore();
