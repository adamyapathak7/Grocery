import React from 'react';
import { useLocation } from 'react-router-dom';
import './Order.css';

const Order = () => {
    const location = useLocation();
    const orderDetails = location.state;

    const handlePayment = () => {
        alert('Payment process initiated!');
        // Add your payment processing logic here
    };

    return (
        <div className="orderPage">
            <h2 className="text-center">Order Details</h2>
            <div className="order-details">
                <p><strong>Product Name:</strong> {orderDetails?.productName || 'Pizza Dough'}</p>
                <p><strong>Price:</strong> ${orderDetails?.price || 10}</p>
                <p><strong>Description:</strong> <br />
                    Pizza dough is a fundamental element of a great pizza, providing the base upon which all other ingredients are added. It is typically made from a simple mixture of flour, water, yeast, and salt.
                </p>
            </div>
            <button className="payment-button" onClick={handlePayment}>Proceed to Payment</button>
        </div>
    );
}

export default Order;

