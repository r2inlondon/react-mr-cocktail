import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "../Reducers/cocktailsReducer";
import { connect } from "react-redux";
import { createCocktail, addIngredients } from "../Reducers/cocktailsReducer";

export const store = configureStore({
  reducer: {
    cocktails: cocktailSlice,
  },
});

// store.dispatch(createCocktail({ id: 3, cocktailName: "Martini" }));

// store.dispatch(addIngredients({ id: 2, ingredients: ["50 ml Vodka"] }));
