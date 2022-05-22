import React from "react";
import { useDispatch } from "react-redux";
import { startCreateCocktail } from "../firebase/firebaseFunctions";
import CocktailForm from "./CocktailForm";
import { motion } from "framer-motion/dist/framer-motion";

const AddCocktailPage = () => {
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.2 }}
      className="add-cocktail-backgroud"
    >
      <div className="add-cocktail-container">
        <h1 className="add-cocktail-title">Add a cocktail</h1>
        <CocktailForm
          onSubmit={(cocktail) => {
            dispatch(startCreateCocktail(cocktail));
          }}
        />
      </div>
    </motion.div>
  );
};

export default AddCocktailPage;
