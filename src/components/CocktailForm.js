import React, { useState } from "react";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";
import Modal from "./modal";
import ModalTwo from "./ModalTwo";

const CocktailForm = (props) => {
  let navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [errorState, setErrorState] = useState("");

  // const [idState, setIdState] = useState(
  //   props.cocktail ? props.cocktail.id : uuidv4()
  // );
  const [nameState, setNameState] = useState(
    props.cocktail ? props.cocktail.name : ""
  );

  const onNameChange = (e) => {
    const name = e.target.value;

    setNameState(name);
  };

  const showModal = () => {
    setIsOpen(true);
  };

  const closeModal = (id) => {
    setIsOpen(false);
    navigate(`/edit/${id}`);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let name = nameState;
    const ingredients = [0];

    const defaultImage = 0;

    if (name) {
      props.onSubmit({
        name,
        ingredients,
        defaultImage,
      });
      showModal();
    } else {
      setErrorState("Enter a cocktail name");
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
