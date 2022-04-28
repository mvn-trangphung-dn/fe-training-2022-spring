import { Link } from "react-router-dom";

export default function PageHeader() {
  return (
    <header className="page-header">
    <nav className="header-nav">
      <div className="container content-wapper">
        <ul className="header-menu">
          <li>
            <Link to="/">Home</Link>
          </li> 
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
        
        <ul className="socials socials-wapper">
          <li><a href=""><i className="fa-brands fa-twitter"></i></a></li>
          <li><a href=""><i className="fa-brands fa-facebook"></i></a></li>
          <li><a href=""><i className="fa-brands fa-google-plus-g"></i></a></li>
        </ul>
      </div>
    </nav>
  </header>
  )
}
