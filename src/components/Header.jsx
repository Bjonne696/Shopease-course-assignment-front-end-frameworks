import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { HeaderContainer } from '../styles/ContainerStyles';
import { Navigation, NavList, NavItem, NavLink } from '../styles/NavigationStyles';
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
        <h1>My eCom Store</h1>
        <NavList>
        <NavItem>
            <CartIcon itemCount={itemCount} onClick={handleCartClick} />
          </NavItem>
          <NavItem><NavLink href="/">Home</NavLink></NavItem>
          <NavItem><NavLink href="/contact">Contact</NavLink></NavItem>
        </NavList>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;