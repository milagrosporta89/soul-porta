// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_MESSAGINGSENDERID,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};

/* const firebaseConfig = {
  apiKey: "AIzaSyDm4EL8IAeF9oPRUs8J7R7yPsfI4tMdpUw",
  authDomain: "soul-porta.firebaseapp.com",
  projectId: "soul-porta",
  storageBucket: "soul-porta.appspot.com",
  messagingSenderId: "244892478513",
  appId: "1:244892478513:web:7d67a8c0be6e2c27c37910",
  measurementId: "G-B6DHPRJ7YH"
}; */


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)