function PageFooter() {
  const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.703952223455!2d108.23643081472414!3d16.08084528887375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314217013c0793c9%3A0xaf2962829210131b!2sChi%20nh%C3%A1nh%20C%C3%B4ng%20ty%20TNHH%20Monstar%20Lab%20Vi%E1%BB%87t%20Nam!5e0!3m2!1sen!2s!4v1646975864995!5m2!1sen!2s" style="border:0;" allowFullScreen="" loading="lazy"></iframe>'; 
  return (
    <footer className="page-footer">
    <div className="footer-top">
      <div className="container content-wapper">
        <form className="footer-newsletter">
          <label htmlFor="">Newletter</label>
          <input type="text"/>
          <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
        </form>
        <ul className="socials socials-footer">
          <li><span className="social-text">Follow on</span></li>
          <li><a href=""><i className="fa-brands fa-twitter"></i></a></li>
          <li><a href=""><i className="fa-brands fa-facebook"></i></a></li>
          <li><a href=""><i className="fa-brands fa-google-plus-g"></i></a></li>
        </ul>
      </div>
    </div>
    <div className="footer-middle">
      <div className="container">
        <div className="content-wapper row">

          <div className="footer-middle-col col-3">
            <h3>Footer Links</h3>
            <ul className="link-list">
              <li><a href="">Home</a></li>
              <li><a href="">Products</a></li>
              <li><a href="">officiis suscipit</a></li>
              <li><a href="">Lorem ipsum dolor</a></li>
              <li><a href="">adipisicing elit</a></li>
            </ul>
          </div>
          <div className="footer-middle-col col-3">
            <h3>Footer Links</h3>
            <ul className="link-list">
              <li><a href="">Home</a></li>
              <li><a href="">Products</a></li>
              <li><a href="">officiis suscipit</a></li>
              <li><a href="">Lorem ipsum dolor</a></li>
              <li><a href="">adipisicing elit</a></li>
            </ul>
          </div>
          <div className="footer-middle-col col-6">
            <h3>Footer Map</h3>
            <div dangerouslySetInnerHTML={ {__html: iframe}} />
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <p>Copyright Monstarlab Co., Ltd 2022</p>
      </div>
    </div>
  </footer>
  )
}

export default PageFooter;
