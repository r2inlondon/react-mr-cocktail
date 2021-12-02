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
  },
});

export const { getCocktails, createCocktail } = cocktailSlice.actions;

export default cocktailSlice.reducer;
