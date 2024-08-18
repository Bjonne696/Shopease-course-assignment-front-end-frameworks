import styled from "styled-components";

export const ProductCard = styled.div`
  background-color: #FFFA72;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  text-align: center;
  max-width: 360px;
  border-radius: 10px;
  height: 500px; 
`;

export const ProductImage = styled.img`
  width: 100%; 
  height: auto; 
  object-fit: contain;
  max-height: 200px;
  border-radius: 10px;
  background-color: #FFFA72; 
`;

export const SearchBar = styled.input`
  display: block;
  width: 80%;
  margin: 0 auto; 
  padding: 10px;
  border-radius: 5px;
`;
