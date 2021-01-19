import * as firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyCrr57Wqs0ytsdw2MhiI6wx4wp8vViPH6w",
  authDomain: "personal-site-7b6b8.firebaseapp.com",
  databaseURL: "https://personal-site-7b6b8.firebaseio.com",
  projectId: "personal-site-7b6b8",
  storageBucket: "personal-site-7b6b8.appspot.com",
  messagingSenderId: "885999530094",
  appId: "1:885999530094:web:29b0b89092c3cc7611767f",
  measurementId: "G-BFQV49CB2J"
}
firebase.initializeApp(firebaseConfig)
firebase.analytics();

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')


// export utils/refs
export {
  db,
  auth,
  usersCollection,
}