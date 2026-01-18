import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faTags } from "@fortawesome/free-solid-svg-icons";

//rendering from ui not server so it can be fast
import { Link, NavLink } from "react-router-dom";
//change this to Link so not to load from server, for performing
/* <a href="/" className="link"> */
/* </a> */
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="link">
          <FontAwesomeIcon icon={faTags} className="fa-icon" />
          <span className="brand-title">Pet Sitter</span>
        </Link>
        <nav className="nav">
          <ul>
            <li>
              <NavLink
                to="/home"
                className="nav-link"
                // className={({ isActive }) =>
                //   isActive ? underline`${navLinkClass}` : navLinkClass
                // }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="nav-link">
                <FontAwesomeIcon icon={faShoppingBasket} />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
