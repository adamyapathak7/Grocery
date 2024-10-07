import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ searchTerm, setSearchTerm, cart = [], totalItems }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1>Grocery Store</h1>
        <input
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="left-items">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/cart" className="navbar-link">Cart ({totalItems})</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
