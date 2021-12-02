import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createCocktail } from "../Reducers/cocktailsReducer";

const AddCocktailPage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Add a cocktail</h1>
      <button onClick={() => dispatch(createCocktail("margarita"))}>
        test
      </button>
    </div>
  );
};

export default AddCocktailPage;
