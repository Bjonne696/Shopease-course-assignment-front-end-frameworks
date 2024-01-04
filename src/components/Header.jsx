import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styled from 'styled-components';
import CartIcon from './CartIcon';
import { useSelector } from 'react-redux'; // Import useSelector from 'react-redux'


const HeaderWrapper = styled.header`
  background: lightgreen; 
  color: white;
  padding: 10px 20px;
  text-align: center;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center; 
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;



const Header = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items); // Access the cart items from the store

  const itemCount = cartItems.length; // Calculate the number of items

  const handleCartClick = () => {
    navigate('/checkout'); // Navigate to CheckoutPage
  };



  return (
    <HeaderWrapper>
      <Navigation>
        <h1>My eCom Store</h1>
        <NavList>
        <NavItem>
            <CartIcon itemCount={itemCount} onClick={handleCartClick} />
          </NavItem>
          <NavItem><NavLink href="/">Home</NavLink></NavItem>
          <NavItem><NavLink href="/contact">Contact</NavLink></NavItem>
          {/* Add more navigation items as needed */}
          {/* Wrap CartIcon in NavItem for styling consistency */}
        </NavList>
      </Navigation>
    </HeaderWrapper>
  );
}

export default Header;