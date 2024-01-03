import React from 'react';
import styled from 'styled-components';
import CartIconSVG from '../cart-icon.svg';

const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 24px; // Adjust the size as needed
  height: auto;
`;

const ItemCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  font-size: 12px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CartIcon = ({ itemCount, onClick }) => {
  return (
    <CartIconContainer onClick={onClick}>
      <Icon src={CartIconSVG} alt="Cart" />
      {itemCount > 0 && <ItemCount>{itemCount}</ItemCount>}
    </CartIconContainer>
  );
};

export default CartIcon