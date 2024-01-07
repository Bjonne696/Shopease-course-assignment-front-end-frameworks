import styled from 'styled-components';


export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 20px;

  @media (max-width: 1332px) { 
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) { 
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProductTextContainer = styled.div`
  flex-grow: 1;
  padding: 10px;
`;

export const ProductImageContainer = styled.div`

`;

export const ProductButtonContainer = styled.div`

`;


export const HeaderContainer = styled.header`
position: fixed;   
top: 0;            
left: 0;          
width: 100%;       
background-color: #5CC7F6; 
color: #7C0A02;
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

export const ProductContainer = styled.div`
padding: 20px;
margin-top: 80px;
margin-bottom: 60px;


`;

export const ReviewsContainer = styled.div`
  margin-top: 20px;
`;

export const ContactContainer = styled.div `
margin-top: 100px
`;


export const CheckoutContainer = styled.div`
  text-align: center;
  max-width: 600px;
  margin: auto;
  padding: 20px;
  padding-top: 300px;

  @media (max-width: 400px) {
    max-width: 90%;
    padding-top: 200px; 
  }
`;

export const SuccessContainer = styled.div`
  text-align: center;
  padding-top: 100px; 
  padding-bottom: 100px; 
  margin: 0 auto;
  max-width: 600px;

  @media (max-width: 768px) {
    padding-top: 80px; 
    padding-bottom: 80px; 
  }
`;