import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDVWW5INzvEXRrsZRR_JZ_ub6OLWIbDxqc",
    authDomain: "mymoney-44b38.firebaseapp.com",
    projectId: "mymoney-44b38",
    storageBucket: "mymoney-44b38.appspot.com",
    messagingSenderId: "677237231190",
    appId: "1:677237231190:web:b8b108bcfba196c1faf5f7"
  };

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp
const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, timestamp}