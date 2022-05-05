import { NavLink } from "react-router-dom";
import { FaCartArrowDown, FaHeart, FaUserAlt, FaSignInAlt } from "react-icons/fa";

function Header() {
  return (
    <div className="page-header">
      <nav className="header-nav">
        <div className="container content-wrapper">
          <ul className="header-menu">
            <li className="nav-links-item">
              <NavLink to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-links-item">
              <NavLink to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-links-item">
              <NavLink to="/about-us">
                About us
              </NavLink>
            </li>
          </ul>
          <ul className="socials socials-wrapper">
            <li className="nav-links-item">
              <NavLink to="/login">
                <FaSignInAlt />
              </NavLink>
            </li>
            <li className="nav-links-item">
              <NavLink to="/account">
                <FaUserAlt />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
