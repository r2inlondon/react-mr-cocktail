import React, { useState } from "react";
import { useNavigate } from "react-router";
import ModalTwo from "./ModalTwo";

const CocktailForm = (props) => {
  let navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [errorState, setErrorState] = useState("");

  const [nameState, setNameState] = useState(
    props.cocktail ? props.cocktail.name : ""
  );

  const onNameChange = (e) => {
    const name = e.target.value;

    setNameState(name);
  };

  const closeModal = (id) => {
    setIsOpen(false);
    navigate(`/edit/${id}`);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let name = nameState;

    const checkName = /^(\w{2,})[\w .]*/;

    const result = checkName.test(name);

    const ingredients = {};

    const defaultImage = 0;

    if (result) {
      props.onSubmit({
        name,
        ingredients,
        defaultImage,
      });
      setIsOpen(true);
    } else {
      setErrorState("Enter a valid cocktail name");
    }
  };

  return (
    <div className="add-cocktail-form-container">
      {errorState && <p className="error-message">{errorState}</p>}
      <form onSubmit={onSubmit} className="add-cocktail-form">
        <input
          type="text"
          placeholder="Enter name"
          autoFocus
          value={nameState}
          onChange={onNameChange}
          className="add-cocktail-form-input"
        ></input>
        <button className="button-24">Add</button>
      </form>
      <ModalTwo openModal={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default CocktailForm;
