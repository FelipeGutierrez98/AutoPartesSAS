import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map((item, index) => (
        <CartItem key={index} product={item} />
      ))}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;

