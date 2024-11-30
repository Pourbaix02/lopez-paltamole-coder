import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTE4XxSKMqx1VHB9Hfcir-0SOjqfDm7Wk",
  authDomain: "paltamole-coder.firebaseapp.com",
  projectId: "paltamole-coder",
  storageBucket: "paltamole-coder.firebasestorage.app",
  messagingSenderId: "901526846446",
  appId: "1:901526846446:web:94cf2ed5e53f9938932cff"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)