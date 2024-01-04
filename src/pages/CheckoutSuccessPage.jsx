import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

const CheckoutSuccessPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <div>
      <h1>Checkout Successful</h1>
      <p>Your order has been successfully processed!</p>
      <Link to="/">Go Back to Store</Link>
    </div>
  );
};

export default CheckoutSuccessPage;