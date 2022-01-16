import React from "react";
import { useSelector } from "react-redux";
import ListCocktailItem from "./ListCocktailItem";

const ListsCocktails = (props) => {
  const cocktails = useSelector((state) => state.cocktails);

  return (
    <div className="cocktails-area">
      {cocktails.map((cocktail) => {
        return <ListCocktailItem key={cocktail.id} {...cocktail} />;
      })}
    </div>
  );
};

export default ListsCocktails;
