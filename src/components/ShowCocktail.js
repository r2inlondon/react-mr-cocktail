import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import ShowIngredients from "./ShowIngredients";
import { addIngredients, removeIngredient } from "../Reducers/cocktailsReducer";

const ShowCocktail = (props) => {
  const [ingredient, setIngredient] = useState("");
  const [error, setError] = useState("");

  let { id } = useParams();
  const theCocktail = props.cocktails.find((cocktail) => {
    console.log(cocktail);
    return cocktail.id === id;
  });

  console.log("props", props);
  console.log("params", id);
  console.log("ShowCocktail", theCocktail);

  const removeIngredientButton = (e) => {
    const ingredient = e.target.previousElementSibling.innerText;

    props.dispatch(removeIngredient({ id, ingredient }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (ingredient) {
      props.dispatch(addIngredients({ id, ingredients: ingredient }));
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
