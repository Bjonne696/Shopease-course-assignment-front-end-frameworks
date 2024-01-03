// Importing necessary React hooks and styled-components
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styling for each product card displayed on the home page
const ProductCard = styled.div`
  border: 1px solid #ddd; // Border for the card
  padding: 10px; // Padding inside the card
  margin: 10px; // Margin around each card
  text-align: center; // Centering the text inside the card
`;

// Styling for the product image
const ProductImage = styled.img`
  max-width: 100%; // Maximum width is the full width of the container
  height: auto; // Height is set automatically to maintain aspect ratio
`;

// Styling for the search input field
const SearchBar = styled.input`
  width: 100%; // The search bar takes the full width of its container
  padding: 10px; // Padding inside the search bar
  margin: 10px 0; // Margin above and below the search bar
  box-sizing: border-box; // Ensures padding does not increase the size of the box
`;

// Styling for the link that looks like a button
const StyledLink = styled(Link)`
  text-decoration: none; // Removes underline from the link
  background-color: #007bff; // Background color for the button
  color: white; // Text color
  padding: 10px 15px; // Padding inside the button
  border-radius: 5px; // Rounded corners
  border: none; // No border
  cursor: pointer; // Cursor changes to a pointer to indicate it's clickable
  display: inline-block; // Allows setting margin and padding
  margin-top: 10px; // Margin at the top

  &:hover {
    background-color: #0056b3; // Changes background color on hover
  }
`;

// The HomePage functional component
const HomePage = () => {
  // State for storing the list of products
  const [products, setProducts] = useState([]);
  // State for storing the current search term
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect hook to fetch product data when the component mounts
  useEffect(() => {
    fetch('https://api.noroff.dev/api/v1/online-shop')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []); // Empty dependency array means this effect runs once on mount

  // Function to update search term based on user input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtering products based on the search term
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Rendering the component
  return (
    <div>
      <h2>Home Page</h2>
      <SearchBar
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {/* Mapping over filtered products to render product cards */}
      {filteredProducts.map(product => (
        <ProductCard key={product.id}>
          <h3>{product.title}</h3>
          <ProductImage src={product.imageUrl} alt={product.title} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          {/* Link to navigate to the product's individual page */}
          <StyledLink to={`/products/${product.id}`}>View Product</StyledLink>
        </ProductCard>
      ))}
    </div>
  );
};

export default HomePage;
