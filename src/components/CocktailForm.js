import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CocktailForm = (props) => {
  const [idState, setIdState] = useState(
    props.cocktail ? props.cocktail.id : uuidv4()
  );
  const [nameState, setNameState] = useState(
    props.cocktail ? props.cocktail.name : ""
  );
  const [ingredientsState, setIngredientsState] = useState([]);
  const [errorState, setErrorState] = useState("");

  const onNameChange = (e) => {
    const name = e.target.value;

    setNameState(name);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let name = nameState;
    const ingredients = ingredientsState;

    if (name) {
      props.onSubmit({
        id: idState,
        name,
        ingredients,
      });
    } else {
      setErrorState("Enter a cocktail name");
    }
  };

  return (
    <div>
      {errorState && <p>{errorState}</p>}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Cocktail name"
          autoFocus
          value={nameState}
          onChange={onNameChange}
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
};

export default CocktailForm;
