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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch(error) {
      console.log("Error creating user.", error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;