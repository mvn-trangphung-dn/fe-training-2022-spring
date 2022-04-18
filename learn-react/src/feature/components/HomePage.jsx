import ProductList from '../components/ProductList';
import ProductPartner from '../components/ProductPartner';

function PageHome() {
  return (
    <main className="page-main">
    <section className="section-slideshow">
      <ul className="slideshow-list">
        <li className="slideshow-item">
          <img src="https://qph.fs.quoracdn.net/main-qimg-188a93746656e5315b36245e18f678bf" alt="alt slideshow 1"/>
        </li>
      </ul>
      <div className="slideshow-btn-action">
        <button className="btn btn-pre"><i className="fa-solid fa-angle-left"></i></button>
        <button className="btn btn-next"><i className="fa-solid fa-angle-right"></i></button>
      </div>
    </section>
    <section className="section-product">
      <div className="container">
        <ProductList></ProductList>
      </div>
    </section>
    <section className="section-banner-txt">
      <h2>Consectetur adipisicing elit</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium nulla aut iste dignissimos</p>
    </section>
    <section className="section-product">
      <div className="container">
        <ProductList></ProductList>
      </div>
    </section>
    <section className="section-partner">
      <div className="container">
        <ul className="partner-list row content-wapper">
          <li className="partner-item">
            <ProductPartner product={{imgProduct: "https://i.pinimg.com/474x/3c/c3/e2/3cc3e2b6d565d5d8ae4baef17cad025a.jpg"}}></ProductPartner>
          </li>
          <li className="partner-item">
            <ProductPartner product={{imgProduct: "https://i.pinimg.com/474x/95/9e/1b/959e1bdd9d707f40f15774387c38215a.jpg"}}></ProductPartner>
          </li>
          <li className="partner-item">
            <ProductPartner product={{imgProduct: "https://i.pinimg.com/474x/32/39/24/323924e5036a259b9cd9bd5d3ddb68d0.jpg"}}></ProductPartner>
          </li>
          <li className="partner-item">
            <ProductPartner product={{imgProduct: "https://i.pinimg.com/474x/64/72/98/647298ca5c59515c4ff5136a21e78c85.jpg"}}></ProductPartner>
          </li>
          <li className="partner-item">
            <ProductPartner product={{imgProduct: "https://i.pinimg.com/474x/4a/19/c9/4a19c9dab068f0ebbd879577201c4792.jpg"}}></ProductPartner>
          </li>
        </ul>
      </div>
    </section>
  </main>
  )
}

export default PageHome;
