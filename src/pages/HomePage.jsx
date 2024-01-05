import React, { useState, useEffect } from 'react';
import { ProductCard, ProductImage, SearchBar, Heading, Paragraph } from '../styles/HomePageStyles';
import { StyledLink } from '../styles/LinkStyles';
import { ProductsContainer, ProductTextContainer, ProductImageContainer, ProductButtonContainer } from '../styles/ContainerStyles';


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
            
    <Heading>Lorem ipsum</Heading>
    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Aliquet eget sit amet tellus cras adipiscing enim. Habitant morbi tristique senectus et netus et malesuada fames. 
     A cras semper auctor neque vitae. Id volutpat lacus laoreet non curabitur.</Paragraph>

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
        <h3>{product.title}</h3>
        <p>{product.description}</p>
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
