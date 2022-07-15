import { Link } from 'react-router-dom';
import Styles from './Layout.module.css';

const Navigation = () => (
  <header>
    <nav className={Styles.NavMenu}>
      <Link className={Styles.Logo} to="/">Bookstore CMS</Link>
      <ul className={Styles.NavigationLinks}>
        <li><Link className={Styles.NavLink} to="/books">Books</Link></li>
        <li><Link className={Styles.NavLink} to="/categories">Categories</Link></li>
      </ul>
      <button type="button" className={Styles.IconButton}>
        <i className="fas fa-user-alt" />
      </button>
    </nav>
  </header>
);

export default Navigation;
