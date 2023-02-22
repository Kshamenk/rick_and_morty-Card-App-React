import estilo from "./Card.module.css" 


export default function Card({name,species,gender,image,onClose}) {
// const {name,species,gender,image,onClose} = props
   return (
      <div className = {estilo.contenedor}>
        
         <button className={estilo.button} onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt="" />
      </div>
   );
}
