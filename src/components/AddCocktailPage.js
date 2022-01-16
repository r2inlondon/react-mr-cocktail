import React from "react";
import { useDispatch } from "react-redux";
import { startCreateCocktail } from "../firebase/firebaseFunctions";
import CocktailForm from "./CocktailForm";

const AddCocktailPage = () => {
  const dispatch = useDispatch();

  return (
    <div className="add-cocktail-backgroud">
      <div className="add-cocktail-container">
        <h1 className="add-cocktail-title">Add a cocktail</h1>
        <CocktailForm
          onSubmit={(cocktail) => {
            dispatch(startCreateCocktail(cocktail));
          }}
        />
      </div>
    </div>
  );
};

export default AddCocktailPage;
