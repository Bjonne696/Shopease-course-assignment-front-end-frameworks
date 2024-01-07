import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderContainer } from '../styles/ContainerStyles';
import { Navigation, NavList, NavItem } from '../styles/NavigationStyles';
import CartIcon from './CartIcon';
import { useSelector } from 'react-redux'; 

const Header = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.length;

  const handleCartClick = () => {
    navigate('/checkout'); 
  };

  return (
    <HeaderContainer>
      <Navigation>
        <h1>ShopEase</h1>
        <NavList>
          <NavItem>
            <CartIcon itemCount={itemCount} onClick={handleCartClick} />
          </NavItem>
          <NavItem>
            <Link to="/">ShopEase</Link>
          </NavItem>
          <NavItem>
            <Link to="/contact">Contact</Link>
          </NavItem>
        </NavList>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;