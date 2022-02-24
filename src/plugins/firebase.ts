import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import {
  getAuth,
  signInAnonymously,
  signOut as so,
  onAuthStateChanged
} from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}
const firebaseApp = initializeApp(config)
const db = getDatabase(firebaseApp)
const sto = getStorage(firebaseApp)
const signIn = async () => await signInAnonymously(getAuth(firebaseApp))
const auth = getAuth(firebaseApp)
const signOut = async () => await so(auth)

export { db, sto, auth, signIn, signOut, getAuth, onAuthStateChanged }
