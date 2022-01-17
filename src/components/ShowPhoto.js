import React from "react";
import UploadForm from "./UploadForm";

export const ShowPhoto = ({ name, defaultImage }) => {
  return (
    <div className="image-container">
      <div className="head-image">
        {/* <img src={defaultImage} alt={name} className="cocktail-image" /> */}
        <div
          className="cocktail-image"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${defaultImage})`,
          }}
        >
          <h1 className="cocktail-name">{name}</h1>
        </div>
      </div>
    </div>
  );
};

export const ShowUploadForm = () => (
  <div className="upload-form-title-container">
    <p className="upload-form-title">Upload an image for the cocktail</p>
    <UploadForm />
  </div>
);
