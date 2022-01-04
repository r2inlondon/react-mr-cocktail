import { db } from "../firebase/firebase";
import { setCocktails, createCocktail } from "../Reducers/cocktailsReducer";

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
