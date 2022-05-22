import React from "react";
import ListsCocktails from "./ListsCocktails";
import Banner from "./Banner";
import { motion } from "framer-motion/dist/framer-motion";

const HomePage = () => (
  <motion.div
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1 }}
    exit={{ scaleY: 0 }}
    transition={{ duration: 0.2 }}
    className="home-page-main-container"
  >
    <Banner />
    <h1 className="home-page-sub-title">COCKTAILS AND RECIPIES</h1>

    <ListsCocktails />
  </motion.div>
);

export default HomePage;
