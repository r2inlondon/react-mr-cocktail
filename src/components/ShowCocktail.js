import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import ShowIngredients from "./ShowIngredients";

const ShowCocktail = (props) => {
  let { id } = useParams();
  const theCocktail = props.cocktails.find((cocktail) => {
    return cocktail.id === id;
  });

  return (
    <div>
      <ShowIngredients cocktail={theCocktail} />
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
