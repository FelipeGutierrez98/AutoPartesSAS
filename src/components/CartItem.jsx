import React from 'react';

const CartItem = ({ product }) => {
  return (
    <div>
       <img src={product.image}></img>
      <p>{product.name} - ${product.price}</p>
    </div>
  );
};

export default CartItem;

