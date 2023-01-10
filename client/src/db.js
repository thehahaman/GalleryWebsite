import {initializeApp} from 'firebase/app'
import {
    getFirestore,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAMIdLVnX0jMq740EET-Lyp6TlsWOd1ajo",
    authDomain: "playground-6ea61.firebaseapp.com",
    databaseURL: "https://playground-6ea61.firebaseio.com",
    projectId: "playground-6ea61",
    storageBucket: "playground-6ea61.appspot.com",
    messagingSenderId: "900261666826",
    appId: "1:900261666826:web:9c0325f20e9267c4db7ff3"
};

initializeApp(firebaseConfig);

const db = getFirestore();

export default db