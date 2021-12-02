import React, { useState } from "react";

const CocktailForm = (props) => {
  const [name, setCocktail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setCocktail(e.target.value);
          }}
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
};

export default CocktailForm;
