import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const initialState = [
  {
    id: "777e3c9f-ea64-4206-8e41-7290ba9ae130",
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
      const existingCocktail = state.find((cocktail) => cocktail.id === id);
      if (existingCocktail) {
        existingCocktail.ingredients.push(ingredients);
      }
    },
    removeIngredient(state, action) {
      const { id, ingredient } = action.payload;
      const existingCocktail = state.find((cocktail) => cocktail.id === id);

      if (existingCocktail) {
        existingCocktail.ingredients.forEach((existingIngredient, index) => {
          if (existingIngredient === ingredient) {
            existingCocktail.ingredients.splice(index, 1);
          }
        });
      }
    },
  },
});

export const {
  getCocktails,
  createCocktail,
  editCocktail,
  addIngredients,
  removeIngredient,
} = cocktailSlice.actions;

export default cocktailSlice.reducer;
