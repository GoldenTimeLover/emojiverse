// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";



const firebaseConfig = {

  apiKey: "AIzaSyB2mYRGKZXy65VDwOn2UpszuGUiwQn7fiE",

  authDomain: "emoji-verse.firebaseapp.com",

  projectId: "emoji-verse",

  storageBucket: "emoji-verse.appspot.com",

  messagingSenderId: "917376654032",

  appId: "1:917376654032:web:1bbff99d4e36836b301cd5",

  measurementId: "G-3HEJKVM5VH"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);


export { db, analytics };