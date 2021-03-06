import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSihI0LTT2FH8ZvqhZwqyjBSxWMEeQHks",
  authDomain: process.env.FIREBASE_DOMAIN,
  databaseURL: "https://freecoursoproject.firebaseio.com",
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: "freecoursoproject.appspot.com",
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

export default firebase.initializeApp(firebaseConfig);
