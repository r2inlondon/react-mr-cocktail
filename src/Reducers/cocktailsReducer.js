import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  cocktails: [],
};

const cocktailSlice = createSlice({
  name: "cocktails",
  initialState,
  reducers: {
    getCocktails: (state, action) => {
      state.cocktails = action.payload;
    },
    createCocktail: (state, action) => {
      state.cocktails.push(action.payload);
    },
    editCocktail: (state, action) => {
      state.cocktails.maps((cocktail) => {
        if (cocktail.id === action.payload.id) console.log(cocktail);
      });
    },
  },
});

export const { getCocktails, createCocktail, editCocktail } =
  cocktailSlice.actions;

export default cocktailSlice.reducer;
