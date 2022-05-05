import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProductList(data));
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="page-title">Product Latest</h1>
        <ul className="row">
          {productList.map((product) => (
            <li className="col-3" key={product.id}>
              <div className="product-item">
                <Link to={`/products/${product.id}`} className="product-img">
                  <img src={product.image} alt={product.title} />
                </Link>
                <div className="product-info">
                  <div className="info">
                    <h5 className="product-name">{product.title.substring(0, 12)}</h5>
                    <h6 className="product-price">$ {product.price}</h6>
                  </div>

                  <button>Read more</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductList;
