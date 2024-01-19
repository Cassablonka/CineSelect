// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'your api key',
  authDomain: 'cineselect-18c5d.firebaseapp.com',
  projectId: 'cineselect-18c5d',
  storageBucket: 'cineselect-18c5d.appspot.com',
  messagingSenderId: '92202205094',
  appId: '1:92202205094:web:67d768ffbe9213cfea9967',
  measurementId: 'G-G0BR1BGPJ6',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth()
