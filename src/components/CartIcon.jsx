import React from 'react';
import { CartIconContainer  } from '../styles/ContainerStyles';
import { ItemCount, Icon } from '../styles/CartIconStyles';
import CartIconSVG from '../cart-icon.svg';


const CartIcon = ({ itemCount, onClick }) => {
  return (
    <CartIconContainer onClick={onClick}>
      <Icon src={CartIconSVG} alt="Cart" />
      {itemCount > 0 && <ItemCount>{itemCount}</ItemCount>}
    </CartIconContainer>
  );
};

export default CartIcon