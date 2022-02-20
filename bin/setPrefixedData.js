import { prefixedData } from "../src/firebase/prefixed";
import { db } from "../src/firebase/firebase";

// set prefix data every 2 hours
const setTheData = () => {
  console.log("prefixed data added !");
  db.ref().set(prefixedData);
};

setTheData();
