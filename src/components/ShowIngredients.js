import React from "react";
import { addIngredients } from "../Reducers/cocktailsReducer";

const ShowIngredients = (props) => {
  const { id, name, ingredients } = props.cocktail;

  let validateIngredients = ingredients.length > 0 ? true : false;

  return (
    <div>
      <h2>{name}</h2>
      {validateIngredients && <GetIngredients ingredients={ingredients} />}
    </div>
  );
};

const GetIngredients = (props) => {
  return (
    <div>
      {props.ingredients.map((ingredient, index) => {
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