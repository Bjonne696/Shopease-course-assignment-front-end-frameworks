import styled from 'styled-components';

export const ProductImage = styled.img`
  max-width: 500px;
  max-height: 500px;
  display: block;
  margin: 0 auto;
  border-radius: 10px;

  @media (max-width: 768px) screens{
    max-height: 150px; 
  }
`;

export const ProductDetails = styled.div`
  text-align: center; 
  margin-top: 20px;
`;