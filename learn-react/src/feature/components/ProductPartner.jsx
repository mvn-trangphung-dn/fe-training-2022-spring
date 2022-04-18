import React from 'react';

function ProductPartner({product = {}}) {
  const {imgProduct} = product;

  return (
    <>
      <a href=""><img src={imgProduct} alt=""/></a>
    </>
  );
}

export default ProductPartner;
