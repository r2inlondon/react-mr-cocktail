import React, { useState } from "react";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";
import Modal from "./modal";

const CocktailForm = (props) => {
  let navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  // const [idState, setIdState] = useState(
  //   props.cocktail ? props.cocktail.id : uuidv4()
  // );
  const [nameState, setNameState] = useState(
    props.cocktail ? props.cocktail.name : ""
  );
  const [ingredientsState, setIngredientsState] = useState([0]);
  const [errorState, setErrorState] = useState("");

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
    const ingredients = ingredientsState;

    if (name) {
      props.onSubmit({
        name,
        ingredients,
      });
      showModal();
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
      <Modal openModal={isOpen} closeModal={closeModal}>
        <p>Now Add the ingredients</p>
      </Modal>
    </div>
  );
};

export default CocktailForm;
