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

export const db = firebase.database();

// db.ref("cocktails").push({
//   name: "Margarita",
//   ingredients: ["Lemon", "Tequila"],
// });

// db.ref("cocktails").push({
//   name: "Martini",
//   ingredients: ["50 ml Vodka", "Olives"],
// });

// db.ref("cocktails/-Msauotg4pI2KDu0PLKH/ingredients/3").set("ice");

// const id = "-Msb6HqPrNffyK-m7A5a",
//   key = 1,
//   ingredients = "Lemon";

// db.ref(`cocktails/${id}/ingredients/${key}`).set(ingredients);
