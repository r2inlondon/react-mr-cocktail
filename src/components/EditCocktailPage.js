import React from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { editCocktail } from "../Reducers/cocktailsReducer";
import CocktailForm from "./CocktailForm";

const EditCocktailPage = (props) => {
  let { id } = useParams();
  let navigate = useNavigate();
  const updatedCocktail = props.cocktails.find((cocktail) => {
    return cocktail.id === id;
  });

  return (
    <div>
      <h1>Edit Cocktail</h1>
      <CocktailForm
        //sending props to form
        cocktail={updatedCocktail}
        onSubmit={(cocktail) => {
          props.dispatch(editCocktail(cocktail));
          navigate("/");
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  //   console.log("mapToProps", state);

  return {
    cocktails: state.cocktails,
  };
};

export default connect(mapStateToProps)(EditCocktailPage);
