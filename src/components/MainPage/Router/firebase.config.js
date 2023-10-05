// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjRt2Z5hegAF8WndiKnWRQoJghsAqI_vU",
    authDomain: "drogen-react-auth-projet.firebaseapp.com",
    projectId: "drogen-react-auth-projet",
    storageBucket: "drogen-react-auth-projet.appspot.com",
    messagingSenderId: "609605734306",
    appId: "1:609605734306:web:53bd514d647d6602cd6cfb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;