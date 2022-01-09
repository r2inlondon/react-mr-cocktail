import React from "react";
import { useDispatch } from "react-redux";
import { startCreateCocktail } from "../firebase/firebaseFunctions";
import CocktailForm from "./CocktailForm";
import UploadForm from "./UploadForm";

const AddCocktailPage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Add a cocktail</h1>
      <CocktailForm
        onSubmit={(cocktail) => {
          dispatch(startCreateCocktail(cocktail));
        }}
      />
      <UploadForm />
    </div>
  );
};

export default AddCocktailPage;
