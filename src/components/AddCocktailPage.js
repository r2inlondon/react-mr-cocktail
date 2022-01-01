import React from "react";
import { connect } from "react-redux";
import { createCocktail } from "../Reducers/cocktailsReducer";
import CocktailForm from "./CocktailForm";

const AddCocktailPage = ({ dispatch }) => {
  return (
    <div>
      <h1>Add a cocktail</h1>
      <CocktailForm
        onSubmit={(cocktail) => {
          dispatch(createCocktail(cocktail));
        }}
      />
    </div>
  );
};

export default connect()(AddCocktailPage);
