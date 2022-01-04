import { db } from "../firebase/firebase";
import {
  setCocktails,
  createCocktail,
  addIngredients,
} from "../Reducers/cocktailsReducer";

export const startSetCocktails = () => {
  return (dispatch) => {
    return db
      .ref("cocktails")
      .once("value")
      .then((snapshot) => {
        const cocktails = [];

        snapshot.forEach((childSnapshot) => {
          cocktails.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setCocktails(cocktails));
      });
  };
};

export const startCreateCocktail = (cocktail) => {
  return (dispatch) => {
    const { name, ingredients } = cocktail;
    db.ref("cocktails")
      .push(cocktail)
      .then((ref) => {
        dispatch(
          createCocktail({
            id: ref.key,
            name,
            ingredients,
          })
        );
      });
  };
};

// db.ref("cocktails/-Msauotg4pI2KDu0PLKH/ingredients/3").set("ice");

export const startAddIngredient = (data) => {
  return (dispatch) => {
    const { id, ingredients, key } = data;
    db.ref(`cocktails/${id}/ingredients/${key}`)
      .set(ingredients)
      .then(() => {
        console.log({ id, ingredients });
        dispatch(addIngredients({ id, ingredients }));
      })
      .catch((e) => {
        console.log("this Failed", e);
      });
  };
};
