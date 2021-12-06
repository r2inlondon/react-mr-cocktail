import React from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router";

const ShowCocktail = (props) => {
  let { id } = useParams();
  const cocktail = props.cocktails.find((cocktail) => {
    return cocktail.id === id;
  });
  console.log(cocktail);
  return (
    <div>
      <h2>{cocktail.cocktailName}</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  //   console.log("mapToProps", state);

  return {
    cocktails: state.cocktails,
  };
};

export default connect(mapStateToProps)(ShowCocktail);
