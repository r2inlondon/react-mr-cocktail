import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ShowIngredients from "./ShowIngredients";
import { ShowUploadForm, ShowPhoto } from "./ShowPhoto";
import {
  startAddIngredient,
  startRemoveIngredient,
} from "../firebase/firebaseFunctions";

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
    // console.log(e.target.parentElement.previousElementSibling.innerText);
    const ingredient = e.target.parentElement.previousElementSibling.innerText;
    const index =
      e.target.parentElement.previousElementSibling.getAttribute("data-remove");
    dispatch(startRemoveIngredient({ id, ingredient, index }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const index = theCocktail.ingredients.length;

    const regexCheck = /^(\w{1,})[\w .]*/;

    const result = regexCheck.test(ingredient);

    console.log(result);

    if (ingredient && result) {
      // Send ingredient to firebase
      dispatch(startAddIngredient({ id, ingredients: ingredient, index }));
      setIngredient("");
      setError("");
    } else {
      setError("Enter an ingredient, like: 40ml of tequila");
    }
  };

  return (
    <div className="show-cocktail-background">
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
    </div>
  );
};

export default ShowCocktail;
