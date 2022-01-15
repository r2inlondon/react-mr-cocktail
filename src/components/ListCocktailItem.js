import React from "react";
import { Link } from "react-router-dom";
import black from "../styles/images/black.png";

const ListCocktialItem = ({ id, name, defaultImage }) => {
  // if (defaultImage === 0) {
  //   defaultImage = black;
  // }

  return (
    <div>
      <h3>
        <Link to={`/edit/${id}`}>{name}</Link>
      </h3>
    </div>
  );
};

export default ListCocktialItem;
