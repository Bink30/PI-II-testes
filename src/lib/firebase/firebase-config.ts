// arquivo de configuração do firebase
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2pG-xdgtHNtUxKETz0t4lnlndmnsgWYw",
  authDomain: "teste-2d485.firebaseapp.com",
  databaseURL: "https://teste-2d485-default-rtdb.firebaseio.com",
  projectId: "teste-2d485",
  storageBucket: "teste-2d485.firebasestorage.app",
  messagingSenderId: "1011801519406",
  appId: "1:1011801519406:web:14905cab2209f72c0136bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);