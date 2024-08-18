import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const NavItem = styled.li`
  margin: 0 10px;
`;

export const NavLink = styled(Link)` 
  color: #7C0A02;
  text-decoration: none;

  h1 {
    font-size: 2.5rem;
    text-align: center;
    margin: 0;
  }

  &:link, &:visited, &:hover, &:active {
    color: #7C0A02;
    text-decoration: none;
  }
`;