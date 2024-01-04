import styled from "styled-components";


export const ProductCard = styled.div`
border: 1px solid #ddd; // Border for the card
padding: 10px; // Padding inside the card
margin: 10px; // Margin around each card
text-align: center; // Centering the text inside the card
`;


export const ProductImage = styled.img`
max-width: 100%; // Maximum width is the full width of the container
height: auto; // Height is set automatically to maintain aspect ratio
`;


export const SearchBar = styled.input`
width: 100%; // The search bar takes the full width of its container
padding: 10px; // Padding inside the search bar
margin: 10px 0; // Margin above and below the search bar
box-sizing: border-box; // Ensures padding does not increase the size of the box
`;