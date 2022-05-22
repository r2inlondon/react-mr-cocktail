import { createSlice } from "@reduxjs/toolkit";

export const initialState = [
  // {
  //   id: "777e3c9f-ea64-4206-8e41-7290ba9ae130",
  //   name: "Margarita",
  //   ingredients: ["50ml of tequila", "20ml of lime juice"],
  // },
  // {
  //   id: uuidv4(),
  //   name: "Mojito",
  //   ingredients: ["50ml of Rum", "Bunch of mint"],
  // },
];

const cocktailSlice = createSlice({
  name: "cocktails",
  initialState,
  reducers: {
    setCocktails(state, action) {
      return (state = action.payload);
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
      let { id, ingredients, ingredientId } = action.payload;
      const existingCocktail = state.find((cocktail) => cocktail.id === id);

      if (existingCocktail.ingredients) {
        existingCocktail.ingredients[ingredientId] = ingredients;
      } else {
        existingCocktail.ingredients = {};
        existingCocktail.ingredients[ingredientId] = ingredients;
      }
    },
    removeIngredient(state, action) {
      const { id, ingredientId } = action.payload;
      const existingCocktail = state.find((cocktail) => cocktail.id === id);

      delete existingCocktail.ingredients[ingredientId];

      // if (existingCocktail) {
      //   existingCocktail.ingredients.forEach((existingIngredient, index) => {
      //     if (existingIngredient === ingredient) {
      //       existingCocktail.ingredients.splice(index, 1);
      //     }
      //   });
      // }
    },
    addImage(state, action) {
      const { id, url } = action.payload;
      const existingCocktail = state.find((cocktail) => cocktail.id === id);

      if (existingCocktail) {
        existingCocktail.defaultImage = url;
      }
    },
  },
});

export const {
  setCocktails,
  createCocktail,
  editCocktail,
  addIngredients,
  removeIngredient,
  addImage,
} = cocktailSlice.actions;

export default cocktailSlice.reducer;
