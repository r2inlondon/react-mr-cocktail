import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div>
    <Link to="/">Home </Link>
    <Link to="/create">Add Cocktail</Link>
  </div>
);

export default NavBar;
