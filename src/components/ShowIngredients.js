import React from "react";

const ShowIngredients = (props) => {
  const { name, ingredients } = props.cocktail;

  let validateIngredients = ingredients.length > 0 ? true : false;

  return (
    <div>
      <h1>{name}</h1>
      <h3>INGREDIENTS</h3>
      {validateIngredients && (
        <GetIngredients
          ingredients={ingredients}
          removeIngredientButton={props.removeIngredientButton}
        />
      )}
    </div>
  );
};

const GetIngredients = (props) => {
  return (
    <div>
      {props.ingredients.map((ingredient, index) => {
        return (
          <div key={index + 100}>
            <p key={index}>{ingredient}</p>
            <button key={index + 200} onClick={props.removeIngredientButton}>
              remove
            </button>
            ;
          </div>
        );
      })}
    </div>
  );
};

export default ShowIngredients;
