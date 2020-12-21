import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDIhc6SThrOmSxdcWx1O8uy0cot9EerGHw",
  authDomain: "clone-f917f.firebaseapp.com",
  projectId: "clone-f917f",
  storageBucket: "clone-f917f.appspot.com",
  messagingSenderId: "19457730679",
  appId: "1:19457730679:web:00c2f54e5c6b35e1defe72",
  measurementId: "G-RYQR7LP6PV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };