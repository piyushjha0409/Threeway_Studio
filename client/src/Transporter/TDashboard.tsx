import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client'; // Import Socket.io client
import TransportChat from '../chat/TransportChat';

const Landing = () => {
  const [orderList, setOrderList] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState('');
  const [price, setPrice] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
  
    const fetchAllOrders = () => {
      axios.get("https://localhost:8000/api/transporters/get-Orders")
      
    }
  
  }, []);

  const handlePriceChange = (e: any) => {
    setPrice(e.target.value);
  };

  return (
    <div className="landing-container">
      <h1>Transporter's Landing Page</h1>
      <div className="form-group">
        <label>Select Order ID:</label>
        <select
          name="selectedOrderId"
          value={selectedOrderId}
          onChange={(e) => setSelectedOrderId(e.target.value)}
        >
          <option value="">Select Order ID</option>
          {orderList.map((orderId) => (
            <option key={orderId} value={orderId}>
              {orderId}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={price}
          onChange={handlePriceChange}
        />
      </div>
      <TransportChat />
    </div>
  );
};

export default Landing;
