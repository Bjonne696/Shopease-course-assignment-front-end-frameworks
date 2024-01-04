import React, { useState, useEffect } from 'react';
import { ProductCard, ProductImage, SearchBar } from '../styles/HomePageStyles';
import { StyledLink } from '../styles/LinkStyles';



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


   const filteredProducts = products.filter(product => {
    const titleMatch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const tagsMatch = product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return searchTerm === '' || titleMatch || tagsMatch;
  });


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
          <p>Description:</p>
          <p>{product.description}</p>
          <p>Tags:</p>
          {product.tags && product.tags.map(tag => (
            <p key={tag}>{tag}</p>
          ))}
          <p>Price: ${product.price}</p>
          <StyledLink to={`/products/${product.id}`}>View Product</StyledLink>
        </ProductCard>
      ))}
    </div>
  );
};

export default HomePage;

