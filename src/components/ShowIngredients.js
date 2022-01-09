import React from "react";
import black from "../styles/images/black.png";

const ShowIngredients = (props) => {
  let { name, defaultImage, ingredients } = props.cocktail;

  if (defaultImage === "default") {
    defaultImage = black;
  }

  let validateIngredients = ingredients.length > 0 ? true : false;

  return (
    <div>
      <div className="image-container">
        <img src={defaultImage} alt={name} className="cocktail-image" />
        <h1 className="cocktail-name">{name}</h1>
      </div>

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
        if (ingredient !== 0) {
          return (
            <div key={index + 100}>
              <p key={index} data-remove={index}>
                {ingredient}
              </p>
              <button key={index + 200} onClick={props.removeIngredientButton}>
                remove
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ShowIngredients;
