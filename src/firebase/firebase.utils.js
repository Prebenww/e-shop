import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyAAiv3nt_fT87lDS1GZW3kMtvqke_HNHBE",
    authDomain: "e-shop-e904d.firebaseapp.com",
    projectId: "e-shop-e904d",
    storageBucket: "e-shop-e904d.appspot.com",
    messagingSenderId: "305498398537",
    appId: "1:305498398537:web:740651cab15710371dc498"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;