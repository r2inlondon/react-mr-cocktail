import React from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { createCocktail } from "../Reducers/cocktailsReducer";
import CocktailForm from "./CocktailForm";

const AddCocktailPage = ({ dispatch }) => {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Add a cocktail</h1>
      <CocktailForm
        onSubmit={(cocktail) => {
          dispatch(createCocktail(cocktail));
          navigate(`/edit/${cocktail.id}`);
        }}
      />
    </div>
  );
};

export default connect()(AddCocktailPage);
