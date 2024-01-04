import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';  

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

  // Handle adding product to cart
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    console.log('Product added to cart:', product.title);
  };

  // Calculate discount if applicable
  const discount = product.price > product.discountedPrice ? 
    ((product.price - product.discountedPrice) / product.price * 100).toFixed(2) : 0;

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.imageUrl} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.discountedPrice}</p>
      {discount > 0 && <p>Discount: {discount}% off</p>}
      <button onClick={handleAddToCart}>Add to Cart</button>
      <h3>Reviews:</h3>
      {product.reviews && product.reviews.length > 0 ? (
        product.reviews.map(review => (
          <div key={review.id}>
            <p><strong>{review.username}</strong>: {review.description} <em>(Rating: {review.rating}/5)</em></p>
          </div>
        ))
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
};

export default ProductPage;
