import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const initialState = [
  {
    id: uuidv4(),
    name: "Margarita",
    ingredients: ["50ml of tequila", "20ml of lime juice"],
  },
  {
    id: uuidv4(),
    name: "Mojito",
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
      const { id, name } = action.payload;
      const existingCocktail = state.find((cocktail) => cocktail.id === id);
      if (existingCocktail) {
        existingCocktail.name = name;
      }
    },
    addIngredients(state, action) {
      const { id, ingredients } = action.payload;
      console.log(action.payload);
      const existingCocktail = state.find((cocktail) => cocktail.id === id);
      if (existingCocktail) {
        existingCocktail.ingredients.push(ingredients);
      }
    },
  },
});

export const { getCocktails, createCocktail, editCocktail, addIngredients } =
  cocktailSlice.actions;

export default cocktailSlice.reducer;
