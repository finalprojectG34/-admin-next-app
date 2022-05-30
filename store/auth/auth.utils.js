import fbConfig from "../../firebase/fb-config";

import {
  loginError, logoutError, passwordResetError, passwordResetRequest, passwordResetSuccess, phoneAuthCodeSent,
  phoneSuccessful, phoneVerifying, receiveLogout, requestLogin, requestLogout,
} from "./auth.actions";

export const loginUser = ({ phoneNumber }) => dispatch => {
  dispatch(requestLogin());
  const applicationVerifier = new fbConfig.auth.RecaptchaVerifier('RecaptchaVerifier', {
    'size': 'invisible',
  });

  fbConfig.auth().setPersistence(fbConfig.auth.Auth.Persistence.LOCAL)
    .then(() => {
      return fbConfig.auth().signInWithPhoneNumber(phoneNumber, applicationVerifier);
    })
    .then((confirmationResult) => {
      dispatch(phoneAuthCodeSent(confirmationResult));
    })
    .catch((error) => {
      dispatch(loginError(error));
    });
};

export const verifyLogin = ({
                              confirmationResult,
                              verificationCode,
                            }) => dispatch => {
  dispatch(phoneVerifying());
  confirmationResult.confirm(verificationCode)
    .then(async (userCredential) => {
      dispatch(phoneSuccessful({
        firebaseID: userCredential.user.uid,
        phoneNumber: userCredential.user.phoneNumber,
      }));
    })
    .catch((error) => dispatch(loginError(error)));
};

export const logoutUser = () => dispatch => {
  dispatch(requestLogout());
  fbConfig.auth()
    .signOut()
    .then(() => {
      dispatch(receiveLogout());
      window.location.href = "/";
    })
    .catch(error => dispatch(logoutError(error)));
};

// export const verifyAuth = () => dispatch => {
//   dispatch(verifyRequest());
//   fbConfig.auth()
//     .onAuthStateChanged(async (user) => {
//       if (user !== null) {
//         const data = localStorage.getItem("store")
//         let result = JSON.parse(data)
//         if (result) {
//           if (result.error) {
//             dispatch(verifyError());
//           } else {
//             dispatch(receiveLogin({firebaseUser: user, gqlUser: result}));
//           }
//         } else {
//           dispatch(phoneSuccessful({firebaseID: user.uid, phoneNumber: user.phoneNumber}))
//           dispatch(receiveLogin({firebaseUser: user, gqlUser: null}));
//         }
//       } else {
//         dispatch(verifyError());
//       }
//       dispatch(verifySuccess());
//     });
// };

export const resetPassword = ({ email }) => dispatch => {
  dispatch(passwordResetRequest());
  fbConfig.auth().sendPasswordResetEmail(email)
    .then(() => dispatch(passwordResetSuccess()))
    .catch(e => dispatch(passwordResetError(e.message)));
};

// const getUser = async ({firebaseID}) => {
//   let result = null;
//   await fetch('https://zoritt-back-end-api.herokuapp.com/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       query: GET_USER,
//       variables: {
//         firebaseId: firebaseID
//       },
//     }),
//   })
//     .then(res => res.json())
//     .then((res) => {
//       if (res.data['userOne'] !== null) {
//         result = res.data['userOne'];
//       } else {
//         result = null
//       }
//     })
//     .catch((error) => {
//       result = {error}
//     });
//   return result
// }