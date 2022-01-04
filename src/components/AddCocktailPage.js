import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { startCreateCocktail } from "../firebase/firebaseFunctions";
import CocktailForm from "./CocktailForm";

const AddCocktailPage = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <div>
      <h1>Add a cocktail</h1>
      <CocktailForm
        onSubmit={(cocktail) => {
          dispatch(startCreateCocktail(cocktail));

          // navigate(`/edit/${myCocktail.id}`);
        }}
      />
    </div>
  );
};

export default AddCocktailPage;
