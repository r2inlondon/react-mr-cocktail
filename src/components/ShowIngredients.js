import React from "react";

const ShowIngredients = (props) => {
  let { ingredients } = props.cocktail;

  let validateIngredients = ingredients.length > 0 ? true : false;

  return (
    <div>
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
              <a
                href="#0"
                key={index + 200}
                onClick={props.removeIngredientButton}
              >
                remove
              </a>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ShowIngredients;
