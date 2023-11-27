import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBNpvZSotb2VDmh10FoQXZNcaAzre3nMtw',
    authDomain: 'article-craft-dashboard.firebaseapp.com',
    projectId: 'article-craft-dashboard',
    storageBucket: 'article-craft-dashboard.appspot.com',
    messagingSenderId: '436861470313',
    appId: '1:436861470313:web:7b4d1522f054ad2a5184f8'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
