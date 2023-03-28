import styles from './Card.module.css'; // Importamos el archivo CSS del módulo
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCharacter, deleteCharacter } from '../../redux/actions.js'
import { useState, useEffect } from 'react';




function Card(props) {

  //const { name, species, gender, image, onClose, id, detailId, addCharacter, deleteCharacter } = props;

  const [isFav, setisFav] = useState(false)

  const handleFavorite = () => {
    if (isFav) { 
     setisFav(false)
     props.deleteCharacter(props.id)
      
    } else {
      setisFav(true)
      props.addCharacter(props)
    }
  }

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
        setisFav(true);
       }
    });
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [props.myFavorites]);



  return (
    <div className={styles.card}>
      {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
      <button className={styles.button} onClick={props.onClose} value={props.id}>X</button>
      <Link to={`/detail/${props.detailId}`} >
        <h2>{props.name}</h2>
      </Link>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <img src={props.image} alt="" />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCharacter: (character) => dispatch(addCharacter(character)),
    deleteCharacter: (id) => dispatch(deleteCharacter(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
