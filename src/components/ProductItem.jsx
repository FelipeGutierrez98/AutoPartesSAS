// components/productItem 

import React from 'react';
import './Product-item.css';

const ProductItem = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <p>Category: {product.category}</p>
      <p>Brand: {product.brand}</p>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;

