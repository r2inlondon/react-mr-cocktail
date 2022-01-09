import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ShowIngredients from "./ShowIngredients";
import {
  startAddIngredient,
  startRemoveIngredient,
} from "../firebase/firebaseFunctions";

const ShowCocktail = () => {
  const dispatch = useDispatch();
  const cocktails = useSelector((state) => state.cocktails);

  const [ingredient, setIngredient] = useState("");
  const [error, setError] = useState("");

  let { id } = useParams();
  const theCocktail = cocktails.find((cocktail) => {
    return cocktail.id === id;
  });

  const removeIngredientButton = (e) => {
    const ingredient = e.target.previousElementSibling.innerText;
    const index = e.target.previousElementSibling.getAttribute("data-remove");
    // dispatch(removeIngredient({ id, ingredient }));
    dispatch(startRemoveIngredient({ id, ingredient, index }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const index = theCocktail.ingredients.length;

    if (ingredient) {
      // Send ingredient to firebase
      dispatch(startAddIngredient({ id, ingredients: ingredient, index }));
      setIngredient("");
      setError("");
    } else {
      setError("Enter an ingredient");
    }
  };

  return (
    <div className="cocktail-container">
      <ShowIngredients
        cocktail={theCocktail}
        removeIngredientButton={removeIngredientButton}
      />
      {error && <p>{error}</p>}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Add an ingredient"
          autoFocus
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
};

export default ShowCocktail;
