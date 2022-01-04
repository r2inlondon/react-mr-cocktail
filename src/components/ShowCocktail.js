import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router";
import ShowIngredients from "./ShowIngredients";
import { addIngredients, removeIngredient } from "../Reducers/cocktailsReducer";
import { startAddIngredient } from "../firebase/firebaseFunctions";

const ShowCocktail = (props) => {
  const dispatch = useDispatch();

  const [ingredient, setIngredient] = useState("");
  const [error, setError] = useState("");

  let { id } = useParams();
  const theCocktail = props.cocktails.find((cocktail) => {
    return cocktail.id === id;
  });

  const removeIngredientButton = (e) => {
    const ingredient = e.target.previousElementSibling.innerText;
    // removed props.dispatch
    dispatch(removeIngredient({ id, ingredient }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const key = theCocktail.ingredients.length;

    if (ingredient) {
      dispatch(startAddIngredient({ id, ingredients: ingredient, key }));
      setIngredient("");
      setError("");
    } else {
      setError("Enter an ingredient");
    }
  };

  return (
    <div>
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

const mapStateToProps = (state) => {
  return {
    cocktails: state.cocktails,
  };
};

export default connect(mapStateToProps)(ShowCocktail);
