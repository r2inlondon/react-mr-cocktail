import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "../Reducers/cocktailsReducer";
import { connect } from "react-redux";
import { removeIngredient, addIngredients } from "../Reducers/cocktailsReducer";

export const store = configureStore({
  reducer: {
    cocktails: cocktailSlice,
  },
});

// store.dispatch(
//   addIngredients({
//     id: "777e3c9f-ea64-4206-8e41-7290ba9ae130",
//     ingredients: "Martini",
//   })
// );

// store.dispatch(
//   removeIngredient({
//     id: "777e3c9f-ea64-4206-8e41-7290ba9ae130",
//     ingredient: "Martini",
//   })
// );
