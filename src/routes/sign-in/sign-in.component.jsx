import React from 'react'
import {signInwithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInwithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)  
        console.log(userDocRef)
    }
  return (
    <button onClick={logGoogleUser}>SignIn</button>
  )
}

export default SignIn