import React from "react";
import "./Form.css"; 

function Form({ searchQuery, handleInputChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Cars, movies..."
        className="search-input"
      />
      <button type="submit" className="search-button">
        Buscar
      </button>{" "}
    </form>
  );
}

export default Form;
