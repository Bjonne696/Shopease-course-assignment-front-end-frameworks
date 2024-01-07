import styled from 'styled-components';

export const ProductImage = styled.img`
  max-width: 500px;
  max-height: 500px;
  display: block;
  margin: 0 auto;
  border-radius: 10px;

  @media (max-width: 768px) {
    max-height: 150px; // Adjust the max-height for smaller screens
  }

`;

export const ProductTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const ProductDescription = styled.p`
  margin-bottom: 10px;
`;

export const Price = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Discount = styled.p`
  color: #7C0A02;
  margin-bottom: 10px;
`;

export const Review = styled.div`
  background-color: #FFFA72;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;
