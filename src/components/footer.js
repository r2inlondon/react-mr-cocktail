import React from "react";

const Footer = () => (
  <div className="footer">
    <div className="social-container">
      <a
        href="https://www.instagram.com/explore/tags/cocktails/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <i className="fab fa-instagram"></i>
      </a>
      <a
        href="https://www.facebook.com/groups/916905265136283"
        target="blank"
        rel="noopener noreferrer"
      >
        {" "}
        <i className="fab fa-facebook-square"></i>
      </a>
      <a
        href="https://www.youtube.com/watch?v=b0IuTL3Z-kk&ab_channel=Epicurious"
        target="_blank"
        className="youtube"
        rel="noopener noreferrer"
      >
        <i className="fab fa-youtube"></i>
      </a>
    </div>
    <div className="blog">
      <div className="text-container">
        {/* <h1>React CRUD app with Redux and firebase</h1> */}
        <p>
          This web app was inspired from my old days of working as a bartender,
          I really enjoyed making cocktails and I wanted to share my passion
          with you, hope you like it!
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
