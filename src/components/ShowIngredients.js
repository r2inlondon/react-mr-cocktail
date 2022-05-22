import React from "react";

const ShowIngredients = (props) => {
  let { ingredients } = props.cocktail;

  if (ingredients) {
  }

  return (
    <div className="show-ingrediets-container">
      <p className="ingredients-title">INGREDIENTS</p>
      {ingredients ? (
        <GetIngredients
          ingredients={ingredients}
          removeIngredientButton={props.removeIngredientButton}
        />
      ) : (
        <p className="no-ingredients">No ingredients to show</p>
      )}
    </div>
  );
};

const GetIngredients = (props) => {
  const ingredientsNum = Object.keys(props.ingredients);

  const hasIngredients = ingredientsNum.map((ingredient, index) => {
    return (
      <div key={index + 100} className="single-ingredient-container">
        <p key={ingredient} className="one-ingredient" data-remove={ingredient}>
          {props.ingredients[ingredient]}
        </p>
        <a href="#0" key={index + 200} onClick={props.removeIngredientButton}>
          <i className="far fa-trash-alt"></i>
        </a>
      </div>
    );
  });

  return <div>{hasIngredients}</div>;
};

export default ShowIngredients;
