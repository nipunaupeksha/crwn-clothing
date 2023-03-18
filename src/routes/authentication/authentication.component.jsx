// import React, { useEffect } from 'react'
// import { getRedirectResult } from 'firebase/auth' // for google redirect
// import {auth,signInWithGoogleRedirect,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'
import './authentication.styles.scss'

const Authentication = () => {
  // for google redirect
  // useEffect(() => {
  //   (async () => {
  //     const response = await getRedirectResult(auth)
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user)
  //       // check output
  //       console.log(userDocRef)
  //     }
  //   })()
  // }, [])

  return (
    <div className="authentication-container">
      {/* Google Popup */}
      {/* <button onClick={logGoogleUser}>SignInWithPopup</button> */}
      {/* Google Redirect */}
      {/* <button onClick={signInWithGoogleRedirect}>SignInWithRedirect</button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication
