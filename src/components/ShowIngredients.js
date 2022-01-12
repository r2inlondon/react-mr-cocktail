import React from "react";
import black from "../styles/images/black.png";
import { ShowUploadForm, ShowPhoto } from "./ShowPhoto";

const ShowIngredients = (props) => {
  let { name, defaultImage, ingredients } = props.cocktail;

  // if (defaultImage === 0) {
  //   defaultImage = black;
  // }

  let validateIngredients = ingredients.length > 0 ? true : false;

  return (
    <div>
      {!defaultImage && <h1 className="cocktail-name">{name}</h1>}
      {!defaultImage && <ShowUploadForm />}
      {defaultImage && <ShowPhoto name={name} defaultImage={defaultImage} />}

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
