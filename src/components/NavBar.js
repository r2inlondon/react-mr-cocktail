import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div id="navbar">
    <div className="navbar-container">
      <Link to="/">
        <i className="fas fa-cocktail"></i>{" "}
      </Link>
      <Link className="mr-c" to="/">
        Mr. Cocktail{" "}
      </Link>
      <Link to="/create" className="add-cocktail">
        Add New
      </Link>
    </div>
  </div>
);

export default NavBar;
