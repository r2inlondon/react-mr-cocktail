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
      <p>Now Add the ingredients and photo</p>
      <button onClick={() => closeModal(myCocktail[0].id)}>Okay</button>
    </Modal>
  );
};

export default ModalTwo;
