import Card from '../Card/Card.jsx';
import styles from '../Cards/Cards.module.css';

export default function Cards(props) {
  const { characters, onClose } = props;
  
  return (
    <div className={styles.cards}>
      <h1>Cards</h1>
      {characters.map((char, index) => (
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
    </div>
  );
}





