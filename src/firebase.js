import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFiretore,
  doc,
  getDoc,
  setDoc,
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAihu9gUI0FtMT5Yz82FrVJE5oyHHWDNAQ",
  authDomain: "task7-1p-dba7e.firebaseapp.com",
  projectId: "task7-1p-dba7e",
  storageBucket: "task7-1p-dba7e.appspot.com",
  messagingSenderId: "992603285740",
  appId: "1:992603285740:web:fde4f59dd90a5fcb559dc9",
  measurementId: "G-LVLVKSJ23Q",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export function SignInWithGooglePopup() {
  return signInWithPopup(auth, provider);
}
export const db = getFirestore();

export const createUserDocFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth.email) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error in creating", error.message);
    }
    return userDocRef;
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
