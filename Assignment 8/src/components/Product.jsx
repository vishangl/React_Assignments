
import React from 'react';

function Product(props) {
  return (
    <div>
      <h2>Product: {props.name}</h2>
      <p>Price: {props.price}</p>
    </div>
  );
}

export default Product;
