import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CocktailForm from "./CocktailForm";

const AddCocktailPage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Add a cocktail</h1>
      <CocktailForm />
    </div>
  );
};

export default AddCocktailPage;
