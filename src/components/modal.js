import React from "react";

const Modal = ({ openModal, children, closeModal }) => {
  if (!openModal) return null;

  return (
    <div>
      {children}
      <button onClick={closeModal}>Close Modal</button>
    </div>
  );
};

export default Modal;
