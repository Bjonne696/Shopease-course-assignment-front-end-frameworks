import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { SuccessContainer } from '../styles/ContainerStyles';
import { SuccessHeading } from '../styles/CheckoutSuccessStyles'; 
import { StyledLink } from '../styles/LinkStyles';
import { SuccessMessage } from '../styles/ConfirmationMessageStyles';

const CheckoutSuccessPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <SuccessContainer>
      <SuccessHeading>Checkout Successful</SuccessHeading>
      <SuccessMessage>Your order has been successfully processed!</SuccessMessage>
      <StyledLink to="/">Go Back to Store</StyledLink>
    </SuccessContainer>
  );
};

export default CheckoutSuccessPage;