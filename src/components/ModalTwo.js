import React from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";

const ModalTwo = ({ openModal, closeModal }) => {
  const cocktailsState = useSelector((state) => state.cocktails);

  // Get the last cocktail from the state
  let myCocktail = cocktailsState.slice(-1);

  return (
    <Modal
      isOpen={openModal}
      //   onRequestClose={closeModal(myCocktail[0].id)}
      contentLabel="Cocktail has been created"
      ariaHideApp={false}
      closeTimeoutMS={200}
      className="modal"
    >
      <p className="modal-text">
        Cocktail created, please add a photo and ingredients
      </p>
      <button
        onClick={() => closeModal(myCocktail[0].id)}
        className="modal-button"
      >
        Okay
      </button>
    </Modal>
  );
};

export default ModalTwo;
