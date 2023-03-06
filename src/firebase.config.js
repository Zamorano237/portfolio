/** @format */

import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBLtlGwoklp8Aptj9t_EhYWSOA0apDyc_A',
  authDomain: 'ntouchiexoticapp.firebaseapp.com',
  databaseURL: 'https://ntouchiexoticapp-default-rtdb.firebaseio.com',
  projectId: 'ntouchiexoticapp',
  storageBucket: 'ntouchiexoticapp.appspot.com',
  messagingSenderId: '980632947093',
  appId: '1:980632947093:web:f4660fc6147735e2b44e9c',
  measurementId: 'G-XPDBPP4MLQ',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
