import React from "react";
import ListsCocktails from "./ListsCocktails";
import Banner from "./Banner";

const HomePage = () => (
  <div>
    <Banner />
    <h1 className="home-page-sub-title">COCKTAILS AND RECIPIES</h1>
    <ListsCocktails />
  </div>
);

export default HomePage;
