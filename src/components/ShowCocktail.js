import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import ShowIngredients from "./ShowIngredients";
import { addIngredients } from "../Reducers/cocktailsReducer";

const ShowCocktail = (props) => {
  const [ingredient, setIngredient] = useState("");

  let { id } = useParams();
  const theCocktail = props.cocktails.find((cocktail) => {
    return cocktail.id === id;
  });

  const onSubmit = (e) => {
    e.preventDefault();

    props.dispatch(addIngredients({ id, ingredients: ingredient }));
  };

  return (
    <div>
      <ShowIngredients cocktail={theCocktail} />
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Add Ingredients"
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
  //   console.log("mapToProps", state);

  return {
    cocktails: state.cocktails,
  };
};

export default connect(mapStateToProps)(ShowCocktail);
