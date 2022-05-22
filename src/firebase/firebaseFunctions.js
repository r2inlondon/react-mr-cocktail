import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase/firebase";
import {
  setCocktails,
  createCocktail,
  addIngredients,
  removeIngredient,
  addImage,
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
    const { name, ingredients, defaultImage } = cocktail;
    db.ref("cocktails")
      .push(cocktail)
      .then((ref) => {
        dispatch(
          createCocktail({
            id: ref.key,
            name,
            ingredients,
            defaultImage,
          })
        );
      });
  };
};

export const startRemoveIngredient = (cocktail) => {
  const { id, ingredientId } = cocktail;

  return (dispatch) => {
    db.ref(`cocktails/${id}/ingredients/${ingredientId}`)
      .remove()
      .then(() => {
        dispatch(removeIngredient({ id, ingredientId }));
      })
      .catch((e) => {
        console.log("Ingredient removal Failed", e);
      });
  };
};

export const startAddIngredient = (cocktail) => {
  const ingredientId = uuidv4();
  return (dispatch) => {
    const { id, ingredients } = cocktail;
    db.ref(`cocktails/${id}/ingredients/${ingredientId}`)
      .set(ingredients)
      .then(() => {
        // console.log({ id, ingredients });
        dispatch(addIngredients({ id, ingredients, ingredientId }));
      })
      .catch((e) => {
        console.log("Adding Ingredient Failed", e);
      });
  };
};

export const startAddImage = (cocktail) => {
  const { id, url } = cocktail;
  return (dispatch) => {
    db.ref(`cocktails/${id}/defaultImage/`)
      .set(url)
      .then(() => {
        dispatch(addImage({ id, url }));
      })
      .catch((e) => {
        console.log("Adding Ingredient Failed", e);
      });
  };
};
