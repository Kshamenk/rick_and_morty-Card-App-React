import styles from './Card.module.css'; // Importamos el archivo CSS del módulo
import { Link } from 'react-router-dom';
export default function Card(props) {
  const { name, species, gender, image, onClose, id, detailId } = props;

  return (
    <div className={styles.card}> 
      <button className={styles.button} onClick={onClose} value={id}>X</button>
      <Link to={`/detail/${detailId}`} >
        <h2>{name}</h2>
      </Link>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <img src={image} alt="" />
    </div>
  );
}
