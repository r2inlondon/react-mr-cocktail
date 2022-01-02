import React from "react";
import { connect } from "react-redux";
import { startCreateCocktail } from "../Reducers/cocktailsReducer";
import CocktailForm from "./CocktailForm";

const AddCocktailPage = ({ dispatch }) => {
  return (
    <div>
      <h1>Add a cocktail</h1>
      <CocktailForm
        onSubmit={(cocktail) => {
          dispatch(startCreateCocktail(cocktail));
        }}
      />
    </div>
  );
};

export default connect()(AddCocktailPage);
