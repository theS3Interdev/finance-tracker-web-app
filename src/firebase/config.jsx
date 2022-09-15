import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

/** firebase configuration object containing keys and identifiers the app */
const firebaseConfig = {
	apiKey: 'AIzaSyAPBfUPt7JhYsmEzlCQreCss3YLPFmwl-4',
	authDomain: 'finance-tracker-by-s3.firebaseapp.com',
	projectId: 'finance-tracker-by-s3',
	storageBucket: 'finance-tracker-by-s3.appspot.com',
	messagingSenderId: '910930852697',
	appId: '1:910930852697:web:2b9c43cf089b9912812a48',
	measurementId: 'G-TLPC11TMWE',
};

/** initialize firebase */
firebase.initializeApp(firebaseConfig);

/** initialize firebase services */
const projectAuth = firebase.auth();
const projectDB = firebase.firestore();

/** export services */
export { projectAuth, projectDB };
