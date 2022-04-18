import PropTypes from 'prop-types';
import React from 'react';

ProductInfo.propTypes = {
  product: PropTypes.object,
};

function ProductInfo({product = {}}) {
  const {name, imgProduct, salePrice} = product;

  return (
    <>
      <a href="#" className="product-img">
        <img src={imgProduct} alt="prooduct img"/>
      </a>
      <div className="product-info">
        <h3 className="product-name"><a href="">{name}</a></h3>
        <span className="product-price">{salePrice}</span>
      </div>
      <a href="#" className="btn btn-primary">View product</a>
    </>
  );
}

export default ProductInfo;