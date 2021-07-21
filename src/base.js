import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDvNQpbjELpg7LWlr1Soa7aHL1qt9fubzg",
  authDomain: "very-hot-burgers-5bd8f.firebaseapp.com",
  databaseURL: "https://very-hot-burgers-5bd8f-default-rtdb.europe-west1.firebasedatabase.app",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
