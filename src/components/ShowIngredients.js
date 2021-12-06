import React from "react";
import { addIngredients } from "../Reducers/cocktailsReducer";

const ShowIngredients = (props) => {
  const { name, ingredients } = props.cocktail;
  console.log(ingredients);
  return (
    <div>
      <h2>{name}</h2>
      {ingredients.map((ingredient, index) => {
        return (
          <div key={index + 200}>
            <p key={index}>{ingredient}</p>
            <button key={index + 100}>remove</button>;
          </div>
        );
      })}
    </div>
  );
};

export default ShowIngredients;
