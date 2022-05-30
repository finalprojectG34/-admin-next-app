import AuthTypes from "./auth.types";

const authReducers = (state = {}, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN_REQUEST:
      console.log("LOGIN_REQUEST");
      return {
        ...state,
        isLoggingIn: true,
        isLoggedIn: false,
        loginError: false,
      };
    case AuthTypes.LOGIN_SUCCESS:
      console.log("LOGIN_SUCCESS");
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        loginError: false,
        gqlUser: action.gqlUser,
        firebaseUser: action.firebaseUser,
      };
    case AuthTypes.LOGIN_FAILURE:
      console.log("LOGIN_FAILURE");
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
        loginError: true,
        error: action.error,
      };
    case AuthTypes.PHONE_AUTH_CODE_SENT:
      console.log("PHONE_AUTH_CODE_SENT");
      return {
        ...state,
        phone_auth_code_sent: true,
        phone_verifying: false,
        confirmationResult: action.confirmationResult,
      };
    case AuthTypes.PHONE_VERIFYING:
      console.log("PHONE_VERIFYING");
      return {
        ...state,
        gotoSignUpPage: false,
        phone_auth_code_sent: true,
        phone_verifying: true,
      };
    case AuthTypes.PHONE_VERIFIED:
      console.log("PHONE_VERIFIED");
      return {
        ...state,
        gotoSignUpPage: true,
        phoneNumber: action.phoneNumber,
        firebaseID: action.firebaseID,
        phone_auth_code_sent: false,
        phone_verifying: false,
      };
    case AuthTypes.LOGOUT_REQUEST:
      console.log("LOGOUT_REQUEST");
      return {
        ...state,
        isLoggingOut: true,
        isLoggedOut: false,
        logoutError: false,
      };
    case AuthTypes.LOGOUT_SUCCESS:
      console.log("LOGOUT_SUCCESS");
      return {
        ...state,
        isLoggingOut: false,
        isLoggedOut: true,
        isLoggedIn: false,
        logoutError: false,
        gqlUser: {},
        firebaseUser: {},
      };
    case AuthTypes.LOGOUT_FAILURE:
      console.log("LOGOUT_FAILURE");
      return {
        ...state,
        isLoggingOut: false,
        logoutError: true,
        error: action.error,
      };
    case AuthTypes.SIGN_UP_REQUEST:
      console.log("SIGN_UP_REQUEST");
      return {
        ...state,
        isLoggingIn: true,
        loginError: false,
      };
    case AuthTypes.SIGN_UP_SUCCESS:
      console.log("SIGN_UP_SUCCESS");
      return {
        ...state,
        isLoggedIn: true,
        isLoggingIn: false,
        signUpSuccess: true,
        gqlUser: action.gqlUser,
        firebaseUser: action.firebaseUser,
      };
    case AuthTypes.SIGN_UP_FAILURE:
      console.log("SIGN_UP_FAILURE");
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
        signUpError: true,
        error: action.error,
      };
    case AuthTypes.VERIFY_REQUEST:
      console.log("VERIFY_REQUEST");
      return {
        ...state,
        isVerifying: true,
        verifyingError: false,
      };
    case AuthTypes.VERIFY_SUCCESS:
      console.log("VERIFY_SUCCESS");
      return {
        ...state,
        isVerifying: false,
        isVerified: true,
      };
    case AuthTypes.VERIFY_ERROR:
      console.log("VERIFY_ERROR");
      return {
        ...state,
        isLoggedIn: false,
        verifyError: true,
      };
    case AuthTypes.RESET_PASSWORD_REQUEST:
      console.log("RESET_PASSWORD_REQUEST");
      return {
        ...state,
        isResetting: true,
        resettingDone: false,
        resettingError: false,
      };
    case AuthTypes.RESET_PASSWORD_SUCCESS:
      console.log("RESET_PASSWORD_SUCCESS");
      return {
        ...state,
        isResetting: false,
        resettingDone: true,
        resettingError: false,
      };
    case AuthTypes.RESET_PASSWORD_FAILURE:
      console.log("RESET_PASSWORD_FAILURE");
      return {
        ...state,
        isResetting: false,
        resettingDone: false,
        resettingError: true,
        error: action.error,
      };
    default:
      return state;
  }
};

export default authReducers;