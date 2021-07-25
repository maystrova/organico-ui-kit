import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyATXorkyvFteig23GpQzjtT9AtoLOP4k0U',
    authDomain: 'organico-ui-kit.firebaseapp.com',
    projectId: 'organico-ui-kit',
    storageBucket: 'organico-ui-kit.appspot.com',
    messagingSenderId: '406529552183',
    appId: '1:406529552183:web:1c7e677f13a680a70ab4b2',
    measurementId: 'G-VBYDQC3F1S',
}
firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export { firebase, storage }
