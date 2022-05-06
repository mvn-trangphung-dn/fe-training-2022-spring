import { NavLink } from "react-router-dom";
import { FaCartArrowDown, FaHeart, FaUserAlt, FaSignInAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

function Header() {
  const favorites = useSelector((state) => state.fav.value);

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
            <li className="nav-links-item icon-fav-header">
              <FaHeart/>
              {!!favorites.length && (
                <span className="fav-count">{favorites.length}</span>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
