import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: #333;
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

const Header = () => (
  <HeaderWrapper>
    <Navigation>
      <h1>My eCom Store</h1>
      <NavList>
        <NavItem><NavLink href="/">Home</NavLink></NavItem>
        <NavItem><NavLink href="/products">Products</NavLink></NavItem>
        <NavItem><NavLink href="/contact">Contact</NavLink></NavItem>
        {/* Add more navigation items as needed */}
      </NavList>
    </Navigation>
  </HeaderWrapper>
);

export default Header;
