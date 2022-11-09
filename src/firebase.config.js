// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWUlRFQzHORzMXOdeDI_B6uWeCpfu6v3k",
  authDomain: "digital-hut-9d12e.firebaseapp.com",
  projectId: "digital-hut-9d12e",
  storageBucket: "digital-hut-9d12e.appspot.com",
  messagingSenderId: "255270770140",
  appId: "1:255270770140:web:e7a092ea8d5b97ddf26b19",
};

console.log(process.env.REACT_APP_API_KEY);
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
