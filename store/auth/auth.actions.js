import AuthTypes from "./auth.types";

export const requestLogin = () => {
  return {
    type: AuthTypes.LOGIN_REQUEST,
  };
};

export const receiveLogin = ({
                               gqlUser,
                               firebaseUser,
                             }) => {
  return {
    type: AuthTypes.LOGIN_SUCCESS,
    gqlUser,
    firebaseUser,
  };
};

export const loginError = error => {
  return {
    type: AuthTypes.LOGIN_FAILURE,
    error,
  };
};

export const phoneAuthCodeSent = confirmationResult => {
  return {
    type: AuthTypes.PHONE_AUTH_CODE_SENT,
    confirmationResult,
  };
};

export const phoneVerifying = () => {
  return {
    type: AuthTypes.PHONE_VERIFYING,
  };
};

export const phoneSuccessful = ({
                                  phoneNumber,
                                  firebaseID,
                                }) => {
  return {
    type: AuthTypes.PHONE_VERIFIED,
    phoneNumber,
    firebaseID,
  };
};

export const requestLogout = () => {
  return {
    type: AuthTypes.LOGOUT_REQUEST,
  };
};

export const receiveLogout = () => {
  return {
    type: AuthTypes.LOGOUT_SUCCESS,
  };
};

export const logoutError = error => {
  return {
    type: AuthTypes.LOGOUT_FAILURE,
    error,
  };
};

export const requestSignUp = () => {
  return {
    type: AuthTypes.SIGN_UP_REQUEST,
  };
};

export const receiveSignUp = ({
                                gqlUser,
                                firebaseUser,
                              }) => {
  return {
    type: AuthTypes.SIGN_UP_SUCCESS,
    gqlUser,
    firebaseUser,
  };
};

export const SignUpError = error => {
  return {
    type: AuthTypes.SIGN_UP_FAILURE,
    error,
  };
};

export const verifyRequest = () => {
  return {
    type: AuthTypes.VERIFY_REQUEST,
  };
};

export const verifySuccess = () => {
  return {
    type: AuthTypes.VERIFY_SUCCESS,
  };
};

export const verifyError = () => {
  return {
    type: AuthTypes.VERIFY_ERROR,
  };
};

export const passwordResetRequest = () => {
  return {
    type: AuthTypes.RESET_PASSWORD_REQUEST,
  };
};

export const passwordResetSuccess = () => {
  return {
    type: AuthTypes.RESET_PASSWORD_SUCCESS,
  };
};

export const passwordResetError = (resettingErrorMessage) => {
  return {
    type: AuthTypes.RESET_PASSWORD_FAILURE,
    resettingErrorMessage,
  };
};

