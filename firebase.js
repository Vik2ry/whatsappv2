import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC9ChrJkSl9Gtmzca7vFSXeBBKDKfeZQjs",
    authDomain: "whatsapp2-c1c14.firebaseapp.com",
    projectId: "whatsapp2-c1c14",
    storageBucket: "whatsapp2-c1c14.appspot.com",
    messagingSenderId: "178933000900",
    appId: "1:178933000900:web:a53618d99a05a10aa5f791"
  };
  
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
