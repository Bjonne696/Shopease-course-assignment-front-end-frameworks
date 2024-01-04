import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();


  const totalPrice = cartItems.reduce((total, item) => total + item.discountedPrice, 0);


  const handleCheckout = () => {
    navigate('/checkoutsuccess');
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.title} - ${item.discountedPrice}</p>
        </div>
      ))}
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default CheckoutPage;