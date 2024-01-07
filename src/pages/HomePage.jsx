import React, { useState, useEffect } from 'react';
import { ProductCard, ProductImage, SearchBar } from '../styles/HomePageStyles';
import { StyledLink } from '../styles/LinkStyles';
import { ProductsContainer, ProductTextContainer, ProductImageContainer, ProductButtonContainer } from '../styles/ContainerStyles';
import { Heading, Paragraph, ProductDescription, ProductTitle } from '../styles/TextStyles';

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
            
    <Heading>Welcome to ShopEase</Heading>
    <Paragraph>This project presents the conceptualization and design of a hypothetical e-commerce website, named "ShopEase". 
      The purpose of ShopEase is to provide a user-friendly online platform where customers can effortlessly browse and purchase a wide range of products, from electronics to clothing. 
      The website aims to combine efficient functionality with an engaging user experience, catering to the needs of a diverse customer base.</Paragraph>

    <SearchBar
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleSearch}/>

  <ProductsContainer>
    {filteredProducts.map(product => (
    <ProductCard key={product.id}>
      <ProductImageContainer>
        <ProductImage src={product.imageUrl} alt={product.title} />
      </ProductImageContainer>
      <ProductTextContainer>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        {product.tags.map(tag => <p key={tag}>{tag}</p>)}
        <p>Price: ${product.price}</p>
      </ProductTextContainer>
      <ProductButtonContainer>
        <StyledLink to={`/products/${product.id}`}>View Product</StyledLink>
      </ProductButtonContainer>
  </ProductCard>
))}
</ProductsContainer>

    </div>
  );
};

export default HomePage;
