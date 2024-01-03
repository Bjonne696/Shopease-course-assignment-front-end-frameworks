import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styled from 'styled-components';
import CartIcon from './CartIcon';

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
  const navigate = useNavigate(); // Initialize useNavigate here
  const itemCount = 5;

  // Function to handle CartIcon click
  const handleCartClick = () => {
    navigate('/checkout'); // Use navigate to change the route
  };

  return (
    <HeaderWrapper>
      <Navigation>
        <h1>My eCom Store</h1>
        <div>
          <NavList>
            <NavItem><NavLink href="/">Home</NavLink></NavItem>
            <NavItem><NavLink href="/products">Products</NavLink></NavItem>
            <NavItem><NavLink href="/contact">Contact</NavLink></NavItem>
            {/* Add more navigation items as needed */}
          </NavList>
          <CartIcon itemCount={itemCount} onClick={handleCartClick} /> {/* Pass handleCartClick to CartIcon */}
        </div>
      </Navigation>
    </HeaderWrapper>
  );
};

export default Header;