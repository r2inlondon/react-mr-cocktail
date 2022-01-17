import React from "react";

const ShowIngredients = (props) => {
  let { ingredients } = props.cocktail;

  let validateIngredients = ingredients.length > 0 ? true : false;

  return (
    <div className="show-ingrediets-container">
      <p className="ingredients-title">INGREDIENTS</p>
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
            <div key={index + 100} className="single-ingredient-container">
              <p key={index} className="one-ingredient" data-remove={index}>
                {ingredient}
              </p>
              <a
                href="#0"
                key={index + 200}
                onClick={props.removeIngredientButton}
              >
                <i className="far fa-trash-alt"></i>
              </a>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ShowIngredients;
