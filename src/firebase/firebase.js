import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import database from "firebase/compat/database";
import "firebase/compat/storage";

const {
  REACT_APP_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_DATABASE_URL,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSAGING_SENDER_ID,
  REACT_APP_APP_ID,
} = process.env;

const config = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DATABASE_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(config);

const db = firebase.database();
const projectStorage = firebase.storage();

export { db, projectStorage };

// **  Getting the image URL in storage
// const storageRef = projectStorage.ref();

// const starsRef = storageRef.child("images/black.png");

// Get the download URL
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
