import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBs0bfGIG66mpHtcoVtDzDV11DsFxgCDOk",
  authDomain: "medinventory-web.firebaseapp.com",
  projectId: "medinventory-web",
  storageBucket: "medinventory-web.appspot.com",
  messagingSenderId: "996693794964",
  appId: "1:996693794964:web:38f13fcf1b8b16f0fa1481",
  measurementId: "G-JJ0TPYSQ50"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

