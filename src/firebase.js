import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5tHH4XOWfcGc7TWaCDp4Ei1OfA5flDnQ",
  authDomain: "clone-65f76.firebaseapp.com",
  projectId: "clone-65f76",
  storageBucket: "clone-65f76.appspot.com",
  messagingSenderId: "904326813389",
  appId: "1:904326813389:web:86955f988006be1d4d7b84",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.auth();
