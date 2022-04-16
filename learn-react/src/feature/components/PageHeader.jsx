function PageHeader() {
  return (
    <header className="page-header">
    <div className="header-top">
      <div className="container content-wapper">
        <a href="/" className="header-logo">
          <img src="https://i.pinimg.com/736x/46/9a/0c/469a0cd7f958cd295ba642f110901c5d.jpg" alt="logo"/>
        </a>
        <ul className="header-actions socials-wapper">
          <li><a href=""><i className="fa-solid fa-magnifying-glass"></i></a></li>
          <li><a href=""><i className="fa-solid fa-user"></i></a></li>
          <li><a href=""><i className="fa-solid fa-cart-shopping"></i></a></li>
        </ul>
      </div>
    </div>
    <nav className="header-nav">
      <div className="container content-wapper">
        <ul className="header-menu">
          <li><a href="">Home</a></li>
          <li><a href="">Products</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">News</a></li>
          <li><a href="">Contact</a></li>
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

export default PageHeader;
