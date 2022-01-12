import React from "react";
import UploadForm from "./UploadForm";

export const ShowPhoto = ({ name, defaultImage }) => {
  return (
    <div className="image-container">
      <img src={defaultImage} alt={name} className="cocktail-image" />
      <h1 className="cocktail-name">{name}</h1>
    </div>
  );
};

export const ShowUploadForm = () => (
  <div>
    <p>Upload an image for the cocktail</p>
    <UploadForm />
  </div>
);
