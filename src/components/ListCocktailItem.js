import React from "react";
import { Link } from "react-router-dom";
import black from "../styles/images/black.png";

const ListCocktialItem = ({ id, name, defaultImage }) => {
  if (defaultImage === 0) {
    defaultImage = black;
  }

  return (
    <div>
      <Link
        to={`/edit/${id}`}
        className="cocktail-image"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${defaultImage})`,
        }}
      >
        <h1 className="cocktail-name">{name}</h1>
      </Link>
    </div>
  );
};

export default ListCocktialItem;
