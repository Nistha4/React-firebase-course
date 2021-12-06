import firebase from 'firebase/app'
import 'firebase/firestore'

// firebase needs this config to connect to backend
const firebaseConfig = {
    apiKey: "AIzaSyAa6tfr3SLjv-zhzEAq3cfcSfowyLyCCcw",
    authDomain: "cooking-ninja-site-d8d13.firebaseapp.com",
    projectId: "cooking-ninja-site-d8d13",
    storageBucket: "cooking-ninja-site-d8d13.appspot.com",
    messagingSenderId: "548799892631",
    appId: "1:548799892631:web:42ea3a063c5e2eb0fa6dd2"
  };

//   init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }