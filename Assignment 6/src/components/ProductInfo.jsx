
import React from 'react';

function ProductInfo() {
  const product = {
    name: "Wireless Headphones",
    price: 99.99,
    availability: true,
  };

  return (
    <div>
      <h2>Product Information</h2>
      <p><strong>Product Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Availability:</strong> {product.availability ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}

export default ProductInfo;
