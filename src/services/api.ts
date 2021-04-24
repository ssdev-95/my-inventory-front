import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: "my-inventory-beta",
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
}

firebase.app.length>0 && firebase.initializeApp(config)

export const database = firebase
