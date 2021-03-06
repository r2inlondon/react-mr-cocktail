import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ShowIngredients from "./ShowIngredients";
import { ShowUploadForm, ShowPhoto } from "./ShowPhoto";
import {
  startAddIngredient,
  startRemoveIngredient,
} from "../firebase/firebaseFunctions";
import { motion } from "framer-motion/dist/framer-motion";

const ShowCocktail = () => {
  const dispatch = useDispatch();
  const cocktails = useSelector((state) => state.cocktails);

  const [ingredient, setIngredient] = useState("");
  const [error, setError] = useState("");

  // find the cocktail
  const { id } = useParams();
  const theCocktail = cocktails.find((cocktail) => {
    return cocktail.id === id;
  });

  let { name, defaultImage } = theCocktail;

  if (defaultImage === 0) {
    defaultImage = "";
  }

  const removeIngredientButton = (e) => {
    const ingredientId =
      e.target.parentElement.previousElementSibling.getAttribute("data-remove");
    dispatch(startRemoveIngredient({ id, ingredientId }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const regexCheck = /^(\w{1,})[\w .]*/;

    const result = regexCheck.test(ingredient);

    if (ingredient && result) {
      // Send ingredient to firebase
      dispatch(startAddIngredient({ id, ingredients: ingredient }));
      setIngredient("");
      setError("");
    } else {
      setError("Enter an ingredient, like: 40ml of tequila");
    }
  };

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.2 }}
      className="show-cocktail-background"
    >
      <div className="cocktail-container">
        {!defaultImage && <h1 className="cocktail-name">{name}</h1>}
        {!defaultImage && <ShowUploadForm />}
        {defaultImage && <ShowPhoto name={name} defaultImage={defaultImage} />}

        {error && <p className="upload-form-title">{error}</p>}
        <form onSubmit={onSubmit} className="add-ingredient-form">
          <input
            type="text"
            placeholder="Add an ingredient"
            autoFocus
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            className="add-ingredient-form-input"
          ></input>
          <button className="button-ingredients">Add</button>
        </form>

        <ShowIngredients
          cocktail={theCocktail}
          removeIngredientButton={removeIngredientButton}
        />
      </div>
    </motion.div>
  );
};

export default ShowCocktail;
