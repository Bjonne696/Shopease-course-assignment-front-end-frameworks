import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { ProductContainer, ReviewsContainer } from "../styles/ContainerStyles";
import { ProductImage, ProductDetails } from "../styles/ProductPageStyles";
import { Button } from "../styles/ButtonStyles";
import { ProductDescription, Discount, Price, ProductTitle, Review } from '../styles/TextStyles';

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://api.noroff.dev/api/v1/online-shop/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [productId]);

  if (!product) {
    return <div>Loading product...</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    console.log('Product added to cart:', product.title);
  };

  const discount = product.price > product.discountedPrice ? 
    ((product.price - product.discountedPrice) / product.price * 100).toFixed(2) : 0;

  return (
    <ProductContainer>
      <ProductTitle>{product.title}</ProductTitle>
      <ProductImage src={product.imageUrl} alt={product.title} />
      <ProductDetails>
        <ProductDescription>{product.description}</ProductDescription>
        <Price>Price: ${product.discountedPrice}</Price>
        {discount > 0 && <Discount>Discount: {discount}% off</Discount>}
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </ProductDetails>
      <ReviewsContainer>
        <h3>Reviews:</h3>
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map(review => (
            <Review key={review.id}>
              <p><strong>{review.username}</strong>: {review.description} <em>(Rating: {review.rating}/5)</em></p>
            </Review>
          ))
        ) : (
          <p>No reviews available</p>
        )}
      </ReviewsContainer>
    </ProductContainer>
  );
};

export default ProductPage;
