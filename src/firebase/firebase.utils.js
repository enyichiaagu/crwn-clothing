import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { getAuth, signInWithPopup,GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD9g_7nd-6JlK8pLiqCwbmzquDgkgy_ze8",
  authDomain: "crwn-db-d2b25.firebaseapp.com",
  projectId: "crwn-db-d2b25",
  storageBucket: "crwn-db-d2b25.appspot.com",
  messagingSenderId: "778329964527",
  appId: "1:778329964527:web:2ec6ca5a67249785ec801a",
  measurementId: "G-L9STTLW9W8"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, 'users', userAuth.uid);

  const snapShot = await getDoc(userRef);

  if(!snapShot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch(error) {
      console.log('error creating user', error.message);
    }
  };

  return userRef;
}

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const updateSnapshot = async (ref, updateAction) => {
  onSnapshot(ref, (snapShot) => {
    updateAction(snapShot);
  })
}

export const newUserWithEmailAndPassword = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch(error) {
    console.log(error);
  }
}

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

// export default firebase;