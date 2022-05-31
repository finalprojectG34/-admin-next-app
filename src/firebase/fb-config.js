import {initializeApp} from 'firebase/app';
import {getAuth, RecaptchaVerifier, signInWithPhoneNumber, signOut} from "firebase/auth";
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDpLbATfUM5yBC2xKBR1HPbf916DQK9Y_I",
    authDomain: "webproj1-a.firebaseapp.com",
    databaseURL: "https://webproj1-a.firebaseio.com",
    projectId: "webproj1-a",
    storageBucket: "webproj1-a.appspot.com",
    messagingSenderId: "185917106202",
    appId: "1:185917106202:web:da597e3cdda98da403c9a3",
    measurementId: "G-39KFHCNQRV"
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth();
auth.languageCode = 'en';
const storageRef = ref(storage, 'some-child');
export default {app, storageRef, uploadBytes, getDownloadURL, auth, signInWithPhoneNumber, RecaptchaVerifier, signOut};