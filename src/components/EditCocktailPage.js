import React from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { editCocktail } from "../Reducers/cocktailsReducer";
import CocktailForm from "./CocktailForm";

const EditCocktailPage = (props) => {
  let { id } = useParams();
  let navigate = useNavigate();
  const cocktail = props.cocktails.find((cocktail) => {
    return cocktail.id === id;
  });

  console.log(cocktail);

  return (
    <div>
      <h1>Edit Cocktail</h1>
      <CocktailForm
        cocktail={cocktail}
        onSubmit={() => {
          props.dispatch(editCocktail(cocktail.id));
          navigate("/");
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  //   console.log("mapToProps", state);

  return {
    cocktails: state.cocktails.cocktails,
  };
};

export default connect(mapStateToProps)(EditCocktailPage);
