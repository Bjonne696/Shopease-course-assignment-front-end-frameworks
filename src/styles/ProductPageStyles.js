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

