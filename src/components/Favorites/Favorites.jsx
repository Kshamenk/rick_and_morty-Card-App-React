import React, { useState } from "react";
import { connect } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions.js";
import { useDispatch } from "react-redux";
import styles from '../Favorites/Favorites.module.css';

function Favorites({ myFavorites, allCharacters }) {
  const dispatch = useDispatch();

  const [order, setOrder] = useState("Ascendente");
  const [gender, setGender] = useState("all");

  const handleOrderChange = (e) => {
    dispatch(orderCards(e.target.value));
    setOrder(e.target.value);
  };

  const handleGenderChange = (e) => {
    dispatch(filterCards(e.target.value));
    setGender(e.target.value);
  };

  const filteredFavorites = myFavorites.filter(
    (fav) => gender === "all" || fav.gender === gender
  );

  const sortedFavorites = [...filteredFavorites].sort((a, b) => {
    if (order === "Ascendente") {
      return a.id - b.id;
    } else if (order === "Descendente") {
      return b.id - a.id;
    }
    return 0;
  });

  return (
    <div>
      <h1 className={styles.title}>Favorites</h1>
      <div className={styles.selectContainer}>
        <label className={styles.label}>Ordenar por:</label>
        <select className={styles.select} value={order} onChange={handleOrderChange}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
      </div>
      <div className={styles.selectContainer}>
        <label className={styles.label}>Filtrar por género:</label>
        <select className={styles.select} value={gender} onChange={handleGenderChange}>
          <option value="all">Todos</option>
          <option value="Male">Masculino</option>
          <option value="Female">Femenino</option>
          <option value="Genderless">Sin género</option>
          <option value="unknown">Desconocido</option>
        </select>
      </div>
      <div className={styles.container} >
      {sortedFavorites.map((fav) => {
        return (
          <div key={fav.id} className={styles.item}>
            <h2 className={styles.name}>{fav.name}</h2>
            <img src={fav.image} alt={fav.name} className={styles.image} />
          </div>
        );
      })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
    allCharacters: state.allCharacters,
  };
};

export default connect(mapStateToProps, null)(Favorites);