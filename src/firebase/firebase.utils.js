import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAnmOwzp0aGIp14peiFTwXkEZWT4kJhqUM",
  authDomain: "merch-ecommerce.firebaseapp.com",
  databaseURL: "https://merch-ecommerce.firebaseio.com",
  projectId: "merch-ecommerce",
  storageBucket: "merch-ecommerce.appspot.com",
  messagingSenderId: "353579352381",
  appId: "1:353579352381:web:93e36f49d4885b895a8554"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;