import React from "react";

const UploadForm = () => {
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);
  };

  return (
    <form>
      <input type="file" onChange={changeHandler}></input>
    </form>
  );
};

export default UploadForm;
