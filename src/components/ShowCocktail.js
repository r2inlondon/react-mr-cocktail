import React from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router";

const ShowCocktail = (props) => {
  let { id } = useParams();
  const cocktail = props.cocktails.find((cocktail) => {
    return cocktail.id === id;
  });

  return (
    <div>
      <h2>{cocktail.name}</h2>
      {cocktail.ingredients.map((ingredient, index) => {
        console.log(ingredient);
        return (
          <div key={index + 200}>
            <p key={index}>{ingredient}</p>
            <button key={index + 100}>remove</button>;
          </div>
        );
      })}
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
