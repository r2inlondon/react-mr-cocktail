import React, { useState } from "react";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";
import Modal from "./modal";

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
    // navigate(`/edit/${id}`);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let name = nameState;
    const ingredients = [0];

    const defaultImage = "default";
    // "https://firebasestorage.googleapis.com/v0/b/mr-cocktail-a9ab4.appspot.com/o/images%2Fblack.png?alt=media&token=11347eb3-41d4-478b-9508-539e91691991";

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
