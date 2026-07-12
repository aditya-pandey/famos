import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCiHp6Nv0YXcz2ezigbL_MHmWxs5AUyklI',
  authDomain: 'famos-2caea.firebaseapp.com',
  projectId: 'famos-2caea',
  storageBucket: 'famos-2caea.firebasestorage.app',
  messagingSenderId: '240011003133',
  appId: '1:240011003133:web:fd6be601b6811d70deaa94',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
