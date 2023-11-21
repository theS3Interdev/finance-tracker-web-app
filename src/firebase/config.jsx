import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

/** firebase configuration object containing keys and identifiers the app */
const firebaseConfig = {
  apiKey: "AIzaSyCMayhCmpGb7sHYkVkSntFcrX2ux9lCzPI",
  authDomain: "the-finance-tracker-project.firebaseapp.com",
  projectId: "the-finance-tracker-project",
  storageBucket: "the-finance-tracker-project.appspot.com",
  messagingSenderId: "545582212749",
  appId: "1:545582212749:web:f0ce90019dd1436906a4c4",
  measurementId: "G-ECC6483P3Q"
};

/** initialize firebase */
firebase.initializeApp(firebaseConfig);

/** initialize firebase services */
const projectAuth = firebase.auth();
const projectDB = firebase.firestore();

/** timestamp */
const timestamp = firebase.firestore.Timestamp;

/** export services */
export { projectAuth, projectDB, timestamp };
