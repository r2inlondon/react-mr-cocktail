import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import database from "firebase/compat/database";
import "firebase/compat/storage";
// import { prefixedData } from "./prefixed";

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

// const setTheData = () => {
//   console.log("prefixed data added !");
//   db.ref().set(prefixedData);
// };

// setTheData();
