import estilos from './SearchBar.module.css'

export default function SearchBar(props) {
   // var props = {onSearch:fn()}
   return (
      <div>
         <input className={estilos.searchInput} type='search' />
      <button className={estilos.button} onClick={()=>props.onSearch(1)}>Agregar</button>
      </div>
   );
}
