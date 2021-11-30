import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/create">Add Cocktail</Link>
    </li>
  </div>
);

export default NavBar;
