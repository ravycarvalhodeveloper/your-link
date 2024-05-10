import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAKzWoflHES5pGb5R77n3fDKXHhjwit-dg",
  authDomain: "reactlinks-e7f24.firebaseapp.com",
  projectId: "reactlinks-e7f24",
  storageBucket: "reactlinks-e7f24.appspot.com",
  messagingSenderId: "177542639564",
  appId: "1:177542639564:web:3458aafff244278982f769"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export {  auth, db};