import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "../Reducers/cocktailsReducer";

export default configureStore({
  reducer: {
    cocktail: cocktailSlice,
  },
});
