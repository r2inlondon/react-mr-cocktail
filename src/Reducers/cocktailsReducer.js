import { createSlice } from "@reduxjs/toolkit";

export const initialState = [
  { id: 1, cocktailName: "Margarita" },
  { id: 2, cocktailName: "Mojito" },
];

const cocktailSlice = createSlice({
  name: "cocktails",
  initialState,
  reducers: {
    getCocktails(state, action) {
      state = action.payload;
    },
    createCocktail(state, action) {
      state.push(action.payload);
    },
    editCocktail(state, action) {
      const { id, cocktailName } = action.payload;
      const existingCocktail = state.find((cocktail) => cocktail.id === id);
      if (existingCocktail) {
        existingCocktail.cocktailName = cocktailName;
      }
    },
  },
});

export const { getCocktails, createCocktail, editCocktail } =
  cocktailSlice.actions;

export default cocktailSlice.reducer;
