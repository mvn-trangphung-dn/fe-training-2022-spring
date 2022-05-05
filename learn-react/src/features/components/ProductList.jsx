import React from 'react';
import ProductInfo from '../components/ProductInfo';

function ProductList() {
  return (
    <>
      <h2 className="section-title">Lorem ipsum</h2>
        <ul className="product-list row">
          <li className="product-item col-3">
            <ProductInfo product={{name: "Item name", imgProduct: "https://i.pinimg.com/474x/68/9e/c6/689ec6b9b673c36d270b957513bfa5b3.jpg", salePrice: "123"}}></ProductInfo>
          </li>
          <li className="product-item col-3">
            <ProductInfo product={{name: "Item name", imgProduct: "https://i.pinimg.com/474x/74/12/37/74123763eba98266945d4714a431223c.jpg", salePrice: "123"}}></ProductInfo>
          </li>
          <li className="product-item col-3">
            <ProductInfo product={{name: "Item name", imgProduct: "https://i.pinimg.com/474x/d2/0b/83/d20b836d40c36cfb170341392f7ca5ce.jpg", salePrice: "123"}}></ProductInfo>
          </li>
          <li className="product-item col-3">
            <ProductInfo product={{name: "Item name", imgProduct: "https://i.pinimg.com/474x/ed/09/a9/ed09a970cc3dc27d17f9061552e57256.jpg", salePrice: "123"}}></ProductInfo>
          </li>
        </ul>
    </>
  );
}

export default ProductList;
