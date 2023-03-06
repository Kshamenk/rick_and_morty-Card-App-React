import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar(props) {
  const [character, setCharacter] = useState("");

  function handleInputChange(event) {
    var value = event.target.value;
    setCharacter(value);
  }
  

  return (
    <div className="searchbar-container">
      <input
        type="search"
        className="searchbar-input"
        onChange={handleInputChange}
      />
      <button
        className="searchbar-button"
        onClick={() => props.onSearch(character)}
      >
        Add
      </button>
    </div>
  );
}