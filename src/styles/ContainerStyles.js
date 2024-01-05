import styled from 'styled-components';


export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 20px;

  @media (max-width: 768px) { // Adjust the max-width as per your requirement
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 360px) { // Adjust the max-width as per your requirement
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProductTextContainer = styled.div`
  flex-grow: 1;
  padding: 10px;
`;

export const ProductImageContainer = styled.div`
  // Add styling for the image container here
`;

export const ProductButtonContainer = styled.div`
// Add styling for the button container here
`;


export const HeaderContainer = styled.header`
position: fixed;   
top: 0;            
left: 0;          
width: 100%;       
background-color: #5CC7F6; 
color: white;
padding: 10px 20px;
text-align: center;
`;

export const LayoutContainer = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
`;

export const FooterContainer = styled.div`  
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