import React from "react";
import { useSelector } from "react-redux";

const Modal = ({ openModal, children, closeModal }) => {
  const cocktailsState = useSelector((state) => state.cocktails);

  let myCocktail = cocktailsState.slice(-1);

  if (!openModal) return null;

  return (
    <div>
      {children}
      <button onClick={() => closeModal(myCocktail[0].id)}>Close Modal</button>
    </div>
  );
};

export default Modal;
