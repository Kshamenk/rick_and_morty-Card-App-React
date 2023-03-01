import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link } from 'react-router-dom';

function Nav(props) {                //la funcion nav toma props
return (
<div className="Nav">
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