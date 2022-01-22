import React from "react";
import loadingImage from "../assets/cocktails-neon-2.gif";

const LoadingPage = () => (
  <div className="loader">
    <img src={loadingImage} alt="cocktails loader" className="img-loader" />
  </div>
);

export default LoadingPage;
