import React, { useEffect } from 'react';
import * as firebaseui from 'firebaseui';
import firebase from 'firebase/compat/app';
import 'firebaseui/dist/firebaseui.css';

const AuthGoogle = (props) => {
  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(props.auth);
    ui.start('.firebase-auth-container', {
      signInOptions: [
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          defaultCountry: 'IN',
        },
      ],
      //   signInSuccessUrl: '/home-owner-entry',
    });
  }, [props.auth]);
  return (
    <>
      <div className={'firebase-auth-container'}></div>
    </>
  );
};
export default AuthGoogle;
