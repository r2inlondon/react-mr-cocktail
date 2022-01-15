import React from "react";
import UploadForm from "./UploadForm";

export const ShowPhoto = ({ name, defaultImage }) => {
  return (
    <div className="image-container">
      <div className="head-image">
        <img src={defaultImage} alt={name} className="cocktail-image" />
      </div>
      <div className="cocktail-name">
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export const ShowUploadForm = () => (
  <div>
    <p>Upload an image for the cocktail</p>
    <UploadForm />
  </div>
);
