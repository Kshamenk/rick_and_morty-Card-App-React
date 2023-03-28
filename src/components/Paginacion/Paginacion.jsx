import React from 'react';
import styles from '../Paginacion/Paginacion.module.css';

export default function Pagination(props) {
  const { itemsPerPage, totalItems, currentPage, paginate } = props;  //pasandoselo por props, la logica esta en cards
  const pageNumbers = [];

  // itero para calcular el número de páginas
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <li key={number} className={currentPage === number ? styles.active : null}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}