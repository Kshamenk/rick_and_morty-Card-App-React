import Card from '../Card/Card.jsx';
import estilo from './Cards.module.css'
export default function Cards(props) {
   const { characters } = props;
   console.log(characters)
   return (
      <div className={estilo.contenedor}>
         {
            characters.map((char,index) => 
              
               <Card
                  key={index}
                  name={char.name}
                  species={char.species}
                  gender={char.gender}
                  image={char.image}
                  onClose={() => window.alert('Emulamos que se cierra la card')}
               />
            )
         }
      </div>
   );
}
