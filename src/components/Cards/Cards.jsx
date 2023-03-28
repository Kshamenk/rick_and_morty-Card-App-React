import React, { useState } from 'react';
import Card from '../Card/Card.jsx';
import styles from '../Cards/Cards.module.css';
import Pagination from '../Paginacion/Paginacion.jsx';

export default function Cards(props) {
  const { characters, onClose } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // cantidad de elementos a mostrar por página

  // calcula el índice del primer elemento en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = characters.slice(indexOfFirstItem, indexOfLastItem);  //siempre las mismas definiciones

  // función para cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.cards}>
      <h1>Cards</h1>
      {currentItems.map((char, index) => (
        <Card
          key={index}
          name={char.name}
          species={char.species}
          gender={char.gender}
          image={char.image}
          onClose={() => onClose(char.id)}
          id={char.id}
          detailId={char.id}
        />
      ))}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={characters.length}
        currentPage={currentPage}
        paginate={paginate}
        style={{marginTop: '20px'}}
      />
    </div>
  );
}

