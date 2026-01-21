import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faTags,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

//rendering from ui not server so it can be fast
import { Link, NavLink } from "react-router-dom";
// import { useContext } from "react";
// import { CartContext } from "../store/cart-context";
import { useCart } from "../store/cart-context";

//change this to Link so not to load from server, for performing
/* <a href="/" className="link"> */
/* </a> */
const Header = () => {
  //the same value from app applciation and interested in
  //only for quantity
  // const { totalQuantity } = useContext(CartContext);
  const { totalQuantity } = useCart();

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="link">
          <FontAwesomeIcon icon={faTags} className="fa-icon" />
          <span className="brand-title">Pet Sitter</span>
        </Link>
        <nav className="eazynav">
          <ul>
            <li>
              <NavLink
                to="/home"
                className="navLink"
                // className={({ isActive }) =>
                //   isActive ? underline`${navLinkClass}` : navLinkClass
                // }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="navLink">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="navLink">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="navLink">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="relative text-primary py-2">
                <FontAwesomeIcon
                  icon={faShoppingBasket}
                  className="text-primary dark:text-light w-6"
                />
              </NavLink>
              <div
                className="absolute -top-2 -right-6 text-xs
              bg-yellow-400 text-black font-semibold"
              >
                {totalQuantity}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
