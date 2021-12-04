import React from "react";
import { connect } from "react-redux";
import ListCocktialItem from "./ListCocktailItem";

const ListsCocktails = (props) => {
  //   console.log(props);
  return (
    <div>
      {props.cocktails.map((cocktail) => {
        console.log(cocktail);
        return <ListCocktialItem {...cocktail} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  //   console.log("mapToProps", state);

  return {
    cocktails: state.cocktails.cocktails,
  };
};

export default connect(mapStateToProps)(ListsCocktails);
