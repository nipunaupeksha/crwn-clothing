import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCOYC2bdlATzvU7sMxR7JBaVD6MePdw3_0',
  authDomain: 'crwn-clothing-db-c8075.firebaseapp.com',
  projectId: 'crwn-clothing-db-c8075',
  storageBucket: 'crwn-clothing-db-c8075.appspot.com',
  messagingSenderId: '1054430003133',
  appId: '1:1054430003133:web:494e3007597ad8d1e29cd4'
}

// const firebaseApp = initializeApp(firebaseConfig);
initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInwithGooglePopup = () => signInWithPopup(auth, googleProvider) // google popup
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider) // google redirect

export const db = getFirestore()

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch (error) {
      console.log('Error creating the user', error.message)
    }
  }
  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser =async () => {
    await signOut(auth);
}

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)