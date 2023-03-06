import React, { useState } from "react";
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
  const [character, setCharacter] = useState("");

  function handleInputChange(event) {
    var value = event.target.value;
    setCharacter(value);
  }
  
  return (
    <div className={styles.container}>
      <input
        type="search"
        className={styles.input}
        onChange={handleInputChange}
      />
      <button
        className={styles.button}
        onClick={() => props.onSearch(character)}
      >
        Add
      </button>
    </div>
  );
}