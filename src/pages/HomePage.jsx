import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  box-sizing: border-box;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  display: inline-block;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.noroff.dev/api/v1/online-shop')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Home Page</h2>
      <SearchBar
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {filteredProducts.map(product => (
        <ProductCard key={product.id}>
          <h3>{product.title}</h3>
          <ProductImage src={product.imageUrl} alt={product.title} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <StyledLink to={`/products/${product.id}`}>View Product</StyledLink>
        </ProductCard>
      ))}
    </div>
  );
};

export default HomePage;