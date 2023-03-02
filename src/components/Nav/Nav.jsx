import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link } from 'react-router-dom';
import './Nav.css'; // importar el archivo CSS

function Nav(props) {
  return (
    <div className="Nav"> {/* usar la clase CSS */}
      <div>
        <Link to='/About'>
          <h1>About</h1>
        </Link>
      </div>
      <div>
        <Link to='/home'>
          <h1>Home</h1>
        </Link>
      </div>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}

export default Nav;