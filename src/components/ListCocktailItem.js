import React from "react";
import { Link } from "react-router-dom";
import black from "../styles/images/black.png";

const ListCocktialItem = ({ id, name, defaultImage }) => {
  if (defaultImage === 0) {
    defaultImage = black;
  }

  return (
    <div className="home-image-container">
      <Link
        to={`/edit/${id}`}
        className="home-page-cocktails-image"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${defaultImage})`,
        }}
      >
        <p className="home-page-cocktails-font">{name}</p>
      </Link>
    </div>
  );
};

export default ListCocktialItem;
