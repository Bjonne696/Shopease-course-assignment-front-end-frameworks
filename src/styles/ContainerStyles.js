import styled from 'styled-components';


export const HeaderContainer = styled.header`
background: lightgreen; 
color: white;
padding: 10px 20px;
text-align: center;
`;

export const LayoutContainer = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
`;

export const FooterContainer = styled.div`  // Changed from styled.container to styled.div
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 20px 0;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

export const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
`;