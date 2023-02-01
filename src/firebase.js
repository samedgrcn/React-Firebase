import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'



  const firebaseConfig = {
    apiKey: "AIzaSyC-kQ9h0quR-JURiYNriBs870WwGRekha8",
    authDomain: "login-firebase-95f46.firebaseapp.com",
    projectId: "login-firebase-95f46",
    storageBucket: "login-firebase-95f46.appspot.com",
    messagingSenderId: "312867835307",
    appId: "1:312867835307:web:86e3ca3c920dffa8ea16ee",
    measurementId: "G-P9M95KKVTT"
  }
  
  // Initialize Firebase and Firebase Authentication
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

export {auth};