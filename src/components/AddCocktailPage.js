import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { startCreateCocktail } from "../Reducers/cocktailsReducer";
import CocktailForm from "./CocktailForm";

const AddCocktailPage = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const cocktailsState = useSelector((state) => state.cocktails);

  return (
    <div>
      <h1>Add a cocktail</h1>
      <CocktailForm
        onSubmit={(cocktail) => {
          dispatch(startCreateCocktail(cocktail));
          console.log(cocktailsState);
          // navigate(`/edit/${cocktail.id}`);
        }}
      />
    </div>
  );
};

export default AddCocktailPage;
