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

// db.ref("cocktails/-Msg-OjRJqgfQROVHWt9/ingredients/1").remove();

export const startRemoveIngredient = (cocktail) => {
  const { id, ingredient, index } = cocktail;
  return (dispatch) => {
    db.ref(`cocktails/${id}/ingredients/${index}`)
      .remove()
      .then(() => {
        dispatch(removeIngredient({ id, ingredient }));
      })
      .catch((e) => {
        console.log("Ingredient removal Failed", e);
      });
  };
};

// db.ref("cocktails/-Msauotg4pI2KDu0PLKH/ingredients/3").set("ice");

export const startAddIngredient = (cocktail) => {
  return (dispatch) => {
    const { id, ingredients, index } = cocktail;
    db.ref(`cocktails/${id}/ingredients/${index}`)
      .set(ingredients)
      .then(() => {
        dispatch(addIngredients({ id, ingredients }));
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
