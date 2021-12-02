import React from "react";
import CocktailForm from "./CocktailForm";

const AddCocktailPage = (props) => {
  
  return (
    <div>
      <h1>Add a cocktail</h1>
      <CocktailForm onSubmit={(props) => {
        console.log(props)
      }}/>
    </div>
  );
};

export default AddCocktailPage;
