import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAtBcaXOTpvRFC3X4MK1WlsQIyqxlfvlxE',
  authDomain: 'event-planner-9e529.firebaseapp.com',
  projectId: 'event-planner-9e529',
  storageBucket: 'event-planner-9e529.appspot.com',
  messagingSenderId: '46511342329',
  appId: '1:46511342329:web:f9c2ef5f7013b6ea325828',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
