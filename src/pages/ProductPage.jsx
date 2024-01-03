import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://api.noroff.dev/api/v1/online-shop/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [productId]);

  if (!product) {
    return <div>Loading product...</div>;
  }

  // Function to handle adding product to cart
  const addToCart = () => {
    // Implement your logic to add product to cart
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
      <button onClick={addToCart}>Add to Cart</button>
      <h3>Reviews:</h3>
      {product.reviews && product.reviews.length > 0 ? (
        product.reviews.map(reviews => (
          <div key={reviews.id}>
            <p><strong>{reviews.username}</strong>: {reviews.description} <em>(Rating: {reviews.rating}/5)</em></p>
          </div>
        ))
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
};

export default ProductPage;

// Explanation for the return statement in ProductPage

/*
  - The 'return' statement renders the JSX for the ProductPage component.
  - It first checks if the 'product' object is null. If it is, it displays a loading message.
  - Once the product data is available (i.e., product is not null), it proceeds to render the product details.

  - The product's title and image are displayed at the top.
  - The product's description is shown under the image.
  - The product's price is displayed, and if there is a discount (calculated earlier), it's shown as well.
  - An 'Add to Cart' button is included, which calls the 'addToCart' function when clicked.

  - Following the product details, the reviews section begins:
    - It checks if there are reviews in the 'product.reviews' array.
    - If there are reviews, it maps over the 'reviews' array and creates a div for each review.
      - Each review shows the username, the review text, and the rating.
    - If there are no reviews, it displays a message indicating that no reviews are available.
  
  - The 'key' prop in the map function is crucial for helping React identify which items have changed, 
    are added, or are removed, which optimizes rendering performance.
*/