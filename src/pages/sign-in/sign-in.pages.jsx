import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
  auth,
  createUserDocumentFromAuth,
  signInwithGooglePopup,
  singInwithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.components';

const SignIn = () => {
  useEffect(() => {
    const logInUser = async () => {
      const response = await getRedirectResult(auth)
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }

    logInUser()

  }, [])

  const logGoogleUser = async () => {
    const { user } = await signInwithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };


  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Sign in With Google</button>
      <button onClick={singInwithGoogleRedirect}>Sign in With Rediredt</button>

      <SignUpForm />
    </div>
  );
};

export default SignIn;
