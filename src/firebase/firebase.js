import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import database from "firebase/compat/database";

const config = {
  apiKey: "AIzaSyAthdb34t2QJUvpO8EJhA1d6ebAYdYRHl0",
  authDomain: "mr-cocktail-a9ab4.firebaseapp.com",
  databaseURL:
    "https://mr-cocktail-a9ab4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mr-cocktail-a9ab4",
  storageBucket: "mr-cocktail-a9ab4.appspot.com",
  messagingSenderId: "660599366166",
  appId: "1:660599366166:web:fd0990893da91c26600b37",
};

// Initialize Firebase
firebase.initializeApp(config);

const db = firebase.database();

db.ref().set({
  name: "Juan Camaney",
});
