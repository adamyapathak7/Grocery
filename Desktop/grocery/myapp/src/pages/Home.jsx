import React, { useState, useEffect } from 'react';
import groceryData from './groceryData.json'; 
import { Link } from 'react-router-dom';

const Home = ({ addToCart ,searchTerm}) => { 
  const [products, setProducts] = useState([]);
  
 

  useEffect(() => {
    setProducts(groceryData);
  }, []);

  


  
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Grocery Items</h1>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <div className="button-container">
              <button onClick={() => addToCart(product)} className="btn">Add to Cart</button>
              <Link to={`/product/${product.id}`} className="btn">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
