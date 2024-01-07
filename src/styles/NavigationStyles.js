import styled from "styled-components";

export const Navigation = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const NavList = styled.ul`
padding-right: 20px;
list-style: none;
display: flex;
align-items: center; 
`;

export const NavItem = styled.li`
margin: 0 10px;
`;

export const NavLink = styled.a`
color: #7C0A02;
text-decoration: none;


&:hover {
  text-decoration: underline;
}
`;
