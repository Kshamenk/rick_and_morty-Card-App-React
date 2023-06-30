import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styles from '../Detail/Detail.module.css';

export default function Detail() {
   const [character, setCharacter] = useState({});
   const {detailId} = useParams();

   useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
         .then((response) => response.json())
         .then((char) => {
            if (char.name) {
               setCharacter(char);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         })
         
         .catch((err) => {
            window.alert('No hay personajes con ese ID');
         });
      return setCharacter({});
   }, [detailId]);

   return(
      <div className={styles.detail}>
         <h1>{character.name}</h1>
         <img src={character.image} alt='Img not found' />
         <h2>{character.species}</h2>
         <h2>{character.gender}</h2>
         <h2>{character.origin && character.origin.name}</h2>
      </div>
   );
}