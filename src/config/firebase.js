import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDNjYZNlD-iYuq7VSWtOiP_GAz8HdSQ_A4",
  authDomain: "exemplo-autenticacao-eb9bd.firebaseapp.com",
  projectId: "exemplo-autenticacao-eb9bd",
  storageBucket: "exemplo-autenticacao-eb9bd.appspot.com",
  messagingSenderId: "73267598719",
  appId: "1:73267598719:web:e6a6977bd547df4ff5b64a"
};

export const firebaseApp = initializeApp(firebaseConfig);