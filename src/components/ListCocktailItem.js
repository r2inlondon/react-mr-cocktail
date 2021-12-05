import React from "react";
import { Link } from "react-router-dom";

const ListCocktialItem = ({ id, cocktailName, ingredients }) => (
  <div>
    <h3>
      <Link to={`/edit/${id}`}>{cocktailName}</Link>
    </h3>
  </div>
);

export default ListCocktialItem;
