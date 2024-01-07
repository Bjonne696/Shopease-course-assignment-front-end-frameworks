import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CartItem, } from '../styles/CheckoutStyles';
import { CheckoutContainer } from '../styles/ContainerStyles';
import { Button } from '../styles/ButtonStyles';

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, item) => total + item.discountedPrice, 0);

  const handleCheckout = () => {
    navigate('/checkoutsuccess');
  };

  return (
    <CheckoutContainer>
      <h1>Cart</h1>
      {cartItems.map(item => (
        <CartItem key={item.id}>
          <p>{item.title} - ${item.discountedPrice}</p>
        </CartItem>
      ))}
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <Button onClick={handleCheckout}>Checkout</Button>
    </CheckoutContainer>
  );
};

export default CheckoutPage;