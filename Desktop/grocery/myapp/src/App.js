import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Addcart';
import './App.css';
import Navbar from './pages/Navbar';

const App = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <Router>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} cart={cart} totalItems={totalItems} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} searchTerm={searchTerm} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} totalItems={totalItems} />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
      </Routes>
    </Router>
  );
};

export default App;