import { createSlice } from "@reduxjs/toolkit";

export const initialState = [
  {
    id: 1,
    cocktailName: "Margarita",
    ingredients: ["50ml of tequila", "20ml of lime juice"],
  },
  {
    id: 2,
    cocktailName: "Mojito",
    ingredients: ["50ml of Rum", "Bunch of mint"],
  },
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
