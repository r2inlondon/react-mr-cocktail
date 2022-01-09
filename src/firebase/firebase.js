import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import database from "firebase/compat/database";
import "firebase/compat/storage";

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
const projectStorage = firebase.storage();

export { db, projectStorage };

// **  Getting the image URL in storage
// const storageRef = projectStorage.ref();

// const starsRef = storageRef.child("images/black.png");

// // Get the download URL
// starsRef
//   .getDownloadURL()
//   .then((url) => {
//     // Insert url into an <img> tag to "download"
//     console.log(url);
//   })
//   .catch((error) => {
//     // A full list of error codes is available at
//     // https://firebase.google.com/docs/storage/web/handle-errors
//     console.log(error);
//   });

// *** Testing basic firebase functionality
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
