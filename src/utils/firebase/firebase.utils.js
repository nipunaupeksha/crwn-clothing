import {initializeApp} from 'firebase/app';
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'; //signInWithRedirect
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCOYC2bdlATzvU7sMxR7JBaVD6MePdw3_0",
    authDomain: "crwn-clothing-db-c8075.firebaseapp.com",
    projectId: "crwn-clothing-db-c8075",
    storageBucket: "crwn-clothing-db-c8075.appspot.com",
    messagingSenderId: "1054430003133",
    appId: "1:1054430003133:web:494e3007597ad8d1e29cd4"
  };
 
// const firebaseApp = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();
export const signInwithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
     const userDocRef = doc(db, 'users', userAuth.uid)
     const userSnapshot = await getDoc(userDocRef)

     if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef, {displayName, email, createdAt})
        }catch(error){
            console.log("Error creating the user", error.message)
        }
     }
     return userDocRef
}