import firebase from 'firebase'
import 'firebase/firestore'

const config = {
    apiKey: process.env.NEXT_API_KEY,
    authDomain: process.env.NEXT_AUTH_DOMAIN,
    projectId: process.env.NEXT_PROJECT_ID,
    storageBucket: process.env.NEXT_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_APP_ID
  }

firebase.apps.length<1 && firebase.initializeApp(config)

export const database = firebase.firestore()
