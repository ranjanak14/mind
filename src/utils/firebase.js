import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/messaging";
import "firebase/compat/storage";
import "firebase/compat/analytics";

const app = firebase.initializeApp({
  // apiKey: "AIzaSyD9ETyyYI9GTmpCD9lZNxA44l0Gp-_HZsM",
  // authDomain: "mind-292e4.firebaseapp.com",
  // projectId: "mind-292e4",
  // storageBucket: "mind-292e4.appspot.com",
  // messagingSenderId: "440053048277",
  // appId: "1:440053048277:web:ac0f339823517b8c9c935c",
  // measurementId: "G-4RTEERS493",
  // databaseUrl: "https://mind-292e4-default-rtdb.firebaseio.com/"
  apiKey: "AIzaSyCCVYGZCvykq5-pFsIVsnRJBag4sPvB6Pk",
  authDomain: "wellnesscompass-7abf4.firebaseapp.com",
  projectId: "wellnesscompass-7abf4",
  storageBucket: "wellnesscompass-7abf4.appspot.com",
  messagingSenderId: "504576803653",
  appId: "1:504576803653:web:cbcdba06a9bff79ed6b42c",
  measurementId: "G-D2HTZM3GM9",
  databaseURL: "https://wellnesscompass-7abf4-default-rtdb.firebaseio.com",
});

// Initialize Firebase
const analytics = firebase.analytics();
const messaging = firebase.messaging();
app.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
export default app;
export { messaging, analytics };