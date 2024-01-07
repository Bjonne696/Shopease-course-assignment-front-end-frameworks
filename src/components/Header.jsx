import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { HeaderContainer } from '../styles/ContainerStyles';
import { Navigation, NavList, NavItem } from '../styles/NavigationStyles';
import CartIcon from './CartIcon';
import { useSelector } from 'react-redux'; 

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.length;

  return (
    <HeaderContainer>
      <Navigation>
        <h1>ShopEase</h1>
        <NavList>
          <NavItem>
            <CartIcon itemCount={itemCount} onClick={() => navigate('/checkout')} />
          </NavItem>
          <NavItem>
            <Link to="/">ShopEase</Link> 
          </NavItem>
          <NavItem>
            <Link to="/ContactPage">Contact</Link> 
          </NavItem>
        </NavList>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;