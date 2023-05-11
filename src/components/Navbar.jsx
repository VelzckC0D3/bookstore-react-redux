import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navCont">
    <h1 className="navTitle">Bookstore CMS</h1>
    <ul className="navUl">
      <li className="navLi"><NavLink to="/" exact="true" activeclassname="active">Books</NavLink></li>
      <li className="navLi"><NavLink to="/categories" activeclassname="active">Categories</NavLink></li>
    </ul>
  </nav>
);
export default Navbar;
