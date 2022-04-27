// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBTazXpgKDLFbww7nlGq4bY0pTvjcNcUU",
  authDomain: "genius-car-services-4c6bc.firebaseapp.com",
  projectId: "genius-car-services-4c6bc",
  storageBucket: "genius-car-services-4c6bc.appspot.com",
  messagingSenderId: "100124440656",
  appId: "1:100124440656:web:b41a0f43f513d651edf955"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
