
import React from 'react';
import { useParams } from 'react-router-dom';
import groceryData from './groceryData.json'; 

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const product = groceryData.find((item) => item.id === parseInt(id)); 

  
  if (!product) {
    return <p>Product not found</p>; 
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: '300px', height: 'auto', border: '1px solid #ccc' }} /> 
      <p>{product.description || "No description available"}</p> 
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
