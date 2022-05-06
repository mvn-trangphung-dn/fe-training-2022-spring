import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from "../../../store/favSlice";

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

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.fav.value);

  const handleFav = (e, id) => {
    e.preventDefault();
    dispatch(toggle(id));
    console.log(id);
  };

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
                <span className="product-fav" onClick={(event) => handleFav(event, product.id)}>
                  <FaHeart className={`icon-fav ${favorites.includes(product.id) ? "active" : "none-active"}`}/>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductList;
