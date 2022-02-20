#!/usr/bin/env node

import { prefixedData } from "../src/firebase/prefixed";
import { db } from "../src/firebase/firebase";

// set prefix data every 2 hours
setInterval(() => {
  console.log("prefixed data added !");
  db.ref().set(prefixedData);
}, 5 * 60 * 1000);
