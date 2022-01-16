import React from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";

const ModalTwo = ({ openModal, closeModal }) => {
  const cocktailsState = useSelector((state) => state.cocktails);

  // Get the last cocktail from the state
  let myCocktail = cocktailsState.slice(-1);

  if (!openModal) return null;

  return (
    <Modal isOpen={closeModal} contentLabel="Cocktail has been created">
      <p>Now Add the ingredients and photo</p>
      <button onClick={() => closeModal(myCocktail[0].id)}>Close Modal</button>
    </Modal>
  );
};

export default ModalTwo;
