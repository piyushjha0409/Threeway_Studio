import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import TransportChat from '../chat/TransportChat';

const Landing = () => {
  const [orderList, setOrderList] = useState<String[]>([]);
  const [selectedOrderId, setSelectedOrderId] = useState('');
  const [price, setPrice] = useState('');

 
  const fetchAllOrders = () => {
    axios.get("http://localhost:8000/api/transporter/orders").then((response)=> {
       const order_id = response.data.map((each: any)=> each._id);
        console.log(order_id)
        setOrderList(order_id);
        // console.log(orderList)
    })
  }

  useEffect(() => {
    fetchAllOrders(); 
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
          {orderList.map((orderId, index) => (
            <option key={index}>
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
      {/* <TransportChat /> */}
    </div>
  );
};

export default Landing;
