import React, { useState } from "react";
import "./Button.css";
const CatButton = ({ onClick }) => {
  return (
    <button className="button-cat" onClick={onClick}>
      Add new fact
    </button>
  );
};

export default CatButton;
