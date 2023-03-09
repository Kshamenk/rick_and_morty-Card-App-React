import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

function Nav(props) {
  return (
    <div className={styles.Nav}> 
      <div>
        <Link to='/about'>
          <h1>About</h1>
        </Link>
      </div>
      <div>
        <Link to='/favorites'>
          <h1>Favorites</h1>
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