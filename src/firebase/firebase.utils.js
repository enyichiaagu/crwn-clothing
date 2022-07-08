import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup,GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD9g_7nd-6JlK8pLiqCwbmzquDgkgy_ze8",
  authDomain: "crwn-db-d2b25.firebaseapp.com",
  projectId: "crwn-db-d2b25",
  storageBucket: "crwn-db-d2b25.appspot.com",
  messagingSenderId: "778329964527",
  appId: "1:778329964527:web:2ec6ca5a67249785ec801a",
  measurementId: "G-L9STTLW9W8"
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

// export default firebase;